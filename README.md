# Melco Lauwento — Portfolio

A modern, animated, **bilingual (EN/ID)** portfolio for Melco Lauwento — full-stack web developer & data analyst.

Built with a Gen-Z dark aesthetic: an electric violet → fuchsia → cyan gradient system, kinetic typography, scroll-triggered reveals, magnetic buttons, a custom cursor, 3D-tilt project cards, and smooth scrolling. Fully responsive (375 → 1440px+) and accessible (respects `prefers-reduced-motion`).

## Tech stack

| | |
|---|---|
| Framework | **Next.js 16** (App Router, React 19) |
| Styling | **Tailwind CSS v4** (CSS-first `@theme` tokens) |
| Animation | **Motion** (`motion/react`, formerly Framer Motion) |
| Smooth scroll | **Lenis** (`lenis/react`) |
| Fonts | Space Grotesk (display) + Inter (body) via `next/font` |
| Language | TypeScript |

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:3000
npm run build    # production build (static export-ready)
npm run start    # serve the production build
```

Requires Node.js 20.9+ (Next.js 16 minimum).

## Project structure

```
src/
  app/
    layout.tsx          # fonts, SEO metadata, providers, global chrome
    page.tsx            # assembles the section components
    globals.css         # design tokens (@theme), keyframes, utilities
  components/
    providers/
      LanguageProvider   # EN/ID context (persists to localStorage)
      SmoothScroll       # Lenis wrapper (off when reduced-motion)
    layout/              # Navbar (+ mobile menu), Footer
    ui/                  # Reveal, MagneticButton, TiltCard, Marquee,
                         # CustomCursor, ScrollProgress, Counter, icons, …
    sections/            # Hero, About, Skills, Projects, Achievements, Contact
  lib/
    content.ts           # ← ALL text & data (bilingual) lives here
    utils.ts
public/images/           # profile.png + projects/*
```

## Editing content

Everything is data-driven from **`src/lib/content.ts`** — you rarely need to touch components.

- **Text** (about, projects, achievements, UI labels) is stored as `{ en, id }` pairs. Edit both languages there.
- **Personal links** (GitHub, LinkedIn, email) live in the `profile` object at the top.
  - ⚠️ The contact **email** defaults to `ikhsanseptian1933@gmail.com` — update `profile.email` if you want a different public address.
- **Projects**: add/remove entries in the `projects` array (title, summary, tags, links, accent colour, and image list).

### Swapping images

Drop files into `public/images/` (profile) or `public/images/projects/` and reference them by path in `content.ts`. Next.js optimizes them automatically.

### Changing the theme

All colours, fonts, and animation timings are CSS variables in the `@theme { … }` block at the top of `src/app/globals.css`.

## Deploying

The site builds to fully static HTML — deploy anywhere.

**Vercel (recommended):** push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new). Zero config.

Other hosts (Netlify, Cloudflare Pages, etc.) work the same way: build command `npm run build`, output handled by the Next.js adapter.

## Notes

- Smooth scrolling is powered by Lenis and is automatically disabled for visitors with `prefers-reduced-motion: reduce`; navigation falls back to native smooth scroll.
- The custom cursor only renders on devices with a fine pointer (desktop) — touch devices are unaffected.
