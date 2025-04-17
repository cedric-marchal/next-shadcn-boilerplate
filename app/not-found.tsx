// app/not-found.tsx

import { env } from "@/lib/env";
import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
  title: `404 - Not Found | ${env.NEXT_PUBLIC_APP_NAME}`,
  robots: {
    index: false,
    follow: false,
    nosnippet: true,
  },
};

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-start bg-background overflow-hidden relative">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold">404 - Not Found</h1>
        <p className="text-lg">The page you are looking for does not exist.</p>
        <Link href="/" className="text-blue-500 hover:text-blue-600">
          Return to the home page
        </Link>
      </div>
    </main>
  );
}
