"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useLenis } from "lenis/react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Close, Menu } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "about", key: "about" },
  { id: "skills", key: "skills" },
  { id: "work", key: "work" },
  { id: "contact", key: "contact" },
] as const;

export function Navbar() {
  const { t } = useLanguage();
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -72 });
    else el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goTop = () => {
    setOpen(false);
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <nav
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-4 transition-all duration-500 sm:px-5",
            scrolled
              ? "glass border-line/80 mx-3 py-2.5 sm:mx-auto"
              : "border border-transparent py-2"
          )}
        >
          {/* Wordmark */}
          <button
            onClick={goTop}
            data-cursor
            className="group flex items-center gap-2.5"
            aria-label="Back to top"
          >
            <span className="bg-brand grid h-8 w-8 place-items-center rounded-xl text-sm font-bold text-ink shadow-[0_6px_20px_-6px_rgba(139,92,246,0.8)]">
              M
            </span>
            <span className="font-display text-base font-semibold tracking-tight">
              Melco
              <span className="text-gradient">.</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                data-cursor
                className="text-muted hover:text-fg relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
              >
                {t.nav[s.key]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle />
            <button
              onClick={() => go("contact")}
              data-cursor
              className="bg-brand hidden rounded-full px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              {t.nav_resume}
            </button>
            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              data-cursor
              className="glass grid h-10 w-10 place-items-center rounded-full text-lg md:hidden"
            >
              <Menu />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <span className="font-display text-lg font-semibold">Menu</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="glass grid h-10 w-10 place-items-center rounded-full text-lg"
              >
                <Close />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-6 pt-6">
              {SECTIONS.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.05 }}
                  onClick={() => go(s.id)}
                  className="border-line/60 flex items-baseline gap-4 border-b py-5 text-left"
                >
                  <span className="text-faint font-display text-sm">
                    0{i + 1}
                  </span>
                  <span className="font-display text-3xl font-semibold">
                    {t.nav[s.key]}
                  </span>
                </motion.button>
              ))}
            </nav>
            <div className="absolute inset-x-6 bottom-10 flex items-center justify-between">
              <LanguageToggle />
              <button
                onClick={() => go("contact")}
                className="bg-brand rounded-full px-6 py-3 text-sm font-semibold text-ink"
              >
                {t.nav_resume}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
