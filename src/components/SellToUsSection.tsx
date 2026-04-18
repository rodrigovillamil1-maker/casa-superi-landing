import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import sellImage from "@/assets/about-deckchair.jpeg";

const SellToUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vender" className="py-24 md:py-36 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
              Compramos
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
              ¿Tenés una pieza<br />
              con historia?
            </h2>
            <div className="space-y-5 text-muted-foreground font-body text-base leading-relaxed">
              <p>
                Compramos muebles vintage, antigüedades, arte, lámparas, alfombras y objetos de
                diseño. Si tenés una pieza que merece una nueva vida, queremos verla.
              </p>
              <p>
                Tasamos sin compromiso, retiramos en Buenos Aires y trabajamos con discreción y
                respeto por cada objeto.
              </p>
            </div>

            <a
              href="https://wa.me/5491100000000?text=Hola%20Casa%20Superi%2C%20quiero%20ofrecerles%20una%20pieza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-olive-light transition-colors duration-300"
            >
              Ofrecé tu pieza
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={sellImage}
                alt="Pieza vintage rescatada por Casa Superi"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SellToUsSection;
