import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Cookie'den locale al, yoksa tr kullan
  const locale = request.cookies.get('NEXT_LOCALE')?.value || 'tr';
  
  // Response oluştur
  const response = NextResponse.next();
  
  // Locale cookie'si yoksa ekle
  if (!request.cookies.get('NEXT_LOCALE')) {
    response.cookies.set('NEXT_LOCALE', locale, {
      path: '/',
      maxAge: 31536000 // 1 yıl
    });
  }
  
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

