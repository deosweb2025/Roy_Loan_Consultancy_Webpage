import React from 'react';
import {
  Award,
  MapPin,
  FileCheck2,
  Clock,
  ArrowRight,
  Landmark,
  PhoneCall,
  MessageCircle,
} from 'lucide-react';
import { siteData } from '../data/siteData';

import consultationImg from '../assets/images/edited/client_consultation.jpg';
import signboardGoldImg from '../assets/images/edited/signboard_gold_black.jpg';
import infrastructureImg from '../assets/images/edited/office_infrastructure.jpg';

const About = ({ onOpenImageModal }) => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden border-b border-slate-200/80">
      {/* Subtle Financial Grid Texture Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Decorative ambient lighting */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================== */}
        {/* SECTION HEADER: Authoritative, Modern, High-Impact             */}
        {/* ============================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-red-50 text-red-700 border border-red-200 shadow-2xs mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
            </span>
            <Award className="w-3.5 h-3.5 text-red-600" />
            <span>Official Financial Advisory • Narendrapur, Kolkata</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Personalized{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-amber-600">
              Banking Advisory
            </span>{' '}
            Led by Soumitra Roy
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Operating directly from N. S. Bose Road at Narendrapur Rathtala, Sonarpur. We bridge the gap between borrowers and leading nationalised & private banks across Kolkata—delivering guaranteed lowest rates and zero upfront fees.
          </p>
        </div>

        {/* ============================================================== */}
        {/* MAIN 2-COLUMN COMPOSITION: Real Photos + Editorial Narrative   */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ------------------------------------------------------------ */}
          {/* LEFT COLUMN: Real Photographic Masterpiece                   */}
          {/* ------------------------------------------------------------ */}
          <div className="lg:col-span-6 relative space-y-4">
            {/* Primary Large Image: Live Client Consultation */}
            <div
              onClick={() => onOpenImageModal && onOpenImageModal(1)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl cursor-pointer bg-slate-900"
            >
              <img
                src={consultationImg}
                alt="Soumitra Roy conducting client consultation at Narendrapur office"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-between p-5 sm:p-6">
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live Consultation Desk
                  </span>

                  <span className="text-[11px] font-bold text-amber-300 bg-amber-950/70 border border-amber-500/30 px-2.5 py-1 rounded-full backdrop-blur-md">
                    Click to Zoom ↗
                  </span>
                </div>

                {/* Bottom Caption */}
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider mb-1.5">
                    1-on-1 Personalized Advisory
                  </span>
                  <p className="text-white font-extrabold text-base sm:text-lg leading-snug">
                    In-Person Guidance at Narendrapur Rathtala Branch
                  </p>
                  <p className="text-slate-300 text-xs mt-1 font-medium">
                    Every borrower receives private financial audit, bank rate comparison, and customized file preparation.
                  </p>
                </div>
              </div>
            </div>

            {/* Secondary Dual Images Grid (Signage & Secure Premises) */}
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
              <div
                onClick={() => onOpenImageModal && onOpenImageModal(3)}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md cursor-pointer h-36 sm:h-40 bg-slate-900"
              >
                <img
                  src={signboardGoldImg}
                  alt="Roy Loan Consultancy Executive Signage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
                  <div>
                    <span className="text-[11px] font-bold text-white block">Executive Signage</span>
                    <span className="text-[10px] text-amber-300">N. S. Bose Road Landmark</span>
                  </div>
                </div>
              </div>

              <div
                onClick={() => onOpenImageModal && onOpenImageModal(5)}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md cursor-pointer h-36 sm:h-40 bg-slate-900"
              >
                <img
                  src={infrastructureImg}
                  alt="Modern office infrastructure"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
                  <div>
                    <span className="text-[11px] font-bold text-white block">Secure Premises</span>
                    <span className="text-[10px] text-emerald-300">Safe Document Archiving</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Card (Bottom Right Accent) */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-slate-950 text-white p-3.5 sm:p-4 rounded-2xl shadow-2xl border border-white/10 hidden sm:flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-amber-600 text-white flex items-center justify-center font-black text-lg shrink-0 shadow-md">
                R
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">
                  Senior Consultant
                </p>
                <p className="text-sm font-black text-white leading-tight">
                  Soumitra Roy
                </p>
                <p className="text-[10px] text-amber-400 font-semibold mt-0.5">
                  Direct Bank Liaison Officer
                </p>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* RIGHT COLUMN: Editorial Narrative, 3 Pillars & Direct Action */}
          {/* ------------------------------------------------------------ */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider border border-slate-200">
              <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span>N. S. Bose Road, Narendrapur Rathtala, Sonarpur</span>
            </div>

            {/* Headline */}
            <h3
              className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Why Thousands Across Kolkata Trust Us For Critical Loan Approvals
            </h3>

            {/* Narrative text */}
            <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                Applying for a bank loan shouldn’t mean endless rejections, confusing fine print, or weeks of bureaucratic delay. At{' '}
                <strong className="text-slate-900 font-bold">Roy Loan Consultancy</strong>,
                under the personal leadership of{' '}
                <strong className="text-slate-900 font-bold">Soumitra Roy</strong>, we evaluate your financial profile before submission to ensure complete alignment with bank credit criteria.
              </p>

              <p>
                Whether you need a low-interest <strong className="text-slate-800 font-semibold">Home Loan</strong>, an unsecured <strong className="text-slate-800 font-semibold">Personal Loan</strong>, or an <strong className="text-slate-800 font-semibold">MSME Mudra</strong> sanction for your business, we eliminate rejection risk and secure prompt sanctions directly on official bank letterheads.
              </p>
            </div>

            {/* 3 Core Strengths: Sleek Glass Cards */}
            <div className="space-y-3.5 pt-2">
              
              {/* Strength 1: Direct PSU Liaison */}
              <div className="group flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-500/40 hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 font-bold border border-red-100 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Landmark className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-red-600 transition-colors">
                      Direct Liaison with PSU & Nationalised Banks
                    </h4>
                    <span className="text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-md hidden sm:inline-block">
                      Senior Managers
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Direct established coordination with Chief Managers across State Bank of India, PNB, Bank of Baroda, Union Bank, and Bank of India.
                  </p>
                </div>
              </div>

              {/* Strength 2: Flawless Document Auditing */}
              <div className="group flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 font-bold border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      Pre-Audited Documentation & CIBIL Structuring
                    </h4>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md hidden sm:inline-block">
                      98% Approval
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    We pre-screen title deeds, income proofs, tax filings, and credit history so there are zero administrative delays or file rejections.
                  </p>
                </div>
              </div>

              {/* Strength 3: Doorstep Service */}
              <div className="group flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-amber-500/40 hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 font-bold border border-amber-100 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-amber-700 transition-colors">
                      Doorstep File Collection & Instant Advisory
                    </h4>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md hidden sm:inline-block">
                      Kolkata & Suburbs
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Save your valuable working hours. We pick up documents from your home or office across Sonarpur, Garia, Narendrapur, and South 24 Parganas.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Action & Consultant Hotlines */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>Schedule Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-red-400" />
              </a>

              <a
                href={`tel:${siteData.contact.primaryPhone}`}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-800 hover:text-red-600 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-red-600 shrink-0" />
                <span>Call {siteData.contact.primaryPhoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/91${siteData.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello Soumitra Roy! I would like to schedule a loan consultation at your Narendrapur office."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                title="Chat on WhatsApp with Soumitra Roy"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

        {/* ============================================================== */}
        {/* STATS MILESTONE BAR (Direct Proof of Credibility)               */}
        {/* ============================================================== */}
        <div className="mt-14 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
          <div className="text-center p-2 border-r border-slate-100 last:border-r-0">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 block" style={{ fontFamily: 'var(--font-heading)' }}>
              15+
            </span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5 block">
              Partner Banks
            </span>
          </div>

          <div className="text-center p-2 border-r border-slate-100 last:border-r-0">
            <span className="text-2xl sm:text-3xl font-black text-red-600 block" style={{ fontFamily: 'var(--font-heading)' }}>
              98%*
            </span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5 block">
              Sanction Success
            </span>
          </div>

          <div className="text-center p-2 border-r border-slate-100 last:border-r-0">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 block" style={{ fontFamily: 'var(--font-heading)' }}>
              ₹0
            </span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5 block">
              Advance Fees
            </span>
          </div>

          <div className="text-center p-2">
            <span className="text-2xl sm:text-3xl font-black text-emerald-600 block" style={{ fontFamily: 'var(--font-heading)' }}>
              24–48h
            </span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5 block">
              Eligibility Speed
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
