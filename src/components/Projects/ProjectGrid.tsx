"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/components/Projects/types";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  projects: Project[];
  selectedCategory: string;
  onProjectClick: (project: Project) => void;
};

/**
 * Renders a responsive grid of project cards.
 * Handles animation between category changes.
 */

const ProjectGrid = ({ projects, selectedCategory, onProjectClick }: Props) => {
  const { t } = useLanguage();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex flex-wrap justify-center gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <ProjectCard
              project={project}
              onClick={() => onProjectClick(project)}
              viewLabel={t.projects.view}
            />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectGrid;
