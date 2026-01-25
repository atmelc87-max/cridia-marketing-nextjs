import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const isArabic = request.nextUrl.pathname.startsWith('/ar');
  response.headers.set('x-language', isArabic ? 'ar' : 'en');
  
  return response;
}

export const config = {
  matcher: [
    '/',
    '/ar',
    '/ar/:path*',
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
