"use client";

import { useState, useEffect } from "react";
import ContactDialog from "@/components/Navbar/ContactDialog";
import ThemeToggle from "@/components/Navbar/ThemeToggle";
import LanguageToggle from "@/components/Navbar/LanguageToggle";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Navbar — logo JN, liens avec active state au scroll, toggles theme/lang, contact.
 */

const SECTIONS = ["hero", "projects", "history", "about"] as const;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const { t } = useLanguage();

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
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
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo JN */}
        <a
          href="#hero"
          className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-700 dark:bg-blue-600 text-white text-sm font-extrabold tracking-tight hover:bg-blue-800 dark:hover:bg-blue-500 transition select-none"
          aria-label="Retour en haut"
        >
          JN
        </a>

        {/* Nav links */}
        <nav
          className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide"
          role="navigation"
          aria-label="Main navigation"
        >
          {navLinks.map(({ href, id, label }) => (
            <a
              key={href}
              href={href}
              className={`transition-colors duration-200 pb-0.5 border-b-2 ${
                activeSection === id
                  ? "text-blue-700 dark:text-blue-400 border-blue-700 dark:border-blue-400"
                  : "text-gray-600 dark:text-gray-300 border-transparent hover:text-blue-700 dark:hover:text-blue-400"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right — toggles + contact + LinkedIn */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <LanguageToggle />
          <ContactDialog />

          <a
            href="https://www.linkedin.com/in/ji-nguyen/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 transition hover:scale-110"
            aria-label="LinkedIn"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className="w-6 h-6 opacity-70 hover:opacity-100"
              priority
            />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-50 dark:bg-[#0b1321] px-4 pb-4 border-t border-gray-200 dark:border-gray-700">
          {navLinks.map(({ href, id, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className={`block py-3 font-medium transition ${
                activeSection === id
                  ? "text-blue-700 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400"
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
