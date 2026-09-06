import { useState } from 'react';
import { Phone, MessageSquare, Send, Menu, X, MapPin, Clock, ShieldCheck, Snowflake } from 'lucide-react';
import { CONTACT_INFO, ALTAI_REGIONS } from '../data/altaiData';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [regionsOpen, setRegionsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#141815]/95 backdrop-blur-md border-b border-[#2a352c] transition-all">
      {/* Top micro-bar for geography & trust */}
      <div className="hidden md:block bg-[#0e1210] border-b border-[#1f2721] text-xs text-[#9aa49d] py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                type="button"
                onClick={() => setRegionsOpen(!regionsOpen)}
                className="flex items-center gap-1.5 hover:text-[#d3a168] transition-colors cursor-pointer text-left"
              >
                <MapPin className="w-3.5 h-3.5 text-[#d3a168]" />
                <span>Работаем по Республике Алтай и Алтайскому краю</span>
                <span className="text-[10px] bg-[#222d25] text-[#b8c5bc] px-1.5 py-0.5 rounded border border-[#2e3e32]">
                  10+ районов
                </span>
              </button>

              {regionsOpen && (
                <div 
                  className="absolute left-0 top-6 w-80 bg-[#161d18] border border-[#2e3e32] rounded-xl p-3 shadow-2xl z-50 animate-in fade-in"
                  onMouseLeave={() => setRegionsOpen(false)}
                >
                  <p className="text-[11px] font-bold text-white mb-2 uppercase tracking-wider">
                    География выезда бригады:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {ALTAI_REGIONS.map((city) => (
                      <span
                        key={city}
                        className="text-[11px] bg-[#1f2a22] text-[#d6ded8] px-2 py-0.5 rounded-md border border-[#2c3d31]"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                  <p className="text-[10px] text-[#8e9a91] mt-2 border-t border-[#26352a] pt-1.5">
                    Выезд инженера-замерщика по договоренности
                  </p>
                </div>
              )}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#88978b]" />
              <span>{CONTACT_INFO.workingHours}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#a8b5ab]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#55a26a]" />
              Официальный договор и гарантия 5 лет
            </span>
            <span className="text-[#414f43]">|</span>
            <a href="#interior-winter" className="flex items-center gap-1.5 text-[#d3a168] hover:text-[#e8b67e] font-semibold transition-colors">
              <Snowflake className="w-3.5 h-3.5 text-[#73c7eb] animate-pulse" />
              <span>Зимний сезон: отделка квартир и домов под ключ</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group text-decoration-none">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#3b4e40] to-[#1c2720] border border-[#4e6855] flex items-center justify-center shadow-lg group-hover:border-[#d3a168] transition-colors">
              <svg className="w-7 h-7 text-[#d3a168]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="m3 21 7.5-13 3 5 2.5-4 5 12Z" fill="#1b241e" />
                <path d="M7 21h10M12 11l-3 5 3 2 3-2-3-5Z" />
                <path d="M12 3v3M10 21v-4h4v4" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white font-heading">
                  СТРОЙ<span className="text-[#d3a168]">АЛТАЙ</span>
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#253328] text-[#9dc4a6] border border-[#374c3d]">
                  Артель
                </span>
              </div>
              <p className="text-[11px] text-[#8e9c91] leading-tight">
                Строительство домов, бань и отделка квартир под ключ
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-[#c4cfc7]">
            <a href="#interior-winter" className="text-[#d3a168] hover:text-[#e8b67e] transition-colors flex items-center gap-1.5 font-semibold">
              <Snowflake className="w-3.5 h-3.5 text-[#73c7eb]" />
              <span>Зимняя отделка</span>
              <span className="text-[10px] bg-[#292014] text-[#e8b67e] px-1.5 py-0.2 rounded border border-[#543d20]">Сезон</span>
            </a>
            <a href="#services" className="hover:text-[#d3a168] transition-colors">Услуги и цены</a>
            <a href="#calculator" className="hover:text-[#d3a168] transition-colors flex items-center gap-1">
              <span>Калькулятор сметы</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d3a168]"></span>
            </a>
            <a href="#portfolio" className="hover:text-[#d3a168] transition-colors">Наши работы</a>
            <a href="#why-altai" className="hover:text-[#d3a168] transition-colors">Специфика Алтая</a>
            <a href="#process" className="hover:text-[#d3a168] transition-colors">Этапы</a>
            <a href="#contacts" className="hover:text-[#d3a168] transition-colors">Контакты</a>
          </nav>

          {/* Right action area: Messengers & Phone */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* MAX Messenger Button */}
            <a
              href={CONTACT_INFO.maxMessengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#192738] hover:bg-[#20344c] border border-[#2d496b] text-[#5cb0ff] text-xs font-semibold transition-all hover:scale-[1.02] shadow-sm"
              title="Написать в мессенджер MAX"
            >
              <Send className="w-3.5 h-3.5 rotate-[-20deg]" />
              <span>Мессенджер MAX</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#142d1f] hover:bg-[#1a3a29] border border-[#275c3d] text-[#4ade80] text-xs font-semibold transition-all hover:scale-[1.02] shadow-sm"
              title="Написать в WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Direct Phone */}
            <div className="pl-1 text-right">
              <a
                href={CONTACT_INFO.telLink}
                className="text-base font-bold text-white hover:text-[#d3a168] transition-colors tracking-wide flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-[#d3a168]" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>
              <span className="text-[10px] text-[#7d8d81] block">Василий (бригадир)</span>
            </div>

            {/* Call request CTA button */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="hidden xl:inline-flex px-3.5 py-2 rounded-lg bg-[#b68249] hover:bg-[#c99256] text-[#141915] font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer ml-1"
            >
              Вызов замерщика
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={CONTACT_INFO.telLink}
              className="p-2 rounded-lg bg-[#b68249] text-[#141815] flex items-center justify-center font-bold"
              aria-label="Позвонить"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#1e2621] border border-[#2f3d33] text-[#c9d4cd] hover:text-white"
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#141815] border-b border-[#2b372d] px-4 py-5 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3 text-base font-medium text-[#d3ded6] mb-5">
            <a 
              href="#interior-winter" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#212b23] text-[#d3a168] flex items-center justify-between font-bold"
            >
              <span className="flex items-center gap-2">
                <Snowflake className="w-4 h-4 text-[#73c7eb]" />
                Зимняя отделка квартир и домов
              </span>
              <span className="text-xs bg-[#b68249] text-black px-2 py-0.5 rounded font-extrabold">Сезон 2026</span>
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-[#212b23] hover:text-[#d3a168]"
            >
              Услуги и цены
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-[#212b23] hover:text-[#d3a168] flex justify-between items-center"
            >
              <span>Калькулятор сметы</span>
              <span className="text-xs bg-[#b68249] text-black px-2 py-0.5 rounded font-bold">Расчет онлайн</span>
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-[#212b23] hover:text-[#d3a168]"
            >
              Наши работы (фото с объектов)
            </a>
            <a 
              href="#why-altai" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-[#212b23] hover:text-[#d3a168]"
            >
              Специфика Алтая
            </a>
            <a 
              href="#process" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-[#212b23] hover:text-[#d3a168]"
            >
              Как мы строим
            </a>
            <a 
              href="#contacts" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#d3a168]"
            >
              Контакты и реквизиты
            </a>
          </div>

          {/* Mobile messengers and phone */}
          <div className="space-y-2.5 pt-2 border-t border-[#232e26]">
            <a
              href={CONTACT_INFO.telLink}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#b68249] text-[#141815] font-bold text-sm tracking-wide shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Позвонить: {CONTACT_INFO.phoneDisplay}</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={CONTACT_INFO.maxMessengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#192738] border border-[#2d496b] text-[#5cb0ff] font-semibold text-xs text-center"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Мессенджер MAX</span>
              </a>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#142d1f] border border-[#275c3d] text-[#4ade80] font-semibold text-xs text-center"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            <p className="text-center text-[11px] text-[#7d8d82] pt-2">
              Горно-Алтайск · Чемал · Белокуриха · Барнаул · Бийск
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
