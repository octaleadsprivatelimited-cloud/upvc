# Vercel Deployment Guide

## Issues Fixed

1. **Removed problematic rewrites**: The `next.config.js` had rewrites pointing to localhost:5000 which doesn't work on Vercel
2. **Added .vercelignore**: Excluded server files and development files from deployment
3. **Verified build**: The build is working correctly locally

## Deployment Steps

1. **Prepare for Deployment**:
   - Ensure all files are ready in your project directory
   - Run `npm run build` to verify everything builds correctly
   - Test locally with `npm run dev`

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Create a new project
   - Upload your project files directly or connect via Vercel CLI
   - Vercel will automatically detect it's a Next.js project
   - Click "Deploy"

## Configuration

- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install` (default)

## Environment Variables

If you need any environment variables, add them in the Vercel dashboard:
- Go to your project settings
- Navigate to "Environment Variables"
- Add any required variables

## Build Output

The build generates 22 static pages:
- Home page (/)
- About, Blog, Contact, Gallery pages
- Product pages (uPVC Windows, Doors, etc.)
- Service pages (Installation, Maintenance, Repair, Custom Design)
- Legal pages (Privacy Policy, Terms & Conditions, Sitemap)

All pages are pre-rendered as static content, which is perfect for Vercel's static hosting.
