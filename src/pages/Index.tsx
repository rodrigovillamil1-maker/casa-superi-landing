import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import PortfolioSection from "@/components/PortfolioSection";
import SellToUsSection from "@/components/SellToUsSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import ShowroomSection from "@/components/ShowroomSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <PortfolioSection />
      <SellToUsSection />
      <PartnershipsSection />
      <ShowroomSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
