import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://velosyncglobal.com"),
  title: {
    default: "Velosync Global | Digital Transformation & IT Solutions Company",
    template: "%s | Velosync Global",
  },
  description:
    "Velosync Global delivers cutting-edge digital transformation, software development, AI solutions, cloud services, and IT consulting to help businesses scale and innovate.",
  keywords: [
    "Velosync Global",
    "digital transformation",
    "software development",
    "AI solutions",
    "cloud services",
    "IT consulting",
    "web development",
    "mobile app development",
    "technology company",
    "IT solutions",
  ],
  authors: [{ name: "Velosync Global" }],
  creator: "Velosync Global",
  publisher: "Velosync Global",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://velosyncglobal.com",
    siteName: "Velosync Global",
    title: "Velosync Global | Digital Transformation & IT Solutions Company",
    description:
      "Velosync Global delivers cutting-edge digital transformation, software development, AI solutions, cloud services, and IT consulting to help businesses scale and innovate.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Velosync Global - Digital Transformation & IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velosync Global | Digital Transformation & IT Solutions Company",
    description:
      "Velosync Global delivers cutting-edge digital transformation, software development, AI solutions, cloud services, and IT consulting to help businesses scale and innovate.",
    images: ["/images/og-image.jpg"],
    creator: "@velosyncglobal",
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
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B1B3D" },
    { media: "(prefers-color-scheme: dark)", color: "#060e24" },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
