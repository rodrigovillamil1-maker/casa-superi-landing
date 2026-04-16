const Footer = () => (
  <footer className="bg-deep-charcoal border-t border-cream-light/10 py-10">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-logo text-lg tracking-wider text-cream-light/60 font-semibold uppercase">
        CASA SUPERI
      </p>
      <p className="font-body text-xs text-cream-light/40 tracking-wider">
        © {new Date().getFullYear()} Casa Superi — Buenos Aires, Argentina
      </p>
      <a
        href="https://www.instagram.com/casa.superi/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-body text-xs tracking-widest uppercase text-cream-light/50 hover:text-cream-light transition-colors"
      >
        Instagram →
      </a>
    </div>
  </footer>
);

export default Footer;
