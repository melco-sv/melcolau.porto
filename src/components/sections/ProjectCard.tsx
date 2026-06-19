"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { TiltCard } from "@/components/ui/TiltCard";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, External, Github } from "@/components/ui/icons";
import type { Project, ProjectLink } from "@/lib/content";
import { cn, EASE_OUT_EXPO } from "@/lib/utils";

const accentMap: Record<Project["accent"], { text: string; dot: string; glow: string; chip: string }> = {
  violet: { text: "text-violet", dot: "bg-violet", glow: "shadow-[0_50px_130px_-50px_rgba(139,92,246,0.7)]", chip: "bg-violet/15 text-violet" },
  fuchsia: { text: "text-fuchsia", dot: "bg-fuchsia", glow: "shadow-[0_50px_130px_-50px_rgba(236,72,153,0.7)]", chip: "bg-fuchsia/15 text-fuchsia" },
  cyan: { text: "text-cyan", dot: "bg-cyan", glow: "shadow-[0_50px_130px_-50px_rgba(34,211,238,0.6)]", chip: "bg-cyan/15 text-cyan" },
  lime: { text: "text-lime", dot: "bg-lime", glow: "shadow-[0_50px_130px_-50px_rgba(200,249,75,0.55)]", chip: "bg-lime/15 text-lime" },
};

function LinkButton({ link }: { link: ProjectLink }) {
  const Icon = link.kind === "github" ? Github : link.kind === "external" ? ArrowUpRight : External;
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor
      className="glass hover:text-ink hover:bg-fg group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors"
    >
      <Icon className="text-base" />
      {link.label}
      <ArrowUpRight className="text-faint group-hover:text-ink text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export function ProjectCard({ project, reversed }: { project: Project; reversed: boolean }) {
  const { tx } = useLanguage();
  const [active, setActive] = useState(0);
  const accent = accentMap[project.accent];

  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      {/* MEDIA */}
      <Reveal
        className={cn("min-w-0", reversed && "lg:order-2")}
        y={40}
        duration={0.8}
      >
        <TiltCard max={7} className={cn("rounded-2xl", accent.glow)}>
          <div className="glass overflow-hidden rounded-2xl">
            {/* browser chrome */}
            <div className="flex items-center gap-1.5 border-b border-line/70 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="text-faint ml-3 truncate text-xs">
                {project.title}
              </span>
            </div>

            {/* main image */}
            <div className="relative aspect-[16/10] bg-ink">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.images[active].src}
                    alt={project.images[active].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover object-top"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </TiltCard>

        {/* thumbnails */}
        {project.images.length > 1 && (
          <div className="mt-3 flex gap-2">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                data-cursor
                aria-label={`Show image ${i + 1}`}
                className={cn(
                  "relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border transition-all",
                  active === i
                    ? "border-fg/80 opacity-100"
                    : "border-line opacity-55 hover:opacity-90"
                )}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover object-top"
                />
              </button>
            ))}
          </div>
        )}
      </Reveal>

      {/* CONTENT */}
      <Reveal
        className={cn("min-w-0", reversed && "lg:order-1")}
        delay={0.1}
        y={40}
      >
        <div className="flex items-center gap-4">
          <span className={cn("font-display text-5xl font-bold sm:text-6xl", accent.text)}>
            {project.index}
          </span>
          {project.badge && (
            <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", accent.chip)}>
              {tx(project.badge)}
            </span>
          )}
        </div>

        <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
          {project.title}
        </h3>
        <p className={cn("mt-1.5 text-sm font-medium", accent.text)}>
          {tx(project.type)}
        </p>

        <p className="text-muted mt-4 text-base leading-relaxed">
          {tx(project.summary)}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-fg/75">
          {tx(project.contribution)}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border-line text-muted rounded-full border px-3 py-1 text-xs font-medium"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {project.links.map((link) => (
            <LinkButton key={link.href} link={link} />
          ))}
        </div>
      </Reveal>
    </div>
  );
}
