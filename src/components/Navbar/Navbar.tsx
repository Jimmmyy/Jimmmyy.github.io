"use client";

import { useState } from "react";
import ContactDialog from "@/components/Navbar/ContactDialog";
import ThemeToggle from "@/components/Navbar/ThemeToggle";
import LanguageToggle from "@/components/Navbar/LanguageToggle";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Main navigation bar.
 * Contains links to all sections, theme toggle, language toggle, and a contact button.
 */

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "#hero", label: t.nav.home },
    { href: "#projects", label: t.nav.projects },
    { href: "#history", label: t.nav.history },
    { href: "#about", label: t.nav.about },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-200 dark:border-gray-700 bg-slate-50/80 dark:bg-[#0b1321]/80 backdrop-blur-md shadow-sm dark:shadow-[0_4px_24px_0_rgba(0,0,0,0.35)]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left – Nav Links */}
        <nav
          className="hidden md:flex space-x-8 text-base font-semibold tracking-wide text-gray-700 dark:text-white"
          role="navigation"
          aria-label="Main navigation"
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="transition-colors duration-200 hover:text-blue-700 dark:hover:text-blue-400"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right – Toggles + Contact + LinkedIn */}
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
              width={26}
              height={26}
              className="w-6 h-6 opacity-80 hover:opacity-100"
              priority
            />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-50 dark:bg-[#0b1321] px-4 pb-4 border-t border-gray-200 dark:border-gray-700">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 text-gray-700 dark:text-white font-medium hover:text-blue-700 dark:hover:text-blue-400 transition"
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
