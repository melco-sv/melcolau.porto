"use client";

import { motion } from "motion/react";
import { EASE, IN_VIEW } from "@/lib/motion";

interface LineProps {
  /** Which edge of the (relatively positioned) parent the rule sits on. */
  edge?: "top" | "bottom";
  /** Tailwind background colour class, e.g. "bg-white/25". */
  color: string;
  delay?: number;
  /** Draw on page load instead of when scrolled into view. */
  onMount?: boolean;
}

/** A 1px rule that draws itself left → right. Parent must be `relative`. */
export function Line({ edge = "bottom", color, delay = 0, onMount = false }: LineProps) {
  const trigger = onMount
    ? { animate: { scaleX: 1 } }
    : { whileInView: { scaleX: 1 }, viewport: IN_VIEW };

  return (
    <motion.span
      aria-hidden
      initial={{ scaleX: 0 }}
      {...trigger}
      transition={{ duration: 1.3, ease: EASE, delay }}
      className={`pointer-events-none absolute inset-x-0 ${edge === "top" ? "top-0" : "bottom-0"} h-px origin-left ${color}`}
    />
  );
}
