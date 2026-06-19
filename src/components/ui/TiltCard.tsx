"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}

const spring = { stiffness: 150, damping: 18, mass: 0.4 };

export function TiltCard({
  children,
  className,
  max = 9,
  glare = true,
}: TiltCardProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);

  const glareX = useTransform(px, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(py, [0, 1], ["0%", "100%"]);
  const glareBg = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(255,255,255,0.14), transparent 45%)`;

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div style={{ perspective: 1200 }} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={cn("relative h-full", className)}
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden
            style={{ background: glareBg }}
            className="pointer-events-none absolute inset-0 z-20 rounded-[inherit]"
          />
        )}
      </motion.div>
    </div>
  );
}
