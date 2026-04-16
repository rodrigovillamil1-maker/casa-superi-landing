import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-deckchair.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-36 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
              Nuestra historia
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
              DONDE CADA PIEZA<br />
              <span className="font-accent italic text-primary normal-case">cuenta una historia</span>
            </h2>
            <div className="space-y-5 text-muted-foreground font-body text-base leading-relaxed">
              <p>
                Casa Superi es un espacio dedicado al diseño vintage y a las piezas con historia.
                Rescatamos muebles, alfombras, lámparas y objetos únicos para darles un nuevo capítulo.
              </p>
              <p>
                Nuestro showroom está pensado como una casa: ambientes, rincones y escenas que
                invitan a recorrer, descubrir y encontrar esa pieza que no se busca, aparece.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={aboutImage}
                alt="Silla plegable de cuero vintage en el showroom Casa Superi"
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

export default AboutSection;
