# MindMapOS — Design System Reference

> **Purpose:** This document is the single source of truth for all visual and UX decisions in the MindMapOS project. Every new component, page, or feature must conform to the standards defined here to maintain a consistent, premium feel across the product.

---

## 1. Brand Identity

| Attribute   | Value                                                                              |
| ----------- | ---------------------------------------------------------------------------------- |
| **Product** | MindMapOS                                                                          |
| **Tagline** | *"The Only OS That Listens To You"*                                                |
| **Feel**    | Clean, modern, premium, trustworthy. Thinks Apple-meets-Linear.                   |
| **Voice**   | Professional, technical yet accessible, transparent, safe.                        |
| **Logo**    | `Command` icon (Lucide) inside a `w-10 h-10` white/glass rounded circle.          |

---

## 2. Color Palette

All tokens are defined in `src/index.css` under `@theme {}` and must be used by name rather than raw hex wherever possible.

### Primary Colors

| Token / Class        | Hex / Value           | Usage                                               |
| -------------------- | --------------------- | --------------------------------------------------- |
| `--color-primary`    | `#0047AB`             | Brand blue — buttons, links, focus rings (ChatApp)  |
| `--color-secondary`  | `#00A651`             | Brand green — active sidebar items, key accents     |
| `--color-on-primary` | `#ffffff`             | Text on primary-colored backgrounds                 |

### Surface Colors

| Token / Class                    | Hex / Value  | Usage                                        |
| -------------------------------- | ------------ | -------------------------------------------- |
| `--color-surface`                | `#ffffff`    | Default card / panel backgrounds             |
| `--color-on-surface`             | `#1e293b`    | Default body text                            |
| `--color-surface-container`      | `#f8fafc`    | Page background (`bg-[#F8FAFC]`)             |
| `--color-surface-container-low`  | `#f1f5f9`    | Subtle alternate rows / sections             |
| `--color-surface-container-high` | `#e2e8f0`    | Dividers, borders                            |
| `--color-outline`                | `rgba(0,0,0,0.1)` | Default border color                    |
| `--color-outline-variant`        | `rgba(0,0,0,0.05)` | Subtle inner borders                   |
| `--color-muted`                  | `#64748b`    | Secondary text, placeholders                 |

### Accent / Semantic Colors (Tailwind classes — use as-is)

| Color       | Class Prefix  | Usage                                                            |
| ----------- | ------------- | ---------------------------------------------------------------- |
| Sky Blue    | `sky-*`       | Primary CTA buttons, links, active nav indicators, highlights    |
| Dark Navy   | `#1a1b26`     | Dark elements (user avatar bg, dark feature cards, dark buttons) |
| Emerald     | `emerald-*`   | Success, completion states, "Optimization Done" badges           |
| Teal        | `teal-*`      | Guardian layer / safety context                                  |
| Rose/Orange | `rose-*`, `orange-*` | Risk levels — Critical, High                            |
| Amber       | `amber-*`     | Risk level — Medium                                              |
| Indigo      | `indigo-*`    | Orchestrator Agent icon accent                                   |
| Slate       | `slate-*`     | Neutral text, borders, and backgrounds throughout                |

> **Rule:** Never use raw `red`, `green`, `blue` Tailwind classes. Always use the curated palette above.

---

## 3. Typography

Fonts are loaded from Google Fonts in `src/index.css`.

| Token          | Family                                 | Weights  | Usage                                   |
| -------------- | -------------------------------------- | -------- | --------------------------------------- |
| `font-display` | **Plus Jakarta Sans**                  | 700, 800 | Hero headlines (`h1`), major section titles |
| `font-sans`    | **Inter** + system-ui fallback         | 400, 500, 600 | All body text, UI labels, buttons  |
| `font-mono`    | **JetBrains Mono**                     | 400, 500 | Code snippets, terminal output, mono badges |

### Type Scale

| Element             | Class                                      | Notes                                  |
| ------------------- | ------------------------------------------ | -------------------------------------- |
| Hero H1             | `text-[52px] md:text-[68px] font-medium tracking-[-0.03em] leading-[1.05]` | Landing page only |
| Section H2          | `text-4xl md:text-5xl font-medium tracking-tight` | Main section headings            |
| Card H3             | `text-2xl font-semibold tracking-tight`    | Persona / feature card titles          |
| Card H4             | `text-xl font-medium tracking-tight`       | Bento feature card titles              |
| Body Large          | `text-[17px] font-light leading-[1.6]`     | Hero subtext                           |
| Body                | `text-[15px] font-light leading-relaxed`   | Standard body, card descriptions       |
| Body Small          | `text-[13px]` / `text-[14px]`              | Meta text, list items, sidebar items   |
| Caption / Labels    | `text-[10px] md:text-[11px] font-bold tracking-widest uppercase` | Badge labels, section kickers |
| Mono                | `font-mono text-[12px]`                    | Code/command display                   |

---

## 4. Spacing & Layout

- **Max content width:** `max-w-7xl mx-auto` (global) / `max-w-6xl` (tighter sections) / `max-w-5xl` (pricing, narrow content)
- **Horizontal padding:** `px-4 sm:px-8`
- **Section vertical rhythm:** `py-24` (standard) / `py-32` (feature/hero sections)
- **Grid system:** Tailwind CSS grid — `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` pattern for bento layouts
- **Sidebar width (open):** `w-64` (16rem)
- **Sidebar width (closed):** `w-16` (4rem)
- **Chat content max-width:** `max-w-3xl mx-auto`

---

## 5. Border Radius Scale

This project uses large, friendly radius values — no sharp corners.

| Size   | Class / Value      | Usage                                       |
| ------ | ------------------ | ------------------------------------------- |
| Full   | `rounded-full`     | Pills, avatars, badge chips, CTA buttons    |
| 2XL    | `rounded-[32px]`   | Primary cards, glass panels, feature bento  |
| XL     | `rounded-2xl`      | Smaller cards, dropdowns, modal-style boxes |
| LG     | `rounded-xl`       | App launcher items, inline icon blocks      |
| MD     | `rounded-lg`       | Sidebar nav items, small input elements     |

---

## 6. Glassmorphism System

This is the signature aesthetic of MindMapOS. All floating elements and primary panels use this treatment.

### Glass Background Blobs (Ambient)
Used on **every full-page view** (LandingPage, ChatApp) as non-interactive background layers:

```tsx
{/* Always use these three together */}
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-sky-200/50 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
<div className="absolute top-[20%] right-[-10%] w-[40vw] h-[60vw] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
<div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[50vw] bg-sky-200/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
```

### Glass Panel (Primary)
For hero UI mock-ups and main content panels:

```tsx
className="bg-white/40 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-white/80"
```

### Glass Panel (Card / Elevated)
For floating cards and feature cards:

```tsx
className="bg-white/70 backdrop-blur-xl rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white/80"
```

### Glass Navbar
```tsx
className="bg-[#F8FAFC]/30 backdrop-blur-sm border-b border-slate-200/50"
```

### Sidebar
```tsx
className="bg-white/60 backdrop-blur-xl border-r border-slate-200/50"
```

---

## 7. Shadow System

Use the custom Tailwind arbitrary shadow values — never use default `shadow-md` etc.

| Context              | Shadow Value                                                    |
| -------------------- | --------------------------------------------------------------- |
| Large floating card  | `shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)]`                  |
| Standard card        | `shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)]`                  |
| Subtle card          | `shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]`                  |
| Floating pill / chip | `shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)]`                   |
| Dropdown / popover   | `shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]`                   |
| Hover state          | `hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]`            |
| CTA button (sky)     | `shadow-sky-500/30 hover:shadow-sky-500/40`                     |

---

## 8. Animation & Motion

Animation library: **Framer Motion** (`motion/react`).

### Standard Entry Animations

```tsx
// Fade + slide up (most common)
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3 }}

// Fade + slide from left (hero left panel)
initial={{ opacity: 0, x: -30 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.7, ease: "easeOut" }}

// Scale pop (small floating badges)
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5 }}
```

### Floating / Idle Loop Animations

```tsx
// Gentle vertical float (hero cards)
animate={{ y: [0, -8, 0] }}
transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}

// Slow horizontal drift (decorative pills)
animate={{ x: [0, 15, 0] }}
transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}

// Subtle rotate float (logo orbs)
animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
```

### Dropdown / Menu Animation

```tsx
initial={{ opacity: 0, y: 10, scale: 0.95 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
exit={{ opacity: 0, y: 10, scale: 0.95 }}
transition={{ duration: 0.15 }}
```

### Scroll-Triggered Animations (Technical Docs)
Standard for all `/docs` sections and long-form pages.

```tsx
// Scroll reveal wrapper (shared component)
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}

// Staggered list items
transition={{ duration: 0.5, delay: i * 0.1 }}
```

### Counters & Stats
Used for technical metrics and platform stats.

```tsx
// Animated counter logic (useSpring)
const count = useSpring(0, { duration: 2000, bounce: 0 });
// Trigger on view
useEffect(() => { if (isInView) count.set(targetValue); }, [isInView]);
```

### Tab / Content Switch Animation

```tsx
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -10 }}
transition={{ duration: 0.3 }}
```

### Micro-interactions (Hover States)
- Cards: `hover:-translate-y-1 transition-transform`
- Icon blocks: `group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500`
- App launcher icon: `group-hover:scale-105 transition-transform`
- CTA button: `hover:-translate-y-0.5`

### Sidebar Transition
```tsx
transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
```

---

## 9. Component Patterns

### CTA Button (Primary)

```tsx
<Link className="px-8 py-3.5 rounded-full bg-sky-500 text-white font-medium text-[15px] hover:bg-sky-600 transition-all shadow-sky-500/30 hover:shadow-sky-500/40 hover:-translate-y-0.5 flex items-center gap-2">
  Get Early Access <ArrowRight size={16} />
</Link>
```

### Badge / Kicker Chip

```tsx
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/50 text-sky-700 text-[11px] font-bold tracking-wider uppercase shadow-sm">
  <Sparkles size={14} /> Powered by MindMap AI
</div>
```

### Nav Link (Active / Inactive)

```tsx
// Active
className="px-4 py-2 relative rounded-lg text-sky-700 bg-sky-50/50"
// Inactive
className="px-4 py-2 relative rounded-lg hover:text-slate-900 hover:bg-slate-50 transition-all"
// Active indicator underline
<div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-3/4 h-[2.5px] bg-sky-500 rounded-full" />
```

### Sidebar Nav Item (Active / Inactive)

```tsx
// Active
className="bg-[#00A651] text-white shadow-sm"
// Inactive
className="text-slate-600 hover:bg-sky-50 hover:text-sky-600"
```

### Feature / Bento Card

```tsx
<div className="group bg-white border border-slate-200/60 p-8 lg:p-10 rounded-[32px] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between">
  <div className="h-12 w-12 rounded-2xl flex items-center justify-center mb-8 border bg-slate-50 border-slate-100 text-slate-700 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
    {icon}
  </div>
  <div className="mt-auto">
    <h4 className="text-xl font-medium tracking-tight mb-3">{title}</h4>
    <p className="text-[15px] font-light leading-relaxed max-w-sm">{desc}</p>
  </div>
</div>
```

### Dropdown / Popover Menu

```tsx
<motion.div
  initial={{ opacity: 0, y: 10, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: 10, scale: 0.95 }}
  transition={{ duration: 0.15 }}
  className="absolute bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-6 z-[70]"
>
```

### Section Heading Pattern

```tsx
<div className="text-center mb-16 max-w-2xl mx-auto">
  <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
    Section Title
  </h2>
  <p className="text-slate-500 text-[16px] font-light">
    Supporting description text.
  </p>
</div>
```

### Docs Section Layout
Standard structure for `/docs` sections.

```tsx
<section id="section-id" className="py-24 border-b border-slate-100 last:border-0">
  <div className="max-w-7xl mx-auto px-4 sm:px-8">
    <SectionLabel number="01" label="Section Name" />
    <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-8">
      Main Heading
    </h2>
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Content */}
    </div>
  </div>
</section>
```

### Technical Mono Badge
For API endpoints, commands, or version numbers.

```tsx
<span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono text-[12px] border border-slate-200">
  localhost:7800
</span>
```

### Chat Message

- Container: `max-w-3xl mx-auto flex gap-4 md:gap-6 px-4 py-6`
- Avatar (AI): `w-9 h-9 rounded-xl border border-slate-200/50 bg-white` with `Command` icon
- Avatar (User): `w-9 h-9 rounded-xl bg-[#1a1b26] text-white` with `User` icon
- Name label: `font-semibold text-sm text-slate-900`
- Message body: `text-[15px] leading-relaxed text-slate-600 whitespace-pre-wrap`
- Entry animation: `initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}`

---

## 10. Scrollbar

Custom webkit scrollbar defined globally in `src/index.css`:

```css
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { @apply bg-outline rounded-full; }
::-webkit-scrollbar-thumb:hover { @apply bg-muted/30; }
```

---

## 11. Iconography

Icon library: **Lucide React** (`lucide-react`). Default stroke width is `2` (library default).

| Context                  | Size   |
| ------------------------ | ------ |
| Navigation / brand logo  | 18–24px |
| Sidebar nav items        | 16px   |
| Body / inline icons      | 14–16px |
| Hero feature cards       | 24px   |
| Hero center orb          | 48px (strokeWidth 1) |
| Check marks (table)      | 18–20px (strokeWidth 3) |

---

## 12. Image & Media

- **Stock images:** Unsplash CDN with `?w=N&h=N&fit=crop` for consistent sizing.
- **Blend mode:** Profile images use `mix-blend-multiply` on abstract backgrounds.
- **Alt text:** Always required, descriptive.
- **Do not** use placeholder boxes or `img` without a real `src`.

---

## 13. Z-Index Scale

| Layer               | Z-Index |
| ------------------- | ------- |
| Background blobs    | `z-0`   |
| Content sections    | `z-10`  |
| Sidebar             | `z-40`  |
| Navbar              | `z-60`  |
| Dropdown / Popover  | `z-70`  |

---

## 14. Responsive Breakpoints

Standard Tailwind breakpoints apply:

| Breakpoint | Width   | Key Behavior                                     |
| ---------- | ------- | ------------------------------------------------ |
| `sm`       | 640px   | Show secondary nav items, wider padding          |
| `md`       | 768px   | Multi-column grids (2-col), show hero right pane |
| `lg`       | 1024px  | Full layout with sidebar visible, 4-col grids    |

- Sidebar is **hidden** on mobile (`hidden lg:flex`)
- A `MobileHeader` component handles mobile navigation in the ChatApp
- Hero right panel (glass mockup) is hidden on mobile: `hidden md:block`

---

## 15. Dark Mode

Dark mode is **not currently implemented**. The design is light-first.

- The single "dark" element used intentionally is the `#1a1b26` navy for contrast (user avatar, dark feature cards, circular icon orb).
- When dark mode is added in future, the `@theme` tokens should map to a `@media (prefers-color-scheme: dark)` block — do **not** hardcode dark values inside components.

---

## 16. Dos and Don'ts

### ✅ Do
- Use `rounded-[32px]` for all primary cards
- Use glassmorphism (`backdrop-blur-xl`, `bg-white/60`) for panels and sidebars
- Use the ambient blob pattern on every full-page view
- Use `motion/react` (`AnimatePresence` + `motion.div`) for all enter/exit animations
- Use `sky-500` for primary actions and links
- Use `#00A651` (green) only for **active/selected state** indicators
- Use `font-light` for body copy, `font-medium` for headings
- Keep type size at `text-[13px]`–`text-[15px]` for UI text

### ❌ Don't
- Don't use default Tailwind `shadow-md`, `shadow-lg` — use the custom shadow strings
- Don't use `text-red-500`, `text-blue-500`, `text-green-500` generically — use the semantic aliases
- Don't add sharp corners (`rounded-none`, `rounded-sm`) anywhere
- Don't use `font-bold` on body copy — only on kicker labels and badge text
- Don't use dark backgrounds (`bg-gray-900` etc.) on new pages — the design is light-first
- Don't use `transition` without specifying `duration` for animated elements
