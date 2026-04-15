import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import real1 from "@/assets/real-1.jpeg";
import real2 from "@/assets/real-2.jpeg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const pieces = [
  { src: real1, title: "Sillones Rosados Mid-Century", category: "Mobiliario", aspect: "aspect-[4/5]" },
  { src: portfolio3, title: "Colección de Lámparas", category: "Iluminación", aspect: "aspect-[4/5]" },
  { src: real2, title: "Living con Techos de Bovedilla", category: "Ambientes", aspect: "aspect-[3/4]" },
  { src: portfolio2, title: "Alfombra Persa Clásica", category: "Alfombras", aspect: "aspect-square" },
  { src: portfolio4, title: "Sofá de Época", category: "Mobiliario", aspect: "aspect-[5/4]" },
  { src: portfolio1, title: "Bergère Francesa", category: "Mobiliario", aspect: "aspect-[4/5]" },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Piezas únicas
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Colección <span className="italic">Curada</span>
          </h2>
          <p className="mt-6 font-body text-muted-foreground max-w-lg mx-auto">
            Cada pieza es irrepetible. Cuando se va, no vuelve. Explorá lo que tenemos hoy.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {pieces.map((piece, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="break-inside-avoid group cursor-pointer"
            >
              <div className={`${piece.aspect} overflow-hidden relative`}>
                <img
                  src={piece.src}
                  alt={piece.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-deep-charcoal/0 group-hover:bg-deep-charcoal/40 transition-all duration-500 flex items-end">
                  <div className="p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-glow">
                      {piece.category}
                    </p>
                    <p className="font-display text-xl text-cream-light mt-1">
                      {piece.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
