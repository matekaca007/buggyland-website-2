import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import FleetSection from "@/components/sections/FleetSection";
import ToursSection from "@/components/sections/ToursSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import StickyMobileBar from "@/components/ui/StickyMobileBar";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <FleetSection />
        <ToursSection />
        <HowItWorksSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
