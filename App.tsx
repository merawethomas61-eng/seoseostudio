
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import ForDevelopers from './components/ForDevelopers';
import Pricing from './components/Pricing';
import AIPreview from './components/AIPreview';
import Footer from './components/Footer';
import PricingPage from './components/PricingPage';
import FeaturesPage from './components/FeaturesPage';
import OnboardingFlow from './components/OnboardingFlow';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('home');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // Håndter enkel ruting
  const navigate = (path: string) => {
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    navigate('onboarding');
  };

  const renderContent = () => {
    switch (currentPath) {
      case 'pricing':
        return <PricingPage onSelectPlan={handleSelectPlan} />;
      case 'features':
        return <FeaturesPage />;
      case 'onboarding':
        return <OnboardingFlow planName={selectedPlan || 'Basic'} onComplete={() => navigate('dashboard')} />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return (
          <>
            <Hero />
            <HowItWorks />
            <Features />
            <AIPreview />
            <ForDevelopers />
            <Pricing onNavigate={() => navigate('pricing')} onSelectPlan={handleSelectPlan} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {currentPath !== 'onboarding' && <Navbar onNavigate={navigate} currentPath={currentPath} />}
      <main className="flex-grow">
        {renderContent()}
      </main>
      {currentPath !== 'onboarding' && currentPath !== 'dashboard' && <Footer onNavigate={navigate} />}
    </div>
  );
};

export default App;
