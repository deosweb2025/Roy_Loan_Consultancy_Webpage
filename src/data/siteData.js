// Real verified client data for ROY LOAN CONSULTANCY
// Founder & Consultant: Soumitra Roy

import visitingCardImg from '../assets/images/edited/visiting_card_official.jpg';
import consultationImg from '../assets/images/edited/client_consultation.jpg';
import exteriorBoardImg from '../assets/images/edited/exterior_board_focused.jpg';
import signboardGoldImg from '../assets/images/edited/signboard_gold_black.jpg';
import advisoryDeskImg from '../assets/images/edited/advisory_session.jpg';
import infrastructureImg from '../assets/images/edited/office_infrastructure.jpg';
import facadeFullImg from '../assets/images/edited/facade_full.jpg';
import officePanoramicImg from '../assets/images/edited/office_panoramic.jpg';

export const siteData = {
  company: {
    name: "Roy Loan Consultancy",
    consultant: "Soumitra Roy",
    role: "Senior Loan & Financial Consultant",
    tagline: "All Government Bank Loans Available",
    subtitle: "Fast, Transparent & Reliable Loan Advisory in Kolkata",
    experience: "Trusted Local Consultancy",
    registeredOffice: "Narendrapur Rathtala, Sonarpur, Kolkata - 700103",
    website: "www.royloanconsultancy.in",
  },

  contact: {
    primaryPhone: "7278917176",
    primaryPhoneDisplay: "+91 72789 17176",
    whatsapp: "7278917176",
    whatsappDisplay: "+91 72789 17176",
    email: "rsoumitra72@gmail.com",
    formattedAddress: "N. S. Bose Road, Narendrapur Rathtala, Sonarpur, Kolkata, South 24 Parganas, West Bengal - 700103",
    shortAddress: "Narendrapur Rathtala, Sonarpur, Kolkata - 700103",
    googleMapUrl: "https://maps.app.goo.gl/jFbkRjeaJvhg5UEx6",
  },

  timings: {
    days: "Monday – Saturday",
    hours: "10:00 AM – 8:00 PM",
    sunday: "Open for Urgent Appointments",
  },

  navigation: [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Loan Services", href: "#services" },
    { name: "Office & Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ],

  stats: [
    { label: "Bank Loan Types", value: "9+" },
    { label: "Partner PSU & Pvt Banks", value: "15+" },
    { label: "Loan Approval Rate", value: "98%*" },
    { label: "Consultation Fee", value: "100% Free" },
  ],

  partnerBanks: [
    { name: "State Bank of India", short: "SBI", type: "Government Bank" },
    { name: "Punjab National Bank", short: "PNB", type: "Government Bank" },
    { name: "Union Bank of India", short: "UBI", type: "Government Bank" },
    { name: "Bank of India", short: "BOI", type: "Government Bank" },
    { name: "Central Bank of India", short: "CBI", type: "Government Bank" },
    { name: "Bank of Baroda", short: "BOB", type: "Government Bank" },
    { name: "HDFC Bank", short: "HDFC", type: "Leading Private Bank" },
    { name: "ICICI Bank", short: "ICICI", type: "Leading Private Bank" },
    { name: "Axis Bank", short: "AXIS", type: "Leading Private Bank" },
  ],

  services: [
    {
      id: "personal-loan",
      title: "Personal Loan",
      badge: "Quick Disbursement",
      icon: "UserCheck",
      description: "Fast collateral-free personal loans for salaried employees and self-employed individuals to fund medical needs, weddings, travel, or debt consolidation.",
      highlight: "Unsecured • Minimal Paperwork",
      interestRate: "Starting 10.25% p.a.*",
      maxTenure: "Up to 5 - 7 Years",
      documents: ["Last 3 Months Salary Slips", "6 Months Bank Statement", "PAN & Aadhaar Card", "Form 16 / ITR"],
      keyFeatures: ["Zero collateral requirement", "Approval in 24-48 hours*", "Flexible repayment options"],
    },
    {
      id: "home-loan",
      title: "Home Loan",
      badge: "Lowest Interest Rates",
      icon: "Home",
      description: "Affordable home loans for ready-to-move flats, under-construction apartments, self-construction on plots, renovation, and balance transfers from other banks.",
      highlight: "Government Subsidy & Low Rates",
      interestRate: "Starting 8.40% p.a.*",
      maxTenure: "Up to 30 Years",
      documents: ["Property Chain of Title", "Sanctioned Building Plan", "Income Documents / ITR", "KYC Documents"],
      keyFeatures: ["Highest loan-to-value ratio", "Tax savings under Sec 80C & 24B", "Smooth legal & valuation support"],
    },
    {
      id: "business-loan",
      title: "Business Loan",
      badge: "Working Capital & Growth",
      icon: "Briefcase",
      description: "Dedicated financing for retail shop owners, traders, manufacturers, contractors, and service providers looking to expand operations or manage cash flows.",
      highlight: "Customized for Small & Mid Business",
      interestRate: "Starting 11.50% p.a.*",
      maxTenure: "Up to 5 Years",
      documents: ["2-3 Years ITR with Computation", "GST Returns (12 Months)", "Bank Statements (1 Year)", "Business Registration / Trade License"],
      keyFeatures: ["No asset blockage required for unsecured options", "Fast working capital sanctions", "Overdraft (OD) & Term loan options"],
    },
    {
      id: "msme-mudra-loan",
      title: "MSME Mudra Loan",
      badge: "Govt. Supported Schemes",
      icon: "Award",
      description: "Specialized assistance for Prime Minister Mudra Yojana (PMMY) loans covering Shishu (up to ₹50k), Kishor (up to ₹5L), and Tarun (up to ₹10L) categories.",
      highlight: "PMMY & MSME Credit Linked",
      interestRate: "Competitive Govt Scheme Rates",
      maxTenure: "Up to 5 Years",
      documents: ["Udyam MSME Certificate", "Project Report / Business Outline", "KYC & Address Proof", "Current Account Statements"],
      keyFeatures: ["No collateral required under Govt Credit Guarantee", "Subsidized processing charges", "Empowering local micro-enterprises"],
    },
    {
      id: "mortgage-loan",
      title: "Mortgage Loan (LAP)",
      badge: "High Loan Amount",
      icon: "Building2",
      description: "Loan Against Property (LAP) allowing you to monetize residential or commercial property equity for high-value business expansion or family obligations.",
      highlight: "Retain Ownership • Maximum Funding",
      interestRate: "Starting 9.00% p.a.*",
      maxTenure: "Up to 15 - 20 Years",
      documents: ["Original Title Deed & Parchas", "Khajna / Property Tax Receipts", "Applicant Income Proofs", "Sanction Plan Copy"],
      keyFeatures: ["Substantially lower interest than personal loans", "Higher sanction limits up to ₹5+ Crores", "Continue living/working in the property"],
    },
    {
      id: "car-loan",
      title: "Car & Vehicle Loan",
      badge: "Instant Approval",
      icon: "Car",
      description: "Attractive vehicle loans for brand new cars, pre-owned certified vehicles, or commercial transport fleets with competitive bank financing.",
      highlight: "Up to 90-100% On-Road Funding*",
      interestRate: "Starting 8.75% p.a.*",
      maxTenure: "Up to 7 Years",
      documents: ["Car Proforma Invoice", "Salary / Business Proof", "KYC Identification", "6 Months Bank Statement"],
      keyFeatures: ["Quick sanction letter", "Special tie-ups with leading automobile dealerships", "Part-prepayment flexibility"],
    },
    {
      id: "gold-loan",
      title: "Gold Loan Etc.",
      badge: "Instant Same-Day Cash",
      icon: "Coins",
      description: "Immediate liquidity against your gold jewelry or assets deposited safely in government and authorized bank lockers with maximum per-gram valuation.",
      highlight: "Instant 30-Minute Disbursement",
      interestRate: "Starting 7.90% p.a.*",
      maxTenure: "Flexible from 3 Months to 3 Years",
      documents: ["KYC (Aadhaar / Voter ID / PAN)", "Gold Jewelry Items for Appraisal"],
      keyFeatures: ["Zero CIBIL score barrier", "Maximum safety inside bank vaults", "Bullet repayment or monthly interest only"],
    },
    {
      id: "balance-transfer",
      title: "Loan Balance Transfer & Top-Up",
      badge: "Save Lakhs on Interest",
      icon: "ArrowLeftRight",
      description: "Shift your existing high-interest home, business, or mortgage loan from private lenders or NBFCs to low-interest PSU banks, with an additional cash top-up facility.",
      highlight: "Lower Monthly EMI • Extra Cash Top-Up",
      interestRate: "Starting 8.35% p.a.*",
      maxTenure: "Up to 25 - 30 Years",
      documents: ["Existing Loan Sanction Letter", "12 Months Repayment Track (SOA)", "Foreclosure / Outstanding Statement", "Income / KYC Documents"],
      keyFeatures: ["Drastic reduction in monthly interest outgo", "Immediate sanction of extra top-up capital", "Complete file clearance & NOC transition support"],
    },
    {
      id: "education-loan",
      title: "Education & Career Loan",
      badge: "Govt. Subsidized Schemes",
      icon: "GraduationCap",
      description: "Concessional student loans for higher education, engineering, medical, MBA, and overseas universities with central government interest subsidy (CSIS) schemes.",
      highlight: "Moratorium Period • Zero Collateral up to ₹7.5L",
      interestRate: "Starting 8.15% p.a.*",
      maxTenure: "Up to 15 Years after Course",
      documents: ["Admission Offer Letter / I-20", "Fee Structure & Course Breakdown", "Academic Marksheets (10th/12th/Grad)", "Co-borrower (Parent) Income Proof"],
      keyFeatures: ["Up to 100% course + living cost coverage", "Tax deduction on interest under Sec 80E", "Zero repayment pressure during study period"],
    },
  ],

  gallery: [
    {
      id: 1,
      image: visitingCardImg,
      title: "Official Consultant Business Card",
      subtitle: "Soumitra Roy, Consultant - Roy Loan Consultancy",
      category: "Credentials",
      badge: "Official Card",
      caption: "Certified consultancy card detailing services: Personal, Mortgage, Business, MSME Mudra, Car, Home, and Gold Loans.",
    },
    {
      id: 2,
      image: consultationImg,
      title: "Client Consultation & Advisory",
      subtitle: "In-Person Loan Guidance at Narendrapur Office",
      category: "Advisory Desk",
      badge: "Customer First",
      caption: "Direct consultation session evaluating customer loan eligibility, bank selection, and interest rate optimization.",
    },
    {
      id: 3,
      image: exteriorBoardImg,
      title: "Main Office Front & Services Display",
      subtitle: "Rathtala Narendrapur Branch",
      category: "Office Facade",
      badge: "Govt Banks Approved",
      caption: "Exterior signage highlighting approvals across SBI, PNB, Union Bank, Bank of India, and Central Bank of India.",
    },
    {
      id: 4,
      image: signboardGoldImg,
      title: "Executive Branch Signage",
      subtitle: "Roy Loan Consultancy - Soumitra Roy",
      category: "Branding",
      badge: "Verified Branch",
      caption: "Prominent executive signage located directly on N. S. Bose Road, Narendrapur Rathtala, Kolkata - 700103.",
    },
    {
      id: 5,
      image: advisoryDeskImg,
      title: "Loan Documentation & Verification",
      subtitle: "Dedicated Back-Office Processing",
      category: "Operations",
      badge: "Fast Track",
      caption: "Scrutiny of financial profiles, tax returns, and KYC documents ensuring seamless, zero-rejection bank submissions.",
    },
    {
      id: 6,
      image: infrastructureImg,
      title: "Office Premises & Client Reception",
      subtitle: "Secure & Modern Air-Conditioned Setup",
      category: "Infrastructure",
      badge: "CCTV Monitored",
      caption: "Client meeting zone equipped with digital banking verification tools and 24x7 security monitoring for document safety.",
    },
    {
      id: 7,
      image: facadeFullImg,
      title: "Full Branch Exterior View",
      subtitle: "Convenient Landmark at Rathtala More",
      category: "Location",
      badge: "Prime Location",
      caption: "Easy-to-access street front on Netaji Subhash Chandra Bose Road, minutes away from Sonarpur and Garia.",
    },
    {
      id: 8,
      image: officePanoramicImg,
      title: "Office Consultation Zone",
      subtitle: "Warm, Courteous Financial Atmosphere",
      category: "Atmosphere",
      badge: "Personalized Care",
      caption: "Welcoming advisory environment where every client is treated with patience, privacy, and dedicated guidance.",
    },
  ],

  whyChooseUs: [
    {
      title: "All Govt & PSU Bank Approvals",
      description: "Direct liaison with State Bank of India, PNB, Union Bank, and Bank of India gives you access to genuine low-interest schemes.",
      icon: "Building",
    },
    {
      title: "Doorstep Document Collection",
      description: "We pick up your paperwork from your home or office across Kolkata, saving your precious work hours.",
      icon: "FileCheck",
    },
    {
      title: "Zero Hidden Charges & 100% Transparency",
      description: "No misleading terms. You are fully informed of processing fees, interest rates, and loan structures upfront.",
      icon: "ShieldAlert",
    },
    {
      title: "Overcoming CIBIL & Documentation Challenges",
      description: "Experienced advisory to structure your file effectively even if you have past CIBIL issues or unconventional income sources.",
      icon: "Sparkles",
    },
  ],

  loanProcess: [
    {
      step: "01",
      title: "Free Eligibility Assessment",
      desc: "Call or visit Soumitra Roy at our Narendrapur Rathtala office. We analyze your income, existing EMIs, and funding requirement.",
    },
    {
      step: "02",
      title: "Bank Matching & Rate Comparison",
      desc: "We compare current interest rates across SBI, PNB, Union Bank, and top private banks to pick the lowest EMI option for you.",
    },
    {
      step: "03",
      title: "Hassle-Free File Preparation",
      desc: "We assemble your complete documentation file, ensure compliance with bank checklists, and submit directly to the branch manager.",
    },
    {
      step: "04",
      title: "Sanction & Direct Disbursement",
      desc: "Fast legal/technical clearances and prompt sanction letter generation, with funds disbursed directly to your bank account.",
    },
  ],

  faq: [
    {
      q: "What types of loans does Roy Loan Consultancy handle?",
      a: "We assist with Personal Loans, Home Loans, Business Loans, MSME Mudra Loans, Mortgage Loans (LAP), Car Loans, and Gold Loans across government and private banks.",
    },
    {
      q: "Where is the office located and can I walk in directly?",
      a: "Yes! Our office is located at Narendrapur Rathtala, Sonarpur, Kolkata - 700103 on N. S. Bose Road. You can walk in between 10:00 AM and 8:00 PM Monday through Saturday, or call +91 72789 17176 to schedule an appointment.",
    },
    {
      q: "Can you help if I am self-employed or run a small shop?",
      a: "Absolutely. We specialize in Business Loans and MSME Mudra Loans for local shopkeepers, traders, contractors, and entrepreneurs with or without formal audited balance sheets.",
    },
    {
      q: "How long does a loan sanction typically take?",
      a: "Personal and Gold Loans can be processed within 24 to 48 hours. Home, Mortgage, and Business Loans usually take between 4 to 7 working days depending on property and bank documentation.",
    },
  ],
};
