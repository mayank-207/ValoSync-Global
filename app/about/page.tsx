import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import CompanyMissionSection from "@/components/sections/about/CompanyMissionSection";
import CoreValuesSection from "@/components/sections/about/CoreValuesSection";
import CompanyStorySection from "@/components/sections/about/CompanyStorySection";
import WhyPartnerSection from "@/components/sections/about/WhyPartnerSection";
import TeamLeadershipSection from "@/components/sections/about/TeamLeadershipSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us | Australian Software Engineering & IT Solutions | Valosync Global",
  description:
    "Learn about Valosync Global, delivering bespoke software engineering, intelligent CRM development, and AI automation for Australian and international businesses.",
  keywords: [
    "About Valosync Global",
    "Australian Software Engineering Firm",
    "Custom Software Developers Australia",
    "CRM Development Company Australia",
    "AI Automation Agency Australia",
    "Software Engineering Sydney Melbourne",
    "IT Consulting Australia",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Australian Software Engineering & IT Solutions | Valosync Global",
    description:
      "Engineered technology solutions built around your business goals. Discover our team, values, and client-first delivery model for Australian and global clients.",
    url: "https://valosyncglobal.com/about",
    siteName: "Valosync Global",
    type: "website",
    images: [
      {
        url: "/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Valosync Global Team & Mission Australia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Australian Software Engineering & IT Solutions | Valosync Global",
    description:
      "Engineered technology solutions built around your business goals for Australian and international clients.",
    images: ["/images/og-about.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* About Hero Section */}
        <AboutHero />

        {/* Mission, Vision & Core Focus */}
        <CompanyMissionSection />

        {/* Guiding Principles & Core Values */}
        <CoreValuesSection />

        {/* Company Evolution & Growth Timeline */}
        <CompanyStorySection />

        {/* Why Partner With Us / Competitive Advantage */}
        <WhyPartnerSection />

        {/* Multidisciplinary Team & Expertise */}
        <TeamLeadershipSection />

        {/* Action Trigger Banner */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
