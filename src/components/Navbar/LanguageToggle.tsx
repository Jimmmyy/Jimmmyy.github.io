"use client";

/**
 * Language toggle button — switches between EN and FR.
 */

import { useLanguage } from "@/context/LanguageContext";

const LanguageToggle = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      className="px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-sm font-semibold shadow-sm tracking-wide"
    >
      {lang === "en" ? "FR" : "EN"}
    </button>
  );
};

export default LanguageToggle;
