"use client";

/**
 * About V4 — carte blanche : bio à gauche, panneau de faits à droite
 * (nom / rôle / localisation / email / statut).
 */

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const facts = [
    { label: t.about.fName, value: "Jimmy Nguyen" },
    { label: t.about.fRole, value: "Data Engineer" },
    { label: t.about.fLocation, value: "Paris, France" },
  ];

  return (
    <section id="about" className="scroll-mt-20 max-w-[1160px] mx-auto px-6 md:px-10 py-[50px]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white border border-line rounded-[20px] p-7 md:py-12 md:px-[52px] grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 lg:gap-14 shadow-[0_20px_40px_-30px_rgba(23,24,26,0.15)]"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent mb-3">
            {t.about.kicker}
          </p>
          <h2 className="font-display text-[28px] md:text-[34px] font-bold tracking-[-0.02em] mb-[18px]">
            {t.about.title}
          </h2>
          <p className="text-base leading-[1.7] text-body mb-4 text-pretty">{t.about.bio1}</p>
          <p className="text-base leading-[1.7] text-body text-pretty">{t.about.bio2}</p>
        </div>

        {/* ── Panneau de faits ── */}
        <div className="bg-surface-soft border border-line rounded-[14px] px-6 py-2.5 self-start">
          <div className="flex flex-col">
            {facts.map(({ label, value }) => (
              <div
                key={label}
                className="flex justify-between items-center gap-4 py-3.5 border-b border-line"
              >
                <span className="font-mono text-xs text-faint">{label}</span>
                <span className="text-sm font-semibold">{value}</span>
              </div>
            ))}
            <div className="flex justify-between items-center gap-4 py-3.5 border-b border-line">
              <span className="font-mono text-xs text-faint">Email</span>
              <a
                href="mailto:jimmy-94@hotmail.fr"
                className="text-sm font-semibold text-accent hover:text-accent-deep transition-colors"
              >
                jimmy-94@hotmail.fr
              </a>
            </div>
            <div className="flex justify-between items-center gap-4 py-3.5">
              <span className="font-mono text-xs text-faint">{t.about.fStatus}</span>
              <span className="inline-flex items-center gap-[7px] text-sm font-semibold text-leaf">
                <span className="w-[7px] h-[7px] rounded-full bg-leaf animate-pulse-dot" />
                {t.about.fAvailable}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
