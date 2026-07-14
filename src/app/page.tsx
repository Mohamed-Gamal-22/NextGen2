import Navbar from "@/components/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import ServicesSection from "@/components/services/ServicesSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import CTASection from "@/components/cta/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
