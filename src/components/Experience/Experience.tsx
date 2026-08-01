"use client";

/**
 * Experience V4 — cartes parcours : date + lieu à gauche, rôle, org
 * et bullets "›" à droite.
 */

import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "./data";

const Experience = () => {
  const { lang, t } = useLanguage();

  return (
    <section
      id="experience"
      className="scroll-mt-20 max-w-[1160px] mx-auto px-6 md:px-10 pt-20 pb-5"
    >
      <SectionHeading kicker={t.exp.kicker} title={t.exp.title} />

      <div className="flex flex-col gap-[18px]">
        {experiences[lang].map((exp) => (
          <div
            key={`${exp.role}-${exp.date}`}
            className="bg-white border border-line rounded-2xl p-6 md:px-[34px] md:py-[30px] grid md:grid-cols-[190px_minmax(0,1fr)] gap-4 md:gap-9"
          >
            <div>
              <p className="font-mono text-[13px] text-accent mb-1.5">{exp.date}</p>
              <p className="text-[13px] text-faint">{exp.place}</p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-1">{exp.role}</h3>
              <p className="text-sm text-muted mb-3.5">{exp.org}</p>
              <div className="flex flex-col gap-2">
                {exp.bullets.map((bullet) => (
                  <p
                    key={bullet}
                    className="text-sm leading-[1.6] text-body flex gap-2.5 text-pretty"
                  >
                    <span className="text-accent shrink-0">›</span>
                    <span>{bullet}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
