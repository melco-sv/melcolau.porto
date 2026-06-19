"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  // When the user prefers reduced motion, skip JS-driven smoothing entirely.
  if (reduce) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
