"use client";

import pkg from "../../package.json";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp } from "lucide-react";

/**
 * Footer — copyright, version, bouton back to top.
 */

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full py-10 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} {t.footer.rights} —{" "}
          <a
            href={`https://github.com/Jimmmyy/Jimmmyy.github.io/releases/tag/v${pkg.version}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            v{pkg.version}
          </a>
        </p>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="flex items-center gap-1.5 text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-blue-700 dark:hover:text-blue-400 transition group"
        >
          Back to top
          <span className="flex items-center justify-center w-7 h-7 rounded-full border border-gray-200 dark:border-gray-700 group-hover:border-blue-400 dark:group-hover:border-blue-500 transition">
            <ArrowUp className="w-3.5 h-3.5" />
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
