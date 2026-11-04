# EDWIN ABY — Design direction

## Art direction: Night Orchid

An after-hours editorial world for a photographer, filmmaker, and technical thinker. Deep plum carries the cinematic mood; lilac brings a cool, imaginative light; persimmon adds a human warmth. Warm ivory gives the image work breathing room. The lighter sections keep the site from becoming a uniform dark stage, while the warm/cool balance remains compatible with a varied photo collection.

The design uses type, crop, negative space, and restrained motion as its main character. Media slots use flat, angular tonal panels and crop lines rather than decorative gradients or circles. They are visibly labelled placeholders, not presented as Edwin's work. The font stack is local system serif, sans-serif, and monospace, with no remote font request.

## Colour tokens

| Token | Value | Use |
| --- | --- | --- |
| Orchid | `#241c36` | Main cinematic background |
| Orchid deep | `#1a1527` | Footer and deeper panels |
| Paper | `#f2eee7` | Editorial portfolio panels |
| Lilac | `#c1b5f2` | Cool accent and emphasized type |
| Persimmon | `#f28c75` | Warm action accent and small markers |
| Muted | `#aaa3b5` | Secondary text on dark backgrounds |
| Muted ink | `#746d7c` | Secondary text on light backgrounds |

The tokens live in `src/app/globals.css` under `:root`. Check contrast again if changing colors or adding photography with text overlays.

## Motion

The motion language uses a short 280 ms route change, a staggered two-line hero entrance, crop reveals for image slots, and one-time rise reveals for story blocks. The Work filters crossfade and lift the selected view; project photos open in an accessible full-screen viewer with keyboard and touch-sized controls. A 2 px persimmon rule tracks scroll progress without changing scroll behaviour. Motion for React handles these interactions; each respects reduced-motion preferences. No smooth-scroll engine, custom cursor, autoplay video, or paid animation plugin is used.
