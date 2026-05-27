# swarph.ai — Network-Brand Manifesto Site, Design Spec

- **Date:** 2026-05-27
- **Status:** Approved (brainstorming complete; pending user review → writing-plans)
- **Author:** Pierre Samson + Claude (lab-ovh)
- **Domain:** `swarph.ai` (registered at **Namecheap**, 2-yr; A/AAAA not yet set — DNS managed at Namecheap, commander sets records → OVH box)
- **Sibling:** `metaedge.surf` (the live consumer SEARCH face); swarph.ai = the **network/platform identity** (serious `.ai` brand).

## 1. Purpose

A single-page, `.io`-style **manifesto with proof woven in** — the canonical public front door to "the swarph." It makes a visitor *understand and believe* the thesis (the internet of the LLMs; agnostic coordination substrate) while *seeing it's already real* (metaedge.surf live, gridiron, the PyPI libs). Spine = identity + conviction; onboarding/docs/portfolio are sections, not the focus.

**Audience:** curious devs, potential peer-onboarders, collaborators/funders.

## 2. Locked aesthetic (approved from the vibe mock, do not redesign)

Mauve/purple aurora ground + **neon-green hero**, `.io` one-page scroll, deliberately richer/darker than metaedge.surf's flat-teal utility. Vanilla HTML/CSS/JS, **no build step**. Locked design tokens:

```css
--bg0:#120a1f; --bg1:#1d0f33; --mauve:#3a2350; --mauve2:#553a6e;
--neon:#7dff9b; --neon2:#39ff8b; --ink:#ece6f5; --muted:#a594c0;
```
- **Ground:** fixed layered radial glows (green top-right, purple mid-left, deep-violet bottom) over a `160deg` `--bg0→--bg1→#0d0718` gradient + a faint masked grid (node-mesh hint). The ground **gently drifts** (slow CSS keyframe on background-position / a translated layer) — subtle, not distracting.
- **Hero type:** `clamp(2.8rem,7vw,5.6rem)`, weight 800, `--neon` with `text-shadow:0 0 36px rgba(57,255,139,.35)`.
- **Cards:** `rgba(40,22,60,.4)` + `1px` mauve border + `backdrop-filter:blur(6px)`.
- System sans for v1 (`-apple-system,…,Inter,Roboto`). (A display/grotesk face is a possible later polish; not v1.)

## 3. The page — scroll narrative (top → bottom)

One `<main>`, seven sections. Each `<section>` fades/rises in on scroll (see §4). Copy below is the source of truth.

### S1 — Hero (the locked mock, verbatim)
- Eyebrow: `⌬  S W A R P H`
- H1: **The internet of the LLMs.** ("LLMs." in `--neon`)
- Sub: "An **agnostic coordination substrate** where AI cells discover, request, and **fuse** each other's capabilities. The big models will stay — the real need is the **mesh between them**."
- Proof chips: `metaedge.surf — live` (→ https://metaedge.surf) · `gridiron — a live cell` · `swarph-cli · swarph-mesh — on PyPI`
- CTAs: **See how it works** (`#how`) · **Search the swarph →** (https://metaedge.surf)
- Scroll hint: `SCROLL ↓`

### S2 — The thesis ("why")
- H2: **The big models will stay. The need is the mesh between them.** ("mesh between them" in `--neon`)
- Body: "More frontier models isn't the missing piece — coordination is. As capabilities specialize and scatter across providers and agents, the gap becomes **discovery and composition**, not raw intelligence. No central owner, no single model to rule them. The swarph is the agnostic substrate that lets specialized AI cells find and use each other — so they **compound** instead of duplicate."

### S3 — How it works (`#how`)
- H2: **Cells are *websites*. The swarph is the *web* over them.** (italics → `--neon`)
- Body: "Every cell publishes the capabilities it chooses — **opt-in, MCP-native**. Humans read and request; **only LLMs connect**. A peer can scan the whole graph, find a complement, and offer to compose."
- Triad cards: **Discover** ("Search the whole swarph for a capability — ranked by an LLM, not keywords.") · **Request** ("Use an existing feature instead of rebuilding it — the anti-duplication engine.") · **Fuse** ("Specialists find their complements and compose — multiplicatively.")
- One-liner strip: "MCP is the HTTP. Search is the DNS. The meta-edge is the Google. Reputation is the PageRank."

### S4 — It's real (dedicated proof)
- H2: **It's already running.**
- Body: "Not a whitepaper — a working mesh. metaedge.surf went from idea to live in a day."
- Proof cards (each linked where live):
  - **metaedge.surf** — "The search face. Ask it what the swarph can do." (→ https://metaedge.surf)
  - **gridiron** — "A live specialist cell — NFL analytics, Monte-Carlo simulation, coordinator DNA."
  - **swarph-cli** — "The SDK. Spin up a discoverable cell." (→ PyPI/GitHub)
  - **swarph-mesh · swarph-shared** — "The substrate libraries, on PyPI."

### S5 — Build a cell (adoption hook — light)
- H2: **Spin up a cell.**
- Body: "One command and you're a node on the network."
- Code block (real, today's commands — do NOT invent CLI surface):
  ```
  pipx install swarph-cli
  swarph spawn my-cell          # a named, resumable mesh cell
  ```
  (Caption: "The full host-page + opt-in publishing scaffold is on the roadmap — see below.")

### S6 — Where it's going
- H2: **Where it's going.**
- Beats (cards or list): "A searchable **feature gallery** — every cell's capabilities, discoverable." · "A **meta-edge global index** — the Google of the swarph." · "**Reputation as PageRank** — trust as the ranking signal." · "**Fusion** — cells composing into new capabilities."

### S7 — CTA + footer
- CTA block: H2 **See it. Build on it.**
- Primary: **Search the swarph →** (https://metaedge.surf). Secondary: **Get the SDK →** (GitHub/PyPI swarph-cli). Collaborate line: "Building in this space? **Get in touch**" (mailto — address TBD, see §7 open Qs).
- Footer: "swarph — the agnostic coordination substrate · © 2026 Pierre Samson · a BrainSurfing property" + links (metaedge.surf · GitHub · PyPI).

## 4. Interactivity (tasteful, vanilla, no-build)

- **Aurora drift:** slow CSS keyframe animation on the ground layer (≈30–60s loop, `prefers-reduced-motion` respected → static).
- **Scroll reveal:** `IntersectionObserver` adds a `.in` class → sections fade + rise (`opacity 0→1`, `translateY 16px→0`, ~0.5s). No library.
- **Hovers:** chips/cards lift + glow (CSS only).
- Smooth-scroll anchors (`html{scroll-behavior:smooth}`).
- That's the whole of `app.js` — IntersectionObserver + nothing else. No fetch, no backend (pure static — unlike metaedge.surf, swarph.ai has no `/api`).

## 5. File structure

```
swarph-ai/
├── web/
│   ├── index.html        # the 7-section one-pager
│   ├── styles.css        # locked tokens + layout + animations
│   ├── app.js            # IntersectionObserver scroll-reveal (only)
│   └── favicon.svg       # on-brand (purple/neon hexagon — like metaedge's, neon-green)
├── deploy/
│   ├── nginx-swarph-ai.conf   # static vhost (no /api), CSP, http2
│   └── README.md              # DNS (Namecheap) + certbot + /var/www runbook
└── docs/superpowers/...       # this spec + the plan
```

## 6. Build / deploy

- Vanilla no-build (like metaedge.surf). New **private** repo `darw007d/swarph-ai`.
- Serve from **`/var/www/swarph-ai`** (NOT the home dir — `/home/ubuntu` isn't nginx-traversable). Copy `web/.` there on deploy.
- nginx vhost: HTTP→HTTPS redirect + TLS (certbot) + a **fully strict CSP**: `default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:` — **no `'unsafe-inline'` anywhere**. This site has no third-party widget and no inline styles/scripts (all CSS in `styles.css`, all JS in `app.js`), so it can be locked tighter than metaedge.surf. Use `http2 on;` (modern syntax, not the deprecated `listen … http2`). **Build constraint: zero inline `style=`/`<style>`/`<script>` — keep everything externalized so the strict CSP holds.**
- **DNS at Namecheap** (commander): A `@`+`www` → `51.38.39.156`, AAAA `@`+`www` → `2001:41d0:305:2100::60c5`. Lab hands the exact records; deploy execution (records + certbot + nginx) is the commander-gated go-live, same as metaedge.surf.
- **Favicon shipped from the first commit** (standing checklist item now).

## 7. Out of scope (v1) + open questions

**Out of scope** (manifesto only — these are the *real* network site's later chapters, separate cycles): a live onboarding wizard, a full docs/SDK reference hub, the actual feature-gallery/registry UI, any `/api` or backend, auth/accounts.

**Open questions (for the build / commander):**
1. **Collaborate contact** — mailto to `pierresamson@gmail.com` (spam-exposes personal email), a dedicated `hello@swarph.ai` (needs mail setup), or just GitHub as the channel? Default for v1: GitHub link + a mailto the commander can swap. (Decide at build.)
2. **Display typeface** — system sans (v1) vs a hosted grotesk for extra `.io` edge (later polish).
3. Exact `swarph-cli` GitHub/PyPI URLs to link (confirm at build).
