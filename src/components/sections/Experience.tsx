"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Line } from "@/components/ui/Line";
import { experience } from "@/lib/content";
import { fadeUp } from "@/lib/motion";

export function Experience() {
  const { tx, t } = useLanguage();

  return (
    <section id="experience" className="bg-signal text-white">
      <div className="mx-auto grid max-w-[1500px] gap-14 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <motion.p
          {...fadeUp(0, 12)}
          className="font-mono text-[11px] uppercase tracking-[0.12em] md:col-span-3"
        >
          {t.experience_kicker}
        </motion.p>
        <div className="relative md:col-span-9">
          <Line edge="top" color="bg-white" />
          {experience.map((e, i) => (
            <motion.div
              key={`${e.year}-${e.title.en}`}
              {...fadeUp(0.05 + i * 0.08, 18)}
              className="relative grid gap-2 py-6 md:grid-cols-12 md:items-baseline md:py-8"
            >
              <Line edge="bottom" color="bg-white/35" delay={0.1 + i * 0.08} />
              <span className="font-mono text-xs text-white/65 md:col-span-2">
                {e.year}
              </span>
              <h3 className="text-2xl font-medium tracking-[-0.035em] md:col-span-6 md:text-3xl">
                {tx(e.title)}
              </h3>
              <p className="text-sm text-white/70 md:col-span-4">{tx(e.org)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
