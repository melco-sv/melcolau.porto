"use client";

import { motion } from "motion/react";
import { EASE, IN_VIEW } from "@/lib/motion";

interface SplitTextProps {
  text: string;
  /** Seconds before the first word starts. */
  delay?: number;
  /** Seconds between words. */
  stagger?: number;
  /** Animate on page load instead of when scrolled into view. */
  onMount?: boolean;
  /** Render as a block (use for forced line breaks, e.g. the hero name). */
  block?: boolean;
}

const word = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1, ease: EASE } },
};

/**
 * Each word slides up out of a clipped line mask. The mask is padded
 * (and offset with a negative margin) so tight line-heights and negative
 * letter-spacing don't shave the edges off glyphs, and layout stays unchanged.
 */
export function SplitText({
  text,
  delay = 0,
  stagger = 0.06,
  onMount = false,
  block = false,
}: SplitTextProps) {
  const words = text.split(" ");
  const trigger = onMount
    ? { animate: "show" }
    : { whileInView: "show", viewport: IN_VIEW };

  return (
    <motion.span
      key={text}
      initial="hidden"
      {...trigger}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      className={block ? "block" : undefined}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`}>
          <span className="-mx-[0.1em] -my-[0.12em] inline-block overflow-clip px-[0.1em] py-[0.12em]">
            <motion.span variants={word} className="inline-block">
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </motion.span>
  );
}
