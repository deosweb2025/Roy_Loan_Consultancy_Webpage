import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useGsap } from '../hooks/useGsap';
import { animateHeroTimeline } from '../animations/heroAnimations';

// 3 Bespoke Cinematic Hero Images
import slide1Img from '../assets/images/hero/slide1_consultation.jpg';
import slide2Img from '../assets/images/hero/slide2_homeloan.jpg';
import slide3Img from '../assets/images/hero/slide3_businessloan.jpg';

const heroSlides = [
  { id: 1, image: slide1Img, alt: 'Bank Loan Sanction & Consultation' },
  { id: 2, image: slide2Img, alt: 'Home Loan Approval & Dream Keys' },
  { id: 3, image: slide3Img, alt: 'Business Loan & MSME Growth Capital' },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroRef = useGsap((containerRef) => {
    return animateHeroTimeline(containerRef);
  }, []);

  // Auto-advance slide every 3 seconds (3000ms)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Pure Cinematic Visual Showcase with Animated Glowing Border (No text clutter, No expand option)
  const renderCinematicFrame = () => (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="hero-card relative p-[2px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(220,38,38,0.3)] transition-all duration-700 hover:shadow-[0_30px_70px_-10px_rgba(220,38,38,0.45)] group select-none"
    >
      {/* 1. Ambient Background Glow matching the rotating beam */}
      <div className="animate-border-beam-glow" />

      {/* 2. Razor-sharp Animated Rotating Border Beam (Crimson to Amber Gold) */}
      <div className="animate-border-beam" />

      {/* 3. Sleek Dark Glass Inner Frame */}
      <div className="relative z-10 w-full rounded-[0.9rem] sm:rounded-[1.4rem] bg-slate-950/95 backdrop-blur-2xl p-2 sm:p-2.5 overflow-hidden border border-white/10">
        
        {/* Cinematic Widescreen Image Stage */}
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-black aspect-[16/10] sm:aspect-[16/10.5] min-h-[240px] sm:min-h-[290px] lg:min-h-[350px] w-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].alt}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover object-center pointer-events-none"
            />
          </AnimatePresence>

          {/* Subtle Filmic Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25 pointer-events-none" />

          {/* Discreet Hover Navigation Arrows (no text) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-red-600 text-white backdrop-blur-md border border-white/15 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg hover:scale-105"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-red-600 text-white backdrop-blur-md border border-white/15 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg hover:scale-105"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Clean Cinematic 3-Segment Progress Bar at bottom of screen */}
          <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className="h-1.5 flex-1 rounded-full bg-white/20 overflow-hidden cursor-pointer transition-colors hover:bg-white/40"
                aria-label={`Jump to slide ${idx + 1}`}
              >
                {currentSlide === idx ? (
                  <motion.div
                    key={currentSlide + (isPaused ? '-paused' : '')}
                    initial={{ width: '0%' }}
                    animate={{ width: isPaused ? '0%' : '100%' }}
                    transition={{ duration: 3, ease: 'linear' }}
                    className="h-full bg-gradient-to-r from-red-500 via-rose-400 to-amber-400"
                  />
                ) : (
                  <div
                    className={`h-full ${
                      idx < currentSlide ? 'bg-red-500/60' : 'bg-transparent'
                    }`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative overflow-hidden bg-slate-950 text-white lg:min-h-[calc(100vh-4.5rem)] flex items-center py-6 sm:py-8 lg:py-10"
    >
      {/* Cinematic Lighting: Dramatic Spotlight Cones & Film Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-600/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-rose-600/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Cinematic Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-x-10 xl:gap-x-12 lg:gap-y-6 items-center">
          
          {/* 1. TOP LEFT ON DESKTOP / FIRST ON MOBILE: Eyebrow + Headline */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-4 text-left">
            {/* 1. TOP POSITION: Eyebrow Pill */}
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-[11px] sm:text-xs font-bold text-red-400 tracking-wider uppercase backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>Government & Private Bank Loan Advisory</span>
            </div>

            {/* 1. TOP POSITION: Main Headline with Cinematic Gradient */}
            <div className="space-y-2">
              <h1
                className="hero-title text-2xl sm:text-3.5xl md:text-4xl lg:text-4.5xl xl:text-5xl font-black tracking-tight leading-[1.12] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-red-400"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Fast Bank Loan Approvals in Kolkata.
              </h1>
              <p className="hero-subtitle text-base sm:text-lg lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300 leading-snug">
                Home, Business, Personal, MSME Mudra & Mortgage Loans.
              </p>
            </div>
          </div>

          {/* 2. RIGHT COLUMN ON LAPTOP & DESKTOP (Spans both rows) / MIDDLE ON MOBILE: Cinematic Frame (Single instance!) */}
          <div className="lg:col-span-6 lg:row-span-2 relative max-w-[540px] mx-auto lg:max-w-none w-full my-3 lg:my-0">
            {renderCinematicFrame()}
          </div>

          {/* 3. BOTTOM LEFT ON DESKTOP / THIRD ON MOBILE: Description + CTAs + Stats */}
          <div className="lg:col-span-6 space-y-4 text-left">
            {/* Description */}
            <p className="hero-desc text-xs sm:text-sm lg:text-base text-slate-300 max-w-xl leading-relaxed">
              Guided by Senior Financial Consultant{' '}
              <strong className="text-white font-semibold">Soumitra Roy</strong> at
              Narendrapur Rathtala, Sonarpur. We provide complete liaison with SBI, PNB,
              Union Bank, Bank of India, and leading institutions to secure fast sanctions
              at the lowest interest rates.
            </p>

            {/* Action Buttons */}
            <div className="hero-cta flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5.5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/35 hover:shadow-red-600/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <span>Apply for Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-4.5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all backdrop-blur-md hover:border-white/25"
              >
                <span>Explore All Services</span>
              </a>
            </div>

            {/* 3-Metric Trust Strip */}
            <div className="hero-stats pt-4.5 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-md">
              <div>
                <span className="text-xl sm:text-2xl font-black text-white font-display">
                  15+
                </span>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                  Govt & PSU Banks
                </p>
              </div>
              <div className="border-l border-slate-800/80 pl-4">
                <span className="text-xl sm:text-2xl font-black text-red-400 font-display">
                  100%
                </span>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                  Doorstep Service
                </p>
              </div>
              <div className="border-l border-slate-800/80 pl-4">
                <span className="text-xl sm:text-2xl font-black text-amber-400 font-display">
                  24–48h
                </span>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                  Fast Assessment
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

