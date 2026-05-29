import { useState, useEffect } from 'react';
import { Shield, Menu, X, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onScrollTo: (id: string) => void;
  activeSection: string;
}

export default function Navbar({ onScrollTo, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'History', id: 'history' },
    { label: 'Acronym', id: 'acronym' },
    { label: 'Principles', id: 'principles' },
    { label: 'Ethics', id: 'ethics' },
    { label: 'Memos', id: 'memos' },
    { label: 'Documents', id: 'documents' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setIsOpen(false);
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-primary/95 backdrop-blur-md shadow-lg border-b border-brand-secondary/20 py-3'
          : 'bg-brand-primary py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="bg-brand-secondary/10 p-2 rounded-lg border border-brand-secondary/30">
              <Shield className="w-6 h-6 text-brand-secondary animate-pulse" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider text-white font-display">
                TGBI<span className="text-brand-secondary">-TO</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] uppercase tracking-widest text-[#a0aec0] font-mono border-l border-brand-secondary/30 pl-2">
                The Original
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-brand-secondary border-b-2 border-brand-secondary'
                    : 'text-gray-300 hover:text-brand-secondary'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Quick Action Buttons */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd1ykxvUvAQDeK5oMX_8cPyBtPXTPwySnPvCbAroRsYflWXyA/viewform?usp=sf_link"
              target="_blank"
              rel="noreferrer"
              className="ml-4 px-4 py-2 text-xs font-black tracking-widest bg-brand-secondary hover:bg-brand-hover text-brand-dark transition-all duration-300 rounded-none uppercase flex items-center gap-1.5"
            >
              Join Us
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-brand-secondary hover:bg-white/5 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sliding Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-primary border-b border-brand-secondary/30 shadow-2xl animate-fade-in">
          <div className="px-3 pt-2 pb-4 space-y-1 sm:px-4 bg-brand-dark/95">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-2.5 rounded-md text-sm font-semibold tracking-wide uppercase transition-all ${
                  activeSection === item.id
                    ? 'text-brand-secondary bg-brand-secondary/15 pl-6 border-l-4 border-brand-secondary'
                    : 'text-gray-300 hover:text-brand-secondary hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="pt-3 border-t border-white/10 mt-2 px-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd1ykxvUvAQDeK5oMX_8cPyBtPXTPwySnPvCbAroRsYflWXyA/viewform?usp=sf_link"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider bg-brand-secondary hover:bg-brand-hover text-brand-dark transition-all rounded block shadow-lg flex items-center justify-center gap-2"
              >
                Join Membership Program
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
