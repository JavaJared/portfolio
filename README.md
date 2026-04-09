# Jared — Portfolio

A minimal, editorial-style portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Design notes

- **Typography**: Fraunces (serif display) + Geist (sans body) + JetBrains Mono (accents)
- **Palette**: warm paper (`#F6F3EC`), deep ink (`#1A1A1A`), rust accent (`#C8501C`)
- **Aesthetic**: editorial layout, generous whitespace, subtle grain overlay, sweeping underline hovers, staggered fade-in on load
- **Responsive**: single-column on mobile, 12-col grid on md+

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a new GitHub repo
2. Go to https://vercel.com/new and import the repo
3. Click Deploy — no config needed

## Where to customize

- **Projects**: edit `lib/projects.ts` (add your real I'm Tourn details, links, live URLs)
- **Hero copy, about, contact**: edit `app/page.tsx`
- **Email + social links**: search for `your@email.com` in `app/page.tsx`
- **Colors + fonts**: `tailwind.config.js` and `app/globals.css`
- **Site metadata / title**: `app/layout.tsx`

## Structure

```
app/
  layout.tsx      # root layout, fonts, metadata
  page.tsx        # the whole homepage (hero, work, about, contact)
  globals.css     # Tailwind + custom animations
components/       # (empty for now — split out if it grows)
lib/
  projects.ts     # project data
```
