
import React from 'react';

const ForDevelopers: React.FC = () => {
  return (
    <section id="developers" className="py-20 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-slate-500 h-full"></div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6 uppercase tracking-wider">
              API-First Plattform
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Bygget av utviklere, for utviklere</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Vi forstår verdien av struktur og automatisering. Sikt er ikke bare et verktøy, det er et teknisk rammeverk som integreres sømløst i din eksisterende workflow.
            </p>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>RESTful API for full kontroll over SEO-data</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>Webhooks for sanntidsvarsler ved endringer</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>Sømløs integrasjon med Next.js, Remix og Nuxt</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-800 rounded-2xl p-1 border border-slate-700 shadow-2xl">
            <div className="bg-slate-900 rounded-xl overflow-hidden font-mono text-sm leading-relaxed p-6 text-indigo-300">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              </div>
              <p className="text-slate-500 mb-2">// Hent SEO-analyse via API</p>
              <p className="mb-1"><span className="text-pink-400">const</span> <span className="text-blue-400">seoReport</span> = <span className="text-pink-400">await</span> <span className="text-blue-400">sikt</span>.<span className="text-green-400">analyze</span>({`{`}</p>
              <p className="ml-4">url: <span className="text-yellow-300">'https://dinnettside.no'</span>,</p>
              <p className="ml-4">deepScan: <span className="text-indigo-400">true</span>,</p>
              <p className="ml-4">keywords: [<span className="text-yellow-300">'frontend utvikling'</span>, <span className="text-yellow-300">'SaaS'</span>]</p>
              <p className="mb-4">{`}`});</p>
              
              <p className="text-slate-500 mb-2">// Resultat</p>
              <p className="text-slate-400">{`{`}</p>
              <p className="ml-4 text-slate-400">"score": <span className="text-indigo-400">92</span>,</p>
              <p className="ml-4 text-slate-400">"recommendations": [<span className="text-yellow-300">"Optimaliser LCP"</span>, <span className="text-yellow-300">"Mangler meta description"</span>]</p>
              <p className="text-slate-400">{`}`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForDevelopers;
