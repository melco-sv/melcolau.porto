/* Lightweight inline icon set (stroke = currentColor). No dependency. */
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
};

export const ArrowUpRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ArrowDown = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </svg>
);

export const Github = (p: P) => (
  <svg {...base} {...p}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 19 4.8a4.9 4.9 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.6 12.6 0 0 0-6.6 0C5.9.9 4.8 1.2 4.8 1.2a4.9 4.9 0 0 0-.1 3.6A5.2 5.2 0 0 0 3.3 8.4c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.6V22" />
  </svg>
);

export const Linkedin = (p: P) => (
  <svg {...base} {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
  </svg>
);

export const Mail = (p: P) => (
  <svg {...base} {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

export const External = (p: P) => (
  <svg {...base} {...p}>
    <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

export const Trophy = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 9a6 6 0 0 0 12 0V4H6zM6 5H3v2a3 3 0 0 0 3 3M18 5h3v2a3 3 0 0 1-3 3M9 21h6M12 15v6" />
  </svg>
);

export const Certificate = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="9" r="6" />
    <path d="m8.5 14-1.5 7 5-3 5 3-1.5-7" />
  </svg>
);

export const Briefcase = (p: P) => (
  <svg {...base} {...p}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16M2 13h20" />
  </svg>
);

export const Cap = (p: P) => (
  <svg {...base} {...p}>
    <path d="M22 10 12 5 2 10l10 5 10-5zM6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
  </svg>
);

export const Menu = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const Close = (p: P) => (
  <svg {...base} {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const Check = (p: P) => (
  <svg {...base} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Copy = (p: P) => (
  <svg {...base} {...p}>
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

export const Spark = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
  </svg>
);

export const iconByName = {
  trophy: Trophy,
  certificate: Certificate,
  briefcase: Briefcase,
  cap: Cap,
} as const;
