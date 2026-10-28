import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for indicator
      const sections = ['home', 'about', 'services', 'gallery', 'contact'];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Micro-Utility Ribbon */}
      <div className="bg-slate-950 text-slate-300 text-[11px] py-2 px-4 border-b border-white/[0.06] hidden md:block select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              All Government & Nationalised Bank Loans Available
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Office Open: Mon – Sat (10:00 AM – 8:00 PM)</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <span>
              Consultant: <strong className="text-white font-semibold">Soumitra Roy</strong>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-red-400" />
              Narendrapur Rathtala, Sonarpur, Kolkata
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Luxury Glass Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/92 backdrop-blur-xl border-b border-white/[0.09] shadow-2xl py-3'
            : 'bg-slate-950/80 backdrop-blur-md border-b border-white/[0.05] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with Glowing Crimson Monogram */}
          <a
            href="#home"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-xl p-1"
          >
            {/* Hexagonal Shield Logo Badge */}
            <div className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-rose-700 shadow-lg shadow-red-600/30 border border-red-400/30 group-hover:scale-105 group-hover:shadow-red-600/50 transition-all duration-300">
              <span className="font-black text-xl text-white tracking-tighter drop-shadow-sm font-display">
                R
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-slate-950 animate-ping" />
            </div>

            {/* Typography */}
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight font-display">
                  ROY
                </span>
                <span className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300 tracking-tight font-display">
                  LOAN
                </span>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[10px] font-bold text-slate-400 tracking-[0.26em] uppercase">
                  CONSULTANCY
                </span>
                <span className="w-1 h-1 rounded-full bg-red-500 hidden sm:inline-block" />
                <span className="text-[9px] font-medium text-slate-400 hidden sm:inline-block">
                  Soumitra Roy
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links (Pill Style on Dark Glass) */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] p-1.5 rounded-2xl border border-white/[0.06] backdrop-blur-md">
            {siteData.navigation.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-xs xl:text-sm font-bold tracking-wide rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/[0.12] shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-red-500" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Premium Apply Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 border border-red-400/30 shadow-lg shadow-red-600/35 hover:shadow-red-600/55 transition-all duration-300 transform hover:scale-104 active:scale-97 cursor-pointer"
            >
              <span>Apply Now</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Framer Motion Luxury Dark Theme) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden fixed top-[65px] left-0 right-0 z-30 bg-slate-950/95 backdrop-blur-2xl border-b border-white/[0.1] shadow-2xl overflow-hidden"
          >
            <div className="px-5 pt-4 pb-6 space-y-2.5 text-left">
              {/* Trust Badge Strip */}
              <div className="py-2.5 px-3.5 bg-red-950/40 border border-red-800/40 rounded-xl mb-3 flex items-center justify-between text-xs text-red-300 font-semibold">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  All Govt & PSU Banks Available
                </span>
                <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                  Free Advice
                </span>
              </div>

              {/* Navigation Links */}
              {siteData.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-sm font-bold text-slate-200 hover:text-white hover:bg-white/[0.08] rounded-xl transition-colors border border-transparent hover:border-white/[0.05]"
                >
                  {item.name}
                </a>
              ))}

              {/* Action Button */}
              <div className="pt-3 border-t border-white/[0.08]">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm shadow-lg shadow-red-600/40"
                >
                  <span>Apply for Loan Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
