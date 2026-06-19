"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { EmailButton } from "@/components/ui/EmailButton";
import { ArrowUpRight, Github, Linkedin } from "@/components/ui/icons";
import { profile } from "@/lib/content";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="glass gradient-border relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12 sm:py-24">
          {/* glow */}
          <div className="bg-violet/25 pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-[120px]" />

          <Reveal>
            <span className="glass text-muted inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
              </span>
              {t.available}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="relative mt-6 font-bold tracking-tight text-[clamp(2.5rem,8vw,5.5rem)]">
              {t.section_contact_title.split(" ").map((w, i) => (
                <span key={i} className={i % 2 === 1 ? "text-gradient" : ""}>
                  {w}{" "}
                </span>
              ))}
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-muted relative mx-auto mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
              {t.contact_lead}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
              <EmailButton />
              <MagneticButton
                href={profile.linkedin}
                target="_blank"
                variant="outline"
              >
                <Linkedin className="text-base" />
                LinkedIn
                <ArrowUpRight className="text-sm" />
              </MagneticButton>
              <MagneticButton
                href={profile.github}
                target="_blank"
                variant="outline"
              >
                <Github className="text-base" />
                GitHub
                <ArrowUpRight className="text-sm" />
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <a
              href={`mailto:${profile.email}`}
              data-cursor
              className="text-faint hover:text-fg relative mt-8 inline-block text-sm transition-colors"
            >
              {profile.email}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
