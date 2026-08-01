"use client";

/**
 * Hero V4 — badge disponible, titre display, ligne mono, CTA, photo carte
 * avec fond incliné et badges flottants.
 */

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="max-w-[1160px] mx-auto px-6 md:px-10 pt-[120px] md:pt-[150px] pb-16 md:pb-[90px] flex flex-col lg:flex-row items-center gap-14 lg:gap-[72px]"
    >
      {/* ── Texte ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 min-w-0"
      >
        <p className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.04em] text-accent mb-[22px] px-3.5 py-[7px] border border-tint-strong rounded-full bg-surface">
          <span className="w-[7px] h-[7px] rounded-full bg-leaf animate-pulse-dot" />
          {t.hero.badge}
        </p>
        <h1 className="font-display text-[42px] sm:text-[58px] font-bold leading-[1.05] tracking-[-0.025em] mb-3.5">
          Jimmy <span className="text-accent">Nguyen</span>
        </h1>
        <p className="font-mono text-base text-muted mb-[22px]">
          $ data-engineer --cloud aws,gcp --iac
        </p>
        <p className="text-[17px] leading-[1.65] text-body max-w-[480px] mb-8 text-pretty">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-3.5 mb-8">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-[26px] py-[13px] rounded-[10px] bg-accent text-white font-semibold text-[15px] shadow-[0_8px_20px_-8px_rgba(62,92,118,0.5)] hover:bg-accent-deep transition-colors"
          >
            {t.hero.cta} →
          </a>
          <a
            href="#contact"
            className="inline-flex px-[26px] py-[13px] rounded-[10px] border border-line-soft bg-white text-ink font-semibold text-[15px] hover:border-accent hover:text-accent transition-colors"
          >
            {t.hero.contact}
          </a>
        </div>

        <div className="flex items-center gap-[18px]">
          <a
            href="https://github.com/Jimmmyy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted border-b border-line-soft pb-0.5 hover:text-accent hover:border-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ji-nguyen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted border-b border-line-soft pb-0.5 hover:text-accent hover:border-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>

      {/* ── Photo ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="shrink-0 relative"
      >
        <div className="absolute -inset-3.5 rounded-[26px] bg-gradient-to-br from-tint to-surface rotate-3" />
        <div className="relative w-[290px] h-[352px] sm:w-[330px] sm:h-[400px] rounded-[20px] overflow-hidden border border-line shadow-[0_30px_60px_-20px_rgba(23,24,26,0.28)]">
          <Image
            src="/images/avatar-fun.jpg"
            alt={t.hero.photoAlt}
            fill
            priority
            sizes="330px"
            className="object-cover object-[50%_30%]"
          />
        </div>
        <div className="absolute -bottom-[18px] -left-3 sm:-left-[26px] bg-ink text-white rounded-[14px] px-5 py-3.5 shadow-[0_16px_32px_-12px_rgba(23,24,26,0.4)]">
          <p className="font-display text-2xl font-bold">6+</p>
          <p className="font-mono text-[10px] tracking-[0.08em] text-[#a8b2bc] uppercase mt-0.5">
            {t.hero.years}
          </p>
        </div>
        <div className="absolute top-[18px] -right-3 sm:-right-[22px] bg-white border border-line rounded-xl px-3.5 py-2.5 shadow-[0_12px_24px_-10px_rgba(23,24,26,0.2)]">
          <p className="font-mono text-[11px] text-accent">AWS · GCP</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
