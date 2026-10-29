import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  AlertCircle,
  Briefcase,
  Building2,
  Copy,
  Check,
  Award,
  Lock,
  ChevronDown,
  FileCheck2,
  ExternalLink,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteData } from '../data/siteData';

// Helper to format Indian currency in words (Lakhs & Crores)
const formatIndianCurrencyWords = (num) => {
  const val = Number(num);
  if (!val || isNaN(val) || val <= 0) return '';
  if (val >= 10000000) {
    const cr = (val / 10000000).toFixed(2).replace(/\.00$/, '');
    return `${cr} Crore${Number(cr) > 1 ? 's' : ''}`;
  }
  if (val >= 100000) {
    const lk = (val / 100000).toFixed(2).replace(/\.00$/, '');
    return `${lk} Lakh${Number(lk) > 1 ? 's' : ''}`;
  }
  if (val >= 1000) {
    const th = (val / 1000).toFixed(1).replace(/\.0$/, '');
    return `${th} Thousand`;
  }
  return String(val);
};

const QUICK_AMOUNTS = [
  { label: '₹5 Lakhs', value: '500000' },
  { label: '₹15 Lakhs', value: '1500000' },
  { label: '₹35 Lakhs', value: '3500000' },
  { label: '₹75 Lakhs', value: '7500000' },
  { label: '₹1.5 Cr+', value: '15000000' },
];

const PREFERRED_BANKS = [
  'Best Available Interest Rate (Recommended)',
  'State Bank of India (SBI)',
  'Punjab National Bank (PNB)',
  'Bank of Baroda (BOB)',
  'Union Bank of India',
  'HDFC Bank',
  'ICICI Bank',
  'Axis Bank / Other PSU',
];

const Contact = ({ prefilledLoan = '', prefilledAmount = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    loanType: prefilledLoan || 'Personal Loan',
    loanAmount: prefilledAmount ? String(prefilledAmount) : '1500000',
    employmentType: 'Salaried (Govt / PSU / MNC / Private)',
    cityArea: 'Kolkata / South 24 Parganas',
    preferredBank: 'Best Available Interest Rate (Recommended)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [error, setError] = useState('');
  const [copiedKey, setCopiedKey] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const [prevPrefilledLoan, setPrevPrefilledLoan] = useState(prefilledLoan);
  const [prevPrefilledAmount, setPrevPrefilledAmount] = useState(prefilledAmount);

  if (prefilledLoan !== prevPrefilledLoan || prefilledAmount !== prevPrefilledAmount) {
    setPrevPrefilledLoan(prefilledLoan);
    setPrevPrefilledAmount(prefilledAmount);
    setFormData((prev) => ({
      ...prev,
      ...(prefilledLoan ? { loanType: prefilledLoan } : {}),
      ...(prefilledAmount ? { loanAmount: String(prefilledAmount) } : {}),
    }));
  }

  const showToast = (msg, key) => {
    setCopiedKey(key);
    setToastMessage(msg);
    setTimeout(() => {
      setCopiedKey(null);
      setToastMessage('');
    }, 2800);
  };

  const copyToClipboard = (text, label, key) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} copied to clipboard!`, key);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleAmountPreset = (amtValue) => {
    setFormData((prev) => ({ ...prev, loanAmount: amtValue }));
    setError('');
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide both your name and phone number so we can process your request.');
      return;
    }

    const formattedAmt = Number(formData.loanAmount).toLocaleString('en-IN');
    const amtWords = formatIndianCurrencyWords(formData.loanAmount);

    const text =
      `*🏛️ NEW LOAN CONSULTATION INQUIRY*%0A` +
      `*Roy Loan Consultancy (Soumitra Roy)*%0A%0A` +
      `👤 *Client Name:* ${encodeURIComponent(formData.name)}%0A` +
      `📞 *Phone Number:* ${encodeURIComponent(formData.phone)}%0A` +
      (formData.email ? `📧 *Email:* ${encodeURIComponent(formData.email)}%0A` : '') +
      `💼 *Loan Required:* ${encodeURIComponent(formData.loanType)}%0A` +
      `💰 *Estimated Amount:* ₹${formattedAmt} (${amtWords})%0A` +
      `🏢 *Income Profile:* ${encodeURIComponent(formData.employmentType)}%0A` +
      `📍 *Location:* ${encodeURIComponent(formData.cityArea)}%0A` +
      `🏦 *Preferred Bank Scheme:* ${encodeURIComponent(formData.preferredBank)}%0A` +
      (formData.message ? `📝 *Client Note:* ${encodeURIComponent(formData.message)}%0A` : '') +
      `%0A_Sent via royloanconsultancy.in Official Portal_`;

    const url = `https://wa.me/91${siteData.contact.whatsapp}?text=${text}`;
    window.open(url, '_blank');
    setSubmissionId(`RLC-${Math.floor(1000 + Math.random() * 9000)}`);
    setSubmitted(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your full name and reachable contact phone number.');
      return;
    }
    setSubmissionId(`RLC-${Math.floor(1000 + Math.random() * 9000)}`);
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setError('');
    setFormData({
      name: '',
      phone: '',
      email: '',
      loanType: 'Personal Loan',
      loanAmount: '1500000',
      employmentType: 'Salaried (Govt / PSU / MNC / Private)',
      cityArea: 'Kolkata / South 24 Parganas',
      preferredBank: 'Best Available Interest Rate (Recommended)',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Ambient Lighting & Canvas Accent Mesh */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none translate-y-1/3" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-semibold shadow-2xl border border-slate-700 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Direct Advisory & Applications"
          title="Apply for Free Loan Consultation"
          subtitle="Speak directly with Senior Financial Consultant Soumitra Roy. Complete confidentiality, zero upfront advisory fees, and doorstep guidance across Kolkata & South 24 Parganas."
        />

        {/* 3 Executive Trust Guarantees Bar */}
        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
            <span>⚡ 15-Minute Priority Response</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700">
            <ShieldCheck className="w-4 h-4 text-red-600 shrink-0" />
            <span>🛡️ 100% Free Preliminary Advisory</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700">
            <Award className="w-4 h-4 text-amber-500 shrink-0" />
            <span>🏛️ 15+ PSU & Private Bank Tie-Ups</span>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ============================================================ */}
          {/* LEFT COLUMN: Senior Consultant Direct Desk & Credentials     */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="card-border-animated-dark rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white p-7 sm:p-9 shadow-2xl relative overflow-hidden border border-slate-800">
              {/* Subtle Ambient Halos */}
              <div className="absolute top-0 right-0 w-56 h-56 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-44 h-44 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Consultant Executive Badge */}
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-[11px] font-bold tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    Direct Consultant Desk
                  </div>

                  {/* Online Indicator */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-[11px] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Online Now</span>
                  </div>
                </div>

                {/* Profile Header Block */}
                <div className="flex items-center gap-4 pt-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 via-red-700 to-slate-900 p-0.5 shadow-lg shrink-0">
                    <div className="w-full h-full rounded-[14px] bg-slate-950 flex flex-col items-center justify-center text-center">
                      <span className="text-sm font-black text-white tracking-widest">SR</span>
                      <span className="text-[8px] font-bold text-amber-400 uppercase tracking-tight">GOVT DSA</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-black text-white tracking-tight">
                        Soumitra Roy
                      </h3>
                      <Award className="w-4 h-4 text-amber-400 shrink-0" title="Verified Consultant" />
                    </div>
                    <p className="text-xs font-semibold text-slate-300">
                      Senior Loan Consultant & Financial Advisor
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Empanelled Partner for SBI, PNB, BOB, HDFC & ICICI
                    </p>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="my-6 h-px bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800" />

                {/* Direct Action Touchpoints */}
                <div className="space-y-3.5 text-sm">
                  {/* Direct Phone */}
                  <div className="p-3.5 rounded-2xl bg-slate-800/90 border border-red-500/30 hover:border-red-500/60 transition-all group">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-700 text-white flex items-center justify-center shrink-0 shadow-md">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold text-red-400 uppercase tracking-wide">
                              Direct Calling Number
                            </span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-600/20 text-red-300 font-semibold">
                              Direct
                            </span>
                          </div>
                          <span className="text-base font-bold text-white group-hover:text-red-200 transition-colors block">
                            {siteData.contact.primaryPhoneDisplay}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => copyToClipboard(siteData.contact.primaryPhone, 'Primary number', 'phone1')}
                          className="p-2 rounded-lg bg-slate-700/80 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
                          title="Copy phone number"
                        >
                          {copiedKey === 'phone1' ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                        <a
                          href={`tel:${siteData.contact.primaryPhone}`}
                          className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center gap-1"
                        >
                          <span>Call</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Alternate Phone (if available) */}
                  {siteData.contact.secondaryPhone && (
                    <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-slate-600 transition-all group">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-700 text-white flex items-center justify-center shrink-0 font-bold">
                            <Phone className="w-5 h-5 text-slate-200" />
                          </div>
                          <div>
                            <span className="text-[11px] font-medium text-slate-400 block">
                              Alternate Calling Line
                            </span>
                            <span className="text-sm font-bold text-white group-hover:text-slate-200 transition-colors block">
                              {siteData.contact.secondaryPhoneDisplay}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            type="button"
                            onClick={() => copyToClipboard(siteData.contact.secondaryPhone, 'Alternate number', 'phone2')}
                            className="p-2 rounded-lg bg-slate-700/80 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
                            title="Copy alternate phone"
                          >
                            {copiedKey === 'phone2' ? (
                              <Check className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                          <a
                            href={`tel:${siteData.contact.secondaryPhone}`}
                            className="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs transition-colors flex items-center gap-1"
                          >
                            <span>Call</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* WhatsApp Quick Advisory Channel */}
                  <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400/80 transition-all group">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center shrink-0 shadow-md">
                          <MessageCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wide">
                              Instant WhatsApp Channel
                            </span>
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-semibold">
                              Fastest
                            </span>
                          </div>
                          <span className="text-sm font-bold text-white group-hover:text-emerald-200 transition-colors block">
                            {siteData.contact.whatsappDisplay}
                          </span>
                        </div>
                      </div>

                      <a
                        href={`https://wa.me/91${siteData.contact.whatsapp}?text=Hello%20Soumitra%20Roy,%20I%20would%20like%20to%20inquire%20about%20a%20loan%20for%20my%20profile.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5 shrink-0"
                      >
                        <span>Chat</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Email Channel */}
                  <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-slate-600 transition-all group">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-blue-600/80 text-white flex items-center justify-center shrink-0 font-bold">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 truncate">
                          <span className="text-[11px] font-medium text-slate-400 block">
                            Official Inquiries Email
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-300 transition-colors truncate block">
                            {siteData.contact.email}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => copyToClipboard(siteData.contact.email, 'Email address', 'email')}
                        className="p-2 rounded-lg bg-slate-700/80 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                        title="Copy email address"
                      >
                        {copiedKey === 'email' ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Consultation Timings Note */}
                <div className="mt-6 pt-5 border-t border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Office: 10:00 AM – 8:00 PM (Mon – Sat)</span>
                  </div>
                  <span className="text-[11px] text-amber-400 font-semibold">Sun by Appt</span>
                </div>
              </div>
            </div>

            {/* Quick Privacy & Safety Guarantee Card */}
            <div className="card-border-animated rounded-2xl bg-white p-5 border border-slate-200/90 shadow-sm text-left">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Bank-Grade Client Data Protection
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Your financial documents, KYC, and phone number are handled strictly with Soumitra Roy under complete privacy. We never sell contacts or spam you with telemarketing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Executive Loan Consultation & Application Form */}
          {/* ============================================================ */}
          <div className="lg:col-span-7">
            <div className="card-border-animated bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-9 text-left relative overflow-hidden">
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-emerald-500" />

              {/* Form Title & Subtitle */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 pb-5 border-b border-slate-100">
                <div>
                  <span className="inline-block text-[11px] font-black uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full mb-1">
                    Free Profile Evaluation
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Submit Your Loan Details
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Fill in your details below for personalized bank schemes, lowest interest rates & sanction estimates.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] font-bold text-slate-600 shrink-0 self-start">
                  <FileCheck2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>No CIBIL Impact</span>
                </div>
              </div>

              {/* Error Notice */}
              {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2.5 animate-shake">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submitted Confirmation State */}
              {submitted ? (
                <div className="py-8 px-4 sm:px-8 rounded-2xl bg-gradient-to-b from-emerald-50/60 to-white border border-emerald-200/80 text-center space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2">
                      Inquiry Ticket: {submissionId}
                    </span>
                    <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                      Thank You, {formData.name || 'Valued Client'}!
                    </h4>
                    <p className="text-sm text-slate-600 max-w-lg mx-auto mt-2 leading-relaxed">
                      Your loan inquiry has been logged directly on Senior Consultant Soumitra Roy's priority desk. We will evaluate your profile against current bank circulars and call you at{' '}
                      <strong className="text-slate-900 font-bold">{formData.phone}</strong> shortly.
                    </p>
                  </div>

                  {/* Summary Recap Badge */}
                  <div className="max-w-md mx-auto p-4 rounded-2xl bg-white border border-emerald-200/60 shadow-xs text-left grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Loan Scheme</span>
                      <strong className="text-slate-800 font-bold">{formData.loanType}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Requested Amount</span>
                      <strong className="text-slate-800 font-bold">
                        ₹{Number(formData.loanAmount).toLocaleString('en-IN')}{' '}
                        <span className="text-slate-500 font-normal">
                          ({formatIndianCurrencyWords(formData.loanAmount)})
                        </span>
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Income Profile</span>
                      <strong className="text-slate-800 font-bold truncate block">{formData.employmentType}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Target Bank</span>
                      <strong className="text-slate-800 font-bold truncate block">{formData.preferredBank}</strong>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`tel:${siteData.contact.primaryPhone}`}
                      className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-red-400" />
                      <span>Call Consultant Now ({siteData.contact.primaryPhoneDisplay})</span>
                    </a>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-5 py-3 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Application Form */
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  {/* Row 1: Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Sourav Mukherjee"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 text-sm text-slate-900 font-medium outline-none transition-all"
                        />
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <span className="text-sm">👤</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Contact Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 9876543210"
                          className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 text-sm text-slate-900 font-medium outline-none transition-all"
                        />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-slate-400 pointer-events-none text-xs font-bold">
                          <span>+91</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Loan Category & Approx Loan Amount */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Select Loan Category <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="loanType"
                          value={formData.loanType}
                          onChange={handleChange}
                          className="w-full pl-10 pr-9 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 text-sm text-slate-900 font-medium outline-none transition-all cursor-pointer appearance-none"
                        >
                          {siteData.services.map((svc) => (
                            <option key={svc.id} value={svc.title}>
                              {svc.title}
                            </option>
                          ))}
                        </select>
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Approx Loan Amount (₹) <span className="text-red-500">*</span>
                        </label>
                        {formData.loanAmount && (
                          <span className="text-[11px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                            {formatIndianCurrencyWords(formData.loanAmount)}
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          type="number"
                          name="loanAmount"
                          required
                          value={formData.loanAmount}
                          onChange={handleChange}
                          step="50000"
                          min="50000"
                          placeholder="1500000"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 text-sm text-slate-900 font-bold outline-none transition-all"
                        />
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none font-bold">
                          ₹
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Amount Selector Chips */}
                  <div>
                    <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Quick Amount Selector:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {QUICK_AMOUNTS.map((amt) => {
                        const isSelected = formData.loanAmount === amt.value;
                        return (
                          <button
                            key={amt.value}
                            type="button"
                            onClick={() => handleAmountPreset(amt.value)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-red-600 text-white shadow-xs scale-105'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                            }`}
                          >
                            {amt.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 3: Income Profile & Preferred Bank */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Borrower Income / Profile
                      </label>
                      <div className="relative">
                        <select
                          name="employmentType"
                          value={formData.employmentType}
                          onChange={handleChange}
                          className="w-full pl-10 pr-9 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 text-sm text-slate-900 font-medium outline-none transition-all cursor-pointer appearance-none"
                        >
                          <option value="Salaried (Govt / PSU / MNC / Private)">
                            Salaried (Govt / PSU / MNC / Private)
                          </option>
                          <option value="Business Owner / Merchant / Trader">
                            Business Owner / Merchant / Trader
                          </option>
                          <option value="Self-Employed Professional (Doctor/CA/Lawyer)">
                            Self-Employed Professional (Doctor / CA / Lawyer)
                          </option>
                          <option value="MSME / Small Shop Owner / Enterprise">
                            MSME / Small Shop Owner / Enterprise
                          </option>
                          <option value="Property Owner / Rental Income / Other">
                            Property Owner / Rental Income / Other
                          </option>
                        </select>
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Bank Scheme
                      </label>
                      <div className="relative">
                        <select
                          name="preferredBank"
                          value={formData.preferredBank}
                          onChange={handleChange}
                          className="w-full pl-10 pr-9 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 text-sm text-slate-900 font-medium outline-none transition-all cursor-pointer appearance-none"
                        >
                          {PREFERRED_BANKS.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none font-bold text-xs">
                          🏛️
                        </div>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Area & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your City / Locality Area
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="cityArea"
                          value={formData.cityArea}
                          onChange={handleChange}
                          placeholder="e.g. Sonarpur / Narendrapur / Kolkata"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 text-sm text-slate-900 font-medium outline-none transition-all"
                        />
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <MapPin className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. sourav@example.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 text-sm text-slate-900 font-medium outline-none transition-all"
                        />
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <Mail className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notes / Special Requirement */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Specific Loan Requirement or Query <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      name="message"
                      rows="2"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mention your preferred tenure, past loans, CIBIL profile, or specific branch requirement..."
                      className="w-full p-3.5 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-red-600 focus:ring-3 focus:ring-red-100 text-sm text-slate-900 font-medium outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Dual Submit Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                    {/* Primary Button: WhatsApp Application */}
                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="flex-1 inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Send via WhatsApp (Fastest)</span>
                    </button>

                    {/* Secondary Button: Request Phone Callback */}
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    >
                      <span>Request Advisor Callback</span>
                      <ArrowRight className="w-4 h-4 text-red-400" />
                    </button>
                  </div>

                  {/* Bottom Privacy Assurance Footer */}
                  <p className="text-[11px] text-center text-slate-500 pt-1">
                    🔒 Zero broker commissions charged to client • Direct Bank Manager liaison • 100% Data Confidentiality
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
