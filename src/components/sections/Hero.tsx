"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SplitText } from "@/components/ui/SplitText";
import { Line } from "@/components/ui/Line";
import { hero, profile } from "@/lib/content";
import { EASE, fadeUpOnMount } from "@/lib/motion";

export function Hero() {
  const { lang, tx, t } = useLanguage();
  const reduce = useReducedMotion();

  // The portrait drifts upward a little as the page scrolls away from it.
  const { scrollY } = useScroll();
  const drift = useTransform(scrollY, [0, 900], [0, -70]);

  return (
    <section id="top" className="px-5 pb-12 pt-36 md:px-10">
      <div className="mx-auto grid min-h-[calc(100svh-10rem)] max-w-[1500px] grid-rows-[auto_1fr_auto]">
        <div className="flex items-start justify-between gap-8">
          <motion.p
            {...fadeUpOnMount(0.5, 10)}
            className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em]"
          >
            {hero.role[lang][0]}
            <br />
            {hero.role[lang][1]}
          </motion.p>
          <motion.p
            {...fadeUpOnMount(0.65, 10)}
            className="hidden text-right font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em] sm:block"
          >
            {hero.location[lang][0]}
            <br />
            {hero.location[lang][1]}
          </motion.p>
        </div>

        <div className="grid items-center gap-8 py-14 lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-8">
            <h1 className="text-[clamp(4.4rem,11.5vw,11rem)] font-semibold leading-[0.78] tracking-[-0.085em]">
              <SplitText text="Melco" onMount block delay={0.15} />
              <SplitText text="Lauwento" onMount block delay={0.3} />
            </h1>
            <motion.p
              {...fadeUpOnMount(1, 24)}
              className="mt-9 max-w-xl text-xl leading-snug tracking-[-0.025em] md:ml-[15%] md:text-2xl"
            >
              {tx(hero.tagline)}
            </motion.p>
          </div>

          <motion.div
            style={reduce ? undefined : { y: drift }}
            className="relative mx-auto w-full max-w-[360px] lg:col-span-4 lg:mx-0 lg:ml-auto"
          >
            <motion.div
              initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 1.4, ease: EASE, delay: 0.35 }}
              className="relative aspect-[4/4.5] overflow-hidden bg-[#d7d3ca]"
            >
              <motion.div
                initial={reduce ? false : { scale: 1.3 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.8, ease: EASE, delay: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/profile.png"
                  alt={profile.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 360px, 90vw"
                  className="object-cover object-top grayscale"
                />
              </motion.div>
            </motion.div>
            <motion.span
              aria-hidden
              initial={reduce ? false : { scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 14,
                delay: 1.3,
              }}
              className="absolute -bottom-3 -left-3 block h-7 w-7 bg-signal"
            />
          </motion.div>
        </div>

        <motion.div
          {...fadeUpOnMount(1.2, 12)}
          className="relative flex items-end justify-between pt-5"
        >
          <Line edge="top" color="bg-black/20" onMount delay={1.1} />
          <div className="flex gap-5 text-sm">
            <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline">
              LinkedIn ↗
            </a>
          </div>
          <a href="#work" className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em]">
            {t.scroll}
            <motion.span
              aria-hidden
              animate={reduce ? undefined : { y: [0, 4, 0] }}
              transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
            >
              ↓
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
