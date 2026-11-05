# EDWIN ABY portfolio — complete-scope audit

Audit updated against the original project scope and the new design/content brief. Existing Contact Sheet / Darkroom Red art direction is retained. No commit, push, deployment or media mutation was performed.

| Requirement | Status | Current behavior and remaining source material |
|---|---|---|
| Home | Implemented | Cinematic introduction, personal branding, featured work slots and inquiry CTA. The current hero reference is separately credited and is not presented as Edwin’s work. Replace it with an approved original photo when ready. |
| Work / Portfolio | Implemented; awaiting projects | One filterable Work archive covers All Work, Photography, Architecture & Interiors, Hospitality, Commercial, Moving Image, Reels, Short-form Videos, and Nature & Personal Work. Detailed project category, format, ratio, gallery, poster/video, credits and detail fields live in `src/data/work.ts`. |
| Growing media archive | Implemented; real assets needed | Editorial masonry-like layout with varied ratios, nine-item batches plus Load More, project detail route, accessible image viewer and click-to-play video with poster and `preload="none"`. No original work files are present yet. |
| Films | Consolidated | `/films` redirects existing bookmarks to `/work?filter=moving-image`; the old item is removed from navigation and internal links. |
| Services | Implemented | Photography, architecture/interior and hospitality/commercial work, films/walkthroughs, branded video, reels and editing. Event photography is historical only and not a current service. |
| About | Implemented | Personal story, creative approach, CSBS foundation, MUN/media collaboration, grouped creative/technical skills, tools, interests and languages. Existing portrait is used in About only. |
| Experience | Implemented as grouped accordions | All 14 supplied roles retained once, grouped into Creative & Media, Internships, Leadership, MUN, and Technical/Campus. Years shown only where supplied; undated roles are labeled. Detailed duties/locations remain absent until verified. |
| CV | Implemented; official download missing | Professional résumé document layout with education, skills, tools, experience/leadership and languages. Print uses A4 page settings, margins and page-break rules; Print / Save as PDF is available. No official combined PDF exists in `public/documents/`, so no official download link is shown. |
| Contact | Implemented | Current email `edwinaby.media@gmail.com`, latest explicitly supplied WhatsApp, Instagram and LinkedIn. Form opens an email draft and does not send/store submissions. |
| Navigation / EA mark | Implemented | Home is immediately before Work; prioritized nav: Home, Work, About, Experience, CV, Say Hello. Services remains reachable from Work/About. EA mark and favicon contain only EA; wordmark remains EDWIN ABY. |
| Type / responsiveness | Improved; phone-width visual pass limited by browser | Body copy, descriptions, navigation, labels and relevant metadata have a responsive type scale. Desktop/mobile breakpoint CSS is present; the available in-app browser was 768px wide, so final visual review was performed at that tablet-class width. A nested 390px test frame was blocked by the browser. |
| Motion / accessibility / performance | Implemented | Motion for React transitions/reveals, reduced-motion support, accessible expandable experience groups, keyboard gallery controls, labeled form controls, Next Image, lazy poster-first video and visible focus states. |
| Existing asset audit | Complete | `public/images/profile/edwin profile.jpg` is a personal portrait. `public/images/references/` holds credited reference images only. Work, poster, video and hero folders contain placeholders; no portfolio project media or approved CV PDF were found. See `docs/content-inventory.md`. |
| Free stack / GitHub | Preserved | Existing Next.js/TypeScript/Tailwind/Motion stack. No paid tool/API/dependency added. All changes remain uncommitted and nothing was pushed. |

## Details requiring Edwin’s next update

- The actual `Profile.csv`/screenshots if they include facts beyond the pasted summary.
- Months/years for entries explicitly marked `DATE TO CONFIRM` and accurate responsibilities, locations or duration.
- Nathan Photos title variant and VoiceHunt wording confirmation.
- Original portfolio photographs/videos/posters, image descriptions and any credits/permissions.
- Approved combined CV PDF, study dates, and verified award names/dates.

## Verification to run after the current implementation pass

- `npm run typecheck` and `npm run build`.
- Confirm all existing routes respond and `/films` redirects to Work.
- Browser review of unified filters/empty states, grouped Experience, simplified EA mark, navigation, contact links and CV print layout.
