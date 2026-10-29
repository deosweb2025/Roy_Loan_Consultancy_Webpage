import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowUp,
  ExternalLink,
  Headphones,
  MessageCircle,
  ChevronRight,
  Award,
  FileCheck2,
} from 'lucide-react';
import { siteData } from '../data/siteData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-bg-texture text-slate-400 pt-16 pb-12 relative overflow-hidden border-t border-slate-800/90">
      {/* Top Multi-Tone Accent Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-600/70 via-amber-500/50 to-transparent" />

      {/* Top Glowing Ambient Flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[140px] bg-red-600/10 blur-[90px] pointer-events-none" />

      {/* Background Geometric Grid Overlay */}
      <div className="footer-grid-overlay absolute inset-0 pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ============================================================ */}
        {/* PRE-FOOTER VIP ADVISORY ACTION BAR                          */}
        {/* ============================================================ */}
        <div className="card-border-animated-dark rounded-2xl bg-slate-900/90 backdrop-blur-md p-5 sm:p-6 mb-14 border border-slate-800/90 flex flex-col md:flex-row items-center justify-between gap-5 shadow-2xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 via-red-700 to-slate-900 flex items-center justify-center text-white shrink-0 shadow-lg shadow-red-600/20">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-red-400 uppercase tracking-widest">
                  Senior Advisor Direct Line
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Mon – Sat: 10 AM – 8 PM
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                Need immediate loan guidance for SBI, PNB, or Private Banks?
              </h4>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${siteData.contact.primaryPhone}`}
              className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Direct: {siteData.contact.primaryPhoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/91${siteData.contact.whatsapp}?text=Hello%20Soumitra%20Roy,%20I%20would%20like%20to%20inquire%20about%20a%20loan%20scheme.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 border border-emerald-500/40"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MAIN 4-COLUMN FOOTER NAVIGATION & CREDENTIALS               */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800/80">
          {/* Column 1: Brand Info & Consultant Details (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-red-700 p-0.5 shadow-md shrink-0">
                <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center text-white font-black text-xl">
                  R
                </div>
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  ROY <span className="text-red-500">LOAN</span>
                </span>
                <span className="block text-[10px] font-bold text-slate-400 tracking-[0.22em] uppercase">
                  CONSULTANCY
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Premier Financial & Bank Loan Consultancy operating in Narendrapur Rathtala, Sonarpur, Kolkata.
              Led by Senior Consultant <strong className="text-white">Soumitra Roy</strong>, assisting salaried individuals, self-employed professionals, and businesses secure fast approvals with 15+ premier banks.
            </p>

            {/* Consultant Authority Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Senior Advisor: <strong className="text-white font-semibold">Soumitra Roy</strong> (15+ Yrs Exp)</span>
            </div>

            <div className="space-y-1.5 pt-1 text-xs">
              <div className="text-amber-400 font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>All Government Bank Loans Available</span>
              </div>
              <div className="text-slate-400 flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>100% Free Consultation • Zero Advance Fees</span>
              </div>
            </div>
          </div>

          {/* Column 2: Loan Categories (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5 text-left">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-3.5 rounded-full bg-red-600" />
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                Loan Services
              </p>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              {siteData.services.map((svc) => (
                <li key={svc.id}>
                  <a
                    href="#services"
                    className="hover:text-red-400 transition-colors flex items-center gap-2 text-slate-300 hover:translate-x-1 duration-200 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-red-500 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                    <span>{svc.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3.5 text-left">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-3.5 rounded-full bg-red-600" />
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                Navigation
              </p>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              {siteData.navigation.map((nav) => (
                <li key={nav.name}>
                  <a
                    href={nav.href}
                    className="hover:text-red-400 transition-colors flex items-center gap-2 text-slate-300 hover:translate-x-1 duration-200 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-red-500 transition-colors" />
                    <span>{nav.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#eligibility"
                  className="hover:text-red-400 transition-colors flex items-center gap-2 text-slate-300 hover:translate-x-1 duration-200 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-red-500 transition-colors" />
                  <span>Loan Eligibility</span>
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="hover:text-red-400 transition-colors flex items-center gap-2 text-slate-300 hover:translate-x-1 duration-200 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-red-500 transition-colors" />
                  <span>Branch Desk</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5 text-left">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-3.5 rounded-full bg-red-600" />
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                Branch Headquarters
              </p>
            </div>
            <div className="space-y-3 text-xs text-slate-300">
              <a
                href={siteData.contact.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors group"
              >
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="group-hover:text-white transition-colors">
                  {siteData.contact.formattedAddress}
                </span>
              </a>

              <a
                href={`tel:${siteData.contact.primaryPhone}`}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-red-500/50 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">Direct Consultant Line</span>
                    <strong className="text-white group-hover:text-red-300 transition-colors">
                      {siteData.contact.primaryPhoneDisplay}
                    </strong>
                  </div>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-600/20 text-red-300 font-semibold">
                  Direct
                </span>
              </a>

              {siteData.contact.secondaryPhone && (
                <a
                  href={`tel:${siteData.contact.secondaryPhone}`}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">Alternate Line</span>
                    <strong className="text-white group-hover:text-slate-200 transition-colors">
                      {siteData.contact.secondaryPhoneDisplay}
                    </strong>
                  </div>
                </a>
              )}

              <a
                href={`mailto:${siteData.contact.email}`}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors group"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="truncate group-hover:text-blue-300 transition-colors">
                  {siteData.contact.email}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer Strip */}
        <div className="py-6 border-b border-slate-800/80 text-[11px] text-slate-400 text-left leading-relaxed">
          <p>
            <strong className="text-slate-300">Disclaimer:</strong> Roy Loan Consultancy is an independent professional loan consultancy and financial advisory service based in Kolkata. All loan sanctions, interest rate terms, and disbursements are strictly subject to individual borrower eligibility, credit appraisal, and final discretion of the respective banks/NBFCs (SBI, PNB, Union Bank, Bank of Baroda, Bank of India, HDFC, ICICI, etc.). We do not charge upfront fees before bank disbursement.
          </p>
        </div>

        {/* ============================================================ */}
        {/* BOTTOM ATTRIBUTION BAR (Centered, No "All rights reserved") */}
        {/* ============================================================ */}
        <div className="pt-8 relative flex flex-col sm:flex-row items-center justify-center">
          {/* Centered Attribution with Company Hyperlink */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center text-xs text-slate-400">
            <span>
              &copy; {new Date().getFullYear()}{' '}
              <strong className="text-slate-200 font-bold">Roy Loan Consultancy</strong>
            </span>
            <span className="hidden sm:inline text-slate-600 font-bold">•</span>
            <span className="flex items-center gap-1.5">
              <span>Website Crafted by</span>
              <a
                href="https://www.teamdeoskolkata.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold text-red-500 hover:text-red-400 transition-colors inline-flex items-center gap-1 group"
              >
                <span>Digital Exposure Online Service</span>
                <ExternalLink className="w-3.5 h-3.5 text-red-400/80 group-hover:text-red-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </span>
          </div>

          {/* Smooth Back to Top Button */}
          <div className="mt-4 sm:mt-0 sm:absolute sm:right-0">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-red-600 text-slate-400 hover:text-white transition-all cursor-pointer border border-slate-800 shadow-md group flex items-center gap-1.5 text-xs font-semibold"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <span className="hidden md:inline text-[11px] text-slate-400 group-hover:text-white">Top</span>
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
