
import React, { useState } from 'react';

interface OnboardingPageProps {
  planName: string;
}

const OnboardingPage: React.FC<OnboardingPageProps> = ({ planName }) => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const getPlanSummary = () => {
    switch (planName) {
      case 'Premium':
        return [
          "Alt i Standard",
          "Full API-tilgang og Integrasjoner",
          "Webhooks for sanntidsoppdatering",
          "Prioritert support 24/7"
        ];
      case 'Standard':
        return [
          "Alt i Basic",
          "AI-generert SEO-innhold",
          "Automatisert innholdsplan",
          "Metatitler og beskrivelser"
        ];
      default:
        return [
          "Automatisert SEO-analyse",
          "Personlig SEO-score",
          "Konkrete forbedringsforslag",
          "Konkurrentanalyse og Dashboard"
        ];
    }
  };

  const getConfirmationText = () => {
    if (planName === 'Premium') return "Velkommen til Premium!";
    if (planName === 'Standard') return "Takk! Du er nå Standard-kunde.";
    return `Du har valgt ${planName}-planen!`;
  };

  const handleStart = () => {
    if (!url) return;
    setIsAnalyzing(true);
    // Her ville man vanligvis sendt brukeren til dashbordet etter en liten "simulert" analyse
    setTimeout(() => {
      alert("Analysen starter! Tar deg til dashboardet...");
      window.location.reload(); // Enkel reset for demo
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bekreftelse */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-4">{getConfirmationText()}</h1>
          <p className="text-slate-600">Din konto er nå klar. La oss sette i gang med din første analyse.</p>
        </div>

        {/* Plan Oppsummering */}
        <div className="bg-slate-50 rounded-3xl p-8 mb-12 border border-slate-100">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Inkludert i din plan:</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {getPlanSummary().map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                <svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Første Steg: URL */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-100 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Første steg: Din nettside</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Skriv inn URL-en til nettsiden du ønsker å optimalisere. Vi bruker denne for å analysere din SEO-status, identifisere feil og gi deg din første SEO-score.
            </p>

            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="text" 
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://din-nettside.no"
                  className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl text-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all font-medium"
                />
              </div>
              <button 
                onClick={handleStart}
                disabled={!url || isAnalyzing}
                className="w-full py-5 bg-indigo-600 text-white rounded-2xl text-lg font-bold hover:bg-indigo-700 transition-all transform hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-3 shadow-xl shadow-indigo-100"
              >
                {isAnalyzing ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyserer...
                  </>
                ) : "Start analyse"}
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-[11px] text-slate-400 font-medium uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                SEO-Score
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                Tekniske Feil
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                Fullt Dashboard
              </div>
            </div>
          </div>
          
          {/* Dekorasjon */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-indigo-50 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-indigo-50 rounded-full opacity-50 blur-3xl"></div>
        </div>

        <div className="mt-12 text-center">
          <button className="text-slate-400 text-sm hover:text-slate-600 font-medium transition-colors">
            Hopp over og gå til dashboardet
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
