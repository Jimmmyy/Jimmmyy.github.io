"use client";

import { useState } from "react";
import ContactDialog from "@/components/Navbar/ContactDialog";
import Image from "next/image";
import { Menu } from "lucide-react";

/**
 * Main navigation bar.
 * Contains links to all sections and a contact button.
 * Uses Radix UI Dialog for the contact modal.
 */

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b-2 border-gray-700 bg-[#0b1321]/70 backdrop-blur-md shadow-[0_4px_24px_0_rgba(0,0,0,0.35)]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left – Logo + Nav Links */}
        <div className="flex items-center space-x-6">
          {/* Desktop Nav */}
          <nav
            className="hidden md:flex space-x-8 text-lg font-semibold tracking-wide text-white"
            role="navigation"
            aria-label="Main navigation"
          >
            <a
              href="#hero"
              aria-current="page"
              className="transition-colors duration-300 ease-in-out hover:text-blue-400"
            >
              Home
            </a>
            <a
              href="#projects"
              className="transition-colors duration-300 ease-in-out hover:text-blue-400 hover:underline underline-offset-4"
            >
              Projects
            </a>
            <a
              href="#history"
              className="transition-colors duration-300 ease-in-out hover:text-blue-400"
            >
              History
            </a>
            <a
              href="#about"
              className="transition-colors duration-300 ease-in-out hover:text-blue-400"
            >
              About
            </a>
          </nav>
        </div>

        {/* Right – Contact Button + Menu Toggle */}
        <div className="flex items-center space-x-4">
          <ContactDialog />

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-blue-900 transition"
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
          <a
            href="https://www.linkedin.com/in/ji-nguyen/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 transition hover:scale-110"
            aria-label="LinkedIn"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={28}
              height={28}
              className="w-7 h-7"
              priority
            />
          </a>
        </div>
      </div>

      {/* Mobile Nav (optionnel) */}
      {/* 
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a192f] px-4 pb-4">
          <a href="#hero" className="block py-2 text-white">Home</a>
          ...
        </div>
      )}
      */}
    </header>
  );
};

export default Navbar;
