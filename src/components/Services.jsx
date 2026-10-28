import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserCheck,
  Home,
  Briefcase,
  Award,
  Building2,
  Car,
  Coins,
  GraduationCap,
  ArrowLeftRight,
  CheckCircle2,
  ArrowRight,
  FileText,
  Clock,
  TrendingDown,
  ShieldCheck,
  PhoneCall,
  MessageCircle,
  Sparkles,
  BadgeCheck,
} from 'lucide-react';
import { siteData } from '../data/siteData';

const iconMap = {
  UserCheck,
  Home,
  Briefcase,
  Award,
  Building2,
  Car,
  Coins,
  GraduationCap,
  ArrowLeftRight,
};

const Services = ({ onSelectLoan }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Loan Products', count: 9, icon: null },
    { id: 'personal', label: 'Salaried & Individuals', count: 4, icon: UserCheck },
    { id: 'business', label: 'Business & MSME Mudra', count: 3, icon: Briefcase },
    { id: 'property', label: 'Home & Mortgage (LAP)', count: 3, icon: Home },
  ];

  const filteredServices = siteData.services.filter((svc) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'personal')
      return ['personal-loan', 'car-loan', 'gold-loan', 'education-loan'].includes(svc.id);
    if (activeCategory === 'business')
      return ['business-loan', 'msme-mudra-loan', 'balance-transfer'].includes(svc.id);
    if (activeCategory === 'property')
      return ['home-loan', 'mortgage-loan', 'balance-transfer'].includes(svc.id);
    return true;
  });

  const handleWhatsAppInquiry = (serviceTitle) => {
    const text = encodeURIComponent(
      `Hello Soumitra Roy! I am interested in applying for a ${serviceTitle} through Roy Loan Consultancy. Please guide me on eligibility and bank interest rates.`
    );
    window.open(`https://wa.me/91${siteData.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden border-b border-slate-200/80">
      {/* Subtle Financial Grid Texture Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 -right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================== */}
        {/* SECTION HEADER: High-Impact, Authoritative & Prestigious        */}
        {/* ============================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-red-50 text-red-700 border border-red-200 shadow-2xs mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
            </span>
            <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
            <span>Institutional Financing • 9+ Bank Loan Categories</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Complete{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-amber-600">
              Financing Solutions
            </span>{' '}
            For Every Need
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            All government, nationalised, and premier private bank loans approved with minimal paperwork, doorstep file collection, and direct branch liaison across Kolkata.
          </p>
        </div>

        {/* ============================================================== */}
        {/* CATEGORY FILTER TABS: Segmented Glass Control                   */}
        {/* ============================================================== */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-slate-200/70 border border-slate-300/60 shadow-inner gap-1">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {IconComp && <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-red-400' : 'text-slate-500'}`} />}
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                      isActive ? 'bg-red-600 text-white' : 'bg-slate-300/80 text-slate-700'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* SERVICES GRID: Elevated Luxury Fintech Cards                    */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const IconComponent = iconMap[service.icon] || FileText;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  key={service.id}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 hover:border-red-500/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 card-hover-border-glow"
                >
                  {/* Top Animated Accent Strip */}
                  <div className="h-1.5 w-full bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:via-rose-500 group-hover:to-amber-500 transition-all duration-500" />

                  <div className="p-6 sm:p-7 flex-1 flex flex-col">
                    {/* Header: Icon + Category Badge */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-red-50 via-rose-50 to-amber-50 border border-red-100 text-red-600 flex items-center justify-center font-bold group-hover:from-red-600 group-hover:to-rose-600 group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-red-50 group-hover:text-red-700 group-hover:border-red-200 transition-colors shrink-0">
                        {service.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3
                      className="text-xl font-black text-slate-900 mb-2 group-hover:text-red-600 transition-colors tracking-tight"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {service.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                      {service.description}
                    </p>

                    {/* Key Highlight Pill */}
                    <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50/80 border border-amber-200/70 text-amber-900 text-xs font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{service.highlight}</span>
                    </div>

                    {/* Financial Metrics Strip: ROI & Max Tenure */}
                    <div className="mb-5 p-3 rounded-xl bg-slate-50 border border-slate-100 grid grid-cols-2 gap-2 group-hover:bg-slate-100/70 transition-colors">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          Interest Rate
                        </span>
                        <span className="text-xs sm:text-sm font-black text-red-600 flex items-center gap-1 mt-0.5">
                          <TrendingDown className="w-3.5 h-3.5 shrink-0" />
                          {service.interestRate}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          Maximum Tenure
                        </span>
                        <span className="text-xs sm:text-sm font-black text-slate-800 flex items-center gap-1 mt-0.5">
                          <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          {service.maxTenure}
                        </span>
                      </div>
                    </div>

                    {/* Features Checklist */}
                    <div className="space-y-2 mb-5">
                      {service.keyFeatures.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Documents Required */}
                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                        Key Documents Needed:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.documents.map((doc, dIdx) => (
                          <span
                            key={dIdx}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/80"
                          >
                            {doc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer: Two-way Action */}
                  <div className="p-4 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between gap-2.5">
                    <a
                      href="#contact"
                      onClick={() => onSelectLoan && onSelectLoan(service.title)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-900 hover:bg-red-600 text-white transition-colors duration-200 shadow-2xs"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>

                    <button
                      type="button"
                      onClick={() => handleWhatsAppInquiry(service.title)}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-200 shadow-2xs"
                      title={`Ask Soumitra Roy about ${service.title} on WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}

            {/* Companion Fill Card: Automatically completes any row if a filter has remainder */}
            {filteredServices.length % 3 !== 0 && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={`group relative bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 text-white rounded-2xl sm:rounded-3xl border border-red-500/30 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 sm:p-7 card-border-animated-dark ${
                  3 - (filteredServices.length % 3) === 2 ? 'lg:col-span-2' : 'lg:col-span-1'
                } md:col-span-2`}
              >
                {/* Decorative Ambient Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center font-bold">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                      Personalized Advisory Desk
                    </span>
                  </div>

                  <h3
                    className="text-xl sm:text-2xl font-black text-white mb-2 tracking-tight"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Looking for a Custom Scheme or Low CIBIL Guidance?
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    Can't find the exact loan structure you require? Soumitra Roy works directly with senior chief managers across 15+ partner banks to restructure files, club family incomes, and secure approvals.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Doorstep Document Verification</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>100% Free Consultation Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Direct Bank Branch Liaison</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Lowest Processing Charge Guidance</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                  <a
                    href={`tel:${siteData.contact.primaryPhone}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-red-600 hover:bg-red-700 text-white transition-colors duration-200 shadow-md"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Call Soumitra Roy</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleWhatsAppInquiry('Custom Loan Requirement')}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-200 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Advisory</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ============================================================== */}
        {/* BOTTOM ASSURANCE BANNER: Custom Files & CIBIL Advice            */}
        {/* ============================================================== */}
        <div className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 text-white shadow-xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 card-border-animated-dark">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-600/30 text-red-400 border border-red-500/40 flex items-center justify-center shrink-0">
              <BadgeCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                Have an Unconventional Income File, Shop Business, or Past CIBIL Query?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                Soumitra Roy specializes in finding viable loan paths even with non-standard ITRs or cash-flow business structures across 15+ partner banks.
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
              className="flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-colors"
            >
              <span>Apply Online</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
