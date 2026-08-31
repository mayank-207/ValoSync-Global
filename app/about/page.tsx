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
  title: "About ValoSync Global | Integrated Business & Property Services",
  description:
    "Learn how ValoSync Global connects Technology, Accounting, Conveyancing, Civil Engineering, Real Estate and Home Loan departments under one organisation.",
  keywords: ["About ValoSync Global", "multi-service organisation", "business services Australia", "property services", "professional services"],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Australian Software Engineering & IT Solutions | Valosync Global",
    description:
      "Discover ValoSync Global's coordinated, multi-department service model for Australian and global clients.",
    url: "https://valosyncglobal.com/about",
    siteName: "Valosync Global",
    type: "website",
    images: [
      {
        url: "/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "ValoSync Global departments and corporate mission",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Australian Software Engineering & IT Solutions | Valosync Global",
    description:
      "Connected specialist services across business, property, engineering and technology.",
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
