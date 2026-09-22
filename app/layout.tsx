import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import JsonLd from "@/components/seo/JsonLd";
import { shareMetadata, siteOrigin } from "@/lib/shareMetadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: "ValoSync Global | Connected Specialist Services",
    template: "%s",
  },
  description:
    "ValoSync Global connects specialist teams across technology, accounting, conveyancing, civil engineering, real estate and home loans.",
  authors: [{ name: "ValoSync Global" }],
  creator: "ValoSync Global",
  publisher: "ValoSync Global",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  ...shareMetadata({
    path: "/",
    title: "ValoSync Global | Connected Specialist Services",
    description:
      "ValoSync Global connects specialist teams across technology, accounting, conveyancing, civil engineering, real estate and home loans.",
    section: "Business • Property • Technology",
    visual: "/images/departments/overview-poster.webp",
  }),
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
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/images/logo.png",
    apple: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-AU": siteOrigin,
      "en": siteOrigin,
      "x-default": siteOrigin,
    },
  },
  other: {
    "geo.region": "AU",
    "geo.placename": "Australia",
    "geo.position": "-25.274398;133.775136",
    "ICBM": "-25.274398, 133.775136",
    "target-country": "AU",
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B3D91" },
    { media: "(prefers-color-scheme: dark)", color: "#071A33" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body className="min-h-full flex flex-col">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
