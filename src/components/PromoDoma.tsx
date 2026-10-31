const POSTERS = [
  { src: '/images/promo/doma-poster-1.png', alt: 'Дом из бруса с террасой — СтройАлтай' },
  { src: '/images/promo/doma-poster-4.png', alt: 'Дом из дерева вечером — СтройАлтай' },
  { src: '/images/promo/doma-poster-5.png', alt: 'Дом из бруса с балконом — СтройАлтай' },
];
export default function PromoDoma() {
  return (
    <section id="promo-domа" className="bg-[#101512] pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-4 overflow-x-auto snap-x pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
          {POSTERS.map((p) => (
            <a key={p.src} href="/blog/dom-brus-cena-altai.html"
               className="snap-start shrink-0 w-[70%] sm:w-auto block rounded-xl overflow-hidden border border-[#1e2820] hover:border-[#d3a168] transition-colors">
              <img src={p.src} alt={p.alt} className="w-full h-auto object-cover" loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
