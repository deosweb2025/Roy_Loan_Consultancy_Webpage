import React from 'react';
import {
  UserCheck,
  Scale,
  FileCheck2,
  Banknote,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Zap,
  PhoneCall,
  BadgeCheck,
} from 'lucide-react';
import { siteData } from '../data/siteData';

const LoanProcess = () => {
  const processSteps = [
    {
      step: '01',
      icon: UserCheck,
      iconBg: 'bg-red-50',
      iconColor: 'text-red-600',
      iconBorder: 'border-red-100',
      badgeBg: 'bg-red-50',
      badgeColor: 'text-red-700 border-red-200',
      gradient: 'from-red-600 via-rose-500 to-red-500',
      timeline: 'Step 1 • Same-Day Assessment',
      title: 'Free Eligibility & File Diagnosis',
      desc: 'Call or visit Soumitra Roy at our Narendrapur Rathtala office. We analyze your income papers, existing liabilities, and exact funding requirement.',
      highlights: [
        '100% Free consultation & pre-screening',
        'Zero negative impact on CIBIL score',
      ],
      guarantee: 'Zero Advance Charges',
    },
    {
      step: '02',
      icon: Scale,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
      iconBorder: 'border-amber-100',
      badgeBg: 'bg-amber-50',
      badgeColor: 'text-amber-800 border-amber-200',
      gradient: 'from-amber-500 via-orange-500 to-amber-600',
      timeline: 'Step 2 • 24-Hour Comparison',
      title: 'Bank Matching & Rate Comparison',
      desc: 'We compare current interest rates across SBI, PNB, Union Bank, Bank of Baroda, and top private banks to pick the lowest EMI option for your profile.',
      highlights: [
        'Compare 15+ PSU & Private banks',
        'Lowest interest rate & processing fees',
      ],
      guarantee: 'Maximum Loan Amount',
    },
    {
      step: '03',
      icon: FileCheck2,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      iconBorder: 'border-blue-100',
      badgeBg: 'bg-blue-50',
      badgeColor: 'text-blue-700 border-blue-200',
      gradient: 'from-blue-600 via-indigo-500 to-blue-500',
      timeline: 'Step 3 • Doorstep Processing',
      title: 'Hassle-Free File Preparation',
      desc: 'We assemble your complete documentation file, resolve technical/ITR discrepancies, and submit directly to the chief bank manager.',
      highlights: [
        'Doorstep document pickup in Kolkata',
        'Direct branch manager file submission',
      ],
      guarantee: '100% Paperwork Support',
    },
    {
      step: '04',
      icon: Banknote,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      iconBorder: 'border-emerald-100',
      badgeBg: 'bg-emerald-50',
      badgeColor: 'text-emerald-700 border-emerald-200',
      gradient: 'from-emerald-600 via-teal-500 to-emerald-500',
      timeline: 'Step 4 • Fast Sanction & Credit',
      title: 'Sanction & Direct Disbursement',
      desc: 'Prompt legal/valuation clearances and formal sanction letter issuance, with loan funds transferred directly into your personal bank account.',
      highlights: [
        'Official bank sanction letter issued',
        'Funds credited directly to your bank',
      ],
      guarantee: 'Guaranteed Bank Disbursal',
    },
  ];

  return (
    <section id="loan-process" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50/70 to-white relative overflow-hidden border-b border-slate-200/80">
      {/* Subtle Financial Grid Texture Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Decorative Ambient Halos */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================== */}
        {/* SECTION HEADER: High-Impact & Authoritative                    */}
        {/* ============================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-red-50 text-red-700 border border-red-200 shadow-2xs mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
            </span>
            <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
            <span>Simple 4-Step Approval Journey • Zero Red Tape</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            How Roy Loan Consultancy Gets Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-amber-600">
              Loan Sanctioned
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            We eliminate banking red tape, long branch queues, and paperwork confusion so you secure the highest sanction limit with the lowest interest rate.
          </p>
        </div>

        {/* ============================================================== */}
        {/* 4-STEP PROCESS ROADMAP WITH CONNECTING PIPELINE                */}
        {/* ============================================================== */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-red-500 via-amber-500 via-blue-500 to-emerald-500 opacity-30 pointer-events-none z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative z-10">
            {processSteps.map((step, idx) => {
              const IconComp = step.icon;

              return (
                <div
                  key={idx}
                  className={`group relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 hover:border-red-500/60 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-2 ${
                    idx === 0 ? 'card-border-animated' : 'card-hover-border-glow'
                  }`}
                >
                  {/* Top Animated Accent Strip */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${step.gradient}`} />

                  <div className="p-6 sm:p-7 flex-1 flex flex-col">
                    {/* Header: Icon Container + Phase Pill */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div
                        className={`w-14 h-14 rounded-2xl ${step.iconBg} ${step.iconColor} border ${step.iconBorder} flex items-center justify-center font-bold shadow-sm group-hover:scale-110 transition-transform duration-300 shrink-0`}
                      >
                        <IconComp className="w-7 h-7" />
                      </div>

                      <span
                        className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${step.badgeBg} ${step.badgeColor} font-mono shrink-0 shadow-2xs`}
                      >
                        PHASE {step.step}
                      </span>
                    </div>

                    {/* Timeline Turnaround Badge */}
                    <div className="mb-2.5 inline-flex items-center gap-1.5 text-xs font-bold text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{step.timeline}</span>
                    </div>

                    {/* Step Title & Description */}
                    <h3
                      className="text-lg font-black text-slate-900 mb-2 group-hover:text-red-600 transition-colors tracking-tight"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                      {step.desc}
                    </p>

                    {/* Step Micro-Deliverables */}
                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      {step.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Guarantee Stamp */}
                  <div className="px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-extrabold uppercase tracking-wider">
                      <BadgeCheck className="w-4 h-4 text-emerald-600" />
                      <span>{step.guarantee}</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* SPEED ADVANTAGE & FAST-TRACK ASSURANCE BANNER                  */}
        {/* ============================================================== */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 text-white shadow-xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-13 h-13 rounded-2xl bg-red-600/30 text-red-400 border border-red-500/40 flex items-center justify-center shrink-0 shadow-lg">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-red-600 text-white font-mono">
                  FAST-TRACK DISBURSAL
                </span>
                <span className="text-xs font-semibold text-slate-300">Sanctions in 2 to 7 Working Days*</span>
              </div>
              <h4 className="text-base sm:text-lg font-black text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                Avoid 30-Day Bank Waiting Queues & Frustrating Paperwork Delays
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                Soumitra Roy liaises directly with bank branch managers to fast-track your file, resolve queries, and secure your sanction letter without you running from counter to counter.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full lg:w-auto">
            <a
              href={`tel:${siteData.contact.primaryPhone}`}
              className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-red-900/40 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Soumitra Roy</span>
            </a>

            <a
              href="#contact"
              className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-colors"
            >
              <span>Start Free Pre-Check</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LoanProcess;
