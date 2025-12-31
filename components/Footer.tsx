
import React from 'react';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center gap-2 mb-6 cursor-pointer" onClick={() => onNavigate?.('home')}>
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">S</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Sikt<span className="text-indigo-600">.</span></span>
        </div>
        <p className="text-slate-500 text-sm mb-8 max-w-lg mx-auto leading-relaxed">
          Norges ledende plattform for automatisert SEO. Vi hjelper bedrifter med teknisk presisjon og datadrevet vekst siden 2024.
        </p>
        <div className="flex justify-center space-x-6 text-sm text-slate-400 mb-8 font-medium">
          <button onClick={() => onNavigate?.('home')} className="hover:text-slate-900 transition-colors">Hjem</button>
          <button onClick={() => onNavigate?.('features')} className="hover:text-slate-900 transition-colors">Funksjoner</button>
          <button onClick={() => onNavigate?.('pricing')} className="hover:text-slate-900 transition-colors">Priser</button>
          <a href="#" className="hover:text-slate-900 transition-colors">Personvern</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Kontakt</a>
        </div>
        <div className="text-[11px] text-slate-400 font-mono">
          &copy; {new Date().getFullYear()} Sikt Technologies AS. Alle rettigheter reservert.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
