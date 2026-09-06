import { useState } from 'react';
import { Camera, MapPin, Calendar, Maximize2, X, Check, ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS, CONTACT_INFO } from '../data/altaiData';
import { PortfolioItem } from '../types';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Все');

  const categories = ['Все', 'Дома и срубы', 'Бани', 'Беседки и зоны отдыха', 'Внутренняя отделка', 'Фундаменты'];

  const filtered = activeCategory === 'Все'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-[#121714] border-b border-[#253227]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e2921] border border-[#2e4032] text-[#9fc7a8] text-xs font-semibold mb-3">
            <Camera className="w-3.5 h-3.5 text-[#d3a168]" />
            <span>Реальные объекты на Алтае</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-heading">
            Фотографии наших работ и <span className="text-[#d3a168]">процесса</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9fb0a3]">
            Срубы из алтайского кедра, капитальные беседки с печью, водяные теплые полы, укладка керамогранита и фундаменты на скальных склонах.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#b68249] text-[#121614] shadow-md'
                  : 'bg-[#18211b] border border-[#2b392f] text-[#a4b4a8] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-[#151d18] rounded-2xl border border-[#2a382d] overflow-hidden hover:border-[#425847] transition-all flex flex-col group shadow-lg"
            >
              <div className="relative h-60 overflow-hidden cursor-pointer" onClick={() => setSelectedProject(item)}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151d18] via-transparent to-transparent opacity-80"></div>
                
                {/* Overlay details badge */}
                <div className="absolute top-3 left-3 bg-[#111713]/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#2d3e31] text-[11px] font-semibold text-[#b8c7bd]">
                  {item.category}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(item)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-[#111713]/85 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Увеличить"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <div className="absolute bottom-3 left-3 right-3 text-xs text-[#d6ded8] flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#d3a168]" />
                    {item.location}
                  </span>
                  {item.area && (
                    <span className="bg-[#243328]/90 px-2 py-0.5 rounded text-[11px] text-[#9fc7a8] border border-[#374c3d]">
                      {item.area}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-white font-heading group-hover:text-[#d3a168] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9eb0a4] mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.details.map((detail, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-[#1d2720] text-[#92a396] px-2 py-0.5 rounded-md border border-[#29362c]"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#243126] flex justify-between items-center text-xs">
                  <span className="text-[#7e9083] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> Срок: {item.term}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(item)}
                    className="text-[#d3a168] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Подробнее</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for project full view */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#161e19] border border-[#314434] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95">
              <div className="relative h-72 sm:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs text-[#d3a168]">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedProject.location}</span>
                  <span>•</span>
                  <span>{selectedProject.area}</span>
                  <span>•</span>
                  <span>Срок: {selectedProject.term}</span>
                </div>

                <h3 className="text-xl font-bold text-white font-heading">
                  {selectedProject.title}
                </h3>

                <p className="text-sm text-[#b8c7bc] leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#263529]">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    Ключевые особенности проекта:
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProject.details.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#a0b0a4]">
                        <Check className="w-3.5 h-3.5 text-[#52b36b]" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/79317777223?text=${encodeURIComponent(`Здравствуйте! Хочу построить похожий проект как "${selectedProject.title}" (${selectedProject.location}). Проконсультируйте, пожалуйста.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#163523] hover:bg-[#1d462e] text-[#4ade80] font-bold text-xs uppercase tracking-wider text-center transition-colors"
                  >
                    Обсудить такой проект в WhatsApp
                  </a>

                  <a
                    href={CONTACT_INFO.maxMessengerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#1d2d40] hover:bg-[#253952] text-[#6cb8ff] font-bold text-xs uppercase tracking-wider text-center transition-colors"
                  >
                    Обсудить в MAX
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
