"use client";

/**
 * Hero section — fond épuré, portrait cercle, CTA double.
 */

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroPortrait from "@/components/Hero/HeroPortrait";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 max-w-7xl mx-auto gap-14 md:gap-24"
    >
      {/* ── Texte ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center md:text-left md:w-1/2"
      >
        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 tracking-widest uppercase">
          {t.hero.greeting}
        </p>
        <h1 className="text-6xl sm:text-7xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight leading-tight">
          Jimmy{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Nguyen
          </span>
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-lg mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-lg shadow-blue-600/25"
          >
            {t.hero.cta}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/CV_JimmyNguyen.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all duration-200"
          >
            CV
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
            </svg>
          </a>
        </div>
      </motion.div>

      {/* ── Portrait ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        <HeroPortrait />
      </motion.div>
    </section>
  );
};

export default Hero;
