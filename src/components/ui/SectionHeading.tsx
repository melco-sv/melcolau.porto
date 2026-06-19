"use client";

import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  kicker,
  title,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <Reveal>
        <span className="glass text-muted inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase">
          <span className="bg-brand h-2 w-2 rounded-full" />
          {kicker}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="max-w-3xl text-4xl font-bold sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
