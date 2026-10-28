import React from 'react';
import { ShieldCheck, CheckCircle2, TrendingDown, BadgeCheck } from 'lucide-react';

// Crisp, authentic SVG Vector Emblems for India's major banking institutions
const BankEmblem = ({ bankId, className = "w-8 h-8" }) => {
  switch (bankId) {
    case 'sbi':
      // State Bank of India - iconic navy circle with keyhole cut
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" aria-label="State Bank of India Logo">
          <circle cx="50" cy="50" r="48" fill="#0079C1" />
          <circle cx="50" cy="46" r="19" fill="#FFFFFF" />
          <rect x="46" y="46" width="8" height="34" fill="#0079C1" rx="2" />
          <circle cx="50" cy="46" r="10" fill="#0079C1" />
        </svg>
      );
    case 'pnb':
      // Punjab National Bank - deep maroon with gold padlock / security vault emblem
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" aria-label="Punjab National Bank Logo">
          <circle cx="50" cy="50" r="48" fill="#A21D22" />
          <circle cx="50" cy="50" r="40" stroke="#E5A823" strokeWidth="2.5" />
          <path
            d="M50 24C37 24 28 33 28 45C28 57 37 66 50 66C63 66 72 57 72 45C72 33 63 24 50 24Z"
            stroke="#FFFFFF"
            strokeWidth="4"
          />
          <path
            d="M50 33C43.5 33 38 38.5 38 45C38 51.5 43.5 57 50 57C56.5 57 62 51.5 62 45C62 38.5 56.5 33 50 33Z"
            fill="#E5A823"
          />
          <path d="M46 45H54V76H46V45Z" fill="#FFFFFF" />
          <circle cx="50" cy="45" r="4" fill="#A21D22" />
        </svg>
      );
    case 'bob':
      // Bank of Baroda - vermillion sunburst rays
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" aria-label="Bank of Baroda Logo">
          <rect width="100" height="100" rx="20" fill="#F26522" />
          <path
            d="M32 28C44 20 62 23 72 35C76 40 77 46 76 52C75 48 71 42 65 38C56 32 44 32 35 39C29 43 26 49 25 55C24 45 27 34 32 28Z"
            fill="#FFFFFF"
          />
          <path
            d="M40 43C48 37 60 39 68 47C71 51 72 55 71 59C70 56 67 52 62 49C55 45 46 45 39 50C34 53 32 57 31 62C30 55 33 47 40 43Z"
            fill="#FFFFFF"
          />
          <circle cx="52" cy="62" r="7" fill="#FFFFFF" />
        </svg>
      );
    case 'ubi':
      // Union Bank of India - interlocking red and blue dynamic U loops
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" aria-label="Union Bank of India Logo">
          <rect width="100" height="100" rx="20" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
          <path
            d="M26 28V55C26 65 33 72 43 72C48 72 52 70 55 66V55C53 58 49 60 45 60C39 60 35 56 35 50V28H26Z"
            fill="#EC1C24"
          />
          <path
            d="M74 28V55C74 65 67 72 57 72C52 72 48 70 45 66V55C47 58 51 60 55 60C61 60 65 56 65 50V28H74Z"
            fill="#0054A6"
          />
          <circle cx="50" cy="38" r="5" fill="#EC1C24" />
        </svg>
      );
    case 'boi':
      // Bank of India - Royal Star of India
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" aria-label="Bank of India Logo">
          <rect width="100" height="100" rx="20" fill="#002F6C" />
          <circle cx="50" cy="50" r="40" fill="#DF2B26" />
          <polygon
            points="50,18 58,38 80,38 62,51 69,72 50,59 31,72 38,51 20,38 42,38"
            fill="#FFD200"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
          <circle cx="50" cy="48" r="6" fill="#002F6C" />
        </svg>
      );
    case 'cbi':
      // Central Bank of India - CBI shield & monogram
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" aria-label="Central Bank of India Logo">
          <rect width="100" height="100" rx="20" fill="#0B2B64" />
          <circle cx="50" cy="50" r="38" fill="#EB1C24" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="50" cy="50" r="28" fill="#0B2B64" />
          <circle cx="50" cy="50" r="14" fill="#FFFFFF" />
          <text
            x="50"
            y="55"
            textAnchor="middle"
            fill="#0B2B64"
            fontSize="13"
            fontWeight="900"
            fontFamily="sans-serif"
          >
            CBI
          </text>
        </svg>
      );
    case 'hdfc':
      // HDFC Bank - iconic geometric cross & square
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" aria-label="HDFC Bank Logo">
          <rect width="100" height="100" rx="20" fill="#004B8D" />
          <rect x="22" y="22" width="56" height="56" fill="#FFFFFF" rx="4" />
          <rect x="34" y="34" width="32" height="32" fill="#ED1B2E" />
          <rect x="45" y="22" width="10" height="56" fill="#004B8D" />
          <rect x="22" y="45" width="56" height="10" fill="#004B8D" />
          <rect x="42" y="42" width="16" height="16" fill="#ED1B2E" />
        </svg>
      );
    case 'icici':
      // ICICI Bank - maroon with stylized flame 'i'
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" aria-label="ICICI Bank Logo">
          <rect width="100" height="100" rx="20" fill="#851214" />
          <circle cx="50" cy="50" r="38" stroke="#F37024" strokeWidth="4" />
          <circle cx="50" cy="32" r="7" fill="#F37024" />
          <path
            d="M44 44H56V68C56 71 53 74 48 74H44V66H48C49 66 50 65 50 64V52H44V44Z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case 'axis':
      // Axis Bank - burgundy with signature inverted A chevron
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" aria-label="Axis Bank Logo">
          <rect width="100" height="100" rx="20" fill="#97144D" />
          <path d="M50 20L22 76H40L50 54L60 76H78L50 20Z" fill="#FFFFFF" />
          <polygon points="50,40 43,56 57,56" fill="#97144D" />
        </svg>
      );
    default:
      return null;
  }
};

const PARTNER_BANKS = [
  {
    id: 'sbi',
    name: 'State Bank of India',
    short: 'SBI',
    type: 'Govt Bank',
    brandColor: '#0079C1',
    hoverBorder: 'hover:border-[#0079C1]',
    hoverBg: 'hover:bg-sky-50/40',
    hoverText: 'group-hover:text-[#0079C1]',
    roi: 'From 8.40%*',
  },
  {
    id: 'pnb',
    name: 'Punjab National Bank',
    short: 'PNB',
    type: 'Govt Bank',
    brandColor: '#A21D22',
    hoverBorder: 'hover:border-[#A21D22]',
    hoverBg: 'hover:bg-red-50/40',
    hoverText: 'group-hover:text-[#A21D22]',
    roi: 'From 8.45%*',
  },
  {
    id: 'ubi',
    name: 'Union Bank of India',
    short: 'UBI',
    type: 'Govt Bank',
    brandColor: '#EC1C24',
    hoverBorder: 'hover:border-[#EC1C24]',
    hoverBg: 'hover:bg-rose-50/40',
    hoverText: 'group-hover:text-[#EC1C24]',
    roi: 'From 8.45%*',
  },
  {
    id: 'boi',
    name: 'Bank of India',
    short: 'BOI',
    type: 'Govt Bank',
    brandColor: '#002F6C',
    hoverBorder: 'hover:border-[#002F6C]',
    hoverBg: 'hover:bg-blue-50/40',
    hoverText: 'group-hover:text-[#002F6C]',
    roi: 'From 8.45%*',
  },
  {
    id: 'cbi',
    name: 'Central Bank of India',
    short: 'CBI',
    type: 'Govt Bank',
    brandColor: '#0B2B64',
    hoverBorder: 'hover:border-[#0B2B64]',
    hoverBg: 'hover:bg-indigo-50/40',
    hoverText: 'group-hover:text-[#0B2B64]',
    roi: 'From 8.50%*',
  },
  {
    id: 'bob',
    name: 'Bank of Baroda',
    short: 'BOB',
    type: 'Govt Bank',
    brandColor: '#F26522',
    hoverBorder: 'hover:border-[#F26522]',
    hoverBg: 'hover:bg-orange-50/40',
    hoverText: 'group-hover:text-[#F26522]',
    roi: 'From 8.40%*',
  },
  {
    id: 'hdfc',
    name: 'HDFC Bank',
    short: 'HDFC',
    type: 'Pvt Bank',
    brandColor: '#004B8D',
    hoverBorder: 'hover:border-[#004B8D]',
    hoverBg: 'hover:bg-slate-50',
    hoverText: 'group-hover:text-[#004B8D]',
    roi: 'From 8.70%*',
  },
  {
    id: 'icici',
    name: 'ICICI Bank',
    short: 'ICICI',
    type: 'Pvt Bank',
    brandColor: '#851214',
    hoverBorder: 'hover:border-[#851214]',
    hoverBg: 'hover:bg-amber-50/40',
    hoverText: 'group-hover:text-[#851214]',
    roi: 'From 8.75%*',
  },
  {
    id: 'axis',
    name: 'Axis Bank',
    short: 'AXIS',
    type: 'Pvt Bank',
    brandColor: '#97144D',
    hoverBorder: 'hover:border-[#97144D]',
    hoverBg: 'hover:bg-pink-50/40',
    hoverText: 'group-hover:text-[#97144D]',
    roi: 'From 8.75%*',
  },
];

const BankPartners = () => {
  return (
    <section className="bg-slate-50/60 py-8 sm:py-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200/80">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-red-700 tracking-wider uppercase bg-red-50/90 border border-red-200/80 px-2.5 py-0.5 rounded-full mb-1 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
              Verified Government & PSU Tie-Ups
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              All Government & Nationalised Bank Loans Available
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Direct branch liaison ensures maximum approval rates, lowest interest rates & zero intermediary charges
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs shrink-0 self-start md:self-auto">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Zero Advance Upfront Charges • Direct Bank Sanctions</span>
          </div>
        </div>

        {/* Movable Horizontal Gliding Cards Ribbon */}
        <div className="relative overflow-hidden py-2 my-2">
          {/* Subtle Left & Right Edge Gradient Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

          {/* Infinite Smooth Gliding Strip (Movable one side to another side) */}
          <div className="animate-marquee flex items-center gap-3 sm:gap-3.5 py-3 select-none">
            {[...PARTNER_BANKS, ...PARTNER_BANKS].map((bank, index) => (
              <div
                key={`${bank.id}-${index}`}
                className={`group relative p-2.5 sm:p-3 rounded-xl border border-slate-200/90 bg-white transition-all duration-200 text-center flex flex-col items-center justify-between w-[126px] sm:w-[136px] min-h-[120px] sm:min-h-[128px] shrink-0 shadow-2xs hover:shadow-md hover:-translate-y-1 cursor-pointer ${bank.hoverBorder} ${bank.hoverBg}`}
                title={`${bank.name} (${bank.short}) - ${bank.type} • Direct Liaison`}
              >
                {/* Subtle Brand Accent Bar on Top */}
                <div
                  className="absolute top-0 left-3 right-3 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: bank.brandColor }}
                />

                {/* Official Bank SVG Emblem */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0 mb-1 group-hover:scale-110 transition-transform duration-200">
                  <BankEmblem bankId={bank.id} className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-2xs" />
                </div>

                {/* Full Bank Name - Formatted to never truncate */}
                <div className="w-full my-auto px-0.5">
                  <span className="text-[10px] font-black tracking-wide text-slate-400 block uppercase leading-none mb-0.5">
                    {bank.short}
                  </span>
                  <p className={`text-[11px] font-bold text-slate-800 leading-tight transition-colors ${bank.hoverText}`}>
                    {bank.name}
                  </p>
                </div>

                {/* Type Badge & Micro-ROI */}
                <div className="mt-1 pt-1 border-t border-slate-100 w-full flex items-center justify-center gap-1">
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.2 rounded tracking-tight ${
                      bank.type === 'Govt Bank'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-blue-50 text-blue-700'
                    }`}
                  >
                    {bank.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Micro-Trust Bar at Bottom */}
        <div className="mt-4 pt-3 border-t border-slate-200/70 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
          <span className="inline-flex items-center gap-1.5 font-medium">
            <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
            Direct liaison with Chief Managers at Sonarpur, Garia & Kolkata branches
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <TrendingDown className="w-3.5 h-3.5 text-red-600" />
            Lowest interest rates starting from 8.40% p.a.*
          </span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700">
            100% Free Advisory • Direct Bank Letterhead Sanctions
          </span>
        </div>
      </div>
    </section>
  );
};

export default BankPartners;
