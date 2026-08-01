"use client";

/**
 * Skills V4 — grille de cartes stack (icône + nom + rôle) et liste mono
 * des technologies secondaires.
 */

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/SectionHeading";

const SKILLS = [
  { name: "Python", icon: "/icons/python.svg", role: { fr: "Langage principal", en: "Main language" } },
  { name: "Airflow", icon: "/icons/airflow.svg", role: { fr: "Orchestration", en: "Orchestration" } },
  { name: "Terraform", icon: "/icons/terraform.svg", role: { fr: "Infrastructure as Code", en: "Infrastructure as Code" } },
  { name: "AWS", icon: "/icons/aws.svg", role: { fr: "Cloud", en: "Cloud" } },
  { name: "GCP", icon: "/icons/gcp.svg", role: { fr: "Cloud", en: "Cloud" } },
  { name: "Docker", icon: "/icons/docker.svg", role: { fr: "Conteneurs", en: "Containers" } },
];

const Skills = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="skills" className="scroll-mt-20 max-w-[1160px] mx-auto px-6 md:px-10 pt-[70px] pb-5">
      <SectionHeading kicker={t.skills.kicker} title={t.skills.title} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="bg-white border border-line rounded-2xl px-[26px] py-6 flex items-center gap-4 transition-all duration-200 hover:border-accent hover:shadow-[0_14px_28px_-18px_rgba(62,92,118,0.4)] hover:-translate-y-[3px]"
          >
            <div className="w-12 h-12 rounded-xl bg-surface border border-line flex items-center justify-center shrink-0">
              <Image src={skill.icon} alt={skill.name} width={26} height={26} />
            </div>
            <div className="min-w-0">
              <p className="text-base font-semibold mb-[3px]">{skill.name}</p>
              <p className="font-mono text-[11px] text-faint">{skill.role[lang]}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="font-mono text-[13px] leading-loose text-muted mt-[26px]">
        {t.skills.more}
      </p>
    </section>
  );
};

export default Skills;
