import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CorporateOverview from "@/components/sections/CorporateOverview";
import PortfolioSection from "@/components/sections/PortfolioSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <HeroSection />
        <CorporateOverview />
        <PortfolioSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
