import { Shield, ArrowUp, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1c2d] text-white border-t-4 border-brand-secondary pt-16 pb-12 relative overflow-hidden">
      
      {/* Decorative backdrop */}
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-secondary/5 rounded-full filter blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Logo & Slogan block */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onScrollTo('home')}>
              <div className="bg-brand-secondary/15 p-2 rounded-none border border-brand-secondary/35">
                <Shield className="w-6 h-6 text-brand-secondary" />
              </div>
              <span className="text-2xl font-serif italic tracking-wide text-white">
                TGBI<span className="text-brand-secondary font-sans font-bold not-italic">-TO</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-350 leading-relaxed text-justify max-w-sm">
              We stand as the authentic lineage of The Guardians Brotherhood, Inc. - The Original, registered under secular and democratic laws to foster unity, public security, and lifelong fraternity in the Philippines and global defense chapters.
            </p>
            
            <p className="text-xs font-bold tracking-widest uppercase text-brand-secondary font-mono">
              "We Serve with Pride and Honor"
            </p>
          </div>

          {/* Quick links block */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold tracking-widest uppercase text-brand-secondary font-mono border-b border-white/10 pb-2">
              Navigation Guides
            </h4>
            
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Our History', id: 'history' },
                { label: 'Acronym', id: 'acronym' },
                { label: 'Principles', id: 'principles' },
                { label: 'Ethics Code', id: 'ethics' },
                { label: 'Memos Portal', id: 'memos' },
                { label: 'Registries', id: 'documents' },
                { label: 'Contact', id: 'contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onScrollTo(link.id)}
                    className="text-slate-400 hover:text-brand-secondary transition-colors cursor-pointer text-left py-0.5 font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info desk details */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-bold tracking-widest uppercase text-brand-secondary font-mono border-b border-white/10 pb-2">
              National Directory
            </h4>
            
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                <p className="leading-relaxed text-justify">
                  43-A Pangasinan St., Bago Bantay, Quezon City, 1105 Philippines
                </p>
              </div>

              <div className="flex gap-2.5 items-start">
                <Mail className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                <a
                  href="mailto:jseletaria1542@yahoo.com"
                  className="hover:text-brand-secondary break-all font-mono"
                >
                  jseletaria1542@yahoo.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower row details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <div className="space-y-1 text-left">
            <p className="text-xs text-slate-400">
              &copy; {currentYear} The Guardians Brotherhood, Inc. - The Original. All Rights Reserved.
            </p>
            <p className="text-[10px] text-brand-secondary font-mono tracking-widest uppercase">
              Mabuhay ang TGBI - The Original! We serve with Pride and Honor.
            </p>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={() => onScrollTo('home')}
            className="p-3 bg-white/5 border border-white/10 rounded-none hover:bg-brand-secondary hover:text-brand-dark transition-all duration-300 shadow-md cursor-pointer group animate-pulse"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
