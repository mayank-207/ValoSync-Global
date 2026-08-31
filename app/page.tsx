import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CorporateOverview from "@/components/sections/CorporateOverview";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <HeroSection />
        <CorporateOverview />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
