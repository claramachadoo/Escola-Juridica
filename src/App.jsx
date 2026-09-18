import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DiagnosticQuiz from './components/DiagnosticQuiz';
import CorePillars from './components/CorePillars';
import PartnershipTiers from './components/PartnershipTiers';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import KioskModal from './components/KioskModal';

export default function App() {
  const [isKioskOpen, setIsKioskOpen] = useState(false);

  const scrollToDiagnostic = () => {
    const el = document.getElementById('diagnostico');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-brand-600 selection:text-white font-sans antialiased">
      {/* Top Navbar */}
      <Navbar 
        onOpenKiosk={() => setIsKioskOpen(true)} 
        onStartCheckup={scrollToDiagnostic}
      />

      {/* Main Flow: Hero -> Diagnostic -> Pillars -> Tiers -> FAQ */}
      <main className="flex-1">
        <Hero onStartCheckup={scrollToDiagnostic} />
        <DiagnosticQuiz />
        <CorePillars />
        <PartnershipTiers onStartCheckup={scrollToDiagnostic} />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onStartCheckup={scrollToDiagnostic} />

      {/* Stand QR Modal */}
      <KioskModal 
        isOpen={isKioskOpen} 
        onClose={() => setIsKioskOpen(false)}
        onResetQuiz={scrollToDiagnostic}
      />
    </div>
  );
}
