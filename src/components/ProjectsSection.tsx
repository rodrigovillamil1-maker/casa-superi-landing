import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import realGrid from "@/assets/real-grid.jpeg";
import showroomShooting from "@/assets/showroom-shooting.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  {
    title: "Showroom Casa Superi",
    subtitle: "La caballeriza restaurada",
    description: "500m² de ambientes curados en una antigua caballeriza de Buenos Aires, reconstruida pieza por pieza.",
    image: realGrid,
    tags: ["Restauración", "Interiorismo", "Showroom"],
  },
  {
    title: "Producciones Fotográficas",
    subtitle: "Locación para shootings",
    description: "Escenarios únicos para moda, catálogos y contenido audiovisual. Techos altos, luz natural y atmósfera irrepetible.",
    image: showroomShooting,
    tags: ["Fotografía", "Moda", "Locación"],
  },
  {
    title: "Curaduría de Piezas",
    subtitle: "Rescate y selección",
    description: "Recorremos casas antiguas, mercados de época y lugares olvidados para encontrar muebles, arte y objetos con historia.",
    image: portfolio1,
    tags: ["Vintage", "Arte", "Mobiliario"],
  },
  {
    title: "Ambientaciones",
    subtitle: "Espacios con alma",
    description: "Diseñamos escenas que cuentan historias — del living clásico al rincón bohemio, cada ambiente tiene personalidad propia.",
    image: portfolio3,
    tags: ["Diseño", "Ambientación", "Estilo"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="py-24 md:py-36 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Lo que hacemos
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            PROYECTOS
          </h2>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-2">
                  {project.subtitle}
                </p>
                <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-xs tracking-wider uppercase px-3 py-1 border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
