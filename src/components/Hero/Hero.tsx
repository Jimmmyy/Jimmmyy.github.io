"use client";

/**
 * Hero section — fond avec blobs animés, texte traduit, portrait carte.
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
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 max-w-7xl mx-auto gap-12 md:gap-20 overflow-hidden"
    >
      {/* ── Background blobs ── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Blob haut-gauche */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
        {/* Blob bas-droite */}
        <div className="absolute -bottom-32 -right-20 w-[400px] h-[400px] rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl animate-[pulse_10s_ease-in-out_2s_infinite]" />
        {/* Grille subtile */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Texte ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center md:text-left md:w-1/2 z-10"
      >
        <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-3 tracking-widest uppercase">
          {t.hero.greeting}
        </p>
        <h1 className="text-6xl sm:text-7xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight leading-tight">
          Jimmy{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">
            Nguyen
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-300 max-w-xl mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-base sm:text-lg rounded-full font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-lg shadow-blue-600/30"
          >
            {t.hero.cta}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/CV_JimmyNguyen.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-base sm:text-lg rounded-full font-semibold hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-200"
          >
            CV
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden md:flex items-center gap-2 mt-16 text-xs text-gray-400 dark:text-gray-600"
        >
          <span className="inline-block w-px h-8 bg-gray-300 dark:bg-gray-700 animate-[pulse_2s_ease-in-out_infinite]" />
          scroll
        </motion.div>
      </motion.div>

      {/* ── Portrait ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className="z-10"
      >
        <HeroPortrait />
      </motion.div>
    </section>
  );
};

export default Hero;
