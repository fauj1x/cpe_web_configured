"use client";

import "pages/auth/login/auth.css";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
        <body>
            <div>
            <main>{children}</main>
            </div>
        </body>
    </html>
  );
}
