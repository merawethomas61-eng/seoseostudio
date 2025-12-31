
import React from 'react';

interface NavbarProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPath }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-700 transition-colors">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Sikt<span className="text-indigo-600">.</span></span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <button 
              onClick={() => onNavigate('home')} 
              className={`${currentPath === 'home' ? 'text-indigo-600' : 'hover:text-indigo-600'} transition-colors`}
            >
              Hjem
            </button>
            <button 
              onClick={() => onNavigate('features')} 
              className={`${currentPath === 'features' ? 'text-indigo-600' : 'hover:text-indigo-600'} transition-colors`}
            >
              Funksjoner
            </button>
            <button 
              onClick={() => onNavigate('pricing')} 
              className={`${currentPath === 'pricing' ? 'text-indigo-600' : 'hover:text-indigo-600'} transition-colors`}
            >
              Priser
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors active:scale-95 transform">Logg inn</button>
            <button 
              onClick={() => onNavigate('pricing')}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-indigo-700 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all transform shadow-sm"
            >
              Kom i gang
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
