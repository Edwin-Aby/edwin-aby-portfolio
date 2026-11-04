# EDWIN ABY — design system

## Direction: Contact Sheet / Darkroom Red

**On this site, the three words in Edwin’s own tagline become three ways into his practice.** Frames leads to photography; Feelings to moving image; Stories to the person and the thinking behind the work. The index and frame numbering borrow from the working language of photography, not from a reference portfolio.

### Three concepts considered

| Direction | Composition and palette | Strength | Limitation |
|---|---|---|---|
| **Contact Sheet / Darkroom Red** *(selected)* | Ink, warm paper and one safelight vermilion; an oversized name over a credited monochrome Kerala monsoon reference; the tagline becomes three navigable modes. | Belongs to photographic practice, lets real work replace slots naturally, and connects visual work with technical thinking. | It will become much more persuasive when Edwin supplies his own images. |
| **Monsoon Ledger** | Pale mineral paper, weather-led photo essays, serif captions and red annotations. | Anchors the identity in a real local landscape and suits still photography. | Risks making the whole brand about weather when Edwin’s practice is broader. |
| **Edit Suite / Signal** | Dark compact technical typography, horizontal sequences, muted green and signal red. | Makes the creative/technical combination explicit and suits filmmaking. | Can read as a software interface and subordinate the emotion in the work. |

### Why this direction

A contact sheet is a photographic tool: several possible frames sit beside one another before the maker chooses what a story is. That structure connects stills, motion, and creative/technical judgment. Red is a single darkroom/signal accent, not a luxury-gold treatment. Warm paper gives the photography breathing room; ink lets the photography stay central. The temporary image is a credited Kerala monsoon landscape used only as a visual reference, never a portfolio credit.

### Independent design principles studied

Across the researched photographer and filmmaker portfolios (Andy Whitlatch, Nicholas Langer, Derek Wiesehahn, Emily Roberts Creative, Jason Van Bruggen, and Simon Stock), the useful principles were: let the maker’s point of view lead; keep stills, motion, and personal practice easy to find; let imagery carry more weight than interface decoration; and let categories reflect the practice. These are principles only. No composition, palette, card, navigation, or section sequence is copied from any one site.

### Audit of the previous implementation

- **Remove:** Night Orchid’s plum/lilac/persimmon combination; angular geometric placeholder illustration; thin decorative boxes around each image; repeated mono labels; the generic split name-and-image hero; repeated soft reveal motion.
- **Retain:** App Router and route foundations, empty work data collection, real CV facts with unconfirmed dates omitted, keyboard skip link, visible focus, reduced-motion behavior, responsive menu, local media slots, and Motion for React.
- **Redesign:** Establish the portfolio as a photographic index; put a large honest landscape reference in the hero and label/credit it on-screen; reserve actual work area as contact-sheet frames; distinguish each page by purpose; concentrate animation on the photo arrival, staged scroll reveals, and responsive navigation.

## Tokens

| Role | Value | Use |
|---|---|---|
| Ink | `#111211` | Main stage and navigation |
| Raised ink | `#191a18` | Footer and supporting stages |
| Warm paper | `#e8e5dc` | Editorial reading surfaces |
| Paper shade | `#d5d2c8` | Secondary light surface |
| Safelight | `#ef4d36` | Navigation, links, index and emphasis |
| Quiet ink | `#9c9a92` | Metadata and secondary notes |

Typography uses the local system stack: Bodoni MT/Didot/Times for display; Arial/Helvetica for body; Courier New for index metadata. No external font request or paid font is made.

## Motion and access

Motion is used for a single slow hero-image settle, directional link feedback, one-time section reveals, and the existing route transition. Reduced-motion preferences remove movement. Hover-only interaction is limited to pointer devices. Navigation is keyboard operable, controls are labeled, and the mobile menu has explicit open/close state. There is no custom cursor, Lenis, scroll hijack, autoplay video, or paid plugin.

## Content and media rules

`src/data/work.ts` remains the only source for project cards. Empty is the honest state until Edwin adds original projects. Any photo in `public/images/references/` is editorial research only; the homepage Kerala monsoon photo is labeled on the image and credited in the footer. Replace it with an original hero photo when supplied. Do not turn reference images into fake project examples.
