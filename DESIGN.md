# DESIGN.md — "Tactical Matchday"

The visual source of truth for this portfolio. If a component disagrees with this file, the component is wrong.

## 1. Concept

Three directions were explored:

| Direction | Idea | Verdict |
| --- | --- | --- |
| **A. Matchday Editorial** | Football-magazine layouts, oversized condensed type, numbered "features". | Strong hierarchy and memorable, but on its own it reads as a sports blog. |
| **B. Tactical Engineering** | Tactics-board surfaces, pitch markings, formations drawn like system diagrams. | Most original, and the closest to engineering thinking. Can feel cold. |
| **C. Blaugrana Digital** | Developer-tool product UI (Linear/Vercel) in Barça-inspired colours. | Most recruiter-friendly, but the least distinctive. |

**Chosen: "Tactical Matchday" = B's structure + A's typography + C's restraint.**

- The *structure* is a tactics board: thin pitch lines, formations, numbered positions. Engineering diagrams and football diagrams share the same visual grammar (nodes, lanes, phases), so the football identity arises from the content instead of being pasted on.
- The *voice* is matchday editorial: condensed uppercase display type, jersey numbers, mono kickers ("MD 02 · Featured work").
- The *surface* is a calm developer product: dark navy, hairline borders, almost no glow, generous whitespace.

The professional identity is always dominant. Football lives in the details: labels, numbering, diagrams, separators, one line of copy in About, and one sign-off in the footer.

No official crests, player photography, slogans or club marks are used. The colours and the football grammar are original interpretations.

## 2. Colour

Defined as Tailwind theme tokens in `app/globals.css`.

| Token | Hex | Use |
| --- | --- | --- |
| `night` | `#0B1020` | Page background |
| `pitch` | `#0F1629` | Raised surfaces (cards, panels) |
| `turf` | `#151E36` | Hover / second surface level |
| `line` | `#F3F0E8` @ 8–14% | Hairline borders, pitch markings |
| `chalk` | `#F3F0E8` | Primary text |
| `mist` | `#9AA3B5` | Secondary text (≈7.4:1 on night) |
| `fog` | `#6B7489` | Tertiary text / meta (only ≥ 12px mono, decorative or paired with other cues) |
| `blau` | `#004D98` | Brand fill: stripes, chips, focus areas |
| `blau-bright` | `#5C9BE6` | Blue *text*, links, focus ring (≈6.6:1 on night) |
| `grana` | `#A50044` | Brand fill: stripes, flagship accents |
| `grana-bright` | `#EC5C8F` | Garnet *text* (≈5.6:1 on night) |
| `burgundy` | `#6A123A` | Deep tints behind garnet |
| `gold` | `#EDBB00` | **Extremely restrained**: captain's armband on the flagship project, the "W" in the scoreboard, and the "expected generation" accents in SolarSleuth diagrams (sunlight). Never body text. |

Rules
- At least 85% of any viewport is night/pitch neutrals.
- Blue and garnet appear together as **the stripe**: a 2-colour vertical-stripe motif (the jersey reference). The stripe is the brand's signature element.
- The saturated `blau` / `grana` are never used for small text on dark backgrounds; use the `-bright` variants.
- Meaning is never carried by colour alone. Learning vs. established skills, for example, use label text plus solid vs. dashed borders.

## 3. Typography

| Role | Family | Notes |
| --- | --- | --- |
| Display | **Archivo** (variable, `wdth` axis) | Set condensed (`font-stretch: 72%`), uppercase, tight leading (0.88–0.95). Jersey/campaign feel. |
| Body | **Geist** | 16–18px, line-height 1.6, max ~68ch. |
| Mono / labels | **Geist Mono** | Kickers, numbers, stats, meta. Uppercase, tracking `0.14em`, 11–13px. Tabular numerals. |

Scale (fluid with `clamp`): hero name `clamp(4rem, 13vw, 11.5rem)` · section title `clamp(2.25rem, 5vw, 4rem)` · card title `1.5–2.25rem` · body `1rem–1.125rem` · kicker `0.72rem`.

## 4. Spacing & layout

- 4px base grid (Tailwind default scale).
- Container: `max-w-[1240px]`, gutters `px-5` (mobile) / `px-8` (≥ md).
- Section rhythm: `py-24` mobile, `py-32` desktop.
- 12-column grid on desktop with deliberately asymmetric splits (7/5, 5/7, 8/4). Mobile is one column composed specifically for mobile, not a shrunken desktop.
- Radius: `rounded-sm`/`2px` for chips, `rounded-xl` for cards. Pitch-board panels use `rounded-2xl`.

## 5. Components

- **Stripe**: vertical blau/grana stripes. Used in the monogram, section headings and the flagship card edge.
- **SectionHeading**: `MD 0X · kicker` mono label + condensed display title + optional lede. MD = matchday.
- **PitchDivider**: a hairline with a centre circle, the halfway line. Used between major sections.
- **Scoreboard**: a stadium-board panel with mono tabular figures, small caps labels and a "Full time" header bar.
- **Project cards** (player-card inspired): squad number, kicker, title, problem line, stack chips, CTA. Flagship = full-width "captain" card with a gold armband "C".
- **Project visuals**: original abstract SVG diagrams, one per project (`solar-dashboard`, `ledger`, `escrow`), plus section diagrams such as `solar-architecture` that case studies can embed. They show *concepts* only: no fake screenshots, numbers or model outputs.
- **TacticalPitch**: hero diagram. A 4-3-3 formation whose positions are confirmed skills (fundamentals at the back, languages in midfield, frameworks up front).
- **Team sheet**: case-study sidebar (date, stack, links if confirmed).
- **Chip**: solid border = established; dashed border + "Learning" label = in training.

## 6. Motion

- Only `transform` / `opacity` are animated. Durations are 200–700ms on `cubic-bezier(.2,.7,.2,1)`.
- Scroll reveal: a single IntersectionObserver component. Content is visible without JS.
- Hero: the formation's passing lanes draw in once. Hovering a line highlights that unit.
- Cards: 2px lift and border brighten on hover.
- `prefers-reduced-motion: reduce` disables all of the above (handled globally in CSS).
- The site must look complete with zero animation.

## 7. Responsive rules

- **< 640px**: the hero name stacks on two lines at ~17vw. The tactical pitch becomes a full-width panel below the copy. Nav collapses into a full-height sheet menu. Scoreboard is 2×2.
- **640–1024px**: two-column cards and a 4-column scoreboard. The pitch sits below the hero copy, centred, at max 420px.
- **≥ 1024px**: asymmetric 7/5 hero, flagship card split 7/5, sticky case-study table of contents.
- Tap targets ≥ 44px. No horizontal scrolling at any width.

## 8. Accessibility

- Semantic landmarks: `header`, `nav`, `main`, `section[aria-labelledby]`, `footer`. One `h1` per page.
- Visible focus: 2px `blau-bright` outline with offset on every interactive element.
- Skip link to `#main`.
- Decorative SVG is `aria-hidden`. Meaningful diagrams have `role="img"` + `<title>`/`<desc>` and a text equivalent.
