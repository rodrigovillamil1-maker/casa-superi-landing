import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cld = (id: string) =>
  `https://res.cloudinary.com/lfwzb5kp/image/upload/f_auto,q_auto/${id}`;

const pieces = [
  { src: cld("v1788487469/IMG_2599"), title: "Kilim Floral con Sillones", category: "Ambiente" },
  { src: cld("v1788487570/IMG_2648"), title: "Sillones Crema y Kilims", category: "Living" },
  { src: cld("v1788487576/IMG_2685"), title: "Kilim Rojo y Verde", category: "Textil" },
  { src: cld("v1788487575/IMG_2758"), title: "Pared de Tapices", category: "Curaduría" },
  { src: cld("v1788487566/IMG_6059"), title: "Alfombra Geométrica y Deck Chair", category: "Ambiente" },
  { src: cld("v1788487573/IMG_6118"), title: "Comedor con Sillas en Pared", category: "Comedor" },
  { src: cld("v1788487577/IMG_6140"), title: "Tapiz Bronce y Sofá Vintage", category: "Living" },
  { src: cld("v1788487558/IMG_6171"), title: "Sofá Geométrico", category: "Mobiliario" },
  { src: cld("v1788487558/IMG_6228"), title: "Sillones Mid-Century", category: "Mobiliario" },
  { src: cld("v1788487564/IMG_6236"), title: "Pasillo Curado", category: "Ambientes" },
  { src: cld("v1788487572/IMG_6352"), title: "Living con Bovedilla", category: "Ambientes" },
  { src: cld("v1788565303/IMG_6145"), title: "Rincón Curado", category: "Ambiente" },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="portfolio" className="bg-deep-charcoal">
      {/* Header bar — minimal, Obsolete style */}
      <div ref={ref} className="text-center py-16 md:py-20 px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-cream-light"
        >
          Colección
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xs tracking-[0.4em] uppercase text-cream-light/50 mt-4"
        >
          Piezas únicas — cuando se van, no vuelven
        </motion.p>
      </div>

      {/* Edge-to-edge grid, no padding, no white background */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
        {pieces.map((piece, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: i * 0.08 }}
            className="group relative aspect-square overflow-hidden cursor-pointer"
          >
            <img
              src={piece.src}
              alt={piece.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
