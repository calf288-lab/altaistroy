import { Mountain, Flame, ShieldAlert, Sparkles, Droplets, Compass } from 'lucide-react';

export default function WhyAltai() {
  const points = [
    {
      icon: Mountain,
      title: 'Сложный скальный рельеф и уклоны',
      desc: 'На Алтае редкий участок бывает идеально ровным. Мы рассчитываем ступенчатые фундаменты, строим надежные подпорные стены из местного камня и организуем водоотведение паводковых и талых вод.'
    },
    {
      icon: ShieldAlert,
      title: 'Сейсмостойкость до 8–9 баллов',
      desc: 'Горный Алтай — сейсмоактивная зона. Мы применяем усиленное пространственное армирование фундаментов, деревянные нагели, скользящие крепления стропил и компенсирующие домкраты.'
    },
    {
      icon: Flame,
      title: 'Сибирские морозы до -45°C',
      desc: 'Толщина бревен от 28 до 45+ см, герметичные замки в чашах с ветровым шипом (канадская или норвежская рубка), экологичный межвенцовый джут и энергоэффективные водяные теплые полы.'
    },
    {
      icon: Sparkles,
      title: 'Целебный алтайский кедр',
      desc: 'Собственный отбор бревен зимней валки. Алтайский кедр выделяет фитонциды, обеззараживает воздух, имеет благородную текстуру и в 2 раза теплее обычного кирпича.'
    },
    {
      icon: Droplets,
      title: 'Сибирская лиственница на нижние венцы',
      desc: 'Нижний венец, террасы и элементы у земли мы всегда монтируем из лиственницы. При контакте с влагой она не гниет, а становится крепче камня.'
    },
    {
      icon: Compass,
      title: 'Понимание алтайской логистики',
      desc: 'Знаем специфику доставки по Чуйскому и Чемальскому трактам, подъем техники на крутые перевалы и специфику работы на удаленных турбазах.'
    }
  ];

  return (
    <section id="why-altai" className="py-20 bg-[#0e1310] border-b border-[#243026]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b251e] border border-[#2d3f32] text-[#9fc7a8] text-xs font-semibold mb-3">
            <Mountain className="w-3.5 h-3.5 text-[#d3a168]" />
            <span>Горная специфика и экология</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-heading">
            Почему типовые проекты не подходят для <span className="text-[#d3a168]">Алтая</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9eb0a3]">
            Строительство в горах требует знания геологии, ветровых нагрузок и особенностей поведения древесины при перепадах температур от -45°C зимой до +35°C летом.
          </p>
        </div>

        {/* 6 Grid points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-[#141b16] rounded-2xl border border-[#2a382d] p-6 hover:border-[#425847] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#202c23] border border-[#344838] flex items-center justify-center text-[#d3a168] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white font-heading">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9eb0a4] mt-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="w-8 h-0.5 bg-[#b68249]/40 mt-6"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
