import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import realHallway from "@/assets/real-hallway.jpeg";

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
                Casa Superi nació de la pasión por el diseño y la convicción de que los objetos más bellos
                ya fueron creados. En una antigua caballeriza de Buenos Aires, reconstruida con amor y
                dedicación, damos nueva vida a piezas con historia.
              </p>
              <p>
                Recorremos casas antiguas, mercados de época y lugares olvidados para rescatar
                muebles, alfombras, lámparas y arte que merecen un nuevo capítulo. Cada pieza es
                seleccionada por su calidad, diseño y carácter único.
              </p>
              <p>
                Nuestro showroom está organizado como una casa real — con ambientes, rincones y
                escenas que inspiran. Porque creemos que un buen mueble no se compra, se encuentra.
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
                src={realHallway}
                alt="Interior del showroom Casa Superi - antigua caballeriza restaurada"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary px-6 py-4">
              <p className="font-accent text-lg text-primary-foreground italic">
                Una antigua caballeriza,<br />un nuevo destino.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
