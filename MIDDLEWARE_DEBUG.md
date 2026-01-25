# Middleware Debugging Guide

## Issue: Middleware not detected by Vercel

If middleware is not being deployed as an Edge Function on Vercel, follow these steps:

### 1. Verify Middleware File Location
- ✅ `middleware.ts` should be in the **project root** (same level as `package.json`)
- ✅ NOT in `src/` directory

### 2. Check Vercel Build Logs
After deployment, check:
- Build logs for "Middleware detected" message
- Functions tab should show "Edge Middleware" function

### 3. Verify Configuration
- ✅ `export const runtime = 'edge';` is present
- ✅ `export const config` with matcher is present
- ✅ `vercel.json` exists (optional but helps)

### 4. Test Locally
Run `npm run build` and check:
- Build output should mention middleware
- `.next/server/middleware.js` should exist

### 5. Alternative: If Middleware Still Doesn't Work

The layout has a fallback that uses the `x-pathname` header. If middleware doesn't run, the fallback will detect language from the pathname header.

### 6. Force Edge Runtime in vercel.json
The `vercel.json` file explicitly sets middleware to use edge runtime.

### 7. Check Next.js Version
- Current: Next.js 16.1.4 ✅
- Middleware should work with this version

## Troubleshooting Steps

1. **Clear Vercel cache and redeploy**
2. **Check Vercel project settings** - ensure Edge Functions are enabled
3. **Verify middleware.ts syntax** - no TypeScript errors
4. **Check build logs** for middleware-related errors

## Current Implementation

- Middleware sets `x-language` header based on pathname
- Layout reads `x-language` header (with fallback to `x-pathname`)
- Both English and Arabic pages have `force-dynamic` export
