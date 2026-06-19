/** Tiny classNames joiner (clsx-lite) — filters falsy values. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
