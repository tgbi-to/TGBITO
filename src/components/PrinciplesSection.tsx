import { PRINCIPLES_DATA } from '../data';
import * as LucideIcons from 'lucide-react';

export default function PrinciplesSection() {
  return (
    <section id="principles" className="bg-[#fdfdfb] py-20 lg:py-28 border-b border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[10px] font-mono font-bold tracking-[0.4em] text-brand-secondary uppercase mb-2">Our Pillars</p>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-brand-primary tracking-tight">
            Seven Guiding Principles
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-brand-secondary mx-auto" />
          <p className="mt-4 text-sm text-slate-600 font-sans max-w-xl mx-auto leading-relaxed">
            We live by seven fundamental core values that define our unique identity, bind us together, and solidify our commitment to society.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRINCIPLES_DATA.map((principle, index) => {
            // Dynamically select the icon based on string name
            let IconComponent = LucideIcons.Compass;
            if (principle.iconName === 'Users') IconComponent = LucideIcons.Users;
            else if (principle.iconName === 'ShieldCheck') IconComponent = LucideIcons.ShieldCheck;
            else if (principle.iconName === 'HeartHandshake') IconComponent = LucideIcons.Handshake;
            else if (principle.iconName === 'BookmarkCheck') IconComponent = LucideIcons.CheckSquare;
            else if (principle.iconName === 'HandHoldingHeart') IconComponent = LucideIcons.Heart;
            else if (principle.iconName === 'Scale') IconComponent = LucideIcons.Scale;
            else if (principle.iconName === 'Gavel') IconComponent = LucideIcons.Gavel;

            return (
              <div
                key={index}
                className="bg-[#fdfdfb] rounded-none shadow-[3px_3px_0px_0px_rgba(13,35,58,0.1)] border border-brand-primary/10 hover:border-brand-secondary transition-all duration-300 p-6 flex flex-col justify-between group overflow-hidden relative text-left"
              >
                {/* Visual Top Gold Border bar */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#dfb15b]" />

                <div className="space-y-4">
                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded-none bg-brand-primary/5 border border-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-secondary transition-all duration-300">
                    <IconComponent className="w-6 h-6 shrink-0" />
                  </div>

                  <div>
                    {/* Index identifier */}
                    <span className="text-[10px] font-mono font-bold text-brand-secondary uppercase">
                      Value #0{index + 1}
                    </span>
                    <h3 className="text-lg font-serif italic text-brand-primary mt-0.5 tracking-tight group-hover:text-[#cf9e4b] transition-colors">
                      {principle.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed text-justify">
                    {principle.description}
                  </p>
                </div>
                
                {/* Decorative background visual icon */}
                <div className="absolute -bottom-6 -right-6 text-brand-primary/[0.02] group-hover:text-brand-primary/[0.04] transition-all duration-500">
                  <IconComponent className="w-24 h-24 stroke-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#0d233a]/5 border border-brand-primary/10 rounded-none p-6 text-center text-slate-700">
          <p className="text-xs font-serif italic max-w-xl mx-auto leading-relaxed">
            These guidelines require strict individual and collective daily devotion. Each certified member is expected to commit with true loyalty and discipline to build peace and prosperity.
          </p>
        </div>

      </div>
    </section>
  );
}
