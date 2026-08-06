# Own the Digital — Website

Public marketing site. Reads published blogs from the shared MongoDB database. Never writes CMS data.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- MongoDB + Mongoose (read-only blog queries)
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
