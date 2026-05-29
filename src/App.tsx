import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutHistory from './components/AboutHistory';
import AcronymExplorer from './components/AcronymExplorer';
import PrinciplesSection from './components/PrinciplesSection';
import EthicsPledge from './components/EthicsPledge';
import SecretariatMemos from './components/SecretariatMemos';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Sparkles, X, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showNotification, setShowNotification] = useState(true);

  // Monitor viewport position to highlight current navigation section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // Offset for navbar height

      const sections = ['home', 'history', 'acronym', 'principles', 'ethics', 'memos', 'documents', 'contact'];
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    let targetId = sectionId;
    if (sectionId === 'documents') {
      targetId = 'memos'; // Documents are located inside the SecretariatMemos component
    }

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative min-h-screen bg-editorial-bg text-[#1a1a1a] antialiased md:border-[10px] border-brand-primary flex flex-col">
      
      {/* Dynamic Ambient Notice Box */}
      {showNotification && (
        <div id="notice-banner" className="fixed bottom-10 right-10 max-w-sm md:max-w-md z-45 bg-[#0d233a] border-t-4 border-brand-secondary shadow-2xl p-5 text-white animate-fade-in print:hidden">
          <div className="flex items-start gap-3">
            <div className="bg-brand-secondary/10 p-2 rounded border border-brand-secondary/20 shrink-0">
              <CheckCircle2 className="w-5 h-5 text-brand-secondary" />
            </div>
            
            <div className="flex-1 space-y-1.5 text-left">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-extrabold tracking-widest text-brand-secondary uppercase font-mono leading-none flex items-center gap-1">
                  <Sparkles className="w-3 h-3 animate-ping" />
                  Roster Portal Active
                </h4>
                <button
                  onClick={() => setShowNotification(false)}
                  className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-all cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              
              <p className="text-[11px] text-slate-300 leading-normal font-sans">
                Welcome to the digital portal of <strong>The Original lineage</strong>. Official registries and Program of Instruction (POI) training forms are fully open.
              </p>
              
              <div className="flex justify-end pt-1">
                <button
                  onClick={() => {
                    handleScrollToSection('memos');
                    setShowNotification(false);
                  }}
                  className="text-[9px] font-bold text-brand-secondary hover:text-brand-hover uppercase font-mono tracking-widest flex items-center gap-1 cursor-pointer"
                >
                  Open Application Forms
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header Sticky Navigation */}
      <Navbar onScrollTo={handleScrollToSection} activeSection={activeSection} />

      {/* Main Core Layout Sections */}
      <main className="flex flex-col">
        {/* Hero Section */}
        <Hero onExplore={handleScrollToSection} />

        {/* History / Diablo Origins Section */}
        <AboutHistory />

        {/* Acronym Meanings Explorer */}
        <AcronymExplorer />

        {/* Guiding Principles Cards Section */}
        <PrinciplesSection />

        {/* Ethics Pledger & digital Signer */}
        <EthicsPledge />

        {/* Secretariat updates & Google forms application portal */}
        <SecretariatMemos />

        {/* Direct Contact & Location info */}
        <ContactForm />
      </main>

      {/* Footer Navigation Panel */}
      <Footer onScrollTo={handleScrollToSection} />
      
    </div>
  );
}

