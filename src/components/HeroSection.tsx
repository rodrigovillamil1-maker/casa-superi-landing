import { motion } from "framer-motion";
import heroSillon from "@/assets/hero-sillon.jpeg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <img
        src={heroSillon}
        alt="Sillón vintage con tapizado geométrico en Casa Superi"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Subtle gradient for legibility, no solid overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal/30 via-transparent to-deep-charcoal/40" />

      {/* Big logo overlaid, Kelly Wearstler style */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full px-6 pt-20 md:pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-logo text-7xl md:text-9xl lg:text-[10rem] tracking-[-0.02em] text-cream-light font-bold uppercase leading-none"
        >
          CASA SUPERI
        </motion.h1>
      </div>
    </section>
  );
};

export default HeroSection;
