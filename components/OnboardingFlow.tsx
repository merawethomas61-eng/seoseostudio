
import React, { useState } from 'react';

interface OnboardingFlowProps {
  planName: string;
  onComplete: () => void;
}

const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ planName, onComplete }) => {
  const [step, setStep] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState('');

  const getWelcomeMessage = () => {
    switch (planName) {
      case 'Premium': return "Velkommen til Premium!";
      case 'Standard': return "Takk! Du er nå Standard-kunde.";
      default: return `Du har valgt ${planName}-planen!`;
    }
  };

  const handleLogin = () => {
    // Simuler innlogging
    setIsLoggedIn(true);
    setStep(2);
  };

  const handlePayment = () => {
    setIsProcessingPayment(true);
    // Simuler Stripe redirect
    setTimeout(() => {
      setStep(3);
      setIsProcessingPayment(false);
    }, 2000);
  };

  const handleFinalize = () => {
    if (websiteUrl.trim()) {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        
        {/* Progress Tracker */}
        <div className="flex justify-between mb-12 relative px-4">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2"></div>
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                step >= s ? 'bg-indigo-600 text-white' : 'bg-white text-slate-400 border-2 border-slate-200'
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Steg 1: Plan & Autentisering */}
        {step === 1 && (
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h1 className="text-2xl font-bold text-slate-900">{getWelcomeMessage()}</h1>
              <p className="text-slate-500 mt-2 text-sm leading-relaxed">For å fullføre kjøpet og sikre din plass, må du logge inn på din konto.</p>
            </div>

            <div className="space-y-3">
              <button 
                onClick={handleLogin}
                className="w-full flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-medium text-slate-700"
              >
                <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
                Fortsett med Google
              </button>
              <button 
                onClick={handleLogin}
                className="w-full py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors font-bold"
              >
                Fortsett med e-post
              </button>
            </div>
          </div>
        )}

        {/* Steg 2: Stripe Betaling */}
        {step === 2 && (
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              </div>
              <h1 className="text-2xl font-bold text-slate-900">Sikker betaling</h1>
              <p className="text-slate-500 mt-2 text-sm leading-relaxed">Du blir nå sendt videre til sikker betaling håndtert av Stripe. Ingen kortinformasjon lagres hos oss.</p>
            </div>

            <button 
              onClick={handlePayment}
              disabled={isProcessingPayment}
              className="w-full py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all font-bold flex items-center justify-center gap-3"
            >
              {isProcessingPayment ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Viderefører...
                </>
              ) : "Betal nå med Stripe"}
            </button>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
              Sikret med 256-bit SSL
            </div>
          </div>
        )}

        {/* Steg 3: URL-registrering */}
        {step === 3 && (
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-50 text-green-600 rounded-2xl mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </div>
              <h1 className="text-2xl font-bold text-slate-900">Din nettside</h1>
              <p className="text-slate-500 mt-2 text-sm leading-relaxed">Skriv inn nettsiden du vil analysere. Vi bruker denne for å starte din første tekniske revisjon.</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Nettside-URL</label>
                <input 
                  type="text" 
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="https://din-nettside.no"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                />
                <p className="mt-3 text-[11px] text-slate-400 bg-slate-50 p-3 rounded-lg border border-slate-100 italic">
                  <strong>Merk:</strong> Du kan kun registrere én nettside per bruker. Denne nettsiden brukes til all analyse, innhold og rapportering.
                </p>
              </div>

              <button 
                onClick={handleFinalize}
                disabled={!websiteUrl.trim()}
                className="w-full py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all font-bold disabled:opacity-50"
              >
                Fullfør oppsettet
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default OnboardingFlow;
