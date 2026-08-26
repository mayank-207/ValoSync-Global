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
  title: "Industries We Serve | Tailored Technology & Software Solutions",
  description:
    "Explore how Velosync Global delivers custom software, CRM development, AI automation, and digital marketing tailored for Healthcare, Logistics, Fintech, Retail, Real Estate, and Australian SMEs.",
  keywords: [
    "Velosync Global Industries",
    "Healthcare Software Development",
    "Logistics Automation",
    "Fintech CRM Development",
    "Retail E-Commerce Solutions",
    "Real Estate Lead CRM",
    "Australian SME Software Solutions",
  ],
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industries We Serve | Velosync Global IT Solutions",
    description:
      "Engineered custom software, CRM platforms, and AI automation tailored to your industry's specific challenges and regulatory requirements.",
    url: "https://velosyncglobal.com/industries",
    siteName: "Velosync Global",
    type: "website",
    images: [
      {
        url: "/images/og-industries.jpg",
        width: 1200,
        height: 630,
        alt: "Velosync Global Industry Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Velosync Global IT Solutions",
    description:
      "Engineered custom software, CRM platforms, and AI automation tailored to your industry's specific challenges.",
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

        {/* Australian SME Market Focus */}
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
