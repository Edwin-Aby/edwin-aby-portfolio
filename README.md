# EDWIN ABY. — Frames. Feelings. Stories.

A personal photography and film portfolio with a combined creative and technical profile. Built with Next.js App Router, TypeScript, Tailwind CSS, and Motion for React. No paid services or external APIs are required.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` for a production build and `npm run typecheck` for a TypeScript check.

## Project map

```text
src/
  app/                 routes, layouts, responsive design system
  components/          shared navigation, media, gallery and profile UI
  data/                project, profile and experience content
public/
  images/hero/         opening photograph
  images/profile/      personal portrait
  images/work/         still project photography
  films/posters/       film poster frames and thumbnails
  videos/              optional local video files
  documents/           approved combined CV PDF
docs/                  design-system notes
```

## Add a photography or film project

1. Copy original files you have permission to publish into `public/images/work/`, `public/films/posters/`, or `public/videos/`.
2. Add one `WorkItem` entry to `src/data/work.ts`. Use a unique URL-safe `slug`, a real title and description, and set `kind` to `Still` or `Motion`.
3. Set `image` or `poster` to its path from `public` (for example `/images/work/architecture-01.jpg`). Add descriptive `alt` text and gallery entries such as `{ src: "/images/work/architecture-02.jpg", alt: "Sunlight across the concrete facade" }`.
4. For motion, optionally set `video` to a local MP4 path or `externalUrl` to a film page. Videos are click-to-play and use a poster frame.
5. Set `featured: true` for a project you want on the home page. All projects are shown on Work; Motion projects also appear on Films.

The category filters on Work are interactive and animate between Still and Motion collections. Project galleries open in an accessible full-screen viewer; use the on-screen arrows or keyboard ← / →, and press Escape to close. Project detail pages link to adjacent entries when available. Projects, dates, credits, outcomes, awards, and client names are not fabricated; leave a date out until you can confirm it.

## Personal information and CV

- Edit `src/data/site.ts` for the name, tagline, contact email, social links, hero image (`heroImage`), and profile portrait (`profilePortrait`).
- Edit `src/data/experience.ts` for education, skills, and verified work or leadership entries.
- Add a reviewed combined CV PDF as `public/documents/edwin-aby-combined-cv.pdf`. The source CV award names and exact dates need a direct review first, so the site currently does not provide a fabricated or merged PDF.
- The About page presents the creative/technical profile; `/experience` is the detailed timeline, `/cv` is the combined web CV, and `/films` is the motion-work collection.

Do not add home address or private phone details to the public profile.

## Visual system

See [docs/design-system.md](docs/design-system.md) for the Night Orchid palette, typography, and motion decisions. The media placeholders are authored CSS and are clearly labelled; they are not portfolio imagery.

Page changes use a short Motion transition, the opening title enters line by line, images reveal through a crop, and a thin top rule tracks scroll progress. All use transform/opacity where possible and respect `prefers-reduced-motion`. No custom cursor or scroll hijacking is used; the mobile gallery keeps visible, touch-sized controls.

## Free deployment

The site can be deployed to a free Vercel Hobby project. Cloudflare Pages requires a compatible Next.js adapter. Provider limits can change, so check current terms before deploying. No analytics, CMS, database, font API, paid hosting add-on, or external media host is required.
