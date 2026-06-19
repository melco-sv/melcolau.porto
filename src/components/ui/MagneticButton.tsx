"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: Variant;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  strength?: number;
}

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold will-change-transform transition-[box-shadow,background-color,color] duration-300 cursor-pointer";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-ink shadow-[0_10px_40px_-12px_rgba(139,92,246,0.8)] hover:shadow-[0_14px_55px_-10px_rgba(236,72,153,0.85)]",
  outline: "border border-line text-fg hover:bg-white/[0.06]",
  ghost: "text-fg hover:bg-white/[0.06]",
};

export function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  target,
  rel,
  ariaLabel,
  strength = 0.4,
}: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 14, mass: 0.25 });
  const sy = useSpring(y, { stiffness: 220, damping: 14, mass: 0.25 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const cls = cn(base, variants[variant], className);
  const style = reduce ? undefined : { x: sx, y: sy };
  const content = <span className="relative z-10 inline-flex items-center gap-2">{children}</span>;

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        aria-label={ariaLabel}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={style}
        className={cls}
        data-cursor
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={style}
      className={cls}
      data-cursor
    >
      {content}
    </motion.button>
  );
}
