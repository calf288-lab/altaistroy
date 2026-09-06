import { useState } from 'react';
import { ArrowRight, Check, Hammer, Trees, Shield, Sparkles, Send, MessageSquare } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../data/altaiData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'house' | 'banya' | 'outdoor' | 'finishing' | 'foundation' | 'repair'>('all');

  const filteredServices = activeTab === 'all' 
    ? SERVICES 
    : SERVICES.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-20 bg-[#0e1310] border-b border-[#232e25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b251e] border border-[#2d3f32] text-[#9fc7a8] text-xs font-semibold mb-3">
              <Hammer className="w-3.5 h-3.5 text-[#d3a168]" />
              <span>Прозрачные цены без скрытых платежей</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-heading">
              Услуги и актуальные расценки на <span className="text-[#d3a168]">Алтае</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#9eb0a3]">
              Строим под ключ из алтайского кедра и сибирской лиственницы. Фиксируем итоговую стоимость в договоре до начала любых работ.
            </p>
          </div>

          {/* Contact quick helper */}
          <div className="bg-[#17201a] border border-[#2d3e31] p-4 rounded-2xl flex items-center gap-4">
            <div>
              <div className="text-xs text-[#8da093]">Срочный вопрос бригадиру:</div>
              <div className="text-sm font-bold text-white">{CONTACT_INFO.phoneDisplay}</div>
            </div>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#173a24] hover:bg-[#1f4a2f] text-[#4ade80] transition-colors"
              title="Написать в WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href={CONTACT_INFO.maxMessengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#1b2c40] hover:bg-[#253d58] text-[#6bb6ff] transition-colors"
              title="Написать в MAX"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            { id: 'all', label: 'Все направления' },
            { id: 'house', label: 'Дома из кедра' },
            { id: 'banya', label: 'Бани под ключ' },
            { id: 'outdoor', label: 'Беседки и барбекю' },
            { id: 'finishing', label: 'Внутренняя отделка' },
            { id: 'foundation', label: 'Фундаменты и рельеф' },
            { id: 'repair', label: 'Замена венцов и кровля' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#b68249] text-[#121614] shadow-md scale-105'
                  : 'bg-[#18211b] border border-[#2b392f] text-[#a4b4a8] hover:text-white hover:border-[#3d5042]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#141b16] rounded-2xl border border-[#2a382d] overflow-hidden flex flex-col justify-between hover:border-[#425847] transition-all group shadow-xl"
            >
              {/* Image thumbnail */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141b16] via-transparent to-transparent"></div>
                
                {/* Price badge overlaid on photo */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <div className="bg-[#101712]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#344638]">
                    <div className="text-[10px] text-[#8ea093] uppercase font-bold tracking-wider">
                      {service.priceNote}
                    </div>
                    <div className="text-lg font-extrabold text-[#d3a168] font-heading">
                      {service.price}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#d3a168] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#9eb0a4] mt-2 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-1.5 mt-3 pt-3 border-t border-[#233026]">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#b8c7bc]">
                        <Check className="w-3.5 h-3.5 text-[#52b36b] flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Materials tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-2">
                    {service.materials.map((mat, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-[#1d2720] text-[#8ea093] px-2 py-0.5 rounded-md border border-[#2b392f]"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#233026] flex gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#233026] hover:bg-[#2d3e31] text-[#d6e3d9] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Заказать расчет</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#d3a168]" />
                  </button>

                  <a
                    href={`https://wa.me/79317777223?text=${encodeURIComponent(`Здравствуйте! Интересует услуга: ${service.title} (${service.price}). Хочу проконсультироваться.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#163523] hover:bg-[#1f4a30] text-[#4ade80] transition-colors"
                    title="Быстрый вопрос в WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>

                  <a
                    href={CONTACT_INFO.maxMessengerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#1a2c40] hover:bg-[#243d57] text-[#6cb8ff] transition-colors"
                    title="Быстрый вопрос в MAX"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#17211a] via-[#1a251e] to-[#17211a] rounded-2xl border border-[#2c3d30] p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#b68249]/20 border border-[#b68249]/40 flex items-center justify-center text-[#d3a168] flex-shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-white text-sm sm:text-base">
                100% соблюдение договора и защита от скрытых доплат
              </div>
              <p className="text-xs text-[#9eb0a4] mt-0.5">
                Оплата разбивается на этапы (фундамент, сруб, кровля, отделка). Оплата каждого этапа только после вашей приемки.
              </p>
            </div>
          </div>
          <a
            href="#contacts"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-[#b68249] hover:bg-[#c89255] text-[#121614] font-extrabold text-xs uppercase tracking-wider transition-all"
          >
            Связаться с бригадиром
          </a>
        </div>

      </div>
    </section>
  );
}
