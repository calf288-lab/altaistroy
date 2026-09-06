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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!phone) return;
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
            <h3 className="text-xl font-bold text-white font-heading">
              Заявка принята!
            </h3>
            <p className="text-sm text-[#b5c7ba]">
              Бригадир Василий свяжется с вами в течение 15 минут для уточнения деталей.
            </p>
            <div className="pt-3 flex flex-col gap-2">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-[#142d1f] border border-[#245b3a] text-[#4ade80] font-bold text-xs uppercase tracking-wider text-center"
              >
                Написать в WhatsApp
              </a>
              <a
                href={CONTACT_INFO.maxMessengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-[#1a2c40] border border-[#2b4b72] text-[#6cb8ff] font-bold text-xs uppercase tracking-wider text-center"
              >
                Написать в MAX
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
                className="w-full py-3.5 rounded-xl bg-[#b68249] hover:bg-[#cb9559] text-[#121614] font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
