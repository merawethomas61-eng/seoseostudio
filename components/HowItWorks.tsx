
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Koble til din plattform",
      description: "Integrer Sikt med ditt domene eller via vårt API på under fem minutter."
    },
    {
      title: "Automatisk analyse",
      description: "Systemet skanner kildekoden, innholdet og din nåværende autoritet for å finne gap."
    },
    {
      title: "Kontinuerlig optimalisering",
      description: "AI genererer innhold og bygger backlinks automatisk for å sikre stabil vekst."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Hvordan det fungerer</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tre enkle steg mot toppen av søkeresultatene, med fullt fokus på automatisering og effektivitet.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="mb-6 flex items-center justify-center w-12 h-12 bg-indigo-600 text-white rounded-xl text-xl font-bold shadow-lg shadow-indigo-100 transition-transform group-hover:scale-110">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[60px] w-full border-t border-dashed border-slate-200 -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
