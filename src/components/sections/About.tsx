"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { about, profile, stats } from "@/lib/content";

export function About() {
  const { t, tx, lang } = useLanguage();

  const facts = [
    { k: { en: "Education", id: "Pendidikan" }, v: { en: "Information Systems, S.Kom — UNIKOM", id: "Sistem Informasi, S.Kom — UNIKOM" } },
    { k: { en: "GPA", id: "IPK" }, v: { en: "3.70 / 4.00", id: "3,70 / 4,00" } },
    { k: { en: "Based in", id: "Berlokasi di" }, v: profile.location },
    { k: { en: "Focus", id: "Fokus" }, v: { en: "Full-stack web + data analytics", id: "Web full-stack + analitik data" } },
    { k: { en: "Status", id: "Status" }, v: { en: "Fresh graduate · open to work", id: "Lulusan baru · siap bekerja" } },
  ];

  return (
    <section id="about" className="relative scroll-mt-24 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker={t.section_about_kicker}
          title={t.section_about_title}
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          {/* paragraphs */}
          <div className="space-y-6 lg:col-span-7">
            {about.paragraphs[lang].map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-fg/85 sm:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}

            {/* stats */}
            <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={i} delay={0.1 + i * 0.07}>
                  <div className="glass gradient-border h-full rounded-2xl p-4">
                    <Counter
                      value={s.value}
                      className="text-gradient font-display block text-3xl font-bold sm:text-4xl"
                    />
                    <span className="text-muted mt-1 block text-xs leading-tight">
                      {tx(s.label)}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* quick facts card */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="glass gradient-border sticky top-28 rounded-3xl p-6 sm:p-8">
                <h3 className="font-display text-lg font-semibold">
                  {lang === "en" ? "Quick facts" : "Fakta singkat"}
                </h3>
                <dl className="mt-5 divide-y divide-line/70">
                  {facts.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-start justify-between gap-4 py-3.5"
                    >
                      <dt className="text-muted text-sm">{tx(f.k)}</dt>
                      <dd className="max-w-[60%] text-right text-sm font-medium">
                        {tx(f.v)}
                      </dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                  className="bg-brand mt-6 flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
                >
                  {lang === "en" ? "Connect on LinkedIn" : "Terhubung di LinkedIn"}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
