import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { HowWeWorkPage } from './components/pages/HowWeWorkPage';
import { PricingPage } from './components/pages/PricingPage';
import { GrowthPlanPage } from './components/pages/GrowthPlanPage';
import { TeamPage } from './components/pages/TeamPage';
import { InsightsPage } from './components/pages/InsightsPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage onNavigate={setCurrentPage} />;
      case 'how-we-work':
        return <HowWeWorkPage />;
      case 'pricing':
        return <PricingPage onNavigate={setCurrentPage} />;
      case 'growth':
        return <GrowthPlanPage />;
      case 'team':
        return <TeamPage />;
      case 'insights':
        return <InsightsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
