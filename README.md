# Alex Best Digital — Portfolio Website

A production-ready, single-page portfolio for **Alex Turanzyomwe** — AI educator, YouTube creator, and founder of **Alex Best Digital**, based in Uganda.

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Space Grotesk (Google Font via `next/font`)
- lucide-react (icons)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm run start
```

## Project Structure

```
app/
  layout.tsx        # Root layout, font, metadata
  page.tsx          # Assembles all sections
  globals.css       # Tailwind base + custom styles/variables
components/
  Navbar.tsx        # Fixed nav with mobile drawer & active section highlight
  Hero.tsx          # Hero section with animated headline & stat bar
  About.tsx         # Bio section with profile visual
  WhatIDo.tsx       # Services / focus areas (signature accent cards)
  Stats.tsx         # Animated count-up channel stats
  FeaturedVideos.tsx# Video card grid (placeholder content)
  Academy.tsx       # Alex Best Digital Academy split section
  Toolkit.tsx       # AI tools pill grid
  Contact.tsx       # Contact cards + message form
  Footer.tsx        # Footer with social links
lib/
  utils.ts          # `cn` className helper
```

## Design System

| Token            | Value                          |
| ---------------- | ------------------------------ |
| Background       | `#1A1A1A`                       |
| Surface          | `#242424`                       |
| Accent           | `#F97316`                       |
| Accent Muted     | `#EA580C`                       |
| Text Primary     | `#FFFFFF`                       |
| Text Secondary   | `#A3A3A3`                       |
| Border           | `#2E2E2E`                       |
| Font             | Space Grotesk (400/500/600/700) |

### Signature Element

All feature, stat, and contact cards use the `.accent-card` utility class (defined in `globals.css`) — a 3px orange left border with a subtle orange glow.

## Customization

- Update video data in `components/FeaturedVideos.tsx`
- Update tool list in `components/Toolkit.tsx`
- Update contact details and links in `components/Contact.tsx`, `components/Navbar.tsx`, and `components/Footer.tsx`
- Wire the contact form in `components/Contact.tsx` to a real API route or service (e.g. Resend, Formspree) for production use
