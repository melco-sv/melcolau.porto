"use client";

import { useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { profile } from "@/lib/content";
import { EASE } from "@/lib/motion";

export function Navbar() {
  const { lang, toggle, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Thin blue reading-progress rule along the bottom of the header.
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50 border-b border-black/15 bg-paper/95 backdrop-blur-sm"
    >
      <motion.span
        aria-hidden
        style={{ scaleX: progress }}
        className="pointer-events-none absolute -bottom-px left-0 right-0 h-[2px] origin-left bg-signal"
      />
      <nav className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 md:px-10">
        <a
          href="#top"
          onClick={close}
          className="text-base font-semibold tracking-[-0.03em]"
        >
          MELCO LAUWENTO
        </a>

        <button
          type="button"
          className="flex h-10 items-center font-mono text-xs uppercase tracking-wider md:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? t.close : t.menu}
        </button>

        <div
          id="site-menu"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-16 flex-col gap-6 border-b border-black/15 bg-paper px-5 py-8 text-2xl md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:text-sm`}
        >
          <a href="#work" onClick={close} className="transition-opacity hover:opacity-50">
            {t.nav.work}
          </a>
          <a href="#about" onClick={close} className="transition-opacity hover:opacity-50">
            {t.nav.about}
          </a>
          <a href="#experience" onClick={close} className="transition-opacity hover:opacity-50">
            {t.nav.experience}
          </a>
          <button
            type="button"
            onClick={toggle}
            aria-label={lang === "en" ? "Ganti ke Bahasa Indonesia" : "Switch to English"}
            className="self-start font-mono text-xs uppercase tracking-wider transition-opacity hover:opacity-50 md:self-auto"
          >
            <span className={lang === "en" ? "" : "opacity-40"}>EN</span>
            {" / "}
            <span className={lang === "id" ? "" : "opacity-40"}>ID</span>
          </button>
          <a
            href={`mailto:${profile.email}`}
            className="self-start border-b border-black pb-1 md:ml-4 md:self-auto"
          >
            {t.nav.contact} ↗
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
