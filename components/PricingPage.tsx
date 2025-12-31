
import React from 'react';

interface PricingPageProps {
  onSelectPlan?: (plan: string) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      name: "Basic",
      price: "599 kr",
      subtitle: "For startups og personlige prosjekter",
      description: "Den essensielle pakken for å komme i gang med synlighet på nett.",
      features: [
        "Automatisert SEO-analyse",
        "SEO-score og forbedringsforslag",
        "Dashboard og rapportering",
        "Ubegrenset teknisk skanning",
        "E-post support"
      ],
      cta: "Start Basic nå",
      popular: false
    },
    {
      name: "Standard",
      price: "1 499 kr",
      subtitle: "For bedrifter i vekst",
      description: "Fullverdig SEO-automatisering og innholdsproduksjon for profesjonelle team.",
      features: [
        "Alt i Basic",
        "Konkurrentanalyse",
        "AI-generert SEO-innhold",
        "Innholdsplan basert på søkevolum",
        "Begrenset API-tilgang"
      ],
      cta: "Velg Standard",
      popular: true
    },
    {
      name: "Premium",
      price: "4 999 kr",
      subtitle: "For store organisasjoner",
      description: "Maksimal kraft med full integrasjon og dedikert oppfølging.",
      features: [
        "Alt i Standard",
        "Full API-tilgang",
        "Integrasjoner (WordPress, Webflow, Shopify)",
        "Webhooks for automatisering",
        "Prioritert support 24/7"
      ],
      cta: "Kontakt oss",
      popular: false
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Prisplaner for alle behov</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Uansett om du bygger ditt første prosjekt eller skalerer en global plattform, har vi en plan som passer.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                plan.popular 
                  ? 'bg-white border-indigo-600 shadow-2xl scale-105 z-10 relative' 
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
                  Mest populær
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-sm font-medium text-indigo-600 mb-4">{plan.subtitle}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-slate-900 tracking-tight">{plan.price}</span>
                  <span className="text-slate-500 font-medium">/mnd</span>
                </div>
                <p className="mt-6 text-slate-600 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="flex-grow">
                <div className="h-px bg-slate-100 mb-8 w-full"></div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">Hva som er inkludert:</h4>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => onSelectPlan?.(plan.name)}
                className={`w-full py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 active:scale-[0.98] ${
                  plan.popular 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl shadow-indigo-100 hover:shadow-indigo-200' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center text-slate-500 text-sm">
          <p>Alle priser er ekskl. mva. Har du spesielle behov? <a href="#" className="text-indigo-600 font-semibold hover:underline">Ta kontakt for skreddersydde løsninger.</a></p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
