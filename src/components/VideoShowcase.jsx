import React, { useRef, useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  ShieldCheck,
  MapPin,
  Clock,
  Lock,
  Users2,
  ExternalLink,
  Sparkles,
  PhoneCall,
} from 'lucide-react';
import { siteData } from '../data/siteData';
import officeVideo from '../assets/videos/videos1.mp4';
import consultationPoster from '../assets/images/edited/client_consultation.jpg';

const VideoShowcase = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 1;
    setCurrentTime(current);
    setProgress((current / total) * 100);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const newTime = pos * (videoRef.current.duration || 1);
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    setProgress(pos * 100);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
    setIsPlaying(true);
  };

  const formatTime = (secs) => {
    if (isNaN(secs) || secs === Infinity) return '0:00';
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <section id="video-tour" className="py-20 lg:py-28 bg-gradient-to-b from-slate-950 via-[#0B0F19] to-slate-950 text-white relative overflow-hidden border-b border-white/5">
      {/* Subtle Financial Radial Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Decorative Cinematic Halo Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-r from-red-600/15 via-rose-500/10 to-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================== */}
        {/* SECTION HEADER: High-Impact, Authoritative & Prestigious        */}
        {/* ============================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-500/15 via-rose-500/10 to-amber-500/15 text-red-300 border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.2)] mb-4 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
            <span>Verified Physical Premises • Kolkata HQ</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            See Our Active Consultancy &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">
              Client Space
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Experience the transparency of a real, physical consultancy office. No anonymous call centers or hidden brokers — meet Soumitra Roy face-to-face at Narendrapur Rathtala, Sonarpur.
          </p>
        </div>

        {/* ============================================================== */}
        {/* CINEMA STAGE & VIDEO PLAYER DECK                                */}
        {/* ============================================================== */}
        <div className="mt-8 sm:mt-12 max-w-5xl mx-auto">
          <div className="relative group">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 via-rose-600/20 to-amber-600/30 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-75 transition-opacity duration-700 pointer-events-none" />

            {/* Cinema Deck Frame */}
            <div
              ref={containerRef}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-slate-950 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => isPlaying && setShowControls(false)}
            >
              {/* Studio Header Bar */}
              <div className="px-4 py-3 bg-slate-900/95 border-b border-white/10 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block shadow-sm" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block shadow-sm" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shadow-sm" />
                  </div>
                  <span className="text-slate-400 font-mono text-[11px] ml-2 hidden sm:inline">
                    BRANCH_TOUR_4K.MP4
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-300 font-medium">
                  <MapPin className="w-3 h-3 text-red-400 shrink-0" />
                  <span className="truncate max-w-[200px] sm:max-w-none">{siteData.contact.shortAddress}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-red-600/20 text-red-400 border border-red-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    {isPlaying ? 'LIVE TOUR' : 'READY'}
                  </span>
                </div>
              </div>

              {/* Main Video Viewport */}
              <div className="relative aspect-video max-h-[560px] bg-black overflow-hidden flex items-center justify-center">
                <video
                  ref={videoRef}
                  src={officeVideo}
                  poster={consultationPoster}
                  playsInline
                  muted={isMuted}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => {
                    setIsPlaying(false);
                    setProgress(0);
                  }}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={togglePlay}
                />

                {/* Center Glass Play Overlay (When Paused) */}
                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 bg-slate-950/45 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 p-6 text-center group/play"
                  >
                    {/* Ripple ping effect */}
                    <div className="relative flex items-center justify-center mb-4">
                      <span className="absolute w-24 h-24 rounded-full bg-red-600/30 animate-ping opacity-75" />
                      <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-gradient-to-br from-red-600 via-rose-600 to-amber-600 text-white flex items-center justify-center shadow-[0_0_40px_rgba(239,68,68,0.6)] group-hover/play:scale-110 transition-transform duration-300 border-2 border-white/30">
                        <Play className="w-8 h-8 sm:w-9 sm:h-9 ml-1 fill-white" />
                      </div>
                    </div>

                    <div className="max-w-md bg-slate-900/85 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-white/10 shadow-2xl">
                      <h4
                        className="text-base sm:text-lg font-black text-white tracking-tight"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        Click to Watch Office Tour & Loan Walkthrough
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 flex items-center justify-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Genuine Client Meeting Environment • Narendrapur Rathtala</span>
                      </p>
                    </div>
                  </div>
                )}

                {/* Floating Modern HUD Control Bar */}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 sm:p-5 transition-opacity duration-300 ${
                    showControls || !isPlaying ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  {/* Scrubber / Progress Bar */}
                  <div
                    onClick={handleSeek}
                    className="relative w-full h-2 rounded-full bg-white/20 hover:h-2.5 cursor-pointer transition-all mb-3 overflow-hidden group/bar"
                    title="Click to seek"
                  >
                    <div
                      className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-3 text-white">
                    {/* Left Controls: Play/Pause, Restart, Volume, Timecode */}
                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="w-9 h-9 rounded-xl bg-white/10 hover:bg-red-600 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer shadow-sm hover:scale-105"
                        title={isPlaying ? "Pause video" : "Play video"}
                      >
                        {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 ml-0.5 fill-white" />}
                      </button>

                      <button
                        type="button"
                        onClick={handleRestart}
                        className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer"
                        title="Restart Video from Beginning"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={toggleMute}
                        className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer"
                        title={isMuted ? "Unmute audio" : "Mute audio"}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 text-slate-300" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                      </button>

                      <span className="text-xs font-mono font-medium text-slate-300 ml-1.5 hidden xs:inline">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>

                    {/* Right Controls: Verification Badge & Fullscreen */}
                    <div className="flex items-center gap-3">
                      <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-[11px] text-slate-200 backdrop-blur-md">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Verified Premises • Soumitra Roy</span>
                      </div>

                      <button
                        type="button"
                        onClick={toggleFullscreen}
                        className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer"
                        title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                      >
                        {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* 3 HIGH-IMPACT TRUST PILLARS (Glassmorphism Experience Tiles)    */}
          {/* ============================================================== */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Pillar 1 */}
            <div className="group relative bg-slate-900/60 hover:bg-slate-800/80 rounded-2xl p-6 border border-white/10 hover:border-red-500/40 shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users2 className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-black tracking-widest text-red-400 uppercase mb-1">
                  Direct Senior Advisory
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Face-to-Face Transparency
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Sit directly across the table with Soumitra Roy. Clear CIBIL queries, verify bank sanction terms, and review interest calculations in person with total clarity.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero Anonymity Guarantee</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group relative bg-slate-900/60 hover:bg-slate-800/80 rounded-2xl p-6 border border-white/10 hover:border-emerald-500/40 shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Lock className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-black tracking-widest text-emerald-400 uppercase mb-1">
                  Confidentiality Guaranteed
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Bank-Grade Document Vault
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Your confidential property deeds, ITRs, and personal KYC records remain strictly secure on physical CCTV-monitored premises. Never leaked to third-party telecallers.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Private & Protected</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group relative bg-slate-900/60 hover:bg-slate-800/80 rounded-2xl p-6 border border-white/10 hover:border-amber-500/40 shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-600/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-black tracking-widest text-amber-400 uppercase mb-1">
                  Prime Roadside Landmark
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  N.S. Bose Road, Rathtala
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Situated conveniently at Rathtala More, Sonarpur. Just 10 minutes from Kavi Nazrul (Garia Bazar) Metro with prompt bus and auto connectivity and visitor parking.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs font-semibold text-amber-300">
                <Clock className="w-3.5 h-3.5" />
                <span>Mon–Sat: 10:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* IN-PERSON MEETING VISIT CALL-TO-ACTION STRIP                   */}
          {/* ============================================================== */}
          <div className="mt-8 p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-red-950/60 via-slate-900/80 to-slate-950 border border-red-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-600/30">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-black text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                  Visit Our Branch for a Free File Assessment
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  Bring your Aadhaar, PAN, and basic income papers for an immediate eligibility check across 15+ banks.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href={siteData.contact.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all duration-200"
              >
                <MapPin className="w-4 h-4 text-red-400" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={`tel:${siteData.contact.primaryPhone}`}
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-red-600/30 transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Office Desk</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VideoShowcase;
