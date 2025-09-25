# Global Token Exchange — Splash

A minimal Next.js (App Router) splash page ready for Vercel upload.

## Quick Start (Vercel Upload)

1. Download the ZIP from ChatGPT.
2. On Vercel, choose **Deploy → Upload** and upload the ZIP.
3. Vercel will detect Next.js and build automatically.

## Customize

- Replace `public/hero.jpg` with your real background image, then uncomment the `<Image>` and `.splash-overlay` lines in `app/page.tsx`.
- Edit the title/tagline in `app/page.tsx` and styles in `app/globals.css`.
- The **Enter** button routes to `/mint` (create that route when ready).

## Local Dev

```bash
npm i
npm run dev
```

Then open http://localhost:3000
