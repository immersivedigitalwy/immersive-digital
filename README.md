# Immersive Digital Co · Futuristic Marketing Site

The user-facing marketing site, built against the brand tokens in `../colors_and_type.css`.
Five fully-routed pages with full scroll motion, page transitions, and a custom cursor.

## Pages

| # | Path | Component |
|---|---|---|
| 01 | Home / Index | `PageHome.jsx` |
| 02 | Services (all six lines) | `PageServices.jsx` |
| 02.x | Service detail (6 routes) | `PageServiceDetail.jsx` (reads `services.jsx`) |
| 03 | Work (filterable archive + horizontal selected strip) | `PageWork.jsx` |
| 04 | About | `PageAbout.jsx` |
| 05 | Book (contact form) | `PageContact.jsx` |

Service detail routes: `/services/drone`, `/services/real-estate`, `/services/360`,
`/services/brand`, `/services/web-build`, `/services/social-plan`. Each detail page
has its own hero, deliverables grid, process timeline, multi-tier pricing table,
FAQ accordion, and prev/next service navigation.

## Brand service (expanded)

The Brand service is a single line covering the full identity spectrum:

- **Brand Audit** — 30-min walkthrough, PDF fix list, no upsell
- **Logo Refresh** — evolve an existing mark
- **New Logo Build** — from scratch, primary + monogram + favicon
- **Full Brand Kit** — logo + color + type + voice + social templates, handed off as a folder
- **Social Templates** — IG story + post + highlight icons, editable in Canva
- **Naming + voice** — name exploration, voice doc, tagline + bio variants

## Motion system (`motion.jsx`)

The preview iframe pauses the compositor — CSS transitions, `requestAnimationFrame`,
and `IntersectionObserver` all freeze. This file works around that with a fully
JS-driven motion stack:

- `useInView` — scroll listener + 250 ms poll (no IntersectionObserver)
- `useTween` — `setTimeout(16)` tween loop (no rAF, no CSS transition)
- `useMagnetic` — gentle cursor-tracking offset for magnetic buttons
- `useScrollVelocity` — eased per-frame scroll speed (used by the marquee)
- `Reveal` — fade + 36 px slide-up on entry
- `SplitText` — word-by-word slide-up with stagger
- `MaskReveal` — lime wipe-off on entry
- `Counter` — animates 0 → N on scroll-in
- `Parallax` — translates at variable scroll speed
- `ScrollProgressBar` — top-of-page lime progress indicator
- `Tilt` — subtle 3D rotate on mouse-move
- `MagneticButton` — primary CTAs that follow the cursor

All of these work in real browsers AND in the sandbox preview.

## Other futuristic touches

- **Page transitions** (`App.jsx`) — full-bleed lime curtain wipes top-to-bottom between routes
- **Custom cursor** (`Cursor.jsx`) — lime dot that grows on hover and turns into a labelled disc ("VIEW", "OPEN", "BOOK", "SEND") on tagged elements
- **Magnetic CTAs** — every primary booking button gently follows the cursor when nearby
- **Scroll-velocity marquee** — the marquee speeds up the harder you scroll, slows back down when you stop
- **Horizontal-scroll selected projects strip** on `/work` above the filterable grid
- **Sticky scroll-pinned hero** on detail pages (content stays as you scroll past)
- **Grid background** (`app.css .grid-bg`) — subtle lime grid behind hero / catalog / closing CTA
- **Scan-lines** — two horizontal lime beams sweep the hero, offset by 3s
- **Live clock** in the nav (Mountain Time)
- **Coordinates block** (41.3114° N, 105.5911° W — Laramie) on every page hero
- **Operational data labels** — `REC · 26 / V_2026.05`, `EXP 1/125 · f/8 · ISO 400`, `ALT 400 ft AGL`, etc.
- **Crosshair corner brackets** on cards and image panels
- **Big-number gigantic footer wordmark** in outlined stroke type
- **FAQ accordion** with rotating + icon, lime-colored
- **3-tier pricing cards** with a `MOST PICKED` ribbon on the featured tier

## Booking links

Three paths into the booking flow throughout the site:

1. **Header `BOOK` button** (top right, always visible) → `/contact` page
2. **Hero CTA** (`Book a call`) → `/contact`
3. **`mailto:hello@immersivedigital.co`** — direct email links in the contact sidebar + footer
4. **Closing CTA** on home (`Book your shoot. Audit your site. Refresh your brand.`) → `/contact`
5. **In-line `Book this`** buttons on every service block

The `/contact` form is wired locally with React state — submitting flips to the
success state ("Received · 200 OK · I'll reply within 24 hours."). To make it
production, point the `onSubmit` handler at your Formspree / Resend / etc. endpoint.

## Caveats

- **Placeholder photography** — same convention as the rest of the design system; the
  `<PhotoSlot>` component draws a crosshair-bordered black box. Drop real photos in
  by changing the underlying `<img>` source in `primitives.jsx`.
- **Live clock** uses the user's local time; the brand operates on Mountain Time. If you
  want to lock the display to Wyoming time regardless of viewer, swap in `Intl.DateTimeFormat`
  with `timeZone: 'America/Denver'` in `Nav.jsx`.
- **No real CMS** — service copy and work entries live in arrays at the top of each
  Page file. Move them to a JSON/CMS later.
