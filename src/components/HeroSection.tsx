import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import heroImage from "@/assets/hero-showroom.jpg";
import real1 from "@/assets/real-1.jpeg";
import realHallway from "@/assets/real-hallway.jpeg";

const slides = [
  { src: heroImage, alt: "Showroom Casa Superi con muebles vintage curados" },
  { src: real1, alt: "Sillones rosados mid-century en Casa Superi" },
  { src: realHallway, alt: "Pasillo de la antigua caballeriza restaurada" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Rotating images */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={slides[current].src}
          alt={slides[current].alt}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-deep-charcoal/40" />

      {/* Title centered top */}
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

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-cream-light" : "bg-cream-light/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
