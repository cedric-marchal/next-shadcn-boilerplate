// app/layout.tsx

import "./globals.css";

import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Providers } from "./providers";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    noimageindex: true,
    noarchive: true,
    nosnippet: true,
  },
};

export default function GlobalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NuqsAdapter>
          <Providers>{children}</Providers>
        </NuqsAdapter>
      </body>
    </html>
  );
}
