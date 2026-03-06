# williamchin.dev

Personal portfolio and writing site for William Chin — iOS developer and product builder.

## Stack

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS](https://tailwindcss.com) — styling
- [Vercel](https://vercel.com) — hosting (free)

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build
npm run preview   # preview production build locally
```

## Adding Content

### Blog Post
Create a Markdown file in `src/content/blog/`:
```
---
title: "Your Post Title"
description: "A short summary."
publishDate: 2026-03-01
tags: ["iOS", "Swift"]
readingTime: 5
---

Your post content in Markdown...
```

### New App
Create a Markdown file in `src/content/apps/`:
```
---
name: "App Name"
tagline: "One-line description."
description: "Full description for SEO."
appStoreUrl: "https://apps.apple.com/app/..."
status: live            # live | beta | development | discontinued
platform: [iOS]
category: "Productivity"
tags: ["SwiftUI", "iOS 17"]
featured: true
accentColor: "#5B4FCF"
launchDate: 2026-06-01
---

App detail content in Markdown...
```

Privacy Policy and Terms of Service pages are automatically generated at:
- `/apps/[slug]/privacy`
- `/apps/[slug]/terms`

## Deployment (Vercel)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Vercel auto-detects Astro — click Deploy
4. Add your custom domain in Vercel's dashboard (Settings → Domains)

## Customisation

| File | What to change |
|------|---------------|
| `src/pages/index.astro` | Hero text, about section, social links |
| `src/pages/resume.astro` | Work history, education, skills |
| `src/components/Nav.astro` | Navigation links, your name |
| `src/components/Footer.astro` | Social links, footer text |
| `tailwind.config.mjs` | Colors, fonts, design tokens |
| `astro.config.mjs` | Site URL (update before deploying) |
