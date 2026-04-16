import { motion } from "framer-motion";
import heroSillon from "@/assets/hero-sillon.jpeg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Fixed hero image */}
      <img
        src={heroSillon}
        alt="Sillón vintage con tapizado geométrico en Casa Superi"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-deep-charcoal/40" />

      {/* Title centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-logo text-6xl md:text-8xl lg:text-9xl tracking-[-0.02em] text-cream-light font-bold uppercase"
        >
          CASA SUPERI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-body text-xs md:text-sm tracking-[0.4em] uppercase text-cream-light/60 mt-4"
        >
          Buenos Aires
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
