import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  Maximize2,
  ShieldCheck,
  MapPin,
  ExternalLink,
  Award,
} from 'lucide-react';
import { siteData } from '../data/siteData';

const Gallery = ({ onOpenImageModal }) => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Photos (8)' },
    { id: 'office', label: 'Branch & Signage' },
    { id: 'consultation', label: 'Client Advisory Desk' },
    { id: 'credentials', label: 'Official Credentials' },
  ];

  const filteredImages = siteData.gallery.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'office')
      return ['Office Facade', 'Branding', 'Location', 'Infrastructure'].includes(item.category);
    if (activeTab === 'consultation')
      return ['Advisory Desk', 'Operations', 'Atmosphere'].includes(item.category);
    if (activeTab === 'credentials')
      return ['Credentials', 'Branding'].includes(item.category);
    return true;
  });

  // Dynamic span calculation ensures a balanced, symmetrical layout with zero orphan blank spaces
  const getColSpan = (item, index) => {
    if (activeTab === 'all') {
      // Row 1: Featured Visiting Card + Client Advisory (3 cols each = 6 cols total, 50%/50%)
      if (index === 0 || index === 1) {
        return 'md:col-span-3 lg:col-span-3 min-h-[340px] sm:min-h-[380px]';
      }
      // Rows 2 & 3: 3 items each (2 cols each = 6 cols total, 33%/33%/33%)
      return 'md:col-span-3 lg:col-span-2 min-h-[280px] sm:min-h-[320px]';
    }

    if (activeTab === 'office') {
      // 4 items: exactly 2 rows of 2
      return 'md:col-span-3 lg:col-span-3 min-h-[320px] sm:min-h-[360px]';
    }

    if (activeTab === 'consultation') {
      // 3 items: exactly 1 row of 3
      return 'md:col-span-3 lg:col-span-2 min-h-[320px] sm:min-h-[360px]';
    }

    if (activeTab === 'credentials') {
      // 2 items: exactly 1 row of 2
      return 'md:col-span-3 lg:col-span-3 min-h-[340px] sm:min-h-[380px]';
    }

    return 'md:col-span-3 lg:col-span-2 min-h-[280px] sm:min-h-[320px]';
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-gradient-to-b from-slate-950 via-[#0B0F19] to-slate-950 text-white relative overflow-hidden border-b border-white/5">
      {/* Background Radial Dots Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Decorative Ambient Halos */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================== */}
        {/* SECTION HEADER: High-Impact, Prestigious & Authoritative        */}
        {/* ============================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-500/15 via-rose-500/10 to-amber-500/15 text-red-300 border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.2)] mb-4 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
            <span>Real Office • Verified Physical Premises</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Branch Gallery &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">
              Official Credentials
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Click any photo below to inspect our physical consultancy desk, executive signage, and consultant visiting card in full high resolution.
          </p>
        </div>

        {/* ============================================================== */}
        {/* SEGMENTED FILTER TABS                                          */}
        {/* ============================================================== */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-slate-950/80 border border-white/10 shadow-inner gap-1 backdrop-blur-md">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* PROPORTIONATE BENTO GALLERY GRID (6-Column Responsive Layout)   */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item, index) => {
              const originalIndex = siteData.gallery.findIndex((g) => g.id === item.id);
              const isVisitingCard = item.id === 1;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  key={item.id}
                  onClick={() => onOpenImageModal && onOpenImageModal(originalIndex)}
                  className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden border ${
                    isVisitingCard
                      ? 'border-amber-500/40 bg-gradient-to-b from-slate-900 to-slate-950 shadow-[0_0_30px_rgba(245,158,11,0.12)] card-border-animated-gold'
                      : 'border-white/15 bg-slate-900/90 shadow-xl card-hover-border-glow'
                  } hover:border-red-500/60 hover:shadow-2xl transition-all duration-300 flex flex-col justify-end cursor-pointer transform hover:-translate-y-1.5 ${getColSpan(
                    item,
                    index
                  )}`}
                >
                  {/* Visual Image Render */}
                  {isVisitingCard ? (
                    // Visiting Card: Executive Certificate Matte Presentation (100% Uncropped & Crystal Clear)
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 sm:p-6 pb-24 sm:pb-28 flex items-center justify-center">
                      <div className="relative w-full max-w-[420px] rounded-xl overflow-hidden border-2 border-amber-500/50 shadow-2xl bg-white p-1.5 group-hover:scale-103 transition-transform duration-500">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-auto object-contain block mx-auto select-none"
                        />
                      </div>
                    </div>
                  ) : (
                    // Standard Photographic Assets: High-Res Full Bleed
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    />
                  )}

                  {/* Gradient Depth Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Top Floating Badge Bar */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-extrabold px-3 py-1 rounded-lg bg-black/70 text-slate-200 backdrop-blur-md border border-white/15 shadow-sm">
                      {isVisitingCard && <Award className="w-3.5 h-3.5 text-amber-400" />}
                      <span>{item.category}</span>
                    </span>

                    <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-xs shadow-lg group-hover:scale-110">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Bottom Caption Glass Plate */}
                  <div className="relative z-10 p-4 sm:p-5 text-left">
                    <div className="flex items-center gap-2 mb-1.5">
                      {item.badge && (
                        <span
                          className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                            isVisitingCard
                              ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                              : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                      <span className="text-[10px] font-medium text-slate-400">
                        Narendrapur Rathtala Branch
                      </span>
                    </div>

                    <h3
                      className="text-sm sm:text-base font-black text-white group-hover:text-red-400 transition-colors line-clamp-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                      {item.subtitle}
                    </p>

                    <p className="text-[11px] text-amber-400 font-semibold mt-2 flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Click to view in high resolution lightbox</span>
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ============================================================== */}
        {/* ASSURANCE FOOTER & QUICK ACTIONS STRIP                         */}
        {/* ============================================================== */}
        <div className="mt-12 sm:mt-14 p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-slate-950/80 border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-5 backdrop-blur-md">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                100% Real Physical Workspace • Verified by Partner Banks
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                All photographs reflect our physical branch at Narendrapur Rathtala, Sonarpur, Kolkata - 700103.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={() => onOpenImageModal && onOpenImageModal(0)}
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/15 transition-colors cursor-pointer"
            >
              <Eye className="w-4 h-4 text-amber-400" />
              <span>Open Lightbox Slideshow</span>
            </button>

            <a
              href={siteData.contact.googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5 text-red-200" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
