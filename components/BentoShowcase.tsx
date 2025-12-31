
import React from 'react';

const BentoShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Seksjon 1: AI Synlighet (Large) */}
          <div className="md:col-span-2 bg-slate-900/50 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group">
            <div className="relative z-10 max-w-md">
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Spor merkevarens synlighet i AI-søk og LLM-er</h3>
              <a href="#" className="text-indigo-400 text-sm font-semibold flex items-center gap-1 hover:text-indigo-300 transition-colors">
                Lær mer <span className="text-lg">→</span>
              </a>
              
              <div className="mt-12 grid grid-cols-2 gap-3">
                {[
                  { name: 'AI Overviews', icon: 'G' },
                  { name: 'AI Mode', icon: 'G' },
                  { name: 'ChatGPT', icon: 'AI' },
                  { name: 'Perplexity', icon: 'P' },
                  { name: 'Gemini', icon: '✦' },
                  { name: 'Copilot', icon: 'C' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 px-3 py-2 rounded-xl text-xs font-medium hover:bg-slate-800 transition-colors cursor-default">
                    <span className="w-5 h-5 flex items-center justify-center rounded-md bg-slate-700 text-[10px]">{item.icon}</span>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Radar Visualisering (Mockup) */}
            <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 opacity-40 pointer-events-none">
              <div className="absolute inset-0 border border-slate-700 rounded-full"></div>
              <div className="absolute inset-4 border border-slate-700 rounded-full"></div>
              <div className="absolute inset-12 border border-slate-800 rounded-full"></div>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-800"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800"></div>
              <div className="absolute top-1/4 left-3/4 w-3 h-3 bg-green-500 rounded-full blur-[2px] animate-pulse"></div>
              <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-yellow-500 rounded-full blur-[2px]"></div>
              <div className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-red-500 rounded-full blur-[2px]"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full animate-[spin_10s_linear_infinite]"></div>
            </div>
          </div>

          {/* Seksjon 2: Innholdsproduksjon */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between group">
            <div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">Akselerer innholdsproduksjon og styrk faglig dekning</h3>
              <a href="#" className="text-indigo-400 text-sm font-semibold flex items-center gap-1 hover:text-indigo-300 transition-colors">
                Lær mer <span className="text-lg">→</span>
              </a>
            </div>
            
            <div className="mt-8 flex items-center gap-6">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-800" />
                  <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset="12.5" className="text-green-500 transition-all duration-1000" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-2xl">95</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Innholdsscore</div>
                <div className="text-sm font-medium text-slate-300">Utmerket kvalitet</div>
              </div>
            </div>
          </div>

          {/* Seksjon 3: Global lokalisering */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between min-h-[280px]">
            <h3 className="text-xl font-bold tracking-tight leading-snug">Optimaliser for globale markeder med AI-drevet lokalisering</h3>
            
            <div className="inline-flex items-center gap-3 bg-slate-800/50 border border-slate-700/50 px-4 py-3 rounded-2xl w-fit mt-8">
              <span className="text-xl">🇳🇴</span>
              <span className="text-lg font-bold">173+</span>
            </div>
          </div>

          {/* Seksjon 4: AI Deteksjon */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
            <h3 className="text-xl font-bold tracking-tight leading-snug">Oppdag AI-generert innhold og oppretthold redaksjonell integritet</h3>
            
            <div className="mt-8 flex items-center gap-8">
              <div className="w-20 h-20 rounded-full border-[6px] border-green-500 border-t-yellow-500 border-r-orange-500 relative">
                <div className="absolute inset-0 bg-slate-900 rounded-full m-1 flex items-center justify-center">
                  <div className="w-4 h-4 bg-slate-800 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2 text-[10px] uppercase font-bold tracking-wider text-slate-400">
                <div className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-500 rounded-full"></span> OpenAI</div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span> DeepSeek</div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> Menneske</div>
              </div>
            </div>
          </div>

          {/* Seksjon 5: Tekniske SEO-fikser */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between bg-gradient-to-br from-slate-900/50 to-indigo-900/10">
            <div>
              <h3 className="text-xl font-bold mb-4 tracking-tight leading-snug">Rett tekniske SEO-feil direkte på nettsiden – helt uten utviklere</h3>
              <a href="#" className="text-indigo-400 text-sm font-semibold flex items-center gap-1 hover:text-indigo-300 transition-colors">
                Lær mer <span className="text-lg">→</span>
              </a>
            </div>
            
            <button className="mt-8 flex items-center justify-center gap-2 bg-slate-800 border border-slate-700 hover:bg-slate-700 px-6 py-3 rounded-2xl transition-all shadow-xl active:scale-95 group">
              <span className="text-indigo-400 group-hover:rotate-12 transition-transform">✦</span>
              <span className="text-sm font-bold">Patch meta-tags</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoShowcase;
