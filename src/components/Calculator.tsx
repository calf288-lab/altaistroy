import { useState, useMemo, type FormEvent } from 'react';
import { Calculator as CalcIcon, Check, Send, MessageSquare, Phone, ChevronRight } from 'lucide-react';
import { CONTACT_INFO, ALTAI_REGIONS } from '../data/altaiData';

interface CalculatorProps {
  onOpenConsultationWithData?: (summary: string) => void;
}

type ProjectType = 'apartment' | 'bathroom' | 'house' | 'banya' | 'finishing' | 'foundation';

export default function Calculator({ onOpenConsultationWithData }: CalculatorProps) {
  const [projectType, setProjectType] = useState<ProjectType>('apartment');
  const [area, setArea] = useState<number>(55);
  const [material, setMaterial] = useState<string>('comfort');
  const [scope, setScope] = useState<'turnkey' | 'shell' | 'work_only'>('turnkey');
  const [location, setLocation] = useState<string>('Горно-Алтайск');
  const [clientPhone, setClientPhone] = useState('');
  const [clientName, setClientName] = useState('');
  const [policyAgreed, setPolicyAgreed] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  // Dynamic calculations based on Vasily's real rates
  const calculation = useMemo(() => {
    let baseRate = 9500; // Apartment per m²
    let defaultTime = '25-45 дней';

    if (projectType === 'apartment') {
      baseRate = 9500;
      defaultTime = '25-45 дней';
    } else if (projectType === 'bathroom') {
      baseRate = 14000;
      defaultTime = '10-18 дней';
    } else if (projectType === 'house') {
      baseRate = 48000;
      defaultTime = '70-90 дней';
    } else if (projectType === 'banya') {
      baseRate = 40000;
      defaultTime = '35-50 дней';
    } else if (projectType === 'finishing') {
      baseRate = 16000;
      defaultTime = '30-60 дней';
    } else if (projectType === 'foundation') {
      baseRate = 8500; // per m³
      defaultTime = '15-30 дней';
    }

    // Material modifier
    let materialMultiplier = 1.0;
    if (material === 'cedar_log' || material === 'premium') materialMultiplier = 1.25;
    if (material === 'cedar_beam' || material === 'business') materialMultiplier = 1.15;
    if (material === 'pine_beam' || material === 'comfort') materialMultiplier = 1.0;
    if (material === 'larch' || material === 'eco_accent') materialMultiplier = 1.20;

    // Scope modifier
    let scopeMultiplier = 1.0;
    if (scope === 'shell') scopeMultiplier = 0.70;
    if (scope === 'work_only') scopeMultiplier = 0.55;

    let totalEstimate = Math.round(area * baseRate * materialMultiplier * scopeMultiplier);
    // Minimum floor for bathroom
    if (projectType === 'bathroom' && totalEstimate < 65000) {
      totalEstimate = 65000;
    }

    const minEstimate = Math.round(totalEstimate * 0.95);
    const maxEstimate = Math.round(totalEstimate * 1.08);

    return {
      min: minEstimate.toLocaleString('ru-RU'),
      max: maxEstimate.toLocaleString('ru-RU'),
      days: defaultTime,
      totalRaw: totalEstimate
    };
  }, [projectType, area, material, scope]);

  const getTypeName = () => {
    switch (projectType) {
      case 'apartment': return 'Отделка квартиры под ключ (зима)';
      case 'bathroom': return 'Ремонт санузла / ванной комнаты';
      case 'house': return 'Дом из кедра / бруса';
      case 'banya': return 'Сибирская баня';
      case 'finishing': return 'Внутренняя отделка коттеджа';
      case 'foundation': return 'Фундамент на рельефе';
    }
  };

  const getMessengerText = () => {
    const text = `Здравствуйте! Рассчитал на сайте СтройАлтай:
Тип: ${getTypeName()}
Объем/Площадь: ${area} ${projectType === 'foundation' ? 'м³' : 'м²'}
Локация: ${location}
Ориентир сметы: ${calculation.min} — ${calculation.max} ₽.
Интересует точный расчет и выезд на замеры.`;
    return encodeURIComponent(text);
  };

  const handleCallbackSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!clientPhone) return;
    setSubmitted(true);
    if (onOpenConsultationWithData) {
      onOpenConsultationWithData(`${getTypeName()} ${area}м² в ${location}`);
    }
  };

  return (
    <section id="calculator" className="py-20 bg-[#121614] border-b border-[#243026]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e2921] border border-[#314336] text-[#9fc7a8] text-xs font-semibold mb-3">
            <CalcIcon className="w-3.5 h-3.5 text-[#d3a168]" />
            <span>Интерактивный расчет стоимости</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-heading">
            Калькулятор сметы объекта на <span className="text-[#d3a168]">Алтае</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9fb0a3]">
            Укажите параметры вашего будущего строения или ремонта — получите расчетную вилку цен с учетом сибирских материалов и сложного рельефа.
          </p>
        </div>

        {/* Main Calculator Box */}
        <div className="grid lg:grid-cols-12 gap-8 bg-[#161d18] rounded-3xl border border-[#2d3d30] p-6 sm:p-8 shadow-2xl">
          
          {/* Left Column: Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* 1. Project Type */}
            <div>
              <label className="block text-xs font-bold text-[#b8c7bc] uppercase tracking-wider mb-3">
                1. Что планируете строить или ремонтировать?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'apartment', label: 'Отделка квартиры (зима)', hint: 'от 9.5 тыс. ₽/м²', defaultArea: 58 },
                  { id: 'bathroom', label: 'Санузел / ванная', hint: 'от 65 тыс. ₽', defaultArea: 6 },
                  { id: 'house', label: 'Дом из кедра / бруса', hint: 'от 48 тыс. ₽/м²', defaultArea: 110 },
                  { id: 'banya', label: 'Баня сибирская', hint: 'от 40 тыс. ₽/м²', defaultArea: 48 },
                  { id: 'finishing', label: 'Отделка коттеджа / усадьбы', hint: 'от 16 тыс. ₽/м²', defaultArea: 140 },
                  { id: 'foundation', label: 'Фундамент на склоне', hint: 'от 8.5 тыс. ₽/м³', defaultArea: 25 },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setProjectType(item.id as ProjectType);
                      setArea(item.defaultArea);
                      if (item.id === 'apartment' || item.id === 'bathroom') {
                        setMaterial('comfort');
                      } else {
                        setMaterial('cedar_log');
                      }
                    }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      projectType === item.id
                        ? 'bg-[#29382b] border-[#d3a168] text-white shadow-md'
                        : 'bg-[#1b231d] border-[#29362c] text-[#a6b4a9] hover:border-[#3d5242] hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold leading-tight">{item.label}</div>
                    <div className="text-[10px] text-[#d3a168] mt-1">{item.hint}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Area / Volume Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-[#b8c7bc] uppercase tracking-wider">
                  2. {projectType === 'foundation' ? 'Объем бетона:' : 'Площадь по полу:'}
                </label>
                <div className="text-base font-extrabold text-[#d3a168] bg-[#222c24] px-3 py-1 rounded-lg border border-[#304033]">
                  {area} {projectType === 'foundation' ? 'м³' : 'м²'}
                </div>
              </div>
              <input
                type="range"
                min={projectType === 'foundation' ? 5 : projectType === 'bathroom' ? 3 : 20}
                max={projectType === 'foundation' ? 120 : projectType === 'bathroom' ? 25 : 300}
                step={projectType === 'foundation' || projectType === 'bathroom' ? 1 : 5}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-[#253328] rounded-lg appearance-none cursor-pointer accent-[#d3a168]"
              />
              <div className="flex justify-between text-[10px] text-[#6d7c71] mt-1.5">
                <span>{projectType === 'foundation' ? '5 м³' : projectType === 'bathroom' ? '3 м²' : '20 м²'}</span>
                <span>{projectType === 'foundation' ? '60 м³' : projectType === 'bathroom' ? '12 м²' : '150 м²'}</span>
                <span>{projectType === 'foundation' ? '120 м³' : projectType === 'bathroom' ? '25 м²' : '300+ м²'}</span>
              </div>
            </div>

            {/* 3. Material */}
            <div>
              <label className="block text-xs font-bold text-[#b8c7bc] uppercase tracking-wider mb-2.5">
                3. {projectType === 'apartment' || projectType === 'bathroom' ? 'Комплектация отделки:' : 'Основной материал:'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(projectType === 'apartment' || projectType === 'bathroom' ? [
                  { id: 'comfort', name: 'Комфорт', note: 'Knauf, ламинат 33, плитка' },
                  { id: 'business', name: 'Бизнес', note: 'Керамогранит, теплый пол' },
                  { id: 'premium', name: 'Премиум', note: 'Дизайн-проект, треки' },
                  { id: 'eco_accent', name: 'Эко-Алтай', note: 'Кедр + камень + плитка' }
                ] : [
                  { id: 'cedar_log', name: 'Кедр алтайский (сруб)', note: 'Зимняя рубка' },
                  { id: 'cedar_beam', name: 'Профилир. брус', note: 'Кедр/Сосна' },
                  { id: 'pine_beam', name: 'Сосна зимняя', note: 'Экономичный' },
                  { id: 'larch', name: 'Лиственница', note: 'Повыш. прочность' }
                ]).map((mat) => (
                  <button
                    key={mat.id}
                    type="button"
                    onClick={() => setMaterial(mat.id)}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                      material === mat.id
                        ? 'bg-[#273529] border-[#d3a168] text-white'
                        : 'bg-[#1b231d] border-[#29362c] text-[#8e9d91] hover:border-[#384a3c]'
                    }`}
                  >
                    <div className="font-semibold text-[11px] leading-tight">{mat.name}</div>
                    <div className="text-[10px] text-[#85988a] mt-0.5">{mat.note}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Scope & Location */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#b8c7bc] uppercase tracking-wider mb-2">
                  4. Формат работ:
                </label>
                <select
                  value={scope}
                  onChange={(e) => setScope(e.target.value as any)}
                  className="w-full p-2.5 rounded-xl bg-[#1b231d] border border-[#2e3e31] text-xs text-white focus:border-[#d3a168] outline-none"
                >
                  <option value="turnkey">Под ключ (фундамент, коробка, отделка)</option>
                  <option value="shell">Коробка под крышу (под усадку)</option>
                  <option value="work_only">Только работа (материал заказчика)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#b8c7bc] uppercase tracking-wider mb-2">
                  5. Район строительства:
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-[#1b231d] border border-[#2e3e31] text-xs text-white focus:border-[#d3a168] outline-none"
                >
                  {ALTAI_REGIONS.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>

          </div>

          {/* Right Column: Calculation Result & Conversion (5 cols) */}
          <div className="lg:col-span-5 bg-[#1a231d] rounded-2xl border border-[#314334] p-5 sm:p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#28372b] pb-3">
                <span className="text-xs uppercase tracking-wider font-bold text-[#8fa093]">
                  Предварительный расчет
                </span>
                <span className="text-[11px] text-[#d3a168] bg-[#29362c] px-2 py-0.5 rounded border border-[#3b4d3f]">
                  Срок: ~{calculation.days}
                </span>
              </div>

              <div>
                <div className="text-xs text-[#8ca092]">Ориентировочная вилка сметы:</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 font-heading">
                  {calculation.min} – {calculation.max} ₽
                </div>
                <div className="text-[11px] text-[#7d9183] mt-1">
                  * Точная смета формируется после бесплатного выезда на участок и замера рельефа
                </div>
              </div>

              {/* Included items */}
              <div className="space-y-2 text-xs text-[#b8c7bc] border-t border-[#29392c] pt-3">
                <div className="font-semibold text-white text-xs">В расчет уже включено:</div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#52b36b] flex-shrink-0" />
                  <span>Отборный алтайский лес зимней заготовки</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#52b36b] flex-shrink-0" />
                  <span>Сборка бригадой сибирских плотников</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#52b36b] flex-shrink-0" />
                  <span>Фиксация цены в официальном договоре РФ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#52b36b] flex-shrink-0" />
                  <span>Гарантия на несущие конструкции 5 лет</span>
                </div>
              </div>
            </div>

            {/* Action options to send this calculation */}
            <div className="mt-6 pt-4 border-t border-[#29392c] space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Отправить расчет мастеру Василию:
              </div>

              {/* Direct MAX and WhatsApp Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`${CONTACT_INFO.maxMessengerUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#1d2d40] hover:bg-[#253952] border border-[#335378] text-[#6cb8ff] text-xs font-bold transition-all shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>В мессенджер MAX</span>
                </a>

                <a
                  href={`https://wa.me/79317777223?text=${getMessengerText()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#163523] hover:bg-[#1c442c] border border-[#2d6842] text-[#4ade80] text-xs font-bold transition-all shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>В WhatsApp</span>
                </a>
              </div>

              {/* Or Quick Callback form */}
              {submitted ? (
                <div className="p-3.5 rounded-xl bg-[#193322] border border-[#2d633f] text-center text-xs text-[#a3e6ba]">
                  ✓ Заявка на расчет принята! Бригадир Василий перезвонит в течение 15 минут.
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="space-y-2 pt-1">
                  <div className="flex gap-2">
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+7 (___) ___-__-__ *"
                      className="w-full px-3 py-2 rounded-xl bg-[#131a15] border border-[#2d3d30] text-xs text-white placeholder-[#6d7e72] focus:border-[#d3a168] outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-[#b68249] hover:bg-[#c99256] text-[#121614] font-extrabold text-xs whitespace-nowrap tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      Смета
                    </button>
                  </div>

                  {/* 152-ФЗ compliance checkbox */}
                  <label className="flex items-start gap-2 text-[10px] text-[#86978c] cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      checked={policyAgreed}
                      onChange={(e) => setPolicyAgreed(e.target.checked)}
                      required
                      className="mt-0.5 accent-[#d3a168] w-3.5 h-3.5 rounded"
                    />
                    <span>
                      Согласен на обработку персональных данных по 152-ФЗ РФ
                    </span>
                  </label>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
