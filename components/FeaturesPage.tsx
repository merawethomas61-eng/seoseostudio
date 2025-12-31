
import React from 'react';

const FeaturesPage: React.FC = () => {
  const sections = [
    {
      title: "Automatisert SEO-analyse",
      items: [
        { label: "SEO-score", desc: "Få en umiddelbar vurdering av nettsidens helse og synlighet." },
        { label: "Feil og forbedringsforslag", desc: "Identifiser tekniske feil og få konkrete tips til hva som må endres." },
        { label: "Konkurrentanalyse", desc: "Se hvordan du rangerer sammenlignet med dine største konkurrenter." },
        { label: "Kontinuerlig overvåkning", desc: "Systemet sjekker siden din daglig for å sikre at ingenting bryter sammen." }
      ]
    },
    {
      title: "AI-generert SEO-innhold",
      items: [
        { label: "Blogginnlegg", desc: "Lag engasjerende artikler som rangerer på viktige søkeord." },
        { label: "Produktbeskrivelser", desc: "Optimaliserte tekster for nettbutikker som øker konvertering." },
        { label: "Landingssider", desc: "Bygg sider som er designet for både søkemotorer og brukere." },
        { label: "Metatitler og beskrivelser", desc: "Få hjelp til å skrive titler som faktisk blir klikket på i Google." },
        { label: "Innholdsplan basert på søkevolum", desc: "Vi forteller deg hva du bør skrive om basert på hva folk søker etter." }
      ]
    },
    {
      title: "Dashboard og rapportering",
      items: [
        { label: "Rangeringer", desc: "Følg dine viktigste søkeord i sanntid." },
        { label: "Trafikk og søkeord", desc: "Se nøyaktig hvor besøkende kommer fra og hvilke ord de bruker." },
        { label: "Backlinks", desc: "Hold oversikt over alle lenker som peker til din nettside." },
        { label: "Historiske data", desc: "Se utviklingen din over tid og mål effekten av tiltakene dine." },
        { label: "Eksporterbare rapporter", desc: "Last ned profesjonelle PDF-rapporter til kunder eller ledelse." }
      ]
    },
    {
      title: "Integrasjoner og API",
      items: [
        { label: "API-tilgang (Premium)", desc: "Koble våre data direkte inn i dine egne verktøy eller dashbord." },
        { label: "CMS-integrasjoner", desc: "Sømløs kobling mot WordPress, Webflow og Shopify." },
        { label: "Webhooks", desc: "Få automatiske varsler når rangeringene dine endrer seg." },
        { label: "Automatisert publisering", desc: "Send AI-innhold direkte til nettsiden din med ett klikk." }
      ]
    },
    {
      title: "Support",
      items: [
        { label: "E-post-support", desc: "Rask hjelp via e-post inkludert i Basic og Standard-pakkene." },
        { label: "Prioritert support", desc: "Som Premium-kunde får du direkte tilgang til våre SEO-eksperter døgnet rundt." }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Våre Funksjoner</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Alt du trenger for å ta kontroll over din SEO-strategi, samlet på ett sted.
          </p>
        </div>

        <div className="space-y-24">
          {sections.map((section, idx) => (
            <div key={idx} className="border-b border-slate-100 pb-16 last:border-0">
              <h2 className="text-2xl font-bold text-slate-900 mb-10 flex items-center gap-4">
                <span className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center text-sm">
                  {idx + 1}
                </span>
                {section.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {section.items.map((item, iIdx) => (
                  <div key={iIdx} className="group">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-indigo-600 rounded-3xl text-center text-white shadow-xl shadow-indigo-100">
          <h2 className="text-3xl font-bold mb-6">Klar for å øke synligheten?</h2>
          <p className="text-indigo-100 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
            Bli med over 500 norske bedrifter som bruker Sikt for å dominere søkeresultatene.
          </p>
          <button className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 shadow-lg">
            Start din gratis analyse nå
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
