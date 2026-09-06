import { useState, type FormEvent } from 'react';
import { X, Phone, MessageSquare, Send, CheckCircle2, Shield } from 'lucide-react';
import { CONTACT_INFO, ALTAI_REGIONS } from '../data/altaiData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
  onOpenPrivacy: () => void;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  serviceTitle,
  onOpenPrivacy
}: ConsultationModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Горно-Алтайск');
  const [messenger, setMessenger] = useState<'whatsapp' | 'max' | 'phone'>('whatsapp');
  const [agreed, setAgreed] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const getCompiledText = () => {
    return `Здравствуйте! Заявка на расчет с сайта СтройАлтай:
👤 Имя: ${name.trim() || 'Клиент'}
📱 Телефон: ${phone.trim()}
📍 Район: ${location}
🏗️ Интересует: ${serviceTitle || 'Консультация и выезд на замер на Алтае'}
📲 Канал связи: ${messenger === 'whatsapp' ? 'WhatsApp' : messenger === 'max' ? 'Мессенджер MAX' : 'Телефон'}`;
  };

  const getWhatsAppUrl = () => {
    return `https://wa.me/79317777223?text=${encodeURIComponent(getCompiledText())}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    const compiled = getCompiledText();
    const encoded = encodeURIComponent(compiled);

    // Direct forwarding to +79317777223
    if (messenger === 'max') {
      try {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(compiled);
        }
      } catch {
        // ignore
      }
      window.open(CONTACT_INFO.maxMessengerUrl, '_blank', 'noopener,noreferrer');
    } else {
      const waUrl = `https://wa.me/79317777223?text=${encoded}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }

    setSubmitted(true);

    if (typeof window !== 'undefined' && (window as any).ym && (window as any).YM_ID) {
      (window as any).ym((window as any).YM_ID, 'reachGoal', 'lead_send');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#151e18] border border-[#2e4031] rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl animate-in zoom-in-95 relative">
        
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1e2921] text-[#9fb0a3] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#52b36b]/20 flex items-center justify-center text-[#52b36b]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-heading">
                Заявка сформирована!
              </h3>
              <p className="text-xs text-[#9eb0a4] mt-1">
                Адресована бригадиру Василию на номер <strong className="text-white font-mono">+7 (931) 777-72-23</strong>
              </p>
            </div>
            <p className="text-sm text-[#b5c7ba]">
              Диалог открылся в выбранном мессенджере. Нажмите кнопку ниже для подтверждения отправки:
            </p>
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-[#16502a] hover:bg-[#1b6334] border border-[#2db059] text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-[#4ade80]" />
                <span>Открыть в WhatsApp (+7 931 777-72-23)</span>
              </a>
              <a
                href={CONTACT_INFO.maxMessengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-[#1a2c40] hover:bg-[#233b56] border border-[#3b6594] text-[#7ec2ff] font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4 text-[#6cb8ff] rotate-[-20deg]" />
                <span>Открыть в Мессенджере MAX</span>
              </a>
              <a
                href={CONTACT_INFO.telLink}
                className="py-2.5 px-4 rounded-xl bg-[#1e2921] text-[#d3a168] font-bold text-xs text-center flex items-center justify-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Позвонить напрямую: {CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#d3a168]">
                {serviceTitle ? `Заказ расчета: ${serviceTitle}` : 'Вызов замерщика на Алтае'}
              </span>
              <h3 className="text-xl font-bold text-white font-heading mt-1">
                Бесплатная консультация и выезд
              </h3>
              <p className="text-xs text-[#9eb0a4] mt-1">
                Оставьте телефон — сориентируем по смете, материалам и срокам заезда бригады.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[#b8c7bc] uppercase tracking-wider mb-1">
                  Ваше имя:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#101612] border border-[#2c3e30] text-sm text-white placeholder-[#5d6f62] focus:border-[#d3a168] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#b8c7bc] uppercase tracking-wider mb-1">
                  Телефон * :
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#101612] border border-[#2c3e30] text-sm text-white placeholder-[#5d6f62] focus:border-[#d3a168] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#b8c7bc] uppercase tracking-wider mb-1">
                  Район строительства:
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#101612] border border-[#2c3e30] text-xs text-white focus:border-[#d3a168] outline-none"
                >
                  {ALTAI_REGIONS.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#b8c7bc] uppercase tracking-wider mb-1">
                  Как удобнее связаться:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setMessenger('whatsapp')}
                    className={`py-2 px-1 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer ${
                      messenger === 'whatsapp' ? 'bg-[#293a2c] border-[#d3a168] text-white' : 'bg-[#101612] border-[#27382b] text-[#8fa093]'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#4ade80]" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMessenger('max')}
                    className={`py-2 px-1 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer ${
                      messenger === 'max' ? 'bg-[#293a2c] border-[#d3a168] text-white' : 'bg-[#101612] border-[#27382b] text-[#8fa093]'
                    }`}
                  >
                    <Send className="w-3.5 h-3.5 text-[#6cb8ff]" />
                    <span>MAX</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMessenger('phone')}
                    className={`py-2 px-1 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer ${
                      messenger === 'phone' ? 'bg-[#293a2c] border-[#d3a168] text-white' : 'bg-[#101612] border-[#27382b] text-[#8fa093]'
                    }`}
                  >
                    <Phone className="w-3.5 h-3.5 text-[#d3a168]" />
                    <span>Звонок</span>
                  </button>
                </div>
              </div>

              {/* 152-ФЗ checkbox */}
              <label className="flex items-start gap-2 text-[11px] text-[#87998c] cursor-pointer pt-1">
                <input
                  type="checkbox"
                  required
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 accent-[#d3a168] w-3.5 h-3.5 rounded"
                />
                <span>
                  Согласен на обработку персональных данных по{' '}
                  <button
                    type="button"
                    onClick={onOpenPrivacy}
                    className="text-[#d3a168] underline"
                  >
                    152-ФЗ РФ
                  </button>
                </span>
              </label>

              <button
                type="submit"
                disabled={!agreed}
                className="w-full py-3.5 rounded-xl bg-[#b68249] hover:bg-[#cb9559] text-[#121614] font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                {messenger === 'whatsapp' && <MessageSquare className="w-4 h-4 text-[#121614]" />}
                {messenger === 'max' && <Send className="w-4 h-4 text-[#121614] rotate-[-20deg]" />}
                {messenger === 'phone' && <Phone className="w-4 h-4 text-[#121614]" />}
                <span>
                  {messenger === 'whatsapp'
                    ? 'Отправить в WhatsApp (+7 931 777-72-23)'
                    : messenger === 'max'
                    ? 'Отправить в Мессенджер MAX'
                    : 'Заказать звонок на +7 (931) 777-72-23'}
                </span>
              </button>
              <p className="text-center text-[10px] text-[#788a7d]">
                Заявка напрямую поступит бригадиру Василию на <span className="text-white font-mono">+7 (931) 777-72-23</span>
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
