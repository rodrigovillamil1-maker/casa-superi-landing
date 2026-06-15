import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import real1 from "@/assets/real-1.jpeg";
import real2 from "@/assets/real-2.jpeg";
import realGrid from "@/assets/real-grid.jpeg";
import realHallway from "@/assets/real-hallway.jpeg";
import kilimFloral from "@/assets/showroom-kilim-floral.jpeg.asset.json";
import kilimRojo from "@/assets/showroom-kilim-rojo.jpeg.asset.json";
import sillonesCrema from "@/assets/showroom-sillones-crema.jpeg.asset.json";
import alfombraGeo from "@/assets/showroom-alfombra-geometrica.jpeg.asset.json";
import livingKilims from "@/assets/showroom-living-kilims.jpeg.asset.json";
import sillasPared from "@/assets/showroom-sillas-pared.jpeg.asset.json";
import tapizBronce from "@/assets/showroom-tapiz-bronce.jpeg.asset.json";
import sofaGeo from "@/assets/showroom-sofa-geometrico.jpeg.asset.json";

const pieces = [
  { src: kilimFloral.url, title: "Kilim Floral con Sillones", category: "Ambiente" },
  { src: sillonesCrema.url, title: "Sillones Crema y Kilims", category: "Living" },
  { src: kilimRojo.url, title: "Kilim Rojo y Verde", category: "Textil" },
  { src: livingKilims.url, title: "Pared de Tapices", category: "Curaduría" },
  { src: alfombraGeo.url, title: "Alfombra Geométrica y Deck Chair", category: "Ambiente" },
  { src: sillasPared.url, title: "Comedor con Sillas en Pared", category: "Comedor" },
  { src: tapizBronce.url, title: "Tapiz Bronce y Sofá Vintage", category: "Living" },
  { src: sofaGeo.url, title: "Sofá Geométrico", category: "Mobiliario" },
  { src: real1, title: "Sillones Mid-Century", category: "Mobiliario" },
  { src: realHallway, title: "Pasillo Curado", category: "Ambientes" },
  { src: real2, title: "Living con Bovedilla", category: "Ambientes" },
  { src: realGrid, title: "Showroom Caballeriza", category: "Espacio" },
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
            <div className="absolute inset-0 bg-deep-charcoal/0 group-hover:bg-deep-charcoal/60 transition-all duration-500 flex items-end">
              <div className="p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-cream-light/70">
                  {piece.category}
                </p>
                <p className="font-display text-lg md:text-xl text-cream-light mt-1">
                  {piece.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
