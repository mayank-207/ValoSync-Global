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
  title: "About Us | Velosync Global - Digital Transformation & IT Solutions",
  description:
    "Learn about Velosync Global, a premier IT solutions company delivering custom software development, CRM engineering, AI automation, and digital growth strategies for Australian SMEs and global clients.",
  keywords: [
    "About Velosync Global",
    "IT Solutions Company Australia",
    "Custom Software Engineering",
    "CRM Development Team",
    "AI Automation Agency",
    "Digital Transformation Partner",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Velosync Global IT Solutions",
    description:
      "Empowering businesses with custom software, intelligent CRM systems, and AI automation tailored to modern enterprise challenges.",
    url: "https://velosyncglobal.com/about",
    siteName: "Velosync Global",
    type: "website",
    images: [
      {
        url: "/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Velosync Global Team & Mission",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Velosync Global IT Solutions",
    description:
      "Empowering businesses with custom software, intelligent CRM systems, and AI automation.",
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
