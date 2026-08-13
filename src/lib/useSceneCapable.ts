'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

const MOBILE_BREAKPOINT = 768;

function hasWebgl(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')
    );
  } catch {
    return false;
  }
}

/**
 * Decides whether to show the 3D corridor or the deliberately-designed 2D
 * fallback. False on narrow viewports, on reduced-motion preference, and on
 * any device that fails a basic WebGL capability check — never a degraded
 * 3D scene, always the real 2D design instead.
 */
export function useSceneCapable(): boolean | null {
  const reducedMotion = useReducedMotion();
  const [capable, setCapable] = useState<boolean | null>(null);

  useEffect(() => {
    const isWideEnough = window.innerWidth >= MOBILE_BREAKPOINT;
    setCapable(isWideEnough && hasWebgl() && !reducedMotion);
  }, [reducedMotion]);

  return capable;
}
