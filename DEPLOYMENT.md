# Cridia Hire Marketing Site - Deployment Guide

## Pre-Deployment Checklist

- [x] All routes working (/en, /ar, legal pages)
- [x] Language toggle functioning
- [x] SEO metadata configured (hreflang, Open Graph, Twitter Cards)
- [x] Sitemap.xml generated
- [x] Robots.txt configured
- [x] Structured data (JSON-LD) added
- [x] Screenshots integrated
- [x] Production build tested locally

## Deployment to Vercel

### Step 1: Push to GitHub

1. Open GitHub Desktop
2. Commit all changes: "Complete SEO-optimized marketing site rebuild"
3. Push to repository: `cridia-marketing-nextjs` (or create new repo)

### Step 2: Deploy to Vercel

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import from GitHub: Select `cridia-marketing-nextjs` repository
4. Framework Preset: Next.js (auto-detected)
5. Build Settings:
   - Build Command: `npm run build`
   - Output Directory: `out` (for static export)
   - Install Command: `npm install`
6. Environment Variables: None required
7. Click "Deploy"

### Step 3: Configure Custom Domain

1. After deployment, go to Project Settings > Domains
2. Add domain: `cridia.ai`
3. Vercel will provide DNS instructions
4. Go to Hostinger DNS settings
5. Update A record to point to Vercel's IP (will be provided)
6. Wait 10-30 minutes for DNS propagation

### Step 4: Verify Deployment

Test these URLs after deployment:
- https://cridia.ai (should redirect to /en or /ar)
- https://cridia.ai/en
- https://cridia.ai/ar
- https://cridia.ai/en/privacy
- https://cridia.ai/ar/privacy
- https://cridia.ai/sitemap.xml

### Step 5: SEO Validation

1. Google Rich Results Test: https://search.google.com/test/rich-results
   - Test: https://cridia.ai/en
   - Should show Organization structured data

2. Hreflang Tags Checker: https://technicalseo.com/tools/hreflang/
   - Test: https://cridia.ai/en
   - Should show proper en/ar alternates

3. Open Graph Debugger:
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator
   - LinkedIn: https://www.linkedin.com/post-inspector/

4. PageSpeed Insights: https://pagespeed.web.dev/
   - Test both /en and /ar
   - Aim for 90+ performance score

### Step 6: Google Search Console Setup

1. Go to https://search.google.com/search-console
2. Add property: https://cridia.ai
3. Verify ownership (DNS or HTML file method)
4. Submit sitemap: https://cridia.ai/sitemap.xml
5. Monitor indexing status for both /en and /ar pages

### Step 7: Analytics Setup (Optional)

If adding Google Analytics:
1. Create GA4 property
2. Add tracking code to src/app/layout.tsx
3. Set up language-based event tracking

## Post-Deployment Tasks

### Week 1:
- Monitor Google Search Console for crawl errors
- Check that both /en and /ar are being indexed
- Verify hreflang implementation in GSC International Targeting report

### Week 2:
- Create OG images (1200x630px) for /en and /ar
- Add to public/og-image.png and public/og-image-ar.png
- Test social media sharing (Twitter, LinkedIn, Facebook)

### Week 3:
- Set up Google Business Profile (if applicable)
- Submit to relevant directories
- Start content marketing (blog posts linking to marketing site)

## Monitoring

- Google Search Console: Weekly
- PageSpeed Insights: Monthly
- Broken link checker: Monthly
- Hreflang validation: After any URL structure changes

## Rollback Plan

If issues occur:
1. Vercel allows instant rollback to previous deployment
2. Go to Deployments tab
3. Click "..." on last stable deployment
4. Click "Promote to Production"

## Future Improvements

- [ ] Add Google Analytics 4
- [ ] Create OG images for social sharing
- [ ] Add FAQ schema to pricing section
- [ ] Implement lazy loading for images below fold
- [ ] Add blog section for content marketing
- [ ] Set up automated Lighthouse CI checks

