import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IndustriesHero from "@/components/sections/industries/IndustriesHero";
import IndustriesGridSection from "@/components/sections/industries/IndustriesGridSection";
import IndustryDetailSection from "@/components/sections/industries/IndustryDetailSection";
import AustralianMarketSection from "@/components/sections/industries/AustralianMarketSection";
import IndustryProcessSection from "@/components/sections/industries/IndustryProcessSection";
import IndustryFAQSection from "@/components/sections/industries/IndustryFAQSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Industry Software Solutions Australia | Valosync Global",
  description:
    "Explore how Valosync Global delivers custom software, CRM development, AI automation, and cloud platforms tailored for Healthcare, Logistics, Fintech, Retail, and Australian enterprise sectors.",
  keywords: [
    "Valosync Global Industries",
    "Healthcare Software Development Australia",
    "Fintech Software Engineering Australia",
    "Logistics Software & GPS Tracking Australia",
    "Retail & E-Commerce Web Platforms Australia",
    "Real Estate CRM Software Australia",
    "Australian Industry Software Solutions",
  ],
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industry Software Solutions Australia | Valosync Global",
    description:
      "Industry-tailored software engineering, AI automation, and digital marketing for Healthcare, Finance, Logistics, and Australian commercial sectors.",
    url: "https://valosyncglobal.com/industries",
    siteName: "Valosync Global",
    type: "website",
    images: [
      {
        url: "/images/og-industries.jpg",
        width: 1200,
        height: 630,
        alt: "Valosync Global Industry Solutions Australia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry Software Solutions Australia | Valosync Global",
    description:
      "Industry-tailored software engineering, AI automation, and digital growth for Australian and global sectors.",
    images: ["/images/og-industries.jpg"],
  },
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Hero Banner Section */}
        <IndustriesHero />

        {/* Filterable Sector Grid */}
        <IndustriesGridSection />

        {/* Deep-Dive Problem & Solution Breakdowns */}
        <IndustryDetailSection />

        {/* Enterprise Market Execution & Delivery */}
        <AustralianMarketSection />

        {/* Engagement Methodology & Process */}
        <IndustryProcessSection />

        {/* Frequently Asked Questions */}
        <IndustryFAQSection />

        {/* Call to Action Banner */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
