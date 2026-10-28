import React, { useState, useMemo } from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Calculator = ({ onApplyWithAmount }) => {
  const [amount, setAmount] = useState(1500000); // 15 Lakh default
  const [rate, setRate] = useState(8.5); // 8.5% default
  const [tenureYears, setTenureYears] = useState(15); // 15 years default

  // Preset Configurations
  const presets = [
    { label: 'Home Loan', rate: 8.4, tenure: 20, amount: 3000000 },
    { label: 'Personal Loan', rate: 10.5, tenure: 5, amount: 500000 },
    { label: 'Business Loan', rate: 11.5, tenure: 5, amount: 1500000 },
    { label: 'Car Loan', rate: 8.75, tenure: 7, amount: 800000 },
  ];

  const applyPreset = (p) => {
    setRate(p.rate);
    setTenureYears(p.tenure);
    setAmount(p.amount);
  };

  // EMI Math Calculation
  const calculation = useMemo(() => {
    const P = Number(amount);
    const r = Number(rate) / 12 / 100;
    const n = Number(tenureYears) * 12;

    if (P <= 0 || r <= 0 || n <= 0) {
      return { emi: 0, totalInterest: 0, totalPayment: 0, principalRatio: 50 };
    }

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;
    const principalRatio = Math.round((P / totalPayment) * 100);

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
      principalRatio,
      interestRatio: 100 - principalRatio,
    };
  }, [amount, rate, tenureYears]);

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Interactive Financial Planning"
          title="Plan Your Monthly EMI & Total Interest"
          subtitle="Use our accurate loan calculator to estimate monthly repayments and compare rates before applying to banks."
        />

        {/* Preset quick buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
            Quick Presets:
          </span>
          {presets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => applyPreset(preset)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-700 border border-slate-200 transition-colors cursor-pointer"
            >
              {preset.label} ({preset.rate}%)
            </button>
          ))}
        </div>

        {/* Main Calculator Card */}
        <div className="mt-10 max-w-5xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Sliders Column */}
            <div className="lg:col-span-7 space-y-7">
              {/* Loan Amount Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-slate-700">
                    Loan Amount Required
                  </label>
                  <span className="text-lg sm:text-xl font-extrabold text-red-600 font-display">
                    {formatINR(amount)}
                  </span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="10000000"
                  step="25000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  aria-label="Loan Amount"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                  <span>₹50,000</span>
                  <span>₹50 Lakhs</span>
                  <span>₹1 Crore</span>
                </div>
              </div>

              {/* Interest Rate Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-slate-700">
                    Annual Interest Rate (% p.a.)
                  </label>
                  <span className="text-lg sm:text-xl font-extrabold text-slate-900 font-display">
                    {rate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="7.0"
                  max="18.0"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  aria-label="Interest Rate"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                  <span>7.0% (Govt / Subsidy)</span>
                  <span>12.0%</span>
                  <span>18.0%</span>
                </div>
              </div>

              {/* Tenure Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-slate-700">
                    Loan Tenure (Years)
                  </label>
                  <span className="text-lg sm:text-xl font-extrabold text-slate-900 font-display">
                    {tenureYears} Years ({tenureYears * 12} Months)
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  aria-label="Loan Tenure in Years"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                  <span>1 Year</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center gap-2.5">
                <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  Tip: Shorter tenures incur significantly lower total interest. Soumitra Roy helps structure part-prepayment to save lakhs!
                </span>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Estimated Monthly Repayment
                </span>

                <div className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-amber-400 font-display">
                  {formatINR(calculation.emi)}
                  <span className="text-xs font-semibold text-slate-300 ml-1">/ month</span>
                </div>

                <div className="mt-6 space-y-3 pt-6 border-t border-slate-800 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Principal Amount:</span>
                    <span className="font-bold text-white">{formatINR(amount)}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Total Interest Payable:</span>
                    <span className="font-bold text-red-400">{formatINR(calculation.totalInterest)}</span>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-slate-800">
                    <span className="font-semibold text-slate-200">Total Amount (P + I):</span>
                    <span className="font-extrabold text-emerald-400 text-base">
                      {formatINR(calculation.totalPayment)}
                    </span>
                  </div>
                </div>

                {/* Ratio Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1 font-medium">
                    <span>Principal: {calculation.principalRatio}%</span>
                    <span>Interest: {calculation.interestRatio}%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden flex">
                    <div
                      className="bg-emerald-500 h-full transition-all duration-300"
                      style={{ width: `${calculation.principalRatio}%` }}
                    />
                    <div
                      className="bg-red-500 h-full transition-all duration-300"
                      style={{ width: `${calculation.interestRatio}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Apply Action Button */}
              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  onClick={() => onApplyWithAmount && onApplyWithAmount(amount)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-lg shadow-red-600/30 hover:shadow-red-600/40 transition-all cursor-pointer"
                >
                  <span>Apply for this Loan Amount</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-[10px] text-center text-slate-400 mt-2">
                  *Indicative EMI. Actual sanction terms depend on bank discretion and CIBIL score.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
