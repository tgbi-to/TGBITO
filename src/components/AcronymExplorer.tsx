import { useState } from 'react';
import { ACRONYM_DATA } from '../data';
import { Sparkles, Info, BookOpen } from 'lucide-react';

export default function AcronymExplorer() {
  const [selectedLetter, setSelectedLetter] = useState<string>('G');

  const currentItem = ACRONYM_DATA.find((item) => item.letter === selectedLetter) || ACRONYM_DATA[0];

  return (
    <section id="acronym" className="bg-[#fdfdfb] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[10px] font-mono font-bold tracking-[0.4em] text-brand-secondary uppercase mb-2">The Covenant</p>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-brand-primary tracking-tight">
            The Meaning of G-U-A-R-D-I-A-N-S
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-brand-secondary mx-auto" />
          <p className="mt-4 text-sm text-slate-600 font-sans max-w-xl mx-auto leading-relaxed">
            Click or tap the letters below to explore the comprehensive moral and civic values underlying each letter of our historic acronym.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive Letter Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="bg-brand-light p-6 rounded-none border border-brand-primary/10">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono mb-4 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-brand-secondary" />
                Select a letter to explore definition
              </h3>
              
              <div className="grid grid-cols-3 sm:grid-cols-9 gap-3">
                {ACRONYM_DATA.map((item, index) => {
                  const isSelected = item.letter === selectedLetter;
                  return (
                    <button
                      key={index}
                      id={`acronym-letter-${index}`}
                      onClick={() => setSelectedLetter(item.letter)}
                      className={`h-16 rounded-none flex flex-col items-center justify-center font-display text-2xl font-black transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'bg-brand-primary text-white scale-105 border-2 border-brand-secondary'
                          : 'bg-[#fdfdfb] text-brand-primary hover:bg-[#f4f6f9] border border-brand-primary/10'
                      }`}
                    >
                      {item.letter}
                      <span className={`text-[9px] font-mono font-bold ${isSelected ? 'text-brand-secondary' : 'text-slate-400'}`}>
                        {item.filipino.substring(0, 4)}..
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Complete Filipino Statement Summary translation box */}
            <div className="bg-[#0b1c2d] text-white p-6 rounded-none border-l-4 border-brand-secondary">
              <div className="flex items-start space-x-3">
                <BookOpen className="w-5 h-5 text-brand-secondary shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-brand-secondary uppercase font-mono mb-2">
                    Official Translation statement in Filipino:
                  </h4>
                  <p className="text-sm font-serif font-medium tracking-wide italic leading-relaxed">
                    "Mga Maginoo, Nagkakaisang Katuwang Ng Lahing Filipino, Magigiting at Matapat na Tagapagtanggol ng Bansa at Lipunan"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Details Display Panel Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#fcfcfa] border-2 border-brand-primary/10 rounded-none p-8 h-full flex flex-col justify-between relative overflow-hidden shadow-sm">
              {/* Giant backdrop letter */}
              <div className="absolute -bottom-8 -right-8 text-[180px] font-black font-display text-brand-primary/5 select-none leading-none">
                {currentItem.letter}
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  {/* Active letter icon badge */}
                  <span className="text-4xl font-black font-display text-white bg-brand-primary px-5 py-3 rounded-none border border-brand-secondary">
                    {currentItem.letter}
                  </span>
                  
                  <div className="inline-flex items-center space-x-1.5 bg-brand-primary text-white border border-brand-secondary/20 px-3 py-1 rounded-none text-[10px] font-bold uppercase tracking-widest font-mono">
                    <Sparkles className="w-3 h-3 text-brand-secondary" />
                    <span>Uphold Values</span>
                  </div>
                </div>

                {/* Meanings */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-400 block mb-1">
                      English Meaning
                    </span>
                    <h3 className="text-2xl font-black text-brand-primary font-display tracking-tight uppercase">
                      {currentItem.english}
                    </h3>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-400 block mb-1">
                      Filipino Translation
                    </span>
                    <h3 className="text-lg font-serif italic text-brand-hover">
                      {currentItem.filipino}
                    </h3>
                  </div>

                  <hr className="border-slate-200" />

                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-400 block mb-1">
                      Core Commitment
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      {currentItem.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold font-mono text-slate-400 uppercase tracking-widest">
                <span>The Original Creed</span>
                <span className="text-brand-primary">TGBI - TO</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
