import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import tapizBosque from "@/assets/tapiz-bosque.jpeg";
import tapizAbstracto from "@/assets/tapiz-abstracto.jpeg";
import sillonGris from "@/assets/sillon-gris-rincon.jpeg";
import realHallway from "@/assets/real-hallway.jpeg";

const collaborations = [
  {
    image: tapizBosque,
    client: "Marcas de moda",
    project: "Locación para editoriales y campañas",
  },
  {
    image: realHallway,
    client: "Estudios de interiorismo",
    project: "Curaduría y abastecimiento de piezas",
  },
  {
    image: sillonGris,
    client: "Productoras audiovisuales",
    project: "Ambientación de escenas y sets",
  },
  {
    image: tapizAbstracto,
    client: "Galerías y coleccionistas",
    project: "Selección de obra y mobiliario único",
  },
];

const PartnershipsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="partnerships" className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Colaboraciones
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Partnerships
          </h2>
          <p className="mt-6 font-body text-muted-foreground max-w-xl mx-auto">
            Trabajamos con marcas, estudios y proyectos que comparten nuestra mirada por lo bien
            hecho y lo que dura.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {collaborations.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden mb-5">
                <img
                  src={c.image}
                  alt={c.client}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-2">
                {c.client}
              </p>
              <p className="font-display text-2xl text-foreground">{c.project}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block px-8 py-3 border border-primary text-primary font-body text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            Proponé una colaboración
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
