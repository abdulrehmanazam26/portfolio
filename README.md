# Abdulrehman Azam — Portfolio

Sales tool for freelance web-design work: free first-draft redesigns for
small local businesses (restaurants, florists, shops) around Nürnberg.

Dark, cinematic single-scroll site. Desktop/capable devices get a 3D
corridor (React Three Fiber) you fly through as you scroll past project
"slabs"; mobile and reduced-motion/no-WebGL visitors get a dedicated 2D
design with the same palette, type, and content — never a degraded 3D scene.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · React Three Fiber +
drei · GSAP + ScrollTrigger · Lenis. No CMS, no database, no auth — all
content lives in `src/content/*.ts`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Known gap: this codebase was written without a working npm registry

This project was scaffolded and written by hand in a sandboxed session whose
network policy blocked `registry.npmjs.org` and image CDNs outright (not a
proxy misconfiguration — a policy denial). That means:

- **`npm install` has never been run against this code.** Dependency
  versions in `package.json` are pinned to known-compatible releases, but
  the build has not been verified end-to-end. Run `npm install && npm run
  build` and fix whatever surfaces — expect it to be small (a type mismatch
  or two), not structural.
- **No Lighthouse run, no screenshots.** Section 5 of the brief (mobile
  Lighthouse ≥ 80, LCP < 2.5s, keyboard-only pass) has not been done. Do
  this once the build runs.
- **No real images.** Every image slot renders `PlaceholderFrame`, a
  labeled gradient placeholder, instead of a fetched Unsplash/Pexels photo
  or a real project screenshot. Search `TODO(abdulrehman)` for every spot
  that needs a real asset.
- **Placeholder project content.** `src/content/projects.ts` ships 3
  example projects (`project-one/two/three`) with `placeholder: true` and
  `TODO:` copy. Replace with real work — and per the brief, never use a
  client's name, logo, or screenshots without their permission to go live.

## Editing content

- `src/content/site.ts` — name, tagline, positioning bullets, process
  steps, contact copy.
- `src/content/projects.ts` — one object per project; add/remove entries
  and the corridor and case-study routes (`/work/[slug]`) pick them up
  automatically.
- `src/content/credits.ts` — image attribution, rendered in the footer.

## Architecture notes

- `useSceneCapable` (`src/lib/useSceneCapable.ts`) decides 3D vs. 2D:
  false under 768px width, on `prefers-reduced-motion`, or when a WebGL
  capability check fails. `Hero` and `WorkSection` both branch on it.
- The 3D `<Canvas>` is always `next/dynamic(..., { ssr: false })` and only
  mounted while its section is in view (`useInView`), so off-screen scenes
  don't keep rendering.
- `WorkSection`'s corridor drives the camera off GSAP `ScrollTrigger` scrub
  progress, synced to Lenis via `lenis.on('scroll', ScrollTrigger.update)`.
  Scroll is smoothed, never hijacked — the native scrollbar and a single
  wheel flick still work normally.
- Reduced motion disables Lenis, the hero light-sweep, and the 3D corridor
  entirely, falling back to the plain 2D sections (effectively a cross-fade,
  per the brief's accessibility constraint).

## Deploy

Target is Vercel. `next.config.mjs` already allow-lists
`images.unsplash.com` and `images.pexels.com` for `next/image` once real
stock photos are chosen.
