import { motion } from "framer-motion";
import heroImage from "@/assets/hero-showroom.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Casa Superi showroom con muebles vintage curados"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-deep-charcoal/60" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wider text-cream-light mb-6">
            CASA SUPERI
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-cream-light/70 mb-2">
            Buenos Aires
          </p>
          <div className="w-16 h-px bg-cream-light/30 mx-auto my-6" />
          <p className="font-accent text-xl md:text-2xl italic text-cream-light/90 max-w-xl">
            Piezas únicas con historia, curadas con pasión
          </p>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 animate-bounce"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--cream-light))" strokeWidth="1.5" className="opacity-60">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
