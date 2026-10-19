"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SplitText } from "@/components/ui/SplitText";
import { Line } from "@/components/ui/Line";
import { projects, type Project } from "@/lib/content";
import { EASE, IN_VIEW, fadeUp } from "@/lib/motion";

/**
 * Project gallery: a cover that unveils from the top and drifts while
 * scrolling, plus a thumbnail strip that cross-fades the cover.
 */
function ProjectGallery({ project }: { project: Project }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const { images } = project;
  // "contain" shows the whole screenshot; the parallax box (120% tall) and the
  // entry zoom would otherwise push its edges outside the frame.
  const contain = project.fit === "contain";
  const fitClass = contain ? "object-contain" : "object-cover object-top";
  const current = images[active];
  const pad = (n: number) => String(n).padStart(2, "0");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div className="md:col-span-5">
      <motion.a
        ref={ref}
        href={project.href}
        target="_blank"
        rel="noreferrer"
        initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0% 0)" }}
        viewport={IN_VIEW}
        transition={{ duration: 1.3, ease: EASE, delay: 0.1 }}
        className="project-image relative block aspect-[16/10] overflow-hidden bg-white/5"
      >
        <motion.div
          style={reduce || contain ? undefined : { y }}
          className={
            contain
              ? "absolute inset-0"
              : "absolute inset-x-0 -top-[10%] h-[120%]"
          }
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={current.src}
              initial={{ opacity: 0, scale: contain ? 1 : 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="absolute inset-0"
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className={fitClass}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {images.length > 1 && (
          <span
            aria-hidden
            className="absolute bottom-3 right-3 bg-ink/70 px-2 py-1 font-mono text-[10px] tracking-[0.1em] text-paper backdrop-blur-sm"
          >
            {pad(active + 1)} / {pad(images.length)}
          </span>
        )}
      </motion.a>

      {images.length > 1 && (
        <motion.ul
          {...fadeUp(0.3, 12)}
          className="mt-3 grid grid-cols-4 gap-3"
        >
          {images.map((img, i) => (
            <li key={img.src}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={img.alt}
                aria-current={i === active}
                className={`relative block aspect-[16/10] w-full overflow-hidden bg-white/5 transition-opacity duration-300 ${
                  i === active ? "opacity-100" : "opacity-45 hover:opacity-80"
                }`}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 10vw, 22vw"
                  className={fitClass}
                />
                <span
                  aria-hidden
                  className={`absolute inset-x-0 bottom-0 h-[2px] origin-left bg-signal transition-transform duration-500 ${
                    i === active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}

export function Work() {
  const { tx, t } = useLanguage();

  return (
    <section id="work" className="border-t border-black bg-ink text-paper">
      <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-10 md:py-32">
        <div className="mb-20 grid gap-6 md:grid-cols-12">
          <motion.p
            {...fadeUp(0, 12)}
            className="font-mono text-[11px] uppercase tracking-[0.12em] md:col-span-3"
          >
            {t.work_kicker}
          </motion.p>
          <h2 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] md:col-span-9 md:text-8xl">
            <SplitText text={t.work_title} stagger={0.08} />
          </h2>
        </div>

        {projects.map((p, i) => (
          <article
            key={p.id}
            className="project-row relative grid gap-7 py-10 md:grid-cols-12 md:gap-8 md:py-14"
          >
            <Line edge="top" color="bg-white/25" />

            <motion.div
              {...fadeUp(0.1, 16)}
              className="flex justify-between md:col-span-2 md:block"
            >
              <span className="font-mono text-xs text-white/55">
                / {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/50 md:mt-6">
                {tx(p.kicker)}
              </p>
            </motion.div>

            <ProjectGallery project={p} />

            <div className="flex flex-col justify-between md:col-span-5">
              <div>
                <div className="flex items-start justify-between gap-5">
                  <h3 className="max-w-md text-3xl font-medium leading-[1.05] tracking-[-0.045em] md:text-5xl">
                    <SplitText text={p.title} delay={0.15} stagger={0.07} />
                  </h3>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${p.title}`}
                    className="inline-block text-2xl transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1"
                  >
                    ↗
                  </a>
                </div>
                <dl className="mt-6 grid max-w-lg gap-6">
                  <motion.div {...fadeUp(0.3, 20)}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/50">
                      {t.problem}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-white/65 md:text-base">
                      {tx(p.problem)}
                    </dd>
                  </motion.div>
                  <motion.div {...fadeUp(0.42, 20)}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-signal-light">
                      {t.solution}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-white/90 md:text-base">
                      {tx(p.solution)}
                    </dd>
                  </motion.div>
                </dl>
              </div>
              <motion.p
                {...fadeUp(0.5, 12)}
                className="relative mt-10 pt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-white/50"
              >
                <Line edge="top" color="bg-white/20" delay={0.4} />
                {p.stack}
              </motion.p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
