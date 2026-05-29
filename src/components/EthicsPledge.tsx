import { useState, useRef, FormEvent } from 'react';
import { ETHICS_RULES } from '../data';
import { ShieldCheck, FileSignature, Award, Printer, CheckCircle, ChevronRight, ZoomIn } from 'lucide-react';

export default function EthicsPledge() {
  const [name, setName] = useState('');
  const [chapter, setChapter] = useState('');
  const [role, setRole] = useState('Probationary Member');
  const [isSigned, setIsSigned] = useState(false);
  const [sigDate, setSigDate] = useState('');

  const displayCertRef = useRef<HTMLDivElement>(null);

  const handleSign = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !chapter.trim()) return;
    
    // Set standard local formatted date in Filipino/English
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    setSigDate(formattedDate);
    setIsSigned(true);
  };

  const handlePrint = () => {
    if (displayCertRef.current) {
      window.print();
    }
  };

  return (
    <section id="ethics" className="bg-[#fdfdfb] py-20 lg:py-28 border-b border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[10px] font-mono font-bold tracking-[0.4em] text-brand-secondary uppercase mb-2">Code of Conduct</p>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-brand-primary tracking-tight">
            Organization Code of Ethics
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-brand-secondary mx-auto" />
          <p className="mt-4 text-sm text-slate-600 font-sans max-w-xl mx-auto leading-relaxed">
            As an officer or member of THE GUARDIANS BROTHERHOOD, INC. - THE ORIGINAL, our fundamental duty is to serve the Association wholeheartedly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Ethics Duties Listings Column */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-serif italic text-brand-primary flex items-center gap-2 mb-6 border-b pb-2">
              <ShieldCheck className="w-5.5 h-5.5 text-brand-secondary" />
              Duties inherent of our Membership Action
            </h3>
            
            <div className="space-y-3.5 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-brand-primary/10">
              {ETHICS_RULES.map((rule) => (
                <div
                  key={rule.id}
                  className="flex items-start gap-4 p-4 rounded-none border border-brand-primary/10 bg-[#fdfdfb]/80 hover:bg-white hover:border-[#dfb15b] transition-all duration-300"
                >
                  <span className="w-7 h-7 rounded-none bg-brand-primary/5 text-xs text-brand-primary border border-brand-primary/15 font-bold flex items-center justify-center shrink-0">
                    {rule.id}
                  </span>
                  
                  <p className="text-xs text-slate-700 leading-relaxed text-justify font-sans">
                    {rule.duty}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Signature Terminal Column */}
          <div className="lg:col-span-5">
            <div className="bg-brand-primary rounded-none shadow-md p-6 md:p-8 text-white h-full flex flex-col justify-between border-t-4 border-brand-secondary relative overflow-hidden">
              {/* Corner Design Background Emblem */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/[0.03] rounded-full filter blur-xl pointer-events-none" />
              
              {!isSigned ? (
                // Form entry terminal
                <div className="z-10 space-y-6">
                  <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
                    <FileSignature className="w-8 h-8 text-brand-secondary" />
                    <div>
                      <h4 className="font-serif italic text-lg text-white">
                        Ethics Affirmation Terminal
                      </h4>
                      <p className="text-[9px] text-brand-secondary uppercase font-mono tracking-widest leading-none">
                        Digital Pledge Terminal
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    By submitting this oath, you affirm that you stand for integrity. Fill in your details below to preview your generated Pledge of Fidelity certificate.
                  </p>

                  <form onSubmit={handleSign} className="space-y-4">
                    <div>
                      <label htmlFor="pledge-name" className="block text-[10px] uppercase font-mono tracking-wider text-slate-300 font-bold mb-1">
                        Full Name / Handle
                      </label>
                      <input
                        id="pledge-name"
                        type="text"
                        required
                        placeholder="e.g. JUAN DELA CRUZ"
                        value={name}
                        onChange={(e) => setName(e.target.value.toUpperCase())}
                        className="w-full bg-slate-800/60 border border-white/15 focus:border-brand-secondary rounded-none px-3 py-2 text-sm text-white focus:outline-none transition-all placeholder:text-gray-500 uppercase font-bold"
                      />
                    </div>

                    <div>
                      <label htmlFor="pledge-chapter" className="block text-[10px] uppercase font-mono tracking-wider text-slate-300 font-bold mb-1">
                        Regional Chapter / Location
                      </label>
                      <input
                        id="pledge-chapter"
                        type="text"
                        required
                        placeholder="e.g. NCR Regional Chapter / Cebu"
                        value={chapter}
                        onChange={(e) => setChapter(e.target.value)}
                        className="w-full bg-slate-800/60 border border-white/15 focus:border-brand-secondary rounded-none px-3 py-2 text-sm text-white focus:outline-none transition-all placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="pledge-role" className="block text-[10px] uppercase font-mono tracking-wider text-slate-300 font-bold mb-1">
                        Affinity status
                      </label>
                      <select
                        id="pledge-role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full bg-slate-800 border border-white/15 focus:border-brand-secondary rounded-none px-3 py-1.5 text-sm text-white focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="Probationary Member">Probationary Member</option>
                        <option value="Official Member">Official Certified Member</option>
                        <option value="Regional Officer">Regional Chapter Officer</option>
                        <option value="National Council Officer">National Council Officer</option>
                        <option value="Brotherhood Advocate">Brotherhood Supporter / Friend</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      id="submit-pledge-btn"
                      className="w-full py-3 bg-brand-secondary hover:bg-brand-hover text-brand-dark transition-all duration-300 rounded-none font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-1.5 shadow-md cursor-pointer mt-6"
                    >
                      Sign & Generate Custom Oath
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              ) : (
                // Certificate displays and prints
                <div className="z-10 flex flex-col justify-between h-full space-y-6">
                  <div className="bg-[#fdfdfb] text-slate-800 rounded-none p-5 border-4 border-double border-brand-secondary relative shadow-2xl overflow-hidden print:shadow-none print:border-brand-primary" ref={displayCertRef}>
                    {/* Inner borders */}
                    <div className="absolute inset-1 border border-brand-secondary/30 pointer-events-none" />
                    
                    <div className="text-center space-y-3 relative z-10">
                      {/* Gold Badge icon */}
                      <Award className="w-10 h-10 text-[#cf9e4b] mx-auto" />
                      
                      <div className="space-y-0.5">
                        <h4 className="text-[10px] tracking-widest font-black uppercase text-brand-primary font-mono leading-none">
                          The Guardians Brotherhood, Inc.
                        </h4>
                        <p className="text-[7px] text-[#a11] font-mono tracking-widest font-medium uppercase leading-none">
                          THE ORIGINAL • SEC NO. 123899
                        </p>
                      </div>

                      <div className="w-16 h-[1px] bg-slate-300 mx-auto" />

                      <h5 className="text-[10px] font-serif italic font-bold text-slate-500">
                        Oath of Fidelity & Accord
                      </h5>

                      <div className="space-y-2">
                        <p className="text-[7px] text-slate-500 uppercase font-mono tracking-tight leading-none">
                          This certifies that the officer/member
                        </p>
                        <h3 className="text-sm font-bold text-brand-primary tracking-wide font-serif border-b border-dashed border-slate-300 inline-block px-4 pb-0.5 uppercase">
                          {name}
                        </h3>
                        <p className="text-[8px] font-bold text-brand-hover uppercase font-mono tracking-widest leading-none">
                          {role} • {chapter}
                        </p>
                      </div>

                      <p className="text-[7.5px] font-serif italic text-slate-600 leading-relaxed text-center px-1 font-sans">
                        "I solemnly pledge to honor the fundamental duties, adhere wholeheartedly to the seven guiding values of brotherhood, discipline, equality, service, peace, justice, integrity, and continually defend the legal status under General Headquarters leadership."
                      </p>

                      <div className="pt-2 grid grid-cols-2 gap-4 items-end">
                        {/* Signature of User */}
                        <div className="text-center font-mono text-[7px]">
                          <p className="font-bold border-b border-slate-300 inline-block px-3 max-w-[90px] truncate uppercase font-sans text-[8px] italic pr-4 pl-4 text-slate-500">
                            {name}
                          </p>
                          <p className="text-slate-400 font-medium tracking-wide mt-0.5 uppercase">
                            Affirmed Signature
                          </p>
                        </div>
                        {/* Signature of Chairman */}
                        <div className="text-center font-mono text-[7px]">
                          <p className="font-bold border-b border-teal-800 text-[#0d233a] italic inline-block px-3 font-sans text-[7.5px]">
                            UPMF CARLOMAGNO
                          </p>
                          <p className="text-slate-400 font-medium tracking-wide mt-0.5 uppercase">
                            Int'l Chairman • Incorporator
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 flex items-center justify-between text-[6.5px] text-slate-400 font-mono border-t border-slate-100 uppercase">
                        <span>Pledge Date: {sigDate}</span>
                        <span>Fidelity ID: #TGBI-{Math.floor(100000 + Math.random() * 900000)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="space-y-3 pt-2">
                    <div className="flex gap-2">
                      <button
                        onClick={handlePrint}
                        className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-brand-secondary border border-brand-secondary/35 rounded-none text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 focus:outline-none cursor-pointer"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        Print/Save Oath.pdf
                      </button>
                      
                      <button
                        onClick={() => {
                          setIsSigned(false);
                          setName('');
                          setChapter('');
                        }}
                        className="py-2.5 px-4 bg-white/15 hover:bg-white/20 text-white rounded-none text-xs font-medium uppercase focus:outline-none cursor-pointer"
                      >
                        Reset Oath
                      </button>
                    </div>
                    
                    <div className="bg-[#cf9e4b]/15 p-3 rounded-none border border-brand-secondary/30 text-center flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-secondary shrink-0" />
                      <p className="text-[10px] text-slate-200 text-left leading-normal font-sans">
                        Pledge generated successfully! Share this oath with your regional inspector or chapter secretary.
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
