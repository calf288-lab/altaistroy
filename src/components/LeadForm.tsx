import { useState, type FormEvent } from 'react';
import { Phone, MessageSquare, Send, CheckCircle2, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, ALTAI_REGIONS } from '../data/altaiData';

interface LeadFormProps {
  onOpenPrivacy: () => void;
  preselectedService?: string;
}

export default function LeadForm({ onOpenPrivacy, preselectedService }: LeadFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [messenger, setMessenger] = useState<'phone' | 'whatsapp' | 'max'>('whatsapp');
  const [location, setLocation] = useState('Горно-Алтайск');
  const [message, setMessage] = useState(preselectedService ? `Интересует: ${preselectedService}` : '');
  const [agreed, setAgreed] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  const getCompiledText = () => {
    return `Здравствуйте! Заявка с сайта СтройАлтай:
👤 Имя: ${name.trim() || 'Клиент'}
📱 Телефон: ${phone.trim()}
📍 Город / Район: ${location}
💬 Задача / Вопрос: ${message.trim() || 'Консультация и расчет сметы'}
📲 Выбранный канал: ${messenger === 'whatsapp' ? 'WhatsApp' : messenger === 'max' ? 'Мессенджер MAX' : 'Телефонный звонок'}`;
  };

  const getWhatsAppUrl = () => {
    return `https://wa.me/79317777223?text=${encodeURIComponent(getCompiledText())}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    setIsSubmitting(true);
    const compiled = getCompiledText();
    const encoded = encodeURIComponent(compiled);

    // Direct forwarding to +79317777223
    if (messenger === 'max') {
      try {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(compiled);
          setCopiedText(true);
        }
      } catch {
        // clipboard access restricted
      }
      window.open(CONTACT_INFO.maxMessengerUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Default to WhatsApp directly to +79317777223
      const waUrl = `https://wa.me/79317777223?text=${encoded}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }

    // Yandex Metrika target
    if (typeof window !== 'undefined' && (window as any).ym && (window as any).YM_ID) {
      (window as any).ym((window as any).YM_ID, 'reachGoal', 'lead_send');
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 400);
  };

  return (
    <section id="contacts" className="py-20 bg-[#101512] border-b border-[#232f26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contacts & Messenger Links */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e2921] border border-[#2e4032] text-[#9fc7a8] text-xs font-semibold mb-3">
                <Phone className="w-3.5 h-3.5 text-[#d3a168]" />
                <span>Прямая связь с мастером</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
                Контакты и заказ <span className="text-[#d3a168]">сметы</span>
              </h2>
              <p className="mt-2 text-sm text-[#9eb0a4] leading-relaxed">
                Позвоните напрямую бригадиру Василию или напишите в удобный мессенджер. Сориентируем по ценам, срокам и заезду бригады.
              </p>
            </div>

            {/* Big Phone Card */}
            <div className="bg-[#151d18] rounded-2xl border border-[#2c3d30] p-5 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#b68249]/20 border border-[#b68249]/40 flex items-center justify-center text-[#d3a168] flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#8da093]">Прямой телефон бригадира:</div>
                  <a
                    href={CONTACT_INFO.telLink}
                    className="text-xl sm:text-2xl font-black text-white hover:text-[#d3a168] transition-colors font-heading tracking-wide"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                  <div className="text-xs text-[#52b36b] flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-[#52b36b] animate-pulse"></span>
                    <span>На связи ежедневно с 08:00 до 21:00</span>
                  </div>
                </div>
              </div>

              {/* Messengers Row */}
              <div className="pt-3 border-t border-[#233026] grid grid-cols-2 gap-2.5">
                <a
                  href={CONTACT_INFO.maxMessengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#1a2c40] hover:bg-[#233c57] border border-[#2d4d73] text-[#6cb8ff] text-xs font-bold transition-all shadow-md text-center"
                >
                  <Send className="w-4 h-4 rotate-[-20deg]" />
                  <span>Мессенджер MAX</span>
                </a>

                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#142d1f] hover:bg-[#1a3a29] border border-[#265e3c] text-[#4ade80] text-xs font-bold transition-all shadow-md text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Geography / Regions info */}
            <div className="bg-[#151d18] rounded-2xl border border-[#2c3d30] p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#d3a168]" />
                <span>Районы выезда на Алтае:</span>
              </div>
              <div className="flex flex-wrap gap-1.5 text-xs text-[#a4b5a8]">
                {ALTAI_REGIONS.map((reg) => (
                  <span
                    key={reg}
                    className="bg-[#1f2a22] px-2.5 py-1 rounded-md border border-[#2d3e31]"
                  >
                    {reg}
                  </span>
                ))}
              </div>
            </div>

            {/* Trust box */}
            <div className="p-4 rounded-xl bg-[#161f19] border border-[#27372b] flex items-center gap-3 text-xs text-[#9eb0a4]">
              <ShieldCheck className="w-5 h-5 text-[#52b36b] flex-shrink-0" />
              <span>Официальный подрядчик. Заключаем договор с {CONTACT_INFO.legal.ip}. Смета не меняется.</span>
            </div>

          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#151e18] rounded-3xl border border-[#2e4031] p-6 sm:p-8 shadow-2xl">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white font-heading">
                  Оставить заявку на бесплатный расчет и замер
                </h3>
                <p className="text-xs sm:text-sm text-[#9eb0a4] mt-1">
                  Перезвоним или напишем в течение 15 минут, ответим на вопросы и сориентируем по смете.
                </p>
              </div>

              {isSuccess ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#14281c] border border-[#2d633e] space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#52b36b]/20 flex items-center justify-center text-[#52b36b]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <div className="text-center space-y-1.5">
                    <h4 className="text-xl font-bold text-white font-heading">
                      Заявка сформирована для +7 (931) 777-72-23!
                    </h4>
                    <p className="text-sm text-[#b8d6c1] max-w-md mx-auto">
                      Диалог с бригадиром Василием открылся в выбранном мессенджере. Если окно заблокировано браузером — нажмите прямую кнопку:
                    </p>
                  </div>

                  {/* Direct Action Buttons to +79317777223 */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#16502a] hover:bg-[#1b6334] border border-[#2db059] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg text-center"
                    >
                      <MessageSquare className="w-4 h-4 text-[#4ade80]" />
                      <span>Открыть WhatsApp (+7 931 777-72-23)</span>
                    </a>

                    <a
                      href={CONTACT_INFO.maxMessengerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#1a2c40] hover:bg-[#223a54] border border-[#3b6594] text-[#7ec2ff] font-bold text-xs uppercase tracking-wider transition-all shadow-lg text-center"
                    >
                      <Send className="w-4 h-4 rotate-[-20deg]" />
                      <span>Открыть MAX</span>
                    </a>
                  </div>

                  {/* Summary preview of sent lead */}
                  <div className="p-3 rounded-xl bg-[#0f1812] border border-[#213827] text-left text-xs text-[#9bb3a2] space-y-1">
                    <div className="text-[11px] font-bold text-[#d3a168] uppercase tracking-wider">
                      Текст подготовленной заявки:
                    </div>
                    <div className="whitespace-pre-line font-mono text-[11px] text-[#c4d6c9] bg-[#141f18] p-2.5 rounded border border-[#233829]">
                      {getCompiledText()}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#8ca092]">
                    <a
                      href={CONTACT_INFO.telLink}
                      className="flex items-center gap-1.5 text-[#d3a168] hover:underline font-semibold"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Позвонить напрямую: {CONTACT_INFO.phoneDisplay}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="text-[#9ea09d] hover:text-white underline cursor-pointer"
                    >
                      Отправить еще одну заявку
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#b8c7bc] uppercase tracking-wider mb-1.5">
                        Ваше имя:
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Например, Александр"
                        className="w-full px-4 py-3 rounded-xl bg-[#121714] border border-[#2d3e30] text-sm text-white placeholder-[#5d6f62] focus:border-[#d3a168] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#b8c7bc] uppercase tracking-wider mb-1.5">
                        Телефон для связи * :
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+7 (___) ___-__-__"
                        className="w-full px-4 py-3 rounded-xl bg-[#121714] border border-[#2d3e30] text-sm text-white placeholder-[#5d6f62] focus:border-[#d3a168] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Preferred Messenger */}
                  <div>
                    <label className="block text-xs font-bold text-[#b8c7bc] uppercase tracking-wider mb-1.5">
                      Куда удобнее получить ответ:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare },
                        { id: 'max', label: 'Мессенджер MAX', icon: Send },
                        { id: 'phone', label: 'Звонок по телефону', icon: Phone }
                      ].map((m) => {
                        const Icon = m.icon;
                        return (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => setMessenger(m.id as any)}
                            className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                              messenger === m.id
                                ? 'bg-[#29392c] border-[#d3a168] text-white shadow-sm'
                                : 'bg-[#121714] border-[#29362c] text-[#8fa093] hover:text-white'
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                            <span>{m.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Location selector */}
                  <div>
                    <label className="block text-xs font-bold text-[#b8c7bc] uppercase tracking-wider mb-1.5">
                      Район или город строительства:
                    </label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#121714] border border-[#2d3e30] text-sm text-white focus:border-[#d3a168] outline-none"
                    >
                      {ALTAI_REGIONS.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-xs font-bold text-[#b8c7bc] uppercase tracking-wider mb-1.5">
                      Что планируете строить (размеры, пожелания):
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Например: Дом 9х10 из кедрового бруса в Чемале, нужен фундамент на уклоне..."
                      className="w-full px-4 py-3 rounded-xl bg-[#121714] border border-[#2d3e30] text-sm text-white placeholder-[#5d6f62] focus:border-[#d3a168] outline-none transition-colors"
                    ></textarea>
                  </div>

                  {/* 152-ФЗ compliance checkbox with link to privacy modal */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 text-xs text-[#8da093] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        required
                        className="mt-1 accent-[#d3a168] w-4 h-4 rounded"
                      />
                      <span>
                        Согласен на обработку персональных данных в соответствии с{' '}
                        <button
                          type="button"
                          onClick={onOpenPrivacy}
                          className="text-[#d3a168] underline hover:text-[#e4b580] cursor-pointer"
                        >
                          152-ФЗ РФ (Политика конфиденциальности)
                        </button>
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !agreed}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#b68249] to-[#cb965a] hover:from-[#c58f54] hover:to-[#d8a467] text-[#121614] font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all active:scale-[0.99] disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {messenger === 'whatsapp' && <MessageSquare className="w-4 h-4 text-[#121614]" />}
                    {messenger === 'max' && <Send className="w-4 h-4 text-[#121614] rotate-[-20deg]" />}
                    {messenger === 'phone' && <Phone className="w-4 h-4 text-[#121614]" />}
                    <span>
                      {isSubmitting
                        ? 'Отправка...'
                        : messenger === 'whatsapp'
                        ? 'Отправить в WhatsApp (+7 931 777-72-23)'
                        : messenger === 'max'
                        ? 'Отправить в Мессенджер MAX'
                        : 'Заказать звонок на +7 (931) 777-72-23'}
                    </span>
                  </button>

                  <p className="text-center text-[11px] text-[#8ea093]">
                    Заявка поступит напрямую бригадиру Василию на номер <strong className="text-white font-mono">+7 (931) 777-72-23</strong>
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
