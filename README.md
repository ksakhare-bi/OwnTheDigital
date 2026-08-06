# Own the Digital

Two independent Next.js apps sharing one **MongoDB** database:

```
OwnTheDigital/
├── admin/      # CMS (write)
└── website/    # Public site (read)
```

## Architecture notes

- **Admin** owns create/update/delete/publish for blogs and admin auth.
- **Website** is read-only for published blogs; marketing pages are static/content-driven from Figma.
- **Data:** MongoDB + Mongoose (not Prisma).
- Keep UI in `components/`, domain logic in `services/`, schemas in `models/`, static IA in `content/`.

## Build order (website)

1. Shared layout (header/footer) — scaffolded
2. Home
3. Services hub + one service detail template
4. Remaining service pages
5. About
6. Portfolio + case studies
7. Blog listing + detail (MongoDB)
8. Contact
9. Mobile polish / responsive pass
