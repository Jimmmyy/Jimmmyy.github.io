/**
 * Footer V4 — copyright + coordonnées Paris en mono.
 */

const Footer = () => (
  <footer className="max-w-[1160px] mx-auto px-6 md:px-10 pt-2.5 pb-11 flex flex-col sm:flex-row items-center justify-between gap-2">
    <p className="text-[13px] text-faint">
      © {new Date().getFullYear()} Jimmy Nguyen
    </p>
    <p className="font-mono text-[11px] text-faint">Paris · 48.85°N 2.35°E</p>
  </footer>
);

export default Footer;
