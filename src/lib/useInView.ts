'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Reveals once and stays revealed — the observer disconnects the first time
 * the element intersects, so entrance animations never flicker or replay
 * as the user scrolls back and forth past the threshold.
 */
export function useInView<T extends HTMLElement>(rootMargin = '200px') {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, inView] as const;
}
