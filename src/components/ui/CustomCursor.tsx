"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.35 });

  useEffect(() => {
    // Only on devices with a precise pointer (skip touch).
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest(
        "a, button, [data-cursor], input, textarea"
      );
      setActive(Boolean(el));
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed top-0 left-0 z-[80] mix-blend-difference"
    >
      <motion.div
        animate={{ scale: active ? 2.6 : 1 }}
        transition={{ stiffness: 300, damping: 20, type: "spring" }}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        style={{ width: 14, height: 14 }}
      />
    </motion.div>
  );
}
