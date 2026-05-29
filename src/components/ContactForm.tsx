import { useState, FormEvent } from 'react';
import { Mail, MapPin, Send, HelpCircle, CheckCircle, Info } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    chapter: '',
    message: '',
  });
  const [isLoded, setIsLoded] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    // Simulate secure dispatch with ticket reference
    const generatedTicket = `TGBI-TKT-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(generatedTicket);
    setIsLoded(true);
    setFormData({ name: '', email: '', chapter: '', message: '' });
  };

  return (
    <section id="contact" className="bg-[#fdfdfb] py-20 lg:py-28 border-b border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[10px] font-mono font-bold tracking-[0.4em] text-brand-secondary uppercase mb-2">Correspondence</p>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-brand-primary tracking-tight">
            Contact Administrative Offices
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-brand-secondary mx-auto" />
          <p className="mt-4 text-sm text-slate-600 font-sans max-w-xl mx-auto leading-relaxed">
            Reach out directly to our General Headquarters in Quezon City for legal registry inquiries, chapter charter applications, and credentials verification.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Quick Contact Info Visual Panel */}
          <div className="lg:col-span-5 bg-brand-primary rounded-none shadow-sm p-8 text-white flex flex-col justify-between border-b-4 border-brand-secondary">
            <div className="space-y-8 text-left">
              <div>
                <span className="text-[10px] bg-white/10 text-brand-secondary px-3.5 py-1.5 rounded-none font-bold uppercase tracking-widest font-mono border border-white/10">
                  Primary Location
                </span>
                <h3 className="text-2xl font-serif italic mt-3 leading-tight text-left">
                  General Headquarters Address
                </h3>
              </div>

              <div className="space-y-6">
                {/* Physical HQ Address link representation */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-none bg-white/5 border border-white/15 flex items-center justify-center text-brand-secondary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#dfb15b] font-mono">
                      Physical Secretariat Office
                    </h4>
                    <p className="text-xs text-white leading-relaxed mt-1 font-sans">
                      43-A Pangasinan St., Bago Bantay,<br />
                      Quezon City, 1105 Philippines
                    </p>
                  </div>
                </div>

                {/* Email Direct mailto link representation */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-none bg-white/5 border border-white/15 flex items-center justify-center text-brand-secondary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#dfb15b] font-mono">
                      Electronic Mail Desk
                    </h4>
                    <a
                      href="mailto:jseletaria1542@yahoo.com"
                      className="text-xs text-[#dfb15b] hover:text-[#cf9e4b] font-semibold mt-1 block break-all font-mono"
                    >
                      jseletaria1542@yahoo.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 text-slate-400 text-[10px] space-y-1.5 leading-relaxed font-sans text-left">
              <p>
                <strong>Working Hours:</strong> Monday - Saturday (8:00 AM - 5:00 PM UTC+8)
              </p>
              <p className="text-justify">
                All certifications are cleared under General Secretariat supervision. For regional affairs, please specify your local inspector endorsement.
              </p>
            </div>
          </div>

          {/* Contact Dispatch Form Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-[#fdfdfb] border border-brand-primary/10 rounded-none p-6 md:p-8 shadow-sm h-full flex flex-col justify-between">
              
              {!isLoded ? (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div className="flex items-center space-x-2 border-b pb-3 mb-4 border-brand-primary/10">
                    <HelpCircle className="w-5 h-5 text-brand-secondary animate-pulse" />
                    <h3 className="font-serif italic text-base text-brand-primary">
                      Direct Administrative Correspondence
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-[10px] uppercase font-mono tracking-wider text-slate-500 font-bold mb-1">
                        Full Active Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. JUAN DELA CRUZ"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-brand-primary/20 focus:border-brand-secondary rounded-none px-3 py-2 text-xs text-brand-primary focus:outline-none focus:ring-0 transition-all placeholder:text-gray-400 uppercase font-semibold"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-[10px] uppercase font-mono tracking-wider text-slate-500 font-bold mb-1">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="e.g. juan@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-brand-primary/20 focus:border-brand-secondary rounded-none px-3 py-2 text-xs text-brand-primary focus:outline-none focus:ring-0 transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-chapter" className="block text-[10px] uppercase font-mono tracking-wider text-slate-500 font-bold mb-1">
                      Chapter Endorsement / Status (Optional)
                    </label>
                    <input
                      id="contact-chapter"
                      type="text"
                      placeholder="e.g. Saudi Arabia Chapter or NCR Region 1"
                      value={formData.chapter}
                      onChange={(e) => setFormData({ ...formData, chapter: e.target.value })}
                      className="w-full bg-white border border-brand-primary/20 focus:border-brand-secondary rounded-none px-3 py-2 text-xs text-brand-primary focus:outline-none focus:ring-0 transition-all placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[10px] uppercase font-mono tracking-wider text-slate-500 font-bold mb-1">
                      Inquiry / Correspondence message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      placeholder="Clearly describe your credentials verify, SEC lookup, constitutional amendment request, or registration queries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-brand-primary/20 focus:border-brand-secondary rounded-none px-3 py-2 text-xs text-brand-primary focus:outline-none focus:ring-0 transition-all placeholder:text-gray-400 resize-none text-justify"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-dispatch-btn"
                    className="py-3 px-6 bg-brand-primary hover:bg-brand-hover hover:text-brand-dark font-bold tracking-widest text-xs uppercase rounded-none transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm cursor-pointer inline-flex"
                  >
                    Dispatch Correspondence
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <div className="space-y-6 text-center my-auto py-10">
                  <div className="w-16 h-16 rounded-none bg-emerald-50 flex items-center justify-center mx-auto text-emerald-650 border border-emerald-300">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-serif italic text-brand-primary">
                      Correspondence Lodged!
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto">
                      Thank you. Your organizational ticket has been queued successfully. The secretariat office will verify your credentials and follow up via the provided contact email.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-brand-primary/10 p-4 rounded-none max-w-sm mx-auto flex items-center justify-center gap-2">
                    <Info className="w-4 h-4 text-brand-secondary shrink-0" />
                    <p className="text-xs font-mono font-black text-brand-primary">
                      TICKET ID: {ticketId}
                    </p>
                  </div>

                  <button
                    onClick={() => setIsLoded(false)}
                    className="text-xs font-bold uppercase tracking-widest text-white hover:text-brand-dark bg-brand-primary hover:bg-brand-hover px-5 py-2.5 rounded-none shadow-sm transition-all cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
