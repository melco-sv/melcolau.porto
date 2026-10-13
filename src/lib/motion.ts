/* Shared animation presets — keep motion consistent across sections. */

// Expo-out: fast start, long soft landing.
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Reveal once, slightly before the element is fully in view.
export const IN_VIEW = { once: true, margin: "0px 0px -12% 0px" } as const;

/** Fade + rise when scrolled into view. Spread onto a motion element. */
export const fadeUp = (delay = 0, distance = 28) => ({
  initial: { opacity: 0, y: distance },
  whileInView: { opacity: 1, y: 0 },
  viewport: IN_VIEW,
  transition: { duration: 0.9, ease: EASE, delay },
});

/** Fade + rise on page load (hero). Spread onto a motion element. */
export const fadeUpOnMount = (delay = 0, distance = 20) => ({
  initial: { opacity: 0, y: distance },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay },
});
