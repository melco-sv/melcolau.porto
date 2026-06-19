"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { marqueeSkills, skillGroups } from "@/lib/content";

function Pill({ label }: { label: string }) {
  return (
    <span className="glass mx-2.5 my-1 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-base font-medium whitespace-nowrap sm:text-lg">
      <span className="bg-brand h-2 w-2 rounded-full" />
      {label}
    </span>
  );
}

export function Skills() {
  const { t, tx } = useLanguage();

  return (
    <section id="skills" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker={t.section_skills_kicker}
          title={t.section_skills_title}
        />
      </div>

      {/* marquees */}
      <div className="mt-14 flex flex-col gap-4">
        <Marquee>
          {marqueeSkills.map((s) => (
            <Pill key={s} label={s} />
          ))}
        </Marquee>
        <Marquee reverse>
          {[...marqueeSkills].reverse().map((s) => (
            <Pill key={s} label={s} />
          ))}
        </Marquee>
      </div>

      {/* skill groups */}
      <div className="mx-auto mt-16 grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((g, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="glass gradient-border h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="bg-brand mb-4 grid h-10 w-10 place-items-center rounded-xl font-display text-sm font-bold text-ink">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-lg font-semibold">{tx(g.title)}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="text-muted rounded-lg bg-white/[0.04] px-2.5 py-1 text-sm"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
