"use client";

/**
 * Projects V4 — grille de 3 cartes projets, contenu selon la langue.
 */

import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "./data";

const Projects = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="work" className="scroll-mt-20 max-w-[1160px] mx-auto px-6 md:px-10 pt-20 pb-5">
      <SectionHeading kicker={t.work.kicker} title={t.work.title} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
        {projects[lang].map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
