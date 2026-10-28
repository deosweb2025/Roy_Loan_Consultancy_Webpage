import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Briefcase,
  UserCheck,
  Home,
  Award,
  ArrowRight,
  PhoneCall,
  MessageCircle,
  FileText,
  Clock,
  Sparkles,
} from 'lucide-react';
import { siteData } from '../data/siteData';

const profiles = [
  {
    id: 'salaried',
    title: 'Salaried Employees',
    icon: UserCheck,
    tagline: 'Private, MNC & Govt Staff',
    incomeMin: '₹15,000 / month',
    fundingRange: '₹1 Lakh – ₹1+ Crore',
    roi: 'From 8.40% p.a.*',
    turnaround: '24 – 48 Hours',
    criteria: [
      'Minimum 6 months in current employment or 1 year total work experience',
      'Salary credited directly to bank account via NEFT/RTGS/IMPS',
      'Valid PAN, Aadhaar, and recent 3-6 months salary slips',
      'Eligible even with minor past CIBIL issues with file restructuring',
    ],
    documents: [
      '3 Months Salary Slips',
      '6 Months Bank Account Statement',
      'PAN & Aadhaar Card',
      'Form 16 or Appointment Letter',
    ],
    highlight: 'Lowest interest rates & express digital sanction support.',
  },
  {
    id: 'business',
    title: 'Small Business & MSME',
    icon: Briefcase,
    tagline: 'Traders, Retailers, MSME & Services',
    incomeMin: '1+ Year Active Business',
    fundingRange: '₹50,000 – ₹5+ Crores',
    roi: 'Govt Subsidized / Lowest ROI',
    turnaround: '3 – 5 Days',
    criteria: [
      'Retail shop owners, wholesale traders, contractors, and local enterprises',
      'Eligible for collateral-free PMMY Mudra up to ₹10 Lakhs',
      'No formal audited balance sheet required for Mudra loans',
      'Assessment based on realistic monthly cash-flow and bank credits',
    ],
    documents: [
      'Trade License / Udyam Registration',
      '1 Year Current or Savings Bank Statement',
      'KYC (PAN & Aadhaar of Proprietor)',
      'ITR / GST Returns (if available)',
    ],
    highlight: 'Specialized assistance under PM Mudra & MSME credit guarantees.',
  },
  {
    id: 'property',
    title: 'Property & Asset Owners',
    icon: Home,
    tagline: 'Flats, Independent Houses & Plots',
    incomeMin: 'Salaried or Self-Employed',
    fundingRange: 'Up to 75% – 85% Property Value',
    roi: 'From 8.40% p.a.*',
    turnaround: '4 – 7 Days',
    criteria: [
      'Owner of residential flat, self-constructed house, or commercial shop',
      'Unlocks high liquidity while you continue using and residing in the property',
      'Significantly lower EMI and interest rate compared to personal loans',
      'Extended tenure up to 20–30 years for manageable monthly repayments',
    ],
    documents: [
      'Chain of Title Deeds & Parcha',
      'Sanctioned Building Plan Copy',
      'Latest Property Tax / Khajna Receipts',
      'Applicant Income & KYC Documents',
    ],
    highlight: 'Maximum Loan-to-Value (LTV) and seamless panel search support.',
  },
  {
    id: 'women',
    title: 'Women & Subsidized Schemes',
    icon: Award,
    tagline: 'PMAY, Cent Kalyani & Mudra',
    incomeMin: 'Flexible / Scheme Dependent',
    fundingRange: '₹50,000 – ₹50+ Lakhs',
    roi: 'Special Concession Rates',
    turnaround: '48 – 72 Hours',
    criteria: [
      'Special concessional interest rate discounts for women co-applicants',
      'Credit linked interest subsidy under Pradhan Mantri Awas Yojana (PMAY)',
      'Cent Kalyani & PNB Mahila Udyam financing for female entrepreneurs',
      'Subsidized processing fees and priority branch manager clearance',
    ],
    documents: [
      'Aadhaar & PAN Card',
      'Co-Applicant Income Details (if any)',
      'Property Agreement / Business Proof',
      'Active Bank Account Passbook',
    ],
    highlight: '0.05% to 0.25% extra interest waiver on home & business loans.',
  },
];

const comparisonData = [
  {
    feature: 'File Review & Submission',
    bankDirect: 'Submitted to front-desk clerk. Rigid computer check; minor errors cause instant rejection.',
    royConsultancy: 'File pre-audited and handed directly to Chief Managers & Senior Credit Officers.',
  },
  {
    feature: 'Interest Rate Optimization',
    bankDirect: 'Fixed standard card rates with non-negotiable retail margins.',
    royConsultancy: 'Multi-bank leverage across 15+ branches to secure maximum interest discounts.',
  },
  {
    feature: 'Processing Timeline',
    bankDirect: '3 to 5 weeks of administrative delay and repeated branch follow-ups.',
    royConsultancy: 'Priority fast-track processing with sanction letters issued in 24 to 72 hours.',
  },
  {
    feature: 'Documentation Hassle',
    bankDirect: 'Borrower must arrange and photocopy all files; multiple bank visits required.',
    royConsultancy: 'Complete file assembly + Doorstep document collection across Kolkata.',
  },
  {
    feature: 'Upfront Charges',
    bankDirect: 'File processing fees deducted regardless of approval.',
    royConsultancy: '₹0 Advance Upfront Fees • 100% Free consultation until loan sanction.',
  },
];

const EligibilityGuide = () => {
  const [activeProfileId, setActiveProfileId] = useState('salaried');
  const activeProfile = profiles.find((p) => p.id === activeProfileId) || profiles[0];
  const ProfileIcon = activeProfile.icon;

  const handleWhatsAppCheck = (title) => {
    const text = encodeURIComponent(
      `Hello Soumitra Roy! I want to check my loan eligibility for the ${title} category. Please guide me on bank options and interest rates.`
    );
    window.open(`https://wa.me/91${siteData.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="eligibility-guide" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden border-b border-slate-200/80">
      {/* Subtle Financial Grid Texture Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Decorative ambient lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================== */}
        {/* SECTION HEADER: High Authority & Clear Value Proposition        */}
        {/* ============================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-red-50 text-red-700 border border-red-200 shadow-2xs mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
            </span>
            <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
            <span>Eligibility Criteria & Direct Bank Sanction Guide</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Transparent{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-amber-600">
              Loan Eligibility
            </span>{' '}
            & Guaranteed Bank Liaison
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Wondering if you qualify? Soumitra Roy evaluates your income, tax files, and bank records before submission—eliminating rejection risk across SBI, PNB, Bank of Baroda, and leading lenders.
          </p>
        </div>

        {/* ============================================================== */}
        {/* INTERACTIVE BORROWER PROFILE SELECTOR                           */}
        {/* ============================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-8 sm:mb-10">
          {profiles.map((p) => {
            const Icon = p.icon;
            const isSelected = p.id === activeProfileId;

            return (
              <button
                key={p.id}
                onClick={() => setActiveProfileId(p.id)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20 -translate-y-1'
                    : 'bg-white text-slate-700 border-slate-200/90 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                      isSelected ? 'bg-red-600 text-white' : 'bg-red-50 text-red-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </div>

                <div>
                  <h3 className={`text-sm font-black tracking-tight ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {p.title}
                  </h3>
                  <p className={`text-[11px] mt-0.5 font-medium ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {p.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* ACTIVE PROFILE DETAIL CARD: Criteria + Documents + Fast Check  */}
        {/* ============================================================== */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10 mb-14 card-border-animated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Criteria & Metrics */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">
                  <ProfileIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200">
                    Category Criteria
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1" style={{ fontFamily: 'var(--font-heading)' }}>
                    {activeProfile.title} Eligibility
                  </h3>
                </div>
              </div>

              {/* 3 Metric Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Min Income / Age</span>
                  <span className="text-xs sm:text-sm font-black text-slate-900 block mt-0.5">{activeProfile.incomeMin}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Sanction Limit</span>
                  <span className="text-xs sm:text-sm font-black text-slate-900 block mt-0.5">{activeProfile.fundingRange}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Speed</span>
                  <span className="text-xs sm:text-sm font-black text-emerald-600 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                    {activeProfile.turnaround}
                  </span>
                </div>
              </div>

              {/* Key Qualification Rules */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
                  Key Approval Checklist
                </h4>
                <div className="space-y-2.5">
                  {activeProfile.criteria.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Required Documents + Instant Action */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/80 space-y-5">
              <div>
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">
                  Documentation Checklist
                </span>
                <h4 className="text-base font-bold text-slate-900">
                  Required Papers for Direct Sanction
                </h4>
              </div>

              <div className="space-y-2">
                {activeProfile.documents.map((doc, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800">
                    <FileText className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>

              {/* Highlight callout */}
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs leading-relaxed font-medium">
                <span className="font-bold text-amber-800">Doorstep Collection:</span> {activeProfile.highlight}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={() => handleWhatsAppCheck(activeProfile.title)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Check on WhatsApp</span>
                </button>

                <a
                  href={`tel:${siteData.contact.primaryPhone}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-red-400" />
                  <span>Call Consultant</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================== */}
        {/* SIDE-BY-SIDE COMPARISON: Bank Alone vs Roy Loan Consultancy   */}
        {/* ============================================================== */}
        <div className="mt-14">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              The Direct Difference
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Walking Into a Bank Alone vs Applying Through Soumitra Roy
            </h3>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm card-border-animated">
            <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-900 text-white text-xs font-extrabold uppercase tracking-wider py-4 px-6 border-b border-slate-800">
              <div className="md:col-span-3 text-slate-400">Key Factor</div>
              <div className="md:col-span-4 text-rose-300">Visiting Bank Alone</div>
              <div className="md:col-span-5 text-emerald-400">Through Roy Loan Consultancy</div>
            </div>

            <div className="divide-y divide-slate-100">
              {comparisonData.map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 gap-3 sm:gap-4 items-center hover:bg-slate-50/80 transition-colors">
                  <div className="md:col-span-3 text-xs sm:text-sm font-black text-slate-900">
                    {row.feature}
                  </div>
                  <div className="md:col-span-4 flex items-start gap-2 text-xs text-slate-500 leading-relaxed">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{row.bankDirect}</span>
                  </div>
                  <div className="md:col-span-5 flex items-start gap-2 text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{row.royConsultancy}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BOTTOM CALLOUT: 5-Minute Free Assessment                        */}
        {/* ============================================================== */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800 card-border-animated-dark">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center font-black text-xl shrink-0">
              R
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                Have Past Rejections or Confusing Documents?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Visit Soumitra Roy at Narendrapur Rathtala, Sonarpur for an in-person file audit. 100% Free Advisory.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${siteData.contact.primaryPhone}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-md"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call +91 94329 57459</span>
            </a>

            <a
              href="#contact"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-colors"
            >
              <span>Apply Online</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EligibilityGuide;
