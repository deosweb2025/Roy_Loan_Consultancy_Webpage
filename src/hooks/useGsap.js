import { useEffect, useRef } from 'react';

export const useGsap = (animationFunction, deps = []) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = null;
    if (containerRef.current && typeof animationFunction === 'function') {
      ctx = animationFunction(containerRef);
    }

    return () => {
      if (ctx && typeof ctx.revert === 'function') {
        ctx.revert();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
};
