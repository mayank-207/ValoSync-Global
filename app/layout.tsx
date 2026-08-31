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
    default: "ValoSync Global | Business, Property & Technology Services",
    template: "%s | Valosync Global",
  },
  description:
    "ValoSync Global brings together Technology, Accounting, Conveyancing, Civil Engineering, Real Estate and Home Loan services under one trusted global organisation.",
  keywords: [
    "ValoSync Global",
    "business services Australia",
    "technology services Australia",
    "accounting services",
    "conveyancing support",
    "civil engineering services",
    "real estate services",
    "home loan support",
    "global professional services",
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
      "Integrated technology, accounting, conveyancing, civil engineering, real estate and home-loan services for Australian and global clients.",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "ValoSync Global integrated business and property services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ValoSync Global | Custom Software, CRM & AI Development Australia",
    description:
      "Enterprise custom software development, intelligent CRM systems, AI automation, and cloud engineering tailored for Australian businesses and global enterprises.",
    images: ["/images/logo.png"],
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
  category: "business services",
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
