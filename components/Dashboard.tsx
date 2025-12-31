
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="flex justify-between items-center mb-12 border-b border-slate-100 pb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-500 text-sm">Velkommen tilbake! Her er din SEO-oversikt.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-bold text-slate-900">Ola Nordmann</p>
              <p className="text-xs text-slate-500">Premium Bruker</p>
            </div>
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
              ON
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">SEO Score</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-slate-900">--</span>
              <span className="text-slate-500 text-sm">/ 100</span>
            </div>
            <p className="mt-4 text-xs text-indigo-600 font-bold">Analyse pågår...</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Organiske Søkeord</p>
            <span className="text-4xl font-bold text-slate-900">0</span>
            <p className="mt-4 text-xs text-slate-500">Ingen data tilgjengelig ennå.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Domene Autoritet</p>
            <span className="text-4xl font-bold text-slate-900">--</span>
            <p className="mt-4 text-xs text-slate-500">Venter på første indeksering.</p>
          </div>
        </div>

        <div className="bg-indigo-600 rounded-3xl p-12 text-white text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Vi analyserer din nettside nå!</h2>
            <p className="text-indigo-100 mb-8 leading-relaxed">
              Dette tar vanligvis mellom 5 og 10 minutter. Vi sender deg en e-post så snart den første fullstendige rapporten er klar.
            </p>
            <div className="flex justify-center">
              <div className="flex gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
