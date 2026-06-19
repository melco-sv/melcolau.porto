"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowDown, Github, Linkedin } from "@/components/ui/icons";
import { hero, profile } from "@/lib/content";
import { EASE_OUT_EXPO } from "@/lib/utils";

function RotatingWord() {
  const { lang, t } = useLanguage();
  const reduce = useReducedMotion();
  const words = hero.rotating[lang];
  const [i, setI] = useState(0);

  useEffect(() => {
    setI(0);
  }, [lang]);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((p) => (p + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, [reduce, words.length]);

  return (
    <span className="relative inline-flex h-[1.1em] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={i}
          initial={reduce ? false : { y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={reduce ? undefined : { y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          className="text-gradient text-gradient-anim whitespace-nowrap"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
      {/* a11y: announce full role set once */}
      <span className="sr-only">{t.section_about_kicker}</span>
    </span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT_EXPO } },
};

const floatChips = [
  { label: "Laravel", className: "left-[-8%] top-[14%]", delay: "0s" },
  { label: "Vue.js", className: "right-[-10%] top-[30%]", delay: "-2s" },
  { label: "Tableau", className: "left-[-6%] bottom-[16%]", delay: "-4s" },
  { label: "MySQL", className: "right-[-7%] bottom-[8%]", delay: "-1.4s" },
];

export function Hero() {
  const { t, tx } = useLanguage();
  const lenis = useLenis();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -72 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative flex min-h-dvh items-start px-6 pt-32 pb-20 lg:items-center lg:pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-12">
        {/* Text column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.span
            variants={item}
            className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
            </span>
            {t.available}
            <span className="text-faint">·</span>
            <span className="text-muted">{tx(hero.kicker)}</span>
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-bold leading-[0.95] tracking-tight text-[clamp(2.75rem,10vw,7rem)]"
          >
            Melco
            <br />
            <span className="text-gradient text-gradient-anim">Lauwento</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 flex flex-wrap items-baseline gap-x-3 font-display text-2xl font-medium text-fg sm:text-3xl"
          >
            <span className="text-muted">{tx(hero.headlineLead)}</span>
            <RotatingWord />
          </motion.p>

          <motion.p
            variants={item}
            className="text-muted mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
          >
            {tx(hero.tagline)}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton onClick={() => scrollTo("work")} variant="primary">
              {t.hero_cta_work}
              <ArrowDown className="text-base" />
            </MagneticButton>
            <MagneticButton onClick={() => scrollTo("contact")} variant="outline">
              {t.hero_cta_contact}
            </MagneticButton>

            <div className="ml-1 flex items-center gap-1.5">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                data-cursor
                className="glass hover:text-ink hover:bg-fg grid h-11 w-11 place-items-center rounded-full text-lg transition-colors"
              >
                <Github />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                data-cursor
                className="glass hover:text-ink hover:bg-fg grid h-11 w-11 place-items-center rounded-full text-lg transition-colors"
              >
                <Linkedin />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Portrait column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.25 }}
          className="relative mx-auto w-full max-w-sm lg:col-span-5"
        >
          <div className="animate-float relative">
            <div className="gradient-border relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-b from-violet/25 via-surface to-ink shadow-[0_40px_120px_-30px_rgba(139,92,246,0.55)]">
              <Image
                src="/images/profile.png"
                alt="Portrait of Melco Lauwento"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 420px"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/80 to-transparent" />
            </div>

            {/* badge sticker */}
            <div className="glass absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap">
              🏆 <span className="text-gradient">2nd place</span> · Bitlabs × DOKU
            </div>

            {/* floating tech chips */}
            {floatChips.map((c) => (
              <span
                key={c.label}
                style={{ animationDelay: c.delay }}
                className={`animate-float glass absolute hidden rounded-full px-3.5 py-2 text-xs font-semibold shadow-lg sm:block ${c.className}`}
              >
                {c.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="text-faint hover:text-fg absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-widest uppercase transition-colors md:flex"
        aria-label="Scroll to about"
      >
        {t.hero_scroll}
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-lg" />
        </motion.span>
      </motion.button>
    </section>
  );
}
