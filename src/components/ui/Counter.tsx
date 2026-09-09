"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Counts up a numeric value when it scrolls into view.
 * Accepts strings like "4+", "2nd", "93.11" — animates the numeric part and
 * keeps any prefix/suffix. Uses getBoundingClientRect + a scroll listener so
 * it fires reliably (IntersectionObserver is suppressed for hidden documents).
 */
export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  const m = value.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  const prefix = m?.[1] ?? "";
  const numStr = m?.[2] ?? "";
  const suffix = m?.[3] ?? "";
  const target = numStr ? parseFloat(numStr) : NaN;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

  const [display, setDisplay] = useState(numStr);

  useEffect(() => {
    if (Number.isNaN(target)) return;
    if (reduce) {
      setDisplay(numStr);
      return;
    }
    const el = ref.current;
    if (!el) return;

    setDisplay("0");
    let raf = 0;
    let started = false;

    const handler = () => {
      if (started) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.88 && r.bottom > 0) {
        started = true;
        window.removeEventListener("scroll", handler);
        window.removeEventListener("resize", handler);
        const t0 = performance.now();
        const duration = 1400;
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          setDisplay((target * easeOutCubic(p)).toFixed(decimals));
          if (p < 1) raf = requestAnimationFrame(tick);
          else setDisplay(target.toFixed(decimals));
        };
        raf = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    handler(); // in case it's already in view on mount

    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
      cancelAnimationFrame(raf);
    };
  }, [target, decimals, reduce, numStr]);

  return (
    <span ref={ref} className={className}>
      {Number.isNaN(target) ? value : `${prefix}${display}${suffix}`}
    </span>
  );
}
