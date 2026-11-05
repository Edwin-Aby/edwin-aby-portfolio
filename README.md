# EDWIN ABY — Frames. Feelings. Stories.

An original editorial photography and video portfolio built around Edwin’s visual practice and technical background. The identity is **Contact Sheet / Darkroom Red**: warm paper, ink, one safelight red, and a photographic index that connects still image, moving image and personal perspective.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Use `npm run typecheck` for TypeScript validation and `npm run build` for an optimized production build.

## Site map

- `/` — cinematic home and entry points
- `/work` — photography, reels, short-form video, nature and personal work in one filterable archive
- `/services` — photography, moving image and editing services
- `/about` — personal story, creative/technical practice, skills, interests and languages
- `/experience` — grouped, expandable experience
- `/cv` — structured résumé, Print / Save as PDF, and an approved-PDF download when available
- `/contact` — inquiry form that opens a reviewed email draft plus approved contact links
- `/films` — compatibility redirect to the Moving Image filter in Work
- `/work/[slug]` — optional project detail, gallery and click-to-play video

## Add original photography or video

1. Add approved local media to `public/images/work/`, `public/films/posters/` or `public/videos/`.
2. Add a `WorkItem` to `src/data/work.ts` with a unique slug, honest title/description and the detailed category (`Architecture`, `Interiors`, `Hospitality`, `Commercial`, `Reels` or `Videos`). Set `kind` to `Still` or `Motion`.
3. Optionally add its Work collection (`Nature & Personal Work`), format (`Reel`, `Short-form Video`, `Personal Video`), aspect ratio, gallery images, role, credits and details.
4. Use `image` for a still cover or `poster` for a video thumbnail. Add a descriptive `alt`. Videos use controls with `preload="none"`; they do not autoplay.
5. Set `featured: true` only for work Edwin approves for Home. Work shows nine items at a time and adds more on request.

The filter definitions live beside the project data in `src/data/work.ts`. Empty states are deliberate until original work is supplied. Do not put temporary reference imagery in project data, or invent names, clients, credits, dates, outcomes or metrics. Original files are never renamed or compressed by this site.

## Edit profile and CV content

- `src/data/site.ts` contains shared brand/contact data and image paths.
- `src/data/experience.ts` contains editable roles, group, year, skills, education, skills and language proficiency. Add dates, durations, locations and descriptions only when verified.
- `docs/content-inventory.md` records what was supplied, conflicting title variants, and actual local media found.
- Add an approved combined CV PDF at `public/documents/edwin-aby-combined-cv.pdf`. Its download control appears only when that real PDF exists; the web résumé supports browser printing with A4 page rules.

Do not add a home address or birth details. The current email and WhatsApp contact were explicitly supplied by Edwin.

## Design, accessibility and hosting

See [docs/design-system.md](docs/design-system.md) for the Contact Sheet / Darkroom Red tokens, typography and motion. The site uses local/system fonts, Next Image and the existing Motion for React setup. Navigation is keyboard operable, galleries have keyboard controls, and reduced-motion preferences are respected. There is no paid CMS, analytics, media host, external font API or paid plugin.

The app can run on a free Vercel Hobby deployment. Cloudflare Pages requires a compatible Next.js adapter. Provider limits can change; check current terms before deploying. No deployment has been made as part of this work.
