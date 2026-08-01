"use client";

/**
 * Language context — provides FR / EN switching across the entire app.
 * Usage:
 *   const { lang, t, toggleLang } = useLanguage();
 */

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Lang } from "@/translations";

type LanguageContextType = {
  lang: Lang;
  t: (typeof translations)[Lang];
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  const toggleLang = () => setLang((l) => (l === "fr" ? "en" : "fr"));

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
