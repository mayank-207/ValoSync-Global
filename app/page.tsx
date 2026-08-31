import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ServiceDepartmentsSection from "@/components/sections/ServiceDepartmentsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <HeroSection />
        <ServiceDepartmentsSection />
        <AboutSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <IndustriesSection />
        <PortfolioSection />
        <ServicesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

