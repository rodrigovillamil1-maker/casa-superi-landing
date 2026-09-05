import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cld = (id: string) =>
  `https://res.cloudinary.com/lfwzb5kp/image/upload/f_auto,q_auto/${id}`;

const projects = [
  {
    title: "Showroom Casa Superi",
    subtitle: "La caballeriza restaurada",
    description:
      "500m² de ambientes curados en una antigua caballeriza de Buenos Aires, reconstruida pieza por pieza.",
    images: [
      cld("v1788565272/IMG_6190"),
      cld("v1788565312/IMG_6261"),
      cld("v1788565304/IMG_6384"),
      cld("v1788565303/IMG_6153"),
      cld("v1788565279/IMG_6122"),
      cld("v1788565277/IMG_6418"),
      cld("v1788565272/IMG_6265"),
    ],
    tags: ["Restauración", "Interiorismo", "Showroom"],
  },
  {
    title: "Producciones Fotográficas",
    subtitle: "Locación para shootings",
    description:
      "Escenarios únicos para moda, catálogos y contenido audiovisual. Techos altos, luz natural y atmósfera irrepetible.",
    image:
      "https://res.cloudinary.com/lfwzb5kp/image/upload/f_auto,q_auto/v1788487574/IMG_6064",
    tags: ["Fotografía", "Moda", "Locación"],
  },
  {
    title: "Curaduría de Piezas",
    subtitle: "Rescate y selección",
    description:
      "Recorremos casas antiguas, mercados de época y lugares olvidados para encontrar muebles, arte y objetos con historia.",
    image:
      "https://res.cloudinary.com/lfwzb5kp/image/upload/f_auto,q_auto/v1788487566/IMG_2614",
    tags: ["Vintage", "Arte", "Mobiliario"],
  },
  {
    title: "Ambientaciones",
    subtitle: "Espacios con alma",
    description:
      "Diseñamos escenas que cuentan historias — del living clásico al rincón bohemio, cada ambiente tiene personalidad propia.",
    image:
      "https://res.cloudinary.com/lfwzb5kp/image/upload/f_auto,q_auto/v1788487578/IMG_6437",
    tags: ["Diseño", "Ambientación", "Estilo"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="py-24 md:py-36 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Lo que hacemos
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Proyectos
          </h2>
        </motion.div>
      </div>

      <div className="space-y-8 md:space-y-10">
        {projects.map((project, i) => {
          const alignRight = i % 2 === 1;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group relative aspect-[16/10] md:aspect-[21/9] overflow-hidden"
            >
              {"images" in project ? (
                <div className="absolute inset-0 flex flex-col gap-0.5">
                  <div className="flex-1 grid grid-cols-4 gap-0.5">
                    {project.images.slice(0, 4).map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt={`${project.title} ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <div className="flex-1 grid grid-cols-3 gap-0.5">
                    {project.images.slice(4).map((src, idx) => (
                      <img
                        key={idx + 4}
                        src={src}
                        alt={`${project.title} ${idx + 5}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 via-deep-charcoal/10 to-transparent" />

              <div
                className={`relative z-10 h-full flex flex-col justify-end p-8 md:p-12 ${
                  alignRight ? "items-end text-right" : "items-start text-left"
                }`}
              >
                <p className="font-body text-xs tracking-[0.3em] uppercase text-cream-light/70 mb-2">
                  {project.subtitle}
                </p>
                <h3 className="font-display text-3xl md:text-5xl text-cream-light mb-4 max-w-xl">
                  {project.title}
                </h3>
                <p className="font-body text-cream-light/80 leading-relaxed mb-6 max-w-md">
                  {project.description}
                </p>
                <div className={`flex flex-wrap gap-2 ${alignRight ? "justify-end" : "justify-start"}`}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-xs tracking-wider uppercase px-3 py-1 border border-cream-light/40 text-cream-light/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
