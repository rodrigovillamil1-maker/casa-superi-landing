import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import showroomImage from "@/assets/showroom-shooting.jpg";

const ShowroomSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="showroom" className="py-24 md:py-36 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image first on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={showroomImage}
                alt="Showroom Casa Superi disponible para producciones fotográficas"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
              Locación
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-8">
              Tu próxima<br />
              <span className="italic text-primary">producción</span>
            </h2>
            <div className="space-y-5 text-muted-foreground font-body text-base leading-relaxed">
              <p>
                Nuestro showroom no es solo un espacio de venta — es una locación única para
                shootings de moda, catálogos, publicidad y contenido audiovisual.
              </p>
              <p>
                Con ambientes curados que van del living clásico al rincón bohemio, cada metro
                cuadrado ofrece un escenario diferente. Techos altos, luz natural y una atmósfera
                que no se puede fabricar.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { number: "500+", label: "m² de showroom" },
                { number: "12", label: "ambientes únicos" },
                { number: "∞", label: "posibilidades" },
                { number: "1", label: "lugar como este" },
              ].map((stat, i) => (
                <div key={i} className="border-t border-primary/30 pt-4">
                  <p className="font-display text-3xl text-primary">{stat.number}</p>
                  <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="https://www.instagram.com/casa.superi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-gold-glow transition-colors duration-300"
            >
              Consultá disponibilidad
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomSection;
