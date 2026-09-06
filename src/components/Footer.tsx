import { Phone, MessageSquare, Send, Trees, Shield } from 'lucide-react';
import { CONTACT_INFO, ALTAI_REGIONS } from '../data/altaiData';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export default function Footer({ onOpenPrivacy }: FooterProps) {
  return (
    <footer className="bg-[#0b0f0d] text-[#8e9f92] border-t border-[#1e2820] pt-14 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1c261e]">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#202c23] border border-[#344838] flex items-center justify-center text-[#d3a168]">
                <Trees className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold text-white font-heading tracking-tight">
                  СТРОЙ<span className="text-[#d3a168]">АЛТАЙ</span>
                </span>
                <p className="text-[11px] text-[#788a7c]">
                  Строительная артель на Алтае
                </p>
              </div>
            </div>
            <p className="text-xs text-[#8a9b8e] leading-relaxed">
              Экологичное строительство домов из сибирского кедра, бань, беседок с зоной барбекю, фундаментов на горном рельефе и чистовой отделки под ключ.
            </p>
            <div className="text-xs text-[#d3a168] font-medium flex items-center gap-1.5">
              <span>❄️ Зимний сезон: внутренняя отделка квартир и домов</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Разделы сайта
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#interior-winter" className="text-[#d3a168] hover:text-[#e8b67e] transition-colors font-semibold flex items-center gap-1">
                  <span>❄️ Зимняя отделка квартир</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d3a168] transition-colors">Услуги и расценки 2026</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#d3a168] transition-colors">Калькулятор сметы онлайн</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#d3a168] transition-colors">Фото с объектов на Алтае</a>
              </li>
              <li>
                <a href="#why-altai" className="hover:text-[#d3a168] transition-colors">Особенности горного строительства</a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#d3a168] transition-colors">Порядок работ и договор</a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-[#d3a168] transition-colors">Контакты и вызов замерщика</a>
              </li>
            </ul>
          </div>

          {/* Geography */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              География выезда
            </div>
            <p className="text-xs text-[#7e9083]">
              Республика Алтай и Алтайский край:
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {ALTAI_REGIONS.slice(0, 8).map((city) => (
                <span key={city} className="bg-[#141d17] px-2 py-0.5 rounded border border-[#202c23]">
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Contacts & Messengers */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Связь с бригадиром
            </div>
            <div>
              <a
                href={CONTACT_INFO.telLink}
                className="text-lg font-black text-white hover:text-[#d3a168] transition-colors block"
              >
                {CONTACT_INFO.phoneDisplay}
              </a>
              <span className="text-[11px] text-[#718274]">Ежедневно 08:00 – 21:00</span>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <a
                href={CONTACT_INFO.maxMessengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 px-3 rounded-lg bg-[#152333] border border-[#233852] text-[#6cb8ff] text-xs font-semibold hover:bg-[#1a2c40] transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Мессенджер MAX</span>
              </a>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 px-3 rounded-lg bg-[#112419] border border-[#1e422c] text-[#4ade80] text-xs font-semibold hover:bg-[#163322] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar for RF compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#718275]">
          <div className="text-center sm:text-left">
            <div>
              {CONTACT_INFO.legal.ip} · {CONTACT_INFO.legal.inn} · {CONTACT_INFO.legal.ogrnip}
            </div>
            <div className="mt-1 text-[11px]">
              © {CONTACT_INFO.legal.year} <a href={CONTACT_INFO.domain} className="text-[#8fa394] hover:underline">stroy-altai.ru</a>. Все права защищены.
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="text-[#96a99a] hover:text-[#d3a168] underline cursor-pointer"
            >
              Политика конфиденциальности (152-ФЗ)
            </button>
            <span className="text-[#324035]">•</span>
            <span className="flex items-center gap-1 text-[#6a7c6f]">
              <Shield className="w-3.5 h-3.5 text-[#52b36b]" />
              Гарантия 5 лет
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
