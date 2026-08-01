"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Header V4 — logo jimmy.nguyen, liens sections, toggle FR/EN, bouton CV.
 */

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, t, toggleLang } = useLanguage();

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#work", label: t.nav.work },
    { href: "#experience", label: t.nav.experience },
    { href: "#terrain", label: t.nav.terrain },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-[10px] border-b border-line">
      <div className="max-w-[1160px] mx-auto px-6 md:px-10 py-3.5 flex items-center justify-between gap-6">
        {/* ── Logo ── */}
        <a
          href="#top"
          className="font-display font-bold text-[17px] text-ink shrink-0"
        >
          jimmy<span className="text-accent">.nguyen</span>
        </a>

        {/* ── Liens desktop ── */}
        <nav
          className="hidden lg:flex items-center gap-[26px]"
          role="navigation"
          aria-label="Main navigation"
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-muted hover:text-accent transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* ── Actions ── */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            aria-label="Switch language"
            className="font-mono text-xs font-medium tracking-[0.06em] px-3 py-1.5 border border-line-soft rounded-lg text-muted hover:border-accent hover:text-accent transition-colors cursor-pointer"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <a
            href="/CV_JimmyNguyen.pdf"
            download
            className="text-[13px] font-semibold px-[18px] py-2 rounded-lg bg-ink text-white hover:bg-accent transition-colors"
          >
            CV ↓
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1.5 rounded-md text-muted hover:bg-surface transition"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Menu mobile ── */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white px-6 pb-4 border-t border-line">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2.5 text-sm font-medium text-muted hover:text-accent transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
