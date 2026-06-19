"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT_EXPO } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.7,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -12% 0px" }}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </motion.div>
  );
}
