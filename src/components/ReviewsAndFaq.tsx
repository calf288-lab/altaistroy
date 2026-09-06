import { useState } from 'react';
import { Star, ChevronDown, MessageSquareQuote, HelpCircle, CheckCircle } from 'lucide-react';
import { REVIEWS, FAQS } from '../data/altaiData';

export default function ReviewsAndFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-20 bg-[#0e1310] border-b border-[#232e25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Reviews Block */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b251e] border border-[#2d3f32] text-[#9fc7a8] text-xs font-semibold mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5 text-[#d3a168]" />
              <span>Отзывы заказчиков</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-heading">
              Что говорят владельцы усадеб и баз на <span className="text-[#d3a168]">Алтае</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div
                key={r.id}
                className="bg-[#141b16] rounded-2xl border border-[#2a382d] p-6 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-[#e5a855]">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] text-[#788a7e]">{r.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#b5c4b9] leading-relaxed italic">
                    «{r.text}»
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#233026]">
                  <div className="font-bold text-white text-sm flex items-center gap-1.5">
                    <span>{r.author}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#52b36b]" />
                  </div>
                  <div className="text-xs text-[#d3a168] mt-0.5">{r.project}</div>
                  <div className="text-[11px] text-[#7e9083]">{r.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Block */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b251e] border border-[#2d3f32] text-[#9fc7a8] text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#d3a168]" />
              <span>Частые вопросы</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
              Ответы на ключевые вопросы
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#151c17] rounded-xl border border-[#29382c] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex justify-between items-center gap-4 cursor-pointer hover:text-[#d3a168] text-white transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#d3a168] transition-transform duration-200 flex-shrink-0 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-[#9eb0a4] leading-relaxed border-t border-[#222e25]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
