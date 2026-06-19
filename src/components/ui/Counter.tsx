"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { EASE_OUT_EXPO } from "@/lib/utils";

/**
 * Counts up a numeric value when scrolled into view.
 * Accepts strings like "4+", "2nd", "93.11" — animates the numeric part,
 * keeps any prefix/suffix.
 */
export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();

  const m = value.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  const prefix = m?.[1] ?? "";
  const numStr = m?.[2] ?? "";
  const suffix = m?.[3] ?? "";
  const target = numStr ? parseFloat(numStr) : NaN;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

  const [display, setDisplay] = useState(
    reduce || Number.isNaN(target) ? numStr : "0"
  );

  useEffect(() => {
    if (reduce || Number.isNaN(target) || !inView) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: EASE_OUT_EXPO,
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, target, decimals, reduce]);

  if (Number.isNaN(target)) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
