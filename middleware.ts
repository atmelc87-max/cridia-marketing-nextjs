import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const isArabic = request.nextUrl.pathname.startsWith('/ar');
  response.headers.set('x-language', isArabic ? 'ar' : 'en');
  
  console.log('Middleware running for:', request.nextUrl.pathname, '- Language:', isArabic ? 'ar' : 'en');
  
  return response;
}

export const config = {
  matcher: '/:path*',
};
