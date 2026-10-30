import { CONTACT_INFO } from '../data/altaiData';
const WA = 'https://wa.me/79317777223';
const TEL = 'tel:+79317777223';
export default function DomaTeaser() {
  return (
    <section id="doma" className="bg-[#101512] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-2xl border border-[#1e2820] bg-[#141a16] p-8 sm:p-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block text-[#d3a168] text-sm font-semibold tracking-wider uppercase mb-3">🏠 Проекты домов</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#edece6] leading-tight mb-4">Дома из бруса под ключ — <span className="text-[#d3a168]">от 50 000 ₽/м²</span></h2>
            <p className="text-[#a8b3aa] text-base sm:text-lg leading-relaxed">Каркасные, из профилированного бруса, срубы и дома из кедра. Производство и сборка под ключ в Алтайском крае и Республике Алтай. Смета фиксируется в договоре, цена не меняется в процессе.</p>
          </div>
          <div className="flex flex-col gap-3 lg:min-w-[280px]">
            <a href="/blog/dom-brus-cena-altai.html" className="inline-flex items-center justify-center rounded-xl bg-[#c2410c] hover:bg-[#d4530f] text-white font-bold px-6 py-4 text-base transition-colors">Смотреть проекты домов →</a>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2">
              <a href={CONTACT_INFO.maxMessengerUrl} target="_blank" rel="noopener" className="inline-flex items-center justify-center rounded-xl bg-[#1e88e5] hover:brightness-110 text-white font-semibold px-4 py-3 text-sm transition">Мессенджер MAX</a>
              <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center justify-center rounded-xl bg-[#25d366] hover:brightness-110 text-white font-semibold px-4 py-3 text-sm transition">WhatsApp</a>
              <a href={TEL} className="inline-flex items-center justify-center rounded-xl border border-[#2a3a2e] hover:border-[#d3a168] text-[#edece6] font-semibold px-4 py-3 text-sm transition">+7 (931) 777-72-23</a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {[
            { src: '/images/projects/dom-brus/v026.webp', alt: 'Проект дома из бруса 120 м²' },
            { src: '/images/projects/dom-brus/v030.webp', alt: 'Проект дома из бруса 150 м²' },
            { src: '/images/projects/dom-brus/hero-house.webp', alt: 'Дом из бруса под ключ' },
          ].map((p, i) => (
            <a key={i} href="/blog/dom-brus-cena-altai.html" className="group block rounded-xl overflow-hidden border border-[#1e2820] bg-[#101512] hover:border-[#d3a168] transition-colors">
              <img src={p.src} alt={p.alt} className="w-full h-64 object-cover object-top" loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
