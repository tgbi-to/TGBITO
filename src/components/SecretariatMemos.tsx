import { useState } from 'react';
import { ANNOUNCEMENTS, OFFICIAL_DOCUMENTS } from '../data';
import { Bell, Search, Filter, Megaphone, FileText, Download, ExternalLink, Calculator, DollarSign, RefreshCw, Layers } from 'lucide-react';

export default function SecretariatMemos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Remittance calculator states
  const [memberCount, setMemberCount] = useState<number>(10);
  const [anniversaryFund, setAnniversaryFund] = useState<number>(100);
  const [calculatedTotal, setCalculatedTotal] = useState<number>(1000);

  const filteredMemos = ANNOUNCEMENTS.filter((memo) => {
    const matchesSearch = memo.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          memo.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          memo.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || memo.category.toLowerCase() === activeCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { value: 'all', label: 'All Updates' },
    { value: 'memo', label: 'Official Memos' },
    { value: 'announcement', label: 'Announcements' },
    { value: 'system', label: 'System Directives' },
  ];

  const handleCalculate = (members: number, fee: number) => {
    setMemberCount(members);
    setAnniversaryFund(fee);
    setCalculatedTotal(members * fee);
  };

  return (
    <section id="memos" className="bg-[#f4f6f9] py-20 lg:py-28 border-b border-brand-primary/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[10px] font-mono font-bold tracking-[0.4em] text-brand-secondary uppercase mb-2">Secretariat Room</p>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-brand-primary tracking-tight">
            Secretariat Portal & Memos
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-brand-secondary mx-auto" />
          <p className="mt-4 text-sm text-slate-600 font-sans max-w-xl mx-auto leading-relaxed">
            Keep up with official general orders, leadership circulars, regional chapter remittances, and download vital legal registries.
          </p>
        </div>

        {/* Top Grid: Forms CTAs */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Apply for Membership */}
          <div className="bg-[#0b1c2d] rounded-none shadow-sm p-8 border-l-4 border-brand-secondary text-white flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div className="space-y-4">
              <span className="text-[10px] font-mono bg-brand-secondary/15 border border-brand-secondary/30 text-brand-secondary px-3 py-1 rounded-none font-bold uppercase tracking-widest inline-block">
                POI Training Program
              </span>
              <h3 className="text-2xl font-serif italic text-white text-left">
                Application for Official Membership
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed text-justify">
                Ready to undergo the required Program of Instruction (POI) training under the certified board of coordinators? Use this link to lodge your candidate registration details securely onto the General Headquarters.
              </p>
            </div>
            
            <div className="pt-6 mt-6 border-t border-white/10">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd1ykxvUvAQDeK5oMX_8cPyBtPXTPwySnPvCbAroRsYflWXyA/viewform?usp=sf_link"
                target="_blank"
                rel="noreferrer"
                id="apply-membership-link"
                className="w-full py-3 bg-brand-secondary hover:bg-brand-hover text-brand-dark transition-all duration-300 rounded-none font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-1.5 shadow-md"
              >
                Apply for Membership
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ID & Certificate Form */}
          <div className="bg-[#fdfdfb] rounded-none shadow-sm p-8 border border-brand-primary/10 flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div className="space-y-4">
              <span className="text-[10px] font-mono bg-slate-100 text-brand-primary px-3 py-1 rounded-none font-bold uppercase tracking-widest inline-block border border-brand-primary/10">
                Roster Verification
              </span>
              <h3 className="text-2xl font-serif italic text-brand-primary text-left">
                National ID & Roster Form
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed text-justify">
                Submit your official active status particulars to calculate, verify, and document your legal position onto the national ledger. Required to issue certificates, permanent QR pins, and regional ID cards.
              </p>
            </div>
            
            <div className="pt-6 mt-6 border-t border-slate-200">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSerUSzdelAZefEeRHbA8CIMpEbbNb_1VVEEGTpFf0fQCP7Euw/viewform?usp=sf_link"
                target="_blank"
                rel="noreferrer"
                id="id-certificate-link"
                className="w-full py-3 bg-brand-primary hover:bg-brand-hover text-white transition-all duration-300 rounded-none font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-1.5 shadow-md"
              >
                Request ID & Certificate
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Lower Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Memos Search Column */}
          <div className="lg:col-span-8 bg-[#fdfdfb] rounded-none shadow-sm border border-brand-primary/10 p-6 md:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b pb-4">
              <h3 className="text-lg font-serif italic text-brand-primary flex items-center gap-2">
                <Bell className="w-5.5 h-5.5 text-brand-secondary" />
                Active Directives Board
              </h3>
              
              {/* Search input */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  id="search-memo-input"
                  placeholder="Query memo title or info..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 focus:border-brand-secondary focus:bg-white rounded-none text-xs text-slate-800 focus:outline-none transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Categories filter tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-3 py-1.5 rounded-none text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    activeCategory === cat.value
                      ? 'bg-brand-primary text-white border-b-2 border-brand-secondary shadow-sm'
                      : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-brand-primary/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Memos List */}
            <div className="space-y-4">
              {filteredMemos.length > 0 ? (
                filteredMemos.map((memo) => (
                  <div
                    key={memo.id}
                    className={`p-5 rounded-none border transition-all duration-300 text-left ${
                      memo.isImportant
                        ? 'bg-[#dfb15b]/5 border-brand-secondary/50 shadow-sm'
                        : 'bg-slate-50/50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center space-x-2">
                        <span className={`text-[9px] font-mono font-black uppercase px-2 py-0.5 rounded-none ${
                          memo.category === 'Memo' ? 'bg-[#a11]/10 text-[#a11]' :
                          memo.category === 'Announcement' ? 'bg-orange-600/10 text-orange-600' :
                          'bg-sky-600/10 text-sky-600'
                        }`}>
                          {memo.category}
                        </span>
                        
                        {memo.isImportant && (
                          <span className="text-[9px] font-mono font-bold bg-amber-500 text-brand-dark px-1.5 py-0.5 rounded-none flex items-center gap-1">
                            <Megaphone className="w-2.5 h-2.5 shrink-0" />
                            IMMEDIATE ACTION
                          </span>
                        )}
                      </div>
                      
                      <span className="text-[10px] font-mono text-slate-400 font-bold">
                        {memo.date} • {memo.id}
                      </span>
                    </div>

                    <h4 className="text-base font-serif italic text-brand-primary leading-tight mb-2">
                      {memo.title}
                    </h4>
                    
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      {memo.summary}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 bg-slate-50 rounded-none border border-dashed border-slate-350">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    No matching directives found
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Remittee Estimation Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Compliance Calculator widget */}
            <div className="bg-[#fdfdfb] rounded-none shadow-sm border border-brand-primary/10 p-6 space-y-6">
              <h3 className="text-xs font-black uppercase text-brand-primary tracking-widest font-mono border-b pb-3 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-brand-secondary" />
                Regional Dues Estimator
              </h3>

              <p className="text-[11px] text-slate-500 leading-relaxed text-justify">
                Coordinators of NCR, Brunei, Qatar, or external regional chapters can calculate expected mandatory sum pool remittances dynamically below:
              </p>

              <div className="space-y-4">
                <div>
                  <label htmlFor="member-ct-input" className="block text-[9px] uppercase font-mono tracking-wider text-slate-400 font-bold mb-1">
                    Number of Chapter Members:
                  </label>
                  <input
                    id="member-ct-input"
                    type="number"
                    min="1"
                    max="1000"
                    value={memberCount}
                    onChange={(e) => handleCalculate(parseInt(e.target.value) || 0, anniversaryFund)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-brand-secondary rounded-none px-3 py-1.5 text-xs text-brand-primary focus:outline-none focus:ring-0"
                  />
                </div>

                <div>
                  <label htmlFor="fund-amt-input" className="block text-[9px] uppercase font-mono tracking-wider text-slate-400 font-bold mb-1">
                    Remittance Amount / member (₱):
                  </label>
                  <input
                    id="fund-amt-input"
                    type="number"
                    min="10"
                    step="10"
                    value={anniversaryFund}
                    onChange={(e) => handleCalculate(memberCount, parseInt(e.target.value) || 0)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-brand-secondary rounded-none px-3 py-1.5 text-xs text-brand-primary focus:outline-none focus:ring-0"
                  />
                </div>

                <div className="bg-[#0b1c2d] p-4 rounded-none text-center text-white border-b-4 border-brand-secondary">
                  <span className="text-[9px] font-mono text-brand-secondary uppercase tracking-widest font-bold">
                    Est. Remittance total
                  </span>
                  <div className="text-2xl font-black font-display text-white mt-1 flex items-center justify-center">
                    ₱ {calculatedTotal.toLocaleString('en-PH')}
                  </div>
                </div>

                <p className="text-[9px] text-[#a11] italic bg-[#a11]/5 p-2 rounded-none border border-[#a11]/10 text-center font-medium">
                  Note: Official remittances must be processed directly via Gen. Treasurer guidelines under General Headquarters authority.
                </p>
              </div>
            </div>

            {/* Official Legal Registry Document list */}
            <div id="documents" className="bg-[#0b1c2d] rounded-none shadow-md p-6 text-white space-y-6 border-t-2 border-brand-secondary">
              <h3 className="text-xs font-black uppercase text-white tracking-widest font-mono border-b border-white/10 pb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-brand-secondary" />
                Official Registries
              </h3>

              <div className="space-y-4">
                {OFFICIAL_DOCUMENTS.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-4 bg-white/5 hover:bg-white/10 rounded-none border border-white/10 transition-all duration-300 text-left space-y-2 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-mono text-brand-secondary uppercase font-black bg-brand-secondary/15 px-1.5 py-0.5 rounded-none leading-none">
                        {doc.type}
                      </span>
                      <span className="text-[8px] font-mono text-emerald-400 font-bold uppercase leading-none">
                        {doc.status}
                      </span>
                    </div>

                    <h4 className="text-xs font-serif italic leading-tight text-white">
                      {doc.title}
                    </h4>

                    <p className="text-[10px] text-slate-350 leading-normal text-justify">
                      {doc.description}
                    </p>

                    <p className="text-[8px] text-slate-400 font-mono">
                      Ref: {doc.id}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
