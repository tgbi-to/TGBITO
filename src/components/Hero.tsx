import { ShieldCheck, CalendarRange, ArrowRight, Award, ExternalLink } from 'lucide-react';

interface HeroProps {
  onExplore: (targetId: string) => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <header
      id="home"
      className="relative pt-24 min-h-screen flex items-center bg-gradient-to-br from-brand-primary via-brand-dark to-slate-900 overflow-hidden"
    >
      {/* Dynamic particles background representation */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-secondary filter blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-600 filter blur-3xl" />
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d233a_1px,transparent_1px),linear-gradient(to_bottom,#0d233a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Info Columns */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left animate-fade-in">
            {/* Top Tagline Badges */}
            <div className="inline-flex self-start items-center space-x-2 bg-brand-secondary/10 border border-brand-secondary/35 text-brand-secondary px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              <Award className="w-3.5 h-3.5 animate-bounce" />
              <span>The Original Lineage</span>
            </div>

            {/* Main Visual Title in Editorial Style */}
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-secondary font-mono leading-none mb-2">SEC REG NO. 123899</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif italic text-[#dfb15b] leading-[0.9] mb-4">
                The Guardians <br/>
                <span className="not-italic font-sans font-black uppercase text-6xl sm:text-7xl lg:text-8xl block -mt-1 tracking-tighter text-white">
                  Brotherhood
                </span>
              </h1>
              <p className="text-xs tracking-widest text-[#a0aec0] uppercase font-mono font-bold mt-1">
                The Original Lineage • Founded December 10, 1984
              </p>
            </div>

            {/* Descriptive Body and Motto block */}
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-slate-300 border-l-2 border-brand-secondary pl-6 italic">
                "Brotherhood for peace and prosperity. In good standing in our communities, we come together to promote our social, intellectual, and moral well-being."
              </p>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                We, men and women of goodwill, are united across regional and international chapters under the guidance of our International Chairman, <strong>UPMF CARLOMAGNO</strong>, an original incorporator.
              </p>
            </div>

            {/* Crisp Editorial Statistics Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-sm pt-2">
              <div className="bg-brand-primary/40 border border-[#dfb15b]/20 p-4 text-center rounded-lg">
                <div className="text-2xl font-bold text-white tracking-widest font-display">40+</div>
                <div className="text-[9px] uppercase font-mono tracking-wider text-slate-400">Years of Service</div>
              </div>
              <div className="bg-brand-secondary text-brand-primary p-4 text-center rounded-lg">
                <div className="text-2xl font-serif italic font-extrabold tracking-white text-brand-primary">INTL</div>
                <div className="text-[9px] uppercase font-mono font-black tracking-wider text-brand-primary">Global Reach</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => onExplore('history')}
                className="px-6 py-3 bg-brand-secondary hover:bg-brand-hover text-brand-dark font-bold rounded shadow-lg hover:shadow-brand-secondary/20 transition-all duration-300 text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                Read Our History
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => onExplore('ethics')}
                className="px-6 py-3 border border-white/20 hover:border-brand-secondary hover:bg-white/5 text-white font-bold rounded transition-all duration-300 text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                Code of Ethics
              </button>
            </div>
          </div>

          {/* Graphical Emblem representation Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-slate-800/40 p-4 border border-brand-secondary/20 flex items-center justify-center shadow-inner group">
              {/* Outer decorative ring */}
              <div className="absolute inset-2 border border-dashed border-brand-secondary/40 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-6 border border-brand-secondary/10 rounded-full" />
              
              {/* Beautiful custom vector crest representation strictly local */}
              <div className="z-10 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-brand-primary border-4 border-brand-secondary flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-105">
                  <ShieldCheck className="w-12 h-12 text-brand-secondary" />
                </div>
                
                <h3 className="mt-4 font-extrabold text-white text-lg tracking-widest uppercase font-display">
                  TGBI - TO
                </h3>
                <p className="text-[10px] text-brand-secondary font-bold tracking-widest uppercase font-mono mt-1">
                  Est. Dec 10, 1984
                </p>
                
                <div className="mt-4 flex flex-col items-center space-y-1">
                  <div className="flex justify-center space-x-1.5">
                    {['B', 'I', 'P', 'D', 'S', 'E', 'J'].map((p, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-mono bg-white/10 text-white rounded w-5 h-5 flex items-center justify-center font-bold border border-white/10 hover:text-brand-secondary hover:border-brand-secondary/40 cursor-default"
                        title="Brotherhood, Integrity, Peace, Discipline, Service, Equality, Justice"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                  <p className="text-[9px] text-gray-400 mt-1 uppercase font-mono tracking-widest">
                    The Seven Guiding Values
                  </p>
                </div>

                <div className="absolute bottom-6 bg-brand-primary border border-brand-secondary/30 px-3 py-1 rounded-sm shadow-md">
                  <p className="text-[9px] font-bold tracking-widest text-[#cf9e4b] uppercase font-mono">
                    General Headquarters • Quezon City
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Wave Section Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] text-brand-light">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,90.13,24.3,188.16,42,262.24,64,321.39,56.44 Z" fill="currentColor"></path>
        </svg>
      </div>
    </header>
  );
}
