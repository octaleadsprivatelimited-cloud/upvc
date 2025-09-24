# Tejesh Profine - uPVC Windows & Doors Website

Modern, responsive website built with Vite (React + Tailwind) and Express API.

## Tech
- Node.js, Express (API on port 5174)
- Vite + React + Tailwind CSS (frontend on port 5173)
- Framer Motion (mobile menu animation), Swiper (hero slider)

## Quick Start
```bash
# API
cd server && npm run dev

# Frontend
cd client && npm run dev
```

## Features
- TopBar with phone, WhatsApp and Call Now
- Mobile menu with animation
- Hero slider with embedded quote form (wired to API)
- 20+ pages with centralized SEO
- Mega footer with responsive accordion on mobile
- robots.txt and sitemap.xml

## Customize
- Update phone/WhatsApp in `client/src/components/Layout/Layout.tsx` and `FloatingActions.tsx`
- Update SEO text in `client/src/seoConfig.ts`
- Add images/content in `client/src/pages`

## Deploy
- Frontend: `cd client && npm run build`
- API: deploy `server` to Node host (set CORS origin)

