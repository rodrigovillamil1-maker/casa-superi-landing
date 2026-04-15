import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-36 bg-deep-charcoal">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Visitanos
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream-light">
            Vení a <span className="italic text-primary">conocernos</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-12 text-center"
        >
          <div>
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="font-display text-xl text-cream-light mb-2">Ubicación</h3>
            <p className="font-body text-sm text-cream-light/60 leading-relaxed">
              Buenos Aires, Argentina<br />
              <span className="text-primary">Consultá dirección por DM</span>
            </p>
          </div>

          <div>
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <h3 className="font-display text-xl text-cream-light mb-2">Horarios</h3>
            <p className="font-body text-sm text-cream-light/60 leading-relaxed">
              Lunes a Viernes: 10 – 18hs<br />
              Sábados: con cita previa
            </p>
          </div>

          <div>
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <h3 className="font-display text-xl text-cream-light mb-2">Contacto</h3>
            <p className="font-body text-sm text-cream-light/60 leading-relaxed">
              <a href="https://www.instagram.com/casa.superi/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold-glow transition-colors">
                @casa.superi
              </a>
              <br />
              Instagram & WhatsApp
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
