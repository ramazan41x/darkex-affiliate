import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Cookie'den locale al, yoksa tr kullan
  const currentLocale = request.cookies.get('NEXT_LOCALE')?.value;
  
  // Locale cookie'si yoksa varsayılan olarak tr ekle
  if (!currentLocale) {
    response.cookies.set('NEXT_LOCALE', 'tr', {
      path: '/',
      maxAge: 31536000, // 1 yıl
      sameSite: 'lax'
    });
  }
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg|.*\\.png|.*\\.jpg).*)',
  ]
};

