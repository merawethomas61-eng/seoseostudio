
import React from 'react';

interface PricingProps {
  onNavigate?: () => void;
  onSelectPlan?: (plan: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigate, onSelectPlan }) => {
  const plans = [
    {
      name: "Basic",
      price: "599,-",
      description: "Ideelt for startups og små prosjekter.",
      features: [
        "Opptil 3 domener",
        "Automatisert SEO-analyse",
        "SEO-score",
        "Dashboard"
      ],
      cta: "Kom i gang"
    },
    {
      name: "Standard",
      price: "1 499,-",
      description: "For bedrifter i vekst som trenger mer kraft.",
      features: [
        "Opptil 10 domener",
        "AI-generert innhold",
        "Konkurrentanalyse",
        "API-tilgang"
      ],
      cta: "Velg Standard",
      popular: true
    },
    {
      name: "Premium",
      price: "4 999,-",
      description: "For store organisasjoner med tunge behov.",
      features: [
        "Ubegrenset domener",
        "Integrasjoner",
        "Webhooks",
        "Prioritert support"
      ],
      cta: "Kontakt oss"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Enkel prising for alle behov</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Velg planen som passer din veksttakt, eller se fullstendig oversikt på vår dedikerte prisside.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative p-8 rounded-2xl border ${plan.popular ? 'border-indigo-600 shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'} bg-white transition-all`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full uppercase tracking-widest">
                  Mest populær
                </div>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-6 h-10">{plan.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                <span className="text-slate-500 text-sm ml-2">/mnd</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onSelectPlan?.(plan.name)}
                className={`w-full py-3 rounded-xl font-bold transition-all transform hover:-translate-y-0.5 active:scale-[0.98] ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100 hover:shadow-indigo-200' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button 
            onClick={onNavigate}
            className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors flex items-center justify-center gap-2 mx-auto group"
          >
            Se fullstendig funksjonsoversikt
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
