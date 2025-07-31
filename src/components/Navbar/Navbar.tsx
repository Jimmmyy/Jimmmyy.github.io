"use client";

import ContactDialog from "@/components/Navbar/ContactDialog";

/**
 * Main navigation bar.
 * Contains links to all sections and a contact button.
 * Uses Radix UI Dialog for the contact modal.
 */

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left – Nav Links */}
        <nav className="flex space-x-6 text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
          <a
            href="#hero"
            className="hover:text-blue-700 dark:hover:text-blue-400 transition"
          >
            Home
          </a>
          <a
            href="#projects"
            className="hover:text-blue-700 dark:hover:text-blue-400 transition"
          >
            Projects
          </a>
          <a
            href="#history"
            className="hover:text-blue-700 dark:hover:text-blue-400 transition"
          >
            History
          </a>
          <a
            href="#about"
            className="hover:text-blue-700 dark:hover:text-blue-400 transition"
          >
            About
          </a>
        </nav>

        {/* Right – Contact Button + ThemeToggle */}
        <div className="flex items-center space-x-4">
          {/* <ThemeToggle /> */}
          <ContactDialog />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
