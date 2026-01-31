import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { seoConfig, personalInfo } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: seoConfig.title,
    template: `%s | ${personalInfo.name}`,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seoConfig.siteUrl,
    siteName: personalInfo.name,
    title: seoConfig.title,
    description: seoConfig.description,
    images: [
      {
        url: seoConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - ${personalInfo.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    images: [seoConfig.ogImage],
    creator: "@amanlad",
  },
  alternates: {
    canonical: seoConfig.siteUrl,
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.role,
  url: seoConfig.siteUrl,
  email: personalInfo.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Goa",
    addressCountry: "India",
  },
  sameAs: [personalInfo.linkedin, personalInfo.website],
  knowsAbout: seoConfig.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
