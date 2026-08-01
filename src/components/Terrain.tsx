"use client";

/**
 * Terrain V4 — hors du bureau : escalade, montagne, voyage.
 * Les photos vivent dans public/images/terrain/.
 */

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/SectionHeading";

const SLOTS: { key: "cap1" | "cap2" | "cap3"; image?: string }[] = [
  { key: "cap1", image: "/images/terrain/escalade.jpg" },
  { key: "cap2", image: "/images/terrain/montagne.jpg" },
  { key: "cap3", image: "/images/terrain/voyage.jpg" },
];

const Terrain = () => {
  const { t } = useLanguage();

  return (
    <section id="terrain" className="scroll-mt-20 max-w-[1160px] mx-auto px-6 md:px-10 pt-20 pb-5">
      <SectionHeading kicker={t.terrain.kicker} title={t.terrain.title} className="mb-3.5" />
      <p className="text-base leading-[1.65] text-body max-w-[620px] mb-9 text-pretty">
        {t.terrain.intro}
      </p>

      <div className="grid sm:grid-cols-3 gap-[18px]">
        {SLOTS.map(({ key, image }) => (
          <div key={key}>
            <div className="relative w-full h-[240px] sm:h-[320px] rounded-2xl overflow-hidden border border-line bg-surface">
              {image ? (
                <Image
                  src={image}
                  alt={t.terrain[key]}
                  fill
                  sizes="(max-width: 640px) 100vw, 370px"
                  className="object-cover"
                />
              ) : (
                <div className="h-full flex items-center justify-center bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,rgba(62,92,118,0.04)_10px,rgba(62,92,118,0.04)_20px)]">
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
                    {t.terrain.soon}
                  </span>
                </div>
              )}
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-faint mt-2.5">
              {t.terrain[key]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Terrain;
