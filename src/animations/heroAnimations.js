import { gsap } from './gsapConfig';

export const animateHeroTimeline = (containerRef, onComplete) => {
  if (!containerRef?.current) return null;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out', duration: 0.8 },
      onComplete,
    });

    tl.from('.hero-badge', {
      opacity: 0,
      y: -15,
      duration: 0.45,
    })
      .from(
        '.hero-title',
        {
          opacity: 0,
          y: 20,
          duration: 0.65,
        },
        '-=0.2'
      )
      .from(
        '.hero-card',
        {
          opacity: 0,
          scale: 0.96,
          y: 20,
          duration: 0.75,
          ease: 'power2.out',
          clearProps: 'all',
        },
        '<+=0.1'
      )
      .from(
        '.hero-subtitle',
        {
          opacity: 0,
          y: 18,
          duration: 0.55,
        },
        '-=0.55'
      )
      .from(
        '.hero-desc',
        {
          opacity: 0,
          y: 16,
          duration: 0.55,
        },
        '-=0.35'
      )
      .from(
        '.hero-cta',
        {
          opacity: 0,
          y: 14,
          duration: 0.5,
        },
        '-=0.35'
      )
      .from(
        '.hero-stats',
        {
          opacity: 0,
          y: 12,
          duration: 0.5,
        },
        '-=0.3'
      );
  }, containerRef);

  return ctx;
};
