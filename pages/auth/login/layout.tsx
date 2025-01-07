"use client";

// import "../../styles/auth.module.css";

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
