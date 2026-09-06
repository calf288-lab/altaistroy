import { ArrowDown, MessageSquare, Send, Phone, CheckCircle2, Award, Shield, Trees, Snowflake } from 'lucide-react';
import { CONTACT_INFO, IMAGES } from '../data/altaiData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-[#0d120f] overflow-hidden border-b border-[#243026]">
      {/* Background Image with dramatic Altai mountain grading */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Строительство деревянного дома из кедра на Алтае"
          className="w-full h-full object-cover object-center scale-105 transform filter brightness-[0.42] contrast-[1.12]"
          referrerPolicy="no-referrer"
        />
        {/* Mountain cedar atmospheric overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101512] via-[#101512]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d120f] via-[#0d120f]/80 to-transparent"></div>
        {/* Subtle decorative grain/glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#a9753e]/10 blur-[130px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Winter special banner */}
            <div>
              <a
                href="#interior-winter"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#1e2a21] to-[#162019] border border-[#3b5240] text-[#eed4b6] text-xs font-bold backdrop-blur-md shadow-lg hover:border-[#d3a168] transition-all group"
              >
                <Snowflake className="w-4 h-4 text-[#73c7eb] animate-spin" style={{ animationDuration: '12s' }} />
                <span>Зимний сезон 2026: отделка квартир, коттеджей и турбаз под ключ</span>
                <span className="text-[10px] bg-[#d3a168] text-black font-extrabold px-1.5 py-0.5 rounded ml-1 group-hover:scale-105 transition-transform">Скидка 10%</span>
              </a>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-heading">
              Строительство домов, бань и <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3af74] to-[#c78848]">отделка квартир</span> на Алтае
            </h1>

            <p className="text-base sm:text-lg text-[#c5d1c8] max-w-2xl leading-relaxed">
              Возводим капитальные дома и бани из кедра, заливаем фундаменты на горном рельефе. <strong className="text-white font-medium">В зимний сезон выполняем срочный ремонт квартир под ключ (новостройки и вторичка)</strong>, коттеджей и турбаз в отапливаемом контуре с гарантией 5 лет.
            </p>

            {/* Badges row based on customer specification */}
            <div className="flex flex-wrap gap-2 pt-1 pb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18211b]/80 border border-[#2a392e] text-[#d6ded8] text-xs font-semibold backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d3a168]" /> Опыт 12+ лет на Алтае
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18211b]/80 border border-[#2a392e] text-[#d6ded8] text-xs font-semibold backdrop-blur-sm">
                <Shield className="w-3.5 h-3.5 text-[#52b36b]" /> Гарантия 5 лет по договору
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18211b]/80 border border-[#2a392e] text-[#d6ded8] text-xs font-semibold backdrop-blur-sm">
                <Award className="w-3.5 h-3.5 text-[#d3a168]" /> Фиксированная смета
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18211b]/80 border border-[#2a392e] text-[#d6ded8] text-xs font-semibold backdrop-blur-sm">
                <Trees className="w-3.5 h-3.5 text-[#63ba7a]" /> Зимний кедр и лиственница
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#interior-winter"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[#b68249] to-[#cb965a] hover:from-[#c58f54] hover:to-[#d8a467] text-[#121614] font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-[#b68249]/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Зимняя отделка квартир</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href={CONTACT_INFO.maxMessengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-[#192738]/90 hover:bg-[#22364f] border border-[#304f75] text-[#6cb8ff] font-bold text-sm tracking-wide transition-all shadow-lg hover:scale-[1.02]"
              >
                <Send className="w-4 h-4 rotate-[-20deg]" />
                <span>Написать в MAX</span>
              </a>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-[#142e1f]/90 hover:bg-[#1a3d29] border border-[#2d6341] text-[#4ade80] font-bold text-sm tracking-wide transition-all shadow-lg hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={CONTACT_INFO.telLink}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-[#1b231d]/90 hover:bg-[#242f27] border border-[#324336] text-[#e0e9e3] font-bold text-sm tracking-wide transition-all"
              >
                <Phone className="w-4 h-4 text-[#d3a168]" />
                <span>8 (931) 777-72-23</span>
              </a>
            </div>

            <p className="text-xs text-[#8c9c90] pt-1">
              * Выезд бригадира Василия на замеры по договоренности. Консультация и смета — бесплатно.
            </p>
          </div>

          {/* Right Column: Quick Price Card directly matching Vasily's Telegram rates */}
          <div className="lg:col-span-4">
            <div className="bg-[#151c17]/90 backdrop-blur-md rounded-2xl border border-[#2e3e31] p-5 sm:p-6 shadow-2xl space-y-4">
              <div className="border-b border-[#263529] pb-3 flex justify-between items-center">
                <div>
                  <h2 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
                    Расценки сезона 2026
                  </h2>
                  <p className="text-xs text-[#86968a]">Фиксируем в договоре</p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80] animate-pulse"></span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="p-2.5 rounded-xl bg-[#1d271f] border border-[#354838] flex justify-between items-center">
                  <div>
                    <div className="font-bold text-[#e6bb87] flex items-center gap-1.5">
                      <Snowflake className="w-3.5 h-3.5 text-[#73c7eb]" />
                      <span>Отделка квартир под ключ</span>
                    </div>
                    <div className="text-[11px] text-[#90a294]">Новостройки и вторичка (зима)</div>
                  </div>
                  <div className="text-right">
                    <span className="font-extrabold text-[#d3a168]">от 9 500 ₽</span>
                    <div className="text-[10px] text-[#8fa094]">за м² по полу</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#1b241e] border border-[#2b3a2f] flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-white">Санузел / ванная комната</div>
                    <div className="text-[11px] text-[#8fa094]">Еврозапил 45°, сантехника</div>
                  </div>
                  <div className="text-right">
                    <span className="font-extrabold text-[#d3a168]">от 65 000 ₽</span>
                    <div className="text-[10px] text-[#8fa094]">за санузел</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#1b241e] border border-[#2b3a2f] flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-white">Дома из кедра / бруса</div>
                    <div className="text-[11px] text-[#8fa094]">С качественным материалом</div>
                  </div>
                  <div className="text-right">
                    <span className="font-extrabold text-[#d3a168]">от 48 000 ₽</span>
                    <div className="text-[10px] text-[#8fa094]">за м² по полу</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#1b241e] border border-[#2b3a2f] flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-white">Баня сибирская под ключ</div>
                    <div className="text-[11px] text-[#8fa094]">Парная, печь, материал</div>
                  </div>
                  <div className="text-right">
                    <span className="font-extrabold text-[#d3a168]">от 40 000 ₽</span>
                    <div className="text-[10px] text-[#8fa094]">за м² по полу</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#1b241e] border border-[#2b3a2f] flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-white">Внутренняя отделка коттеджа</div>
                    <div className="text-[11px] text-[#8fa094]">Теплый пол, кедр, плитка</div>
                  </div>
                  <div className="text-right">
                    <span className="font-extrabold text-[#d3a168]">от 16 000 ₽</span>
                    <div className="text-[10px] text-[#8fa094]">за м² (работа)</div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full py-3 rounded-xl bg-[#253328] hover:bg-[#2f4233] border border-[#3c5341] text-[#9fc7a8] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer text-center"
              >
                Оставить заявку на точный расчет
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
