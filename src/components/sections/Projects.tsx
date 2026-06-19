"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/content";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="work" className="relative scroll-mt-24 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker={t.section_work_kicker}
          title={t.section_work_title}
        />

        <div className="mt-20 flex flex-col gap-24 sm:gap-32">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
