import os, glob, json, shutil
from PIL import Image
from transformers import CLIPProcessor, CLIPModel
import torch

SRC_DIR = "."
DEST_BASE = "/root/altaistroy-main/public/images/projects"

LABELS = [
    ("wooden log house exterior facade, брусовой дом снаружи", "dom-brus"),
    ("sauna bathhouse wooden interior shelves парная полок", "banya-brus"),
    ("concrete foundation piles rebar construction фундамент сваи", "fundament"),
    ("bathroom toilet bathtub white tiles ремонт санузла", "sanuzel"),
    ("house frame under construction in snow winter зимняя стройка снег", "zima"),
    ("A-frame triangular guest house roof a-frame гостевой дом", "aframe"),
    ("apartment interior renovation flooring walls отделка квартиры пол", "otdelka"),
    ("roof trusses shingles installation кровля стропила", "krovlya"),
    ("wooden terrace gazebo fence терраса беседка забор", "terrasa"),
]
texts = [t for t, _ in LABELS]
folders = [f for _, f in LABELS]

print("CLIP loading...")
proc = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")
model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
model.eval()

tok = proc(text=texts, return_tensors="pt", padding=True, truncation=True)
with torch.no_grad():
    txt_feats = model.get_text_features(return_dict=False, **tok)[0][0]
    txt_feats = txt_feats / txt_feats.norm(dim=-1, keepdim=True)

files = sorted(glob.glob(os.path.join(SRC_DIR, "*.webp")))
if not files:
    print("NO webp"); exit(1)

results = []
print(f"Processing {len(files)} photos on CPU...")
for fp in files:
    fname = os.path.basename(fp)
    img = Image.open(fp).convert("RGB")
    ipt = proc(images=img, return_tensors="pt")
    with torch.no_grad():
        img_feats = model.get_image_features(return_dict=False, **ipt)[0][0]
        img_feats = img_feats / img_feats.norm(dim=-1, keepdim=True)
        sim = (img_feats @ txt_feats.T).softmax(dim=-1)[0]
    best = int(sim.argmax())
    folder = folders[best]
    conf = float(sim[best])
    dest_dir = os.path.join(DEST_BASE, folder)
    os.makedirs(dest_dir, exist_ok=True)
    shutil.move(fp, os.path.join(dest_dir, fname))
    results.append({"file": fname, "folder": folder, "label": texts[best][:40], "conf": round(conf,3)})
    print(f"OK {fname} -> {folder}/ conf={conf:.3f}")

rp = os.path.join(DEST_BASE, "auto_classification_report.json")
json.dump(results, open(rp,"w",encoding="utf-8"), ensure_ascii=False, indent=2)
print(f"\nDONE report={rp}")
from collections import Counter
for f,c in Counter(r["folder"] for r in results).most_common():
    print(f"  {f}: {c}")
