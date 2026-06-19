"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.25,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="bg-brand fixed inset-x-0 top-0 z-[70] h-[3px] origin-left"
    />
  );
}
