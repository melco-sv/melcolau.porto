"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { achievements } from "@/lib/content";
import { iconByName } from "@/components/ui/icons";

export function Achievements() {
  const { t, tx } = useLanguage();

  return (
    <section id="journey" className="relative scroll-mt-24 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          kicker={t.section_journey_kicker}
          title={t.section_journey_title}
        />

        <div className="relative mt-16 pl-12 sm:pl-16">
          {/* timeline rail */}
          <div className="absolute top-2 bottom-2 left-[18px] w-px bg-gradient-to-b from-violet via-fuchsia to-cyan sm:left-[26px]" />

          <div className="flex flex-col gap-10">
            {achievements.map((a, i) => {
              const Icon = iconByName[a.icon];
              return (
                <Reveal key={i} delay={i * 0.08} y={32}>
                  <div className="relative">
                    {/* node */}
                    <div className="bg-ink absolute top-0 left-[-44px] grid h-10 w-10 place-items-center rounded-full border border-line sm:left-[-58px]">
                      <span className="bg-brand grid h-8 w-8 place-items-center rounded-full text-base text-ink">
                        <Icon />
                      </span>
                    </div>

                    <div className="glass gradient-border rounded-2xl p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-gradient font-display text-sm font-bold uppercase">
                          {a.year}
                        </span>
                        <h3 className="font-display text-lg font-semibold sm:text-xl">
                          {tx(a.title)}
                        </h3>
                      </div>
                      <p className="text-muted mt-1 text-sm font-medium">
                        {tx(a.org)}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-fg/75">
                        {tx(a.detail)}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
