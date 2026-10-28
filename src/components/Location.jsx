import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  Clock,
  Phone,
  PhoneCall,
  ExternalLink,
  Copy,
  Check,
  Train,
  Car,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import { siteData } from '../data/siteData';

const Location = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(siteData.contact.formattedAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWhatsAppVisit = () => {
    const text = encodeURIComponent(
      `Hello Soumitra Roy! I would like to visit your office at Narendrapur Rathtala to discuss a loan requirement. Please confirm available timing.`
    );
    window.open(`https://wa.me/91${siteData.contact.whatsapp}?text=${text}`, '_blank');
  };

  const transitPills = [
    {
      icon: Train,
      title: 'Kavi Subhash (New Garia) Metro',
      time: '10 Mins via Auto/Bus',
      color: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      icon: Train,
      title: 'Sonarpur Railway Station',
      time: '7 Mins Direct Route',
      color: 'text-amber-600 bg-amber-50 border-amber-200',
    },
    {
      icon: Navigation,
      title: 'Rathtala More Auto & Bus Stop',
      time: '50 Meters Walking Distance',
      color: 'text-red-600 bg-red-50 border-red-200',
    },
    {
      icon: Car,
      title: 'Client Vehicle Parking',
      time: 'Free Roadside & Spot Parking',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
  ];

  return (
    <section id="location" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden border-b border-slate-200/80">
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
      <div className="absolute top-2/3 -right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================== */}
        {/* SECTION HEADER: Authoritative, Inviting & High-Impact          */}
        {/* ============================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-red-50 text-red-700 border border-red-200 shadow-2xs mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
            </span>
            <MapPin className="w-3.5 h-3.5 text-red-600" />
            <span>Visit Our Registered Branch • Open Mon–Sat</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Convenient Location at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-amber-600">
              Narendrapur Rathtala
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Easily accessible from Garia, Sonarpur, Rajpur, Baruipur, and all parts of South 24 Parganas & Kolkata. Walk in or schedule your personal loan consultation.
          </p>
        </div>

        {/* ============================================================== */}
        {/* TWO-COLUMN LOCATION SHOWCASE: Profile Card & Cinema Map Deck   */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: Executive Branch Headquarters Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden text-left card-border-animated">
            {/* Top Accent Strip */}
            <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-500" />

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                {/* Branch Header with Profile Seal */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center font-bold shadow-md shadow-red-600/30 shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3
                        className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        Roy Loan Consultancy
                      </h3>
                      <p className="text-xs sm:text-sm font-bold text-red-600 mt-0.5">
                        Soumitra Roy • Senior Loan Consultant
                      </p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-extrabold uppercase border border-emerald-200 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open Today
                  </span>
                </div>

                {/* Structured Contact Tiles */}
                <div className="space-y-4 pt-2">
                  {/* Address Tile with Copy Button */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-red-300 transition-colors">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-red-600" />
                        Registered Office Address:
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyAddress}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600 hover:text-red-700 cursor-pointer bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs"
                        title="Copy full address"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {siteData.contact.formattedAddress}
                    </p>
                  </div>

                  {/* Business Hours Tile */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      Consultation Hours:
                    </span>
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-800">
                      <span>{siteData.timings.days}</span>
                      <span className="font-extrabold text-slate-900">{siteData.timings.hours}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Sunday: Special appointments available on prior phone request
                    </p>
                  </div>

                  {/* Direct Contact Numbers */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-600" />
                      Direct Phone Helplines:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-bold">
                      <a
                        href={`tel:${siteData.contact.primaryPhone}`}
                        className="flex items-center gap-1.5 text-slate-900 hover:text-red-600 transition-colors p-1.5 rounded-lg bg-white border border-slate-200"
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-red-600" />
                        <span>{siteData.contact.primaryPhoneDisplay}</span>
                      </a>
                      <a
                        href={`tel:${siteData.contact.secondaryPhone}`}
                        className="flex items-center gap-1.5 text-slate-900 hover:text-red-600 transition-colors p-1.5 rounded-lg bg-white border border-slate-200"
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-slate-500" />
                        <span>{siteData.contact.secondaryPhoneDisplay}</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Transit Connectivity Grid */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-2.5">
                    Local Transit & Landmark Proximity:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {transitPills.map((pill, pIdx) => {
                      const IconPill = pill.icon;
                      return (
                        <div
                          key={pIdx}
                          className={`p-2 rounded-xl border text-[11px] leading-tight ${pill.color}`}
                        >
                          <div className="flex items-center gap-1 font-bold">
                            <IconPill className="w-3 h-3 shrink-0" />
                            <span className="truncate">{pill.title}</span>
                          </div>
                          <span className="text-[10px] font-medium opacity-90 block mt-0.5">
                            {pill.time}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-2.5">
                <a
                  href={siteData.contact.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-red-200" />
                </a>

                <button
                  type="button"
                  onClick={handleWhatsAppVisit}
                  className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
                  title="Notify Soumitra Roy on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Visit</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Cinema Map Deck (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-white flex flex-col justify-between card-hover-border-glow">
            {/* Studio Header Bar */}
            <div className="p-3.5 sm:p-4 bg-slate-900 text-white flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                </div>
                <span className="font-bold ml-2">Live Google Map • Narendrapur Rathtala, Kolkata</span>
              </div>

              <a
                href={siteData.contact.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 text-[11px] sm:text-xs"
              >
                <span>Open in Map App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Map iframe Viewport */}
            <div className="relative flex-1 w-full min-h-[380px] sm:min-h-[460px] bg-slate-100">
              <iframe
                title="Roy Loan Consultancy Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.5855734260537!2d88.398000!3d22.439000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027170a4c9b83b%3A0x6b3f7f897f74c7e6!2sNarendrapur%20Rathtala%2C%20Kolkata%2C%20West%20Bengal%20700103!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px]"
              />

              {/* Floating Glassmorphic Landmark Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200/90 shadow-2xl flex items-center justify-between gap-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p
                      className="text-xs sm:text-sm font-black text-slate-900"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Roy Loan Consultancy • Soumitra Roy
                    </p>
                    <p className="text-[11px] text-slate-600 leading-tight mt-0.5">
                      N. S. Bose Road, Narendrapur Rathtala, Sonarpur, Kolkata - 700103
                    </p>
                  </div>
                </div>

                <a
                  href={siteData.contact.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-red-600 text-white text-xs font-bold transition-colors shadow-sm inline-flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Navigate</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* DOORSTEP PICKUP & ALTERNATIVE CONVENIENCE BANNER               */}
        {/* ============================================================== */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 text-white shadow-xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 text-left card-border-animated-dark">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-13 h-13 rounded-2xl bg-red-600/30 text-red-400 border border-red-500/40 flex items-center justify-center shrink-0 shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-red-600 text-white font-mono">
                  DOORSTEP SERVICE
                </span>
                <span className="text-xs font-semibold text-slate-300">Across Kolkata & South 24 Parganas</span>
              </div>
              <h4
                className="text-base sm:text-lg font-black text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Cannot Visit in Person? We Collect Your Loan Documents at Your Doorstep
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                Soumitra Roy provides complimentary file pickup from your residence or office in Garia, Sonarpur, Jadavpur, Tollygunge, Rajpur, and nearby locations.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full lg:w-auto">
            <a
              href={`tel:${siteData.contact.primaryPhone}`}
              className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-red-900/40 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call for Doorstep Visit</span>
            </a>

            <a
              href="#contact"
              className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-colors"
            >
              <span>Schedule Online</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Location;
