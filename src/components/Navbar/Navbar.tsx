"use client";

import { useState, useEffect } from "react";
import ContactDialog from "@/components/Navbar/ContactDialog";
import ThemeToggle from "@/components/Navbar/ThemeToggle";
import LanguageToggle from "@/components/Navbar/LanguageToggle";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Navbar — nom comme logo à gauche, liens avec active pill au centre, actions à droite.
 */

const SECTIONS = ["hero", "projects", "history", "about"] as const;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const { t } = useLanguage();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navLinks = [
    { href: "#hero",     id: "hero",     label: t.nav.home },
    { href: "#projects", id: "projects", label: t.nav.projects },
    { href: "#history",  id: "history",  label: t.nav.history },
    { href: "#about",    id: "about",    label: t.nav.about },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-200 dark:border-gray-800 bg-slate-50/80 dark:bg-[#0b1321]/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between gap-6">

        {/* ── Logo texte ── */}
        <a
          href="#hero"
          className="flex-shrink-0 text-gray-900 dark:text-white font-bold text-base tracking-tight hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
        >
          Jimmy <span className="text-blue-700 dark:text-blue-400">Nguyen</span>
        </a>

        {/* ── Nav links desktop — pill active ── */}
        <nav
          className="hidden md:flex items-center gap-1"
          role="navigation"
          aria-label="Main navigation"
        >
          {navLinks.map(({ href, id, label }) => (
            <a
              key={href}
              href={href}
              className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeSection === id
                  ? "bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* ── Actions ── */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <LanguageToggle />
          <ContactDialog />
          <a
            href="https://www.linkedin.com/in/ji-nguyen/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:scale-110"
          >
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={22} height={22} className="opacity-60 hover:opacity-100 transition" priority />
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1.5 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Nav ── */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-50 dark:bg-[#0b1321] px-4 pb-4 border-t border-gray-200 dark:border-gray-800">
          {navLinks.map(({ href, id, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2.5 text-sm font-medium transition ${
                activeSection === id
                  ? "text-blue-700 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400"
              }`}
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
