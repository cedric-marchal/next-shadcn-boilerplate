// app/(public)/page.tsx

import { env } from "@/lib/env";
import type { Metadata } from "next";
import { WebSite } from "schema-dts";

import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title: `Home | ${env.NEXT_PUBLIC_APP_NAME}`,
  description: "description",
  keywords: ["keywords"],
  alternates: {
    canonical: `${env.NEXT_PUBLIC_BASE_URL}/`,
  },
  openGraph: {
    title: `Home | ${env.NEXT_PUBLIC_APP_NAME}`,
    description: "description",
    siteName: env.NEXT_PUBLIC_APP_NAME,
    url: env.NEXT_PUBLIC_BASE_URL,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: `${env.NEXT_PUBLIC_APP_NAME} - Home`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Home | ${env.NEXT_PUBLIC_APP_NAME}`,
    description: "description",
    images: {
      url: "/images/og-image.png",
      width: 1200,
      height: 630,
      alt: `${env.NEXT_PUBLIC_APP_NAME} - Home`,
    },
  },
};

export default function HomePage() {
  const schemaOrg: WebSite = {
    "@type": "WebSite",
    name: env.NEXT_PUBLIC_APP_NAME,
    url: env.NEXT_PUBLIC_BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${env.NEXT_PUBLIC_BASE_URL}/search?q={search_term_string}`,
    },
    description: "description",
    headline: "title", // TODO: add title
    image: `${env.NEXT_PUBLIC_BASE_URL}/images/og-image.png`,
    sameAs: [
      "https://www.facebook.com/your-facebook-page",
      "https://twitter.com/your-twitter-handle",
      // Add other social media links here
    ],
    publisher: {
      "@type": "Organization",
      name: env.NEXT_PUBLIC_APP_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${env.NEXT_PUBLIC_BASE_URL}/images/logo.png`,
      },
    },
  };

  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Hello World</h1>

      <Script
        id="schema-org-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaOrg),
        }}
      />
    </main>
  );
}
