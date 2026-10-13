"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SplitText } from "@/components/ui/SplitText";
import { Line } from "@/components/ui/Line";
import { about, capabilities } from "@/lib/content";
import { fadeUp } from "@/lib/motion";

export function About() {
  const { lang, tx, t } = useLanguage();

  return (
    <>
      <section id="about" className="border-b border-black/20 bg-paper">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-5 py-24 md:grid-cols-12 md:px-10 md:py-36">
          <motion.p
            {...fadeUp(0, 12)}
            className="font-mono text-[11px] uppercase tracking-[0.12em] md:col-span-3"
          >
            {t.about_kicker}
          </motion.p>
          <div className="md:col-span-9">
            <h2 className="max-w-5xl text-[clamp(2.7rem,6vw,6rem)] font-medium leading-[0.98] tracking-[-0.06em]">
              <SplitText text={tx(about.title)} stagger={0.045} />
            </h2>
            <div className="relative mt-16 grid gap-12 pt-8 md:grid-cols-2">
              <Line edge="top" color="bg-black/20" />
              {about.paragraphs[lang].map((p, i) => (
                <motion.p
                  key={p}
                  {...fadeUp(0.15 + i * 0.15, 24)}
                  className="max-w-xl text-lg leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <motion.p
            {...fadeUp(0, 12)}
            className="font-mono text-[11px] uppercase tracking-[0.12em] md:col-span-3"
          >
            {t.capabilities_kicker}
          </motion.p>
          <div className="relative md:col-span-9">
            <Line edge="top" color="bg-black" />
            {capabilities.map((c, i) => (
              <motion.div
                key={c.items}
                {...fadeUp(i * 0.12, 20)}
                className="relative grid gap-4 py-7 md:grid-cols-12 md:items-center"
              >
                <Line edge="bottom" color="bg-black/25" delay={0.15 + i * 0.12} />
                <span className="font-mono text-[11px] text-black/45 md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-medium tracking-[-0.035em] md:col-span-4 md:text-3xl">
                  {tx(c.title)}
                </h3>
                <p className="font-mono text-xs leading-relaxed text-black/55 md:col-span-7">
                  {c.items}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
