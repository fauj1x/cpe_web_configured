// middleware.ts atau middleware.js
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// Middleware untuk memeriksa apakah pengguna sudah login
export function middleware(req: NextRequest) {
  const token = req.cookies.get('auth-token');  // Periksa token dari cookies (atau session)

  if (!token && req.nextUrl.pathname.startsWith('/root')) {
    // Jika tidak ada token dan mencoba mengakses /root, alihkan ke login
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

// Tentukan di mana middleware ini akan diterapkan
export const config = {
  matcher: ['/root/*'],  // Menangani semua path di bawah /root
};
