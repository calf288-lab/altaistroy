import { ClipboardCheck, FileText, Truck, ShieldCheck } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      icon: ClipboardCheck,
      title: 'Выезд на участок и замеры',
      desc: 'Бригадир Василий выезжает на объект, оценивает рельеф, перепады высот, тип грунта и подъездные пути для техники. Консультирует по оптимальной посадке дома/бани.'
    },
    {
      num: '02',
      icon: FileText,
      title: 'Смета и официальный договор',
      desc: 'Составляем детальную спецификацию материалов и график работ. Фиксируем итоговую сумму в договоре: цена не вырастет в процессе строительства.'
    },
    {
      num: '03',
      icon: Truck,
      title: 'Поставка леса и монтаж',
      desc: 'Завозим зимний алтайский кедр и лиственницу. Опытная бригада плотников и монолитчиков выполняет работы по СНиП и ГОСТ с фотоотчетами на каждом этапе.'
    },
    {
      num: '04',
      icon: ShieldCheck,
      title: 'Сдача и гарантия 5 лет',
      desc: 'Оплата производится поэтапно по факту сдачи каждого узла. Вы подписываете акт приемки, получаете гарантийный сертификат на 5 лет и рекомендации по уходу.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-[#121614] border-b border-[#243026]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-heading">
            Понятный и честный процесс <span className="text-[#d3a168]">строительства</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9eb0a3]">
            Без накруток, скрытых доплат и срывов сроков. Вы всегда знаете, за что платите.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#161e19] rounded-2xl border border-[#2c3d30] p-6 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl font-black text-[#2e4033] font-heading">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#233127] border border-[#374c3d] flex items-center justify-center text-[#d3a168]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white font-heading">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#9eb0a4] mt-2.5 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#263529] text-[11px] text-[#7d9183] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52b36b]"></span>
                  <span>Этап согласуется с заказчиком</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
