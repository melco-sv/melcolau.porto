"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SplitText } from "@/components/ui/SplitText";
import { Line } from "@/components/ui/Line";
import { profile } from "@/lib/content";
import { fadeUp } from "@/lib/motion";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      id="contact"
      className="bg-ink px-5 pb-8 pt-24 text-paper md:px-10 md:pt-32"
    >
      <div className="mx-auto max-w-[1500px]">
        <motion.p
          {...fadeUp(0, 12)}
          className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/55"
        >
          {t.contact_kicker}
        </motion.p>

        <a
          href={`mailto:${profile.email}`}
          className="group relative mt-8 flex items-end justify-between pb-7"
        >
          <Line edge="bottom" color="bg-white/40" delay={0.3} />
          <span className="max-w-5xl text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[0.86] tracking-[-0.075em]">
            <SplitText text={t.contact_cta} stagger={0.09} />
          </span>
          <span
            aria-hidden
            className="pb-2 text-4xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2 md:text-7xl"
          >
            ↗
          </span>
        </a>

        <motion.div
          {...fadeUp(0.1, 16)}
          className="relative mt-20 flex flex-col gap-8 pt-6 text-sm md:mt-28 md:flex-row md:items-end md:justify-between"
        >
          <Line edge="top" color="bg-white/20" />
          <div>
            <p className="mb-2 text-white/45">{t.email}</p>
            <a href={`mailto:${profile.email}`} className="link-underline">
              {profile.email}
            </a>
          </div>
          <div className="flex gap-6">
            <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline">
              LinkedIn ↗
            </a>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/45">
            {t.rights}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
