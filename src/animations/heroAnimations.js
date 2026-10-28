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
      duration: 0.5,
    })
      .from(
        '.hero-title',
        {
          opacity: 0,
          y: 25,
          duration: 0.7,
        },
        '-=0.2'
      )
      .from(
        '.hero-subtitle',
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        '-=0.3'
      )
      .from(
        '.hero-desc',
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        '-=0.3'
      )
      .from(
        '.hero-cta',
        {
          opacity: 0,
          y: 15,
          duration: 0.5,
        },
        '-=0.3'
      )
      .from(
        '.hero-stats',
        {
          opacity: 0,
          y: 15,
          duration: 0.5,
        },
        '-=0.2'
      )
      .from(
        '.hero-card',
        {
          opacity: 0,
          scale: 0.96,
          y: 25,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'all',
        },
        '-=0.5'
      );
  }, containerRef);

  return ctx;
};
