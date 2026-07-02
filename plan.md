
# Ryan — Cinematic Creator Portfolio

A dark, warm, cinematic portfolio site. Deep blacks, gold accents, soft amber glows. Built as a single-page scrolling experience with distinct anchored sections, real routing for SEO where it matters, and rich motion throughout.

## Visual Direction

- **Palette:** near-black `#0a0705` background, warm charcoal surfaces, gold `#d4a24c` primary accent, soft amber glow, cream text.
- **Typography:** Fraunces (display serif, warm cinematic feel) + Inter (body). Loaded via `<link>` in `__root.tsx`.
- **Textures:** subtle film-grain overlay, radial gold vignettes, soft noise on cards.
- **No purple gradients, no generic devs vibes.** Warm, editorial, premium.

## Sections (single scrolling page)

1. **Page-load intro** — Full-screen black curtain with Ryan's monogram fading in, then curtain lifts to reveal hero. ~1.4s total.
2. **Hero** — Fullscreen. Name "Ryan" in large Fraunces, tagline "Building worlds, one system at a time." Animated background: slow-drifting gold particle field (canvas) + parallax radial glow that follows cursor. Primary CTA "Let's build something" scrolls to contact; secondary "See my work".
3. **About** — Warm two-column: portrait/placeholder monogram tile on one side, personal copy on the other. Copy pulled from user's notes — 17, Canada, loves bringing ideas to life on Roblox, focused on growth and real connections. Fade-up on scroll.
4. **Showcase** — Three visual cards (Sequo Restaurant, Petal Café, Washiez Car Wash) using the uploaded cover images. Hover: lift + gold glow + subtle scale. Click → in-site detail modal with larger art, description, role, and a "Play on Roblox" button (URLs to be filled by user later; placeholders wired).
5. **Skills / Craft** — Elegant badges arranged in a soft grid: Gameplay Systems, NPC Behavior, UI Design, Staff Tooling, Economy Design, World Building, Scripting, Playtesting. Each badge has a soft gold ring that pulses on hover. No progress bars or tech-stack tables.
6. **Booking** — Embedded Calendly inline widget styled to blend with the dark theme (custom background/text colors via Calendly URL params, wrapped in a gold-bordered "card"). Feels native, no raw link visible.
7. **Contact** — Three warm tiles: Email (ryanplayzvidyt@gmail.com), Discord (novaryaan), Roblox (ryaan1233). Copy-to-clipboard on click with a small toast.
8. **Footer** — Minimal: monogram, "Made with care in Canada", year.

## Motion & Interaction

- Framer Motion for all scroll reveals (fade + 16px slide-up, stagger children).
- Custom `useInView` triggers per section.
- Hero canvas particle system (lightweight, ~60 particles, gold with alpha).
- Cursor-follow radial glow in hero (transform on a blurred div, throttled).
- Card hover: `translateY(-6px)`, gold box-shadow, 250ms ease.
- Smooth-scroll behavior on the html element; nav links scroll to section IDs.
- Grain overlay: fixed full-screen SVG noise at ~4% opacity.

## Technical Notes

- Single route `/` with all sections + hash anchors for in-page nav (this is the documented exception for a genuine long-scroll page).
- Update `__root.tsx` head with real title/description/OG for "Ryan — Creator Portfolio" and add Fraunces + Inter `<link>` tags.
- Update `src/styles.css` design tokens: replace default palette with warm dark theme (background, foreground, primary=gold, accent=amber, card surfaces, gold-glow shadow token, radial-gold gradient token).
- New components under `src/components/portfolio/`: `PageLoader`, `GrainOverlay`, `ParticleField`, `Hero`, `About`, `Showcase`, `ShowcaseModal`, `Skills`, `Booking`, `Contact`, `Nav`, `Footer`.
- Calendly embed via official inline widget script loaded once in the Booking component with dark-theme query params (`background_color=0a0705&text_color=f5ecd7&primary_color=d4a24c`). No Lovable badge (handled via publish settings when publishing).
- Showcase cover images: import the three uploaded webp files from `user-uploads://` as Lovable assets so they ship as CDN URLs, not repo binaries.
- Framer Motion (`motion`) added via `bun add motion`.
- Fully responsive: mobile stacks all sections, hero scales type with clamp(), particle count reduced on small screens, showcase becomes single-column, contact tiles wrap.

## Out of scope for v1

- Individual project routes (modals cover the "view more" experience for now; can be promoted to routes later if desired).
- CMS/backend — content is authored in code.
