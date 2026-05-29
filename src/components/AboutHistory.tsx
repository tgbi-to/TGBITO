import { History, Shield, Footprints, Medal, CalendarSync, Heart, Sparkles } from 'lucide-react';

export default function AboutHistory() {
  const timeline = [
    {
      year: 'Early 1980s',
      title: 'Mindanao Jungle Origins',
      tag: 'Diablo Squad',
      desc: 'Formed deep in the rugged environments of Mindanao as a unified group of brave, dedicated men bound together by extreme survival conditions, mutual protection, and deep trust under national defense scenarios.',
      icon: Footprints,
    },
    {
      year: 'Mid 1980s',
      title: 'Civic Transformation',
      tag: 'Diablo Squad Crime Buster',
      desc: 'Evolved into Diablo Squad Crime Buster, redirecting defensive energies and focus toward active public safety, supporting community services, peace maintenance, and social justice.',
      icon: Shield,
    },
    {
      year: 'Dec 10, 1984',
      title: 'Inc. Legal Charter',
      tag: 'SEC Registration 123899',
      desc: 'Officially registered with SEC, creating a permanent, lasting institutional legacy of structural brotherhood, legal orderliness, and code of discipline under SEC Registration No. 123899.',
      icon: Medal,
    },
    {
      year: 'Present Day',
      title: 'The Original Lineage Reform',
      tag: 'UPMF Carlomagno',
      desc: 'Active global chapters under the direct and guiding leadership of original Incorporator and International Chairman UPMF CARLOMAGNO, upholding pure principles and legal transparency.',
      icon: CalendarSync,
    },
  ];

  return (
    <section id="history" className="bg-brand-light py-20 lg:py-28 border-y border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[10px] font-mono font-bold tracking-[0.4em] text-brand-secondary uppercase mb-2">Our Origins</p>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-brand-primary tracking-tight">
            Our Historical Legacy
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-brand-secondary mx-auto" />
          <p className="mt-4 text-sm text-slate-600 font-sans max-w-xl mx-auto leading-relaxed">
            From Mindanao jungles to international chapters, explore the rich history that binds our brotherhood together.
          </p>
        </div>

        {/* Welcome Statement Banner */}
        <div className="bg-[#fdfdfb] border border-brand-primary/10 p-6 md:p-10 mb-16 relative overflow-hidden shadow-sm transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/5 rounded-full filter blur-xl" />
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif italic text-brand-primary flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-brand-secondary" />
                Welcome to the Official Portal
              </h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                We, <strong>MEN AND WOMEN OF GOODWILL</strong>, with pristine stand in our respective local and global communities, under the help of Almighty God, have aligned together to promote and defend our social, intellectual, moral, socioeconomic, and general well-being.
              </p>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                We protect and promote our collective rights, strengthen professional and friendly bonds, while enhancing the ultimate spirit of unity, clean brotherhood, justice, righteousness, and self-motivated community sufficiency.
              </p>
            </div>
            
            <div className="md:col-span-4 bg-[#0d233a] p-6 rounded border border-brand-secondary/20 text-center text-white space-y-3">
              <Heart className="w-10 h-10 text-brand-secondary mx-auto animate-pulse" />
              <h4 className="font-serif italic text-lg text-white">Our Ultimate Motto</h4>
              <p className="text-[10px] text-brand-secondary tracking-widest uppercase font-mono font-bold">
                "We Serve with Pride and Honor"
              </p>
              <p className="text-[10px] text-slate-400 italic">
                Upholding the original covenants written on December 10, 1984.
              </p>
            </div>
            
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="relative">
          {/* Timeline Center Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-1 bg-brand-primary/10 -translate-x-1/2" />
          
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon Indicator Dot */}
                  <div className="absolute left-8 md:left-1/2 top-4 -translate-y-1/2 -translate-x-1/2 z-15">
                    <div className="w-12 h-12 rounded-full bg-brand-primary border-4 border-brand-secondary shadow-lg flex items-center justify-center transition-transform hover:scale-110">
                      <Icon className="w-5 h-5 text-brand-secondary" />
                    </div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Timeline Card */}
                  <div className="w-full md:w-[45%] pl-16 md:pl-0">
                    <div className="bg-[#fdfdfb] p-6 rounded-none border border-brand-primary/10 shadow-[4px_4px_0px_0px_rgba(13,35,58,0.15)] hover:border-brand-secondary transition-all duration-300 space-y-3 text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-brand-secondary font-mono tracking-widest uppercase bg-brand-primary/5 px-2.5 py-1 rounded">
                          {item.year}
                        </span>
                        <span className="text-[9px] text-gray-400 font-mono font-medium tracking-wide">
                          {item.tag}
                        </span>
                      </div>
                      
                      <h4 className="text-base font-bold text-brand-primary font-serif">
                        {item.title}
                      </h4>
                      
                      <p className="text-xs text-slate-600 leading-relaxed text-justify">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chairman Feature Message */}
        <div className="mt-20 bg-[#0d233a] rounded-none p-8 border border-brand-secondary/30 shadow-md text-white">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-brand-secondary/15 flex items-center justify-center border border-brand-secondary shrink-0">
              <History className="w-8 h-8 text-brand-secondary" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-base font-serif italic text-brand-secondary tracking-wide">
                Directives of UPMF CARLOMAGNO • International Chairman
              </h4>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed text-left font-serif italic">
                "Upholding the original values of the Diablo Squad requires extreme diligence. We must continuously keep our rosters clean, respect public laws, support the local authorities, and provide selflessness in our respective offices. Let no member take advantage of their position. Peace and brotherhood will always guide us to prosperity."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
