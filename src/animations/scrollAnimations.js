import { gsap, ScrollTrigger } from './gsapConfig';

export const initScrollReveals = (scopeRef) => {
  if (!scopeRef?.current) return null;

  const ctx = gsap.context(() => {
    // Reveal section headers safely with clearProps so they are never trapped at opacity: 0
    gsap.utils.toArray('.reveal-heading').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0.8, y: 15 },
        {
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          clearProps: 'all',
        }
      );
    });

    // Subtle parallax on large images
    gsap.utils.toArray('.parallax-image').forEach((img) => {
      gsap.to(img, {
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: -20,
        ease: 'none',
      });
    });

    // Refresh ScrollTrigger so all positions are calculated accurately
    ScrollTrigger.refresh();
  }, scopeRef);

  return ctx;
};

