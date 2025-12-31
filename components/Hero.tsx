
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-6">
          <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
          Automatisert SEO-plattform for moderne team
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Ranger høyere på Google <br />
          <span className="text-indigo-600 italic">helt automatisk</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
          Sikt automatiserer teknisk analyse, innholdsproduksjon og backlink-strategier. 
          Vi leverer datadrevne resultater mens du fokuserer på koding og produktutvikling.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-indigo-200/50 active:scale-[0.98] transition-all duration-200 transform">
            Start din gratis analyse
          </button>
        </div>
        
        {/* Mockup Preview */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10 h-full"></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl max-w-4xl mx-auto overflow-hidden">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="bg-slate-50 px-4 py-1 rounded text-xs text-slate-400 font-mono w-full text-left">
                https://dashboard.sikt.no/project/analytics
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 h-64 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100">
                <div className="w-full px-8 space-y-4">
                  <div className="h-4 bg-indigo-100 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                  <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                  <div className="pt-4 grid grid-cols-2 gap-4">
                    <div className="h-20 bg-white rounded border border-slate-100 p-4">
                      <div className="h-2 bg-indigo-200 w-1/2 mb-2"></div>
                      <div className="h-6 bg-indigo-50 w-full"></div>
                    </div>
                    <div className="h-20 bg-white rounded border border-slate-100 p-4">
                      <div className="h-2 bg-green-200 w-1/2 mb-2"></div>
                      <div className="h-6 bg-green-50 w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-32 bg-slate-50 rounded-lg border border-slate-100 p-4">
                  <div className="h-3 bg-slate-300 w-1/2 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-2 bg-slate-200 w-full"></div>
                    <div className="h-2 bg-slate-200 w-full"></div>
                    <div className="h-2 bg-slate-200 w-4/5"></div>
                  </div>
                </div>
                <div className="h-[112px] bg-indigo-600 rounded-lg p-4 text-white flex flex-col justify-end">
                  <div className="text-xs font-semibold opacity-80">Health Score</div>
                  <div className="text-3xl font-bold">98/100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
