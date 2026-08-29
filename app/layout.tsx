import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import JsonLd from "@/components/seo/JsonLd";
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
  metadataBase: new URL("https://valosyncglobal.com"),
  title: {
    default: "ValoSync Global | Custom Software, CRM & AI Development Australia",
    template: "%s | Valosync Global",
  },
  description:
    "ValoSync Global provides enterprise custom software development, bespoke CRM platforms, AI workflow automation, and cloud DevOps solutions for Australian businesses and global enterprises.",
  keywords: [
    "custom software development Australia",
    "software development company Australia",
    "CRM development Australia",
    "custom CRM solutions Australia",
    "AI automation agency Australia",
    "web application development Sydney",
    "software engineers Melbourne",
    "IT solutions Brisbane Australia",
    "business process automation Australia",
    "cloud DevOps support Australia",
    "enterprise software developers Australia",
    "Australian software engineering firm",
    "B2B CRM software Australia",
    "Valosync Global",
    "custom software Sydney",
    "software company Australia",
    "IT consulting Australia",
    "Next.js web development",
  ],
  authors: [{ name: "Valosync Global" }],
  creator: "Valosync Global",
  publisher: "Valosync Global",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    alternateLocale: ["en_US", "en_GB"],
    url: "https://valosyncglobal.com",
    siteName: "Valosync Global",
    title: "ValoSync Global | Custom Software, CRM & AI Development Australia",
    description:
      "Enterprise custom software development, intelligent CRM systems, AI automation, and cloud engineering tailored for Australian businesses and global enterprises.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ValoSync Global - Custom Software & CRM Development Australia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ValoSync Global | Custom Software, CRM & AI Development Australia",
    description:
      "Enterprise custom software development, intelligent CRM systems, AI automation, and cloud engineering tailored for Australian businesses and global enterprises.",
    images: ["/images/og-image.jpg"],
    creator: "@valosyncglobal",
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
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
    apple: [
      { url: "/images/logo.png", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-AU": "https://valosyncglobal.com",
      "en": "https://valosyncglobal.com",
      "x-default": "https://valosyncglobal.com",
    },
  },
  other: {
    "geo.region": "AU",
    "geo.placename": "Australia",
    "geo.position": "-25.274398;133.775136",
    "ICBM": "-25.274398, 133.775136",
    "target-country": "AU",
  },
  category: "technology",
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
      <body className="min-h-full flex flex-col">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
