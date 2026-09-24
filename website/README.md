# Own the Digital — Website

Public marketing site. Fetches published blogs and submits contacts via the Admin API. Completely decoupled from direct database access.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- REST API Client (fetches from Admin API)
- SEO-first, responsive

## Routes (from Figma Final)

| Route | Figma frame |
|-------|-------------|
| `/` | landing page final |
| `/about` | About |
| `/services` | Services |
| `/services/[slug]` | AI Marketing, Search visibility, Performance, Digital, Web, AI Video |
| `/portfolio` | Portfolio |
| `/case-studies/[slug]` | FittPulse, UrbanRoots, CloudScale, Glowskinn |
| `/blog` | Blog Page |
| `/blog/[slug]` | Open Blog |
| `/contact` | Contact |

## Getting started

```bash
cp .env.example .env.local
npm install
npm run dev
```

Use port 3001 if admin is already on 3000: `npm run dev -- -p 3001`
