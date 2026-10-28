import React from 'react';

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = '',
}) => {
  return (
    <div
      className={`max-w-3xl ${
        centered ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3.5 ${
            dark
              ? 'bg-red-500/20 text-red-300 border border-red-500/30'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          {eyebrow}
        </div>
      )}

      {title && (
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
            dark ? 'text-white' : 'text-slate-900'
          }`}
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
