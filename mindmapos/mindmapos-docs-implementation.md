# MindMapOS `/docs` Page — Implementation Todo

> **Goal:** A standalone `/docs` page that serves as an interactive product presentation for investors, clients, and end users. Visually rich, technically detailed, non-technical friendly.

---

## Phase 0 — Setup & Dependencies

- [x] **0.1** Add route `/docs` in `App.tsx`
  ```tsx
  <Route path="/docs" element={<DocsPage />} />
  ```
- [x] **0.2** Install new dependencies
  ```bash
  npm install @react-three/fiber @react-three/drei three lottie-react
  ```
- [x] **0.3** Create file structure
  ```
  src/
  ├── pages/
  │   └── DocsPage.tsx
  ├── components/
  │   └── docs/
  │       ├── DocsNav.tsx
  │       ├── sections/
  │       │   ├── HeroSection.tsx
  │       │   ├── ProblemSection.tsx
  │       │   ├── HowItWorksSection.tsx
  │       │   ├── GuardianLayerSection.tsx
  │       │   ├── ArchitectureSection.tsx
  │       │   ├── PlatformRoadmapSection.tsx
  │       │   ├── MarketplaceSection.tsx
  │       │   ├── SetupDemoSection.tsx
  │       │   ├── BusinessModelSection.tsx
  │       │   └── ComparisonSection.tsx
  │       └── shared/
  │           ├── ScrollReveal.tsx
  │           ├── SectionLabel.tsx
  │           └── AnimatedCounter.tsx
  ```
- [x] **0.4** Add `docs` link to `LandingPage.tsx` nav and `DownloadPage.tsx` nav

---

## Phase 1 — DocsPage Shell & Navigation

- [x] **1.1** Build `DocsPage.tsx` — full page wrapper with ambient blobs (reuse from design system), sticky nav, and section scroll refs
- [x] **1.2** Build `DocsNav.tsx` — sticky left sidebar nav (desktop) with:
  - Section labels matching all 9 sections
  - Active section highlight using `IntersectionObserver`
  - Smooth scroll on click
  - Collapse to icon-only on mobile
- [x] **1.3** Build `ScrollReveal.tsx` shared component — Framer Motion wrapper that triggers `fade + slide up` when section enters viewport
  ```tsx
  // Reuse from design system:
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  ```
- [x] **1.4** Build `SectionLabel.tsx` — reusable kicker chip (e.g. "01 — Problem", "02 — How It Works")
- [x] **1.5** Build `AnimatedCounter.tsx` — number counts up when scrolled into view (for stats: 12k installs, 98.7% accuracy, etc.)

---

## Phase 2 — Section 01: Hero

**Goal:** Hook investors/clients immediately. One clear statement. Motion-rich.

- [x] **2.1** Full-screen hero with tagline: *"The Only OS That Listens To You"*
- [x] **2.2** Animated rotating device ring (Framer Motion) — Linux → Android → iOS → Windows → macOS icons orbiting a central Command icon *(Implemented via interactive `Hero3D` component with `@react-three/fiber`)*
- [x] **2.3** Three stat counters (animate on load):
  - `12,000+` commands executed
  - `98.7%` Guardian accuracy
  - `5` platforms supported
- [x] **2.4** Two CTAs: `View Live Demo` (redirects to `/app`) + `Download Now` (links to `/download`)
- [x] **2.5** Subtle particle/grid background using pure CSS (no library needed) — dots pattern from design.md

---

## Phase 3 — Section 02: The Problem

**Goal:** Make every audience feel the pain point before showing the solution.

- [x] **3.1** Split into 4 persona pain points (reuse from LandingPage personas):
  - Everyday user — "You need a CS degree to manage a computer"
  - Developer — "3 hours to set up an environment"
  - Power user — "No audit trail on automation"
  - Professional — "Machine management vs actual work"
- [x] **3.2** Each pain point as an animated card — appears on scroll with stagger delay (`delay: i * 0.1`)
- [x] **3.3** Before/After comparison — left side shows old way (terminal/manual), right shows MindMapOS way (conversation)

---

## Phase 4 — Section 03: How It Works (3 Steps)

**Goal:** The core product flow — must be crystal clear visually.

- [x] **4.1** Build a **horizontal scroll-driven step flow** (Framer Motion `useScroll` + `useTransform`):
  - Step 1: **Describe** — chat bubble animation typing a command
  - Step 2: **Review** — plan card expanding with numbered steps
  - Step 3: **Execute / Revert** — progress bar running, then undo button appearing
- [x] **4.2** Each step has:
  - Large step number (1, 2, 3)
  - Animated UI mockup (not static image — built in JSX)
  - Plain language explanation (2–3 sentences)
  - Example command in mono font (e.g. `"Install Spotify on my computer"`)
- [x] **4.3** At the bottom: animated loop showing a full request cycle (type → plan → confirm → done)

---

## Phase 5 — Section 04: Guardian Layer

**Goal:** Build trust on safety — critical for investors and enterprise clients.

- [x] **5.1** Build an **animated pipeline diagram** (Framer Motion, no R3F needed):
  ```
  User Input → AI Model → AST Analysis → Risk Classification → Guardian Decision → Execution / Block
  ```
  - Each node lights up sequentially on scroll
  - Arrow connectors animate between nodes
- [x] **5.2** Risk level cards (4 levels — reuse from LandingPage):
  - Critical (Rose) — System wipes
  - High (Orange) — Firewall changes
  - Medium (Amber) — App uninstalls
  - Low (Teal) — File moves
  - Each card flips/expands on hover showing example commands
- [x] **5.3** "What the Guardian prevents" — animated list of blocked command examples with red X animations
- [x] **5.4** Quote block: *"The most powerful thing about it isn't what it can do. It's what it won't do."*

---

## Phase 6 — Section 05: Architecture (Technical Deep Dive)

**Goal:** Satisfy technical evaluators and CTOs. Visual but detailed.

- [x] **6.1** Build an **interactive layered architecture diagram** (Framer Motion + SVG):
  ```
  Layer 4: User Interface (Chat, Web at localhost:7800)
  Layer 3: Agent Layer (Generalist + Specialist Agents)
  Layer 2: Guardian Layer (AST + Risk Engine)
  Layer 1: Local Execution (Native OS Commands)
  Layer 0: Your Hardware (Linux/Windows/macOS/Android/iOS)
  ```
  - Click each layer → sidebar expands with technical details
  - Highlight how data NEVER leaves the device (animated lock icon)
- [x] **6.2** Local-first data flow diagram:
  - Show: Input → Local Model → Plan → Guardian → OS → Result
  - Animate each arrow with a travelling dot
  - Red X on any external server connection attempt
- [x] **6.3** Model architecture comparison table:
  - Aria 4B Lite vs Aria 9B vs Aria 70B
  - RAM, accuracy, speed specs from `marketplaceData.ts`
- [x] **6.4** Tech stack callout box:
  - Frontend: React + Vite + Tailwind
  - AI: Ollama-compatible local models
  - Safety: AST-based Guardian Layer
  - Interface: localhost:7800

---

## Phase 7 — Section 06: Platform Roadmap

**Goal:** Show investors clear execution milestones.

- [x] **7.1** Build an **interactive timeline** (horizontal, scroll-driven):
  ```
  Phase 1 (April 2026) ──── Phase 2 (Q3 2026) ──── Phase 3 (Q1 2027)
       Linux                Android + iOS           Windows + macOS
   [LIVE ✅]              [IN DEV 🔜]              [PLANNED 🔜]
  ```
- [x] **7.2** Each phase node is clickable — expands to show:
  - Platforms included
  - Key features shipping
  - Status badge (Available / In Development / Planned)
- [x] **7.3** Platform availability grid (reuse from DownloadPage footer) with animated status indicators
- [x] **7.4** "Join Waitlist" CTA for Phase 2 and 3 platforms — links to download page with device pre-selected

---

## Phase 8 — Section 07: Marketplace Ecosystem

**Goal:** Show the extensibility and ecosystem depth.

- [x] **8.1** Build a **mini marketplace preview** — 4 category tabs (Models, Agents, Orchestrations, Bundles)
- [x] **8.2** Show 3 featured products per category (pull from `marketplaceData.ts`)
  - Use existing `ProductCard.tsx` component directly
- [x] **8.3** Animated ecosystem stats:
  - `5` Official Models
  - `8` Agents
  - `7` Orchestrations
  - `5` Bundles
  - `20%` creator revenue share
- [x] **8.4** Creator program teaser (Q3 2026) — pull from `CreatorSection.tsx`
- [x] **8.5** "Browse Full Marketplace" CTA → `/marketplace`

---

## Phase 9 — Section 08: Live Product Demo

**Goal:** Show the actual product working. No mockups — real flow.

- [x] **9.1** Embed the actual `SetupPage.tsx` wizard in an iframe-style container (device frame mockup):
  - Show as if it's running on a laptop screen
  - Label each of the 4 wizard screens with plain-language callouts
- [x] **9.2** Below setup: embed the actual `ChatApp` in the same device frame
  - Pre-populate with 2–3 example conversations showing Guardian Layer in action
  - Example 1: Safe task (install Spotify) → executes
  - Example 2: Risky task (delete system32) → Guardian blocks it
  - Example 3: Dev setup → DevFlow agent activates
- [x] **9.3** "Try It Now" CTA -> `/setup` (real onboarding)


---

## Phase 10 — Section 09: Business Model

**Goal:** Investor-facing. Clear revenue streams, market positioning.

- [x] **10.1** Two revenue stream cards (animated flip on scroll):
  - **Free tier** — Local Runtime, unlimited actions, BYO API
  - **Cloud Synced** — Waitlist, cross-device memory, managed model
- [x] **10.2** Marketplace revenue model:
  - `0%` on free products
  - `20%` on paid products
  - Creator program opens Q3 2026
- [x] **10.3** Competitive moat section — pull from LandingPage comparison table:
  - Use the full 9-row comparison table
  - Animate MindMapOS column lighting up green row by row on scroll
- [x] **10.4** Market opportunity callout:
  - "Every device. Every user. One agent."
  - TAM reference framing (device management + AI assistant markets)

---

## Phase 11 — Polish & Integration

- [x] **11.1** Add `/docs` to `LandingPage.tsx` nav: `Docs` link between Guardian Layer and Download
- [x] **11.2** Add "Full Technical Docs →" link on the landing page hero section
- [x] **11.3** Add progress bar at top of `/docs` page (Framer `useScroll`) showing reading progress
- [x] **11.4** Add "Share this page" button (copy URL) for investor sharing
- [x] **11.5** Mobile responsiveness pass — all sections stack vertically, nav becomes bottom sheet
- [x] **11.6** Performance audit — lazy load R3F sections, use `Suspense` boundaries
- [x] **11.7** Add `metadata` for the docs page (OG tags for sharing)
- [ ] **11.8** Add print/PDF export option for investor leave-behind (Removed per user request)

---

## Implementation Order (Recommended)

```
Week 1: Phase 0 → 1 → 2 → 3     (Shell + Hero + Problem + How It Works)
Week 2: Phase 4 → 5 → 6          (Guardian + Architecture + Roadmap)
Week 3: Phase 7 → 8 → 9          (Marketplace + Demo + Business Model)
Week 4: Phase 10 → 11            (Polish + Integration + Mobile)
```

---

## Key Design Rules (from design.md — apply to every section)

- Background blobs on every full-page view ✅
- `rounded-[32px]` for all primary cards ✅
- `max-w-7xl mx-auto px-4 sm:px-8` for all sections ✅
- `py-24` section rhythm (use `py-32` for hero) ✅
- Framer Motion `initial={{ opacity: 0, y: 20 }}` for all scroll reveals ✅
- `sky-500` for all primary CTAs ✅
- `#1a1b26` dark navy for contrast elements ✅
- `font-light` for body, `font-medium` for headings ✅
- Never use default `shadow-md` — use custom shadow strings ✅
