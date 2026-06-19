"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
  /** pause the scroll on hover */
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  reverse,
  className,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div className={cn("marquee-mask group flex overflow-hidden", className)}>
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            "flex shrink-0 items-center",
            reverse ? "animate-marquee-rev" : "animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
