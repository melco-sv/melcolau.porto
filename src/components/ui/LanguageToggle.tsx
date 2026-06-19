"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";
import type { Lang } from "@/lib/content";

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  const options: Lang[] = ["en", "id"];

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "border-line flex items-center rounded-full border p-0.5 text-xs font-semibold",
        className
      )}
    >
      {options.map((l) => {
        const activeOpt = lang === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={activeOpt}
            className="relative rounded-full px-3 py-1.5 uppercase"
            data-cursor
          >
            {activeOpt && (
              <motion.span
                layoutId="lang-pill"
                className="bg-brand absolute inset-0 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className={cn("relative z-10", activeOpt ? "text-ink" : "text-muted")}>
              {l}
            </span>
          </button>
        );
      })}
    </div>
  );
}
