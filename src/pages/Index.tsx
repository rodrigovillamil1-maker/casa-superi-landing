import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ShowroomSection from "@/components/ShowroomSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ShowroomSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
