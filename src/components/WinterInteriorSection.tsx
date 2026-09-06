import { useState } from 'react';
import { 
  Snowflake, 
  CheckCircle2, 
  Shield, 
  Building2, 
  Home, 
  Bath, 
  Flame, 
  Send, 
  MessageSquare, 
  Phone, 
  ArrowRight, 
  Clock, 
  Award,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { CONTACT_INFO, IMAGES } from '../data/altaiData';

interface WinterInteriorSectionProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export default function WinterInteriorSection({ onOpenConsultation }: WinterInteriorSectionProps) {
  const [activeTab, setActiveTab] = useState<'apartments' | 'bathrooms' | 'cottages' | 'commercial'>('apartments');

  const directions = [
    {
      id: 'apartments' as const,
      label: 'Отделка квартир',
      icon: Building2,
      badge: 'Новостройки и вторичка',
      price: 'от 9 500 ₽ / м²',
      title: 'Комплексная внутренняя отделка квартир под ключ',
      subtitle: 'Ремонт в Горно-Алтайске, Барнауле, Бийске без очередей и переплат',
      image: IMAGES.apartment,
      description: 'Зимой внутренняя отделка квартир проходит в комфортном отапливаемом контуре с соблюдением температурно-влажностного режима (Knauf, Ceresit). Мы выравниваем стены под лазер, меняем проводку, заливаем стяжку и выполняем чистовую отделку премиального уровня.',
      stages: [
        'Лазерное оштукатуривание стен по маякам с геометрией углов 90°',
        'Шпаклевка под обои или покраску высшего класса Q3 / Q4',
        'Скрытый электромонтаж по ГОСТ с групповым щитком и УЗО',
        'Укладка крупноформатного керамогранита, кварцвинила или паркета',
        'Монтаж натяжных потолков с теневым профилем и трековым светом'
      ],
      materials: ['Штукатурка Knauf Rotband', 'Керамогранит 60×120 / 80×160', 'Кабель ВВГнг-LS', 'Краски Flugger / Tikkurila'],
      timing: 'от 30 до 60 дней'
    },
    {
      id: 'bathrooms' as const,
      label: 'Санузлы под ключ',
      icon: Bath,
      badge: 'Еврозапил 45°',
      price: 'от 65 000 ₽',
      title: 'Ремонт ванных комнат и санузлов с ювелирной точностью',
      subtitle: 'Бесшовная гидроизоляция, душевые поддоны в строительном исполнении',
      image: IMAGES.bathroom,
      description: 'Санузел — самая ответственная зона любого ремонта. Мы делаем упор на надежную инженерную сантехнику и безупречную плиточную работу без дешёвых пластиковых уголков.',
      stages: [
        'Точный запил керамогранита и плитки под 45 градусов (еврозапил)',
        'Двухслойная эластичная гидроизоляция пола и стен с лентой в углах',
        'Коллекторная лучевая разводка труб из сшитого полиэтилена (Stout / Rehau)',
        'Монтаж инсталляций, скрытых смесителей, гигиенических душей и бойлеров',
        'Душевой поддон в уровень пола с трапом сухого затвора'
      ],
      materials: ['Крупноформатный керамогранит', 'Гидроизоляция Ceresit CL 51', 'Трубы Stout PE-Xa', 'Инсталляции Geberit'],
      timing: 'от 10 до 18 дней'
    },
    {
      id: 'cottages' as const,
      label: 'Дома и коттеджи',
      icon: Home,
      badge: 'Кедр & Теплый пол',
      price: 'от 16 000 ₽ / м²',
      title: 'Внутренняя отделка загородных домов, усадеб и шале',
      subtitle: 'Водяные теплые полы, котельные, обшивка алтайским кедром',
      image: IMAGES.floor,
      description: 'Чистовая отделка деревянных домов из бруса и бревна требует глубокого понимания усадки древесины и скользящих каркасов. Монтируем теплые полы с опрессовкой, собираем котельные и декорируем интерьер отборным кедром.',
      stages: [
        'Монтаж водяных теплых полов со сшитым полиэтиленом и полусухой стяжкой',
        'Обвязка котельных: газовые, электрокотлы, бойлеры косвенного нагрева',
        'Обшивка стен и потолков кедровой рейкой, вагонкой «штиль» и блок-хаусом',
        'Шлифовка бруса и покрытие натуральными экологичными маслами Biofa / Osmo',
        'Разводка скрытых инженерных трасс в деревянных перекрытиях'
      ],
      materials: ['Алтайский кедр высший сорт', 'Трубы теплого пола Rehau', 'Масла и воски на натуральной основе'],
      timing: 'от 45 до 90 дней'
    },
    {
      id: 'commercial' as const,
      label: 'Турбазы и апартаменты',
      icon: Flame,
      badge: 'Готовность к весне',
      price: 'от 12 000 ₽ / м²',
      title: 'Срочная отделка турбаз, номеров и апартаментов к турсезону',
      subtitle: 'Сдайте объект к маю 2026 и начните зарабатывать с первого весеннего заезда',
      image: IMAGES.hero,
      description: 'Главная ошибка владельцев турбаз на Алтае — начинать ремонт в апреле, когда мастера заняты, а цены взлетели. Выполните отделку гостевых домов, номеров, бань и кафе сейчас, пока действует зимний тариф!',
      stages: [
        'Быстрый выезд бригады Василия для замера и составления сметы',
        'Антивандальные, износостойкие отделочные материалы повышенной проходимости',
        'Монтаж автономных систем отопления и водоотведения для туркомплексов',
        'Оформление номеров в благородном алтайском горном стиле (кедр, дикий камень)',
        'Строгое соблюдение графика сдачи объекта до старта туристического сезона'
      ],
      materials: ['Коммерческий керамогранит', 'Кедровая доска', 'Негорючие покрытия', 'Усиленная сантехника'],
      timing: 'от 20 до 50 дней'
    }
  ];

  const currentDirection = directions.find(d => d.id === activeTab) || directions[0];

  return (
    <section id="interior-winter" className="py-20 bg-[#0f1411] border-b border-[#212d23] relative overflow-hidden">
      
      {/* Background ambient snow/winter glow */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#3a5743]/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -bottom-32 left-10 w-80 h-80 bg-[#d3a168]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Winter Announcement Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b271e] border border-[#2e4233] text-[#d3a168] text-xs font-bold tracking-wide uppercase shadow-sm">
            <Snowflake className="w-4 h-4 text-[#73c7eb] animate-spin" style={{ animationDuration: '10s' }} />
            <span>Сезонное спецпредложение: Зима 2026</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Внутренняя отделка квартир, домов и коммерческих объектов <span className="text-[#d3a168]">под ключ</span>
          </h2>

          <p className="text-sm sm:text-base text-[#bccabf] leading-relaxed">
            Пока на улице алтайские морозы, в теплом контуре работы кипят на полную мощность! Ремонт квартиры в новостройке или коттеджа зимой — это возможность зафиксировать цены до весеннего подорожания и въехать в готовое жилье к началу тепла.
          </p>
        </div>

        {/* 4 Winter Season Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          
          <div className="p-5 rounded-xl bg-[#141b16] border border-[#253328] hover:border-[#384c3b] transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#1f2a22] flex items-center justify-center text-[#70c2e6] mb-3">
              <Snowflake className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1.5 font-heading">
              Работаем в теплом контуре
            </h3>
            <p className="text-xs text-[#8e9f92] leading-relaxed">
              Тепловые пушки и стабильное отопление обеспечивают идеальное высыхание штукатурки и стяжки по СНиП.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141b16] border border-[#253328] hover:border-[#384c3b] transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#1f2a22] flex items-center justify-center text-[#d3a168] mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1.5 font-heading">
              Фиксация цен до весны
            </h3>
            <p className="text-xs text-[#8e9f92] leading-relaxed">
              Закрепляем стоимость работ и материалов в договоре. Вы защищены от весеннего скачка цен на 15–20%.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141b16] border border-[#253328] hover:border-[#384c3b] transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#1f2a22] flex items-center justify-center text-[#4ade80] mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1.5 font-heading">
              Без очередей и спешки
            </h3>
            <p className="text-xs text-[#8e9f92] leading-relaxed">
              Бригадир Василий лично ведет контроль каждого квадратного метра. Никаких случайных субподрядчиков.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141b16] border border-[#253328] hover:border-[#384c3b] transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#1f2a22] flex items-center justify-center text-[#f59e0b] mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1.5 font-heading">
              Сдача объекта к сезону
            </h3>
            <p className="text-xs text-[#8e9f92] leading-relaxed">
              К апрелю-маю вы уже празднуете новоселье или открываете бронирование номеров на турбазе на Алтае.
            </p>
          </div>

        </div>

        {/* Direction Switcher Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8 border-b border-[#212d23] pb-4">
          {directions.map((d) => {
            const Icon = d.icon;
            const isActive = activeTab === d.id;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setActiveTab(d.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#d3a168] text-[#121613] shadow-lg shadow-[#d3a168]/20 scale-[1.02]'
                    : 'bg-[#151c17] text-[#9db0a1] hover:bg-[#1e2720] hover:text-white border border-[#263529]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{d.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                  isActive ? 'bg-[#121613]/20 text-[#121613]' : 'bg-[#223025] text-[#8fa393]'
                }`}>
                  {d.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Showcase Card */}
        <div className="bg-[#141a16] border border-[#27362a] rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-0">
            
            {/* Left Photo & Real Shot */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
              <img
                src={currentDirection.image}
                alt={currentDirection.title}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141a16] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#141a16]"></div>
              
              {/* Floating Pricing Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 p-3.5 rounded-xl bg-[#101612]/90 backdrop-blur-md border border-[#304333]">
                <div className="text-[11px] text-[#8da091] uppercase tracking-wider">Ориентировочная стоимость:</div>
                <div className="text-xl font-extrabold text-[#d3a168] font-heading">{currentDirection.price}</div>
                <div className="text-[11px] text-[#55ba70] flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-3 h-3" /> Точная смета после бесплатного замера
                </div>
              </div>
            </div>

            {/* Right Detailed Description & Stages */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs text-[#d3a168] font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{currentDirection.subtitle}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  {currentDirection.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9eb0a2] leading-relaxed">
                  {currentDirection.description}
                </p>
              </div>

              {/* Scope of Work */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d3a168]" />
                  <span>Что входит в комплекс работ:</span>
                </h4>
                <div className="space-y-2">
                  {currentDirection.stages.map((stage, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#c5d4c8]">
                      <div className="w-4 h-4 rounded-full bg-[#202c23] border border-[#344738] flex items-center justify-center text-[10px] font-bold text-[#d3a168] shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span>{stage}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials & Timing Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#19221b] border border-[#2b3a2f]">
                  <div className="text-[11px] text-[#829385] font-semibold">Используемые материалы:</div>
                  <div className="text-xs text-white font-medium mt-1">
                    {currentDirection.materials.join(', ')}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#19221b] border border-[#2b3a2f]">
                  <div className="text-[11px] text-[#829385] font-semibold">Срок реализации:</div>
                  <div className="text-xs text-[#d3a168] font-bold mt-1">
                    {currentDirection.timing} (по договору)
                  </div>
                </div>
              </div>

              {/* Call to Action Row */}
              <div className="pt-4 border-t border-[#233126] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenConsultation(`${currentDirection.title} (${currentDirection.price})`)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#d3a168] hover:bg-[#dfaf78] text-[#121613] font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02] cursor-pointer"
                >
                  <span>Вызвать мастера на замер (0 ₽)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={CONTACT_INFO.maxMessengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#192738] hover:bg-[#20344c] border border-[#2d496b] text-[#5cb0ff] text-xs font-bold transition-all"
                >
                  <Send className="w-4 h-4 rotate-[-20deg]" />
                  <span>Смета в MAX</span>
                </a>

                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#142e1f] hover:bg-[#1a3d29] border border-[#2d6341] text-[#4ade80] text-xs font-bold transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Quick Winter FAQ / Tips Callout */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#131b15] border border-[#27382a] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1c271f] border border-[#304333] flex items-center justify-center text-[#d3a168] shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Есть план квартиры или дизайн-проект?
              </div>
              <p className="text-xs text-[#90a294] mt-0.5">
                Пришлите чертежи или фото в MAX или WhatsApp на номер <strong className="text-white">8 (931) 777-72-23</strong> — Василий сделает предварительный расчет за 30 минут.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href={CONTACT_INFO.telLink}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#233126] hover:bg-[#2c3d2f] border border-[#3b513f] text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Позвонить прямо сейчас</span>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
