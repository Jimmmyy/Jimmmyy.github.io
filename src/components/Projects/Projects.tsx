"use client";

import { useState } from "react";
import ProjectModal from "@/components/Projects/ProjectModal";
import ProjectGrid from "@/components/Projects/ProjectGrid";
import {
  projects,
  categories,
  Category,
  Project,
} from "@/components/Projects/data";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Projects section.
 * - Displays category filters.
 * - Shows a grid of projects filtered by category.
 * - Opens a modal with project details when a project is selected.
 */
const Projects = () => {
  if (!categories.includes("all")) {
    throw new Error('Initial category "all" is not present in categories array.');
  }
  const [selected, setSelected] = useState<Category>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useLanguage();

  const filteredProjects =
    selected === "all"
      ? projects
      : projects.filter((p) => p.category === selected);

  return (
    <section
      id="projects"
      className="scroll-mt-28 my-24 px-6 max-w-6xl mx-auto"
    >
      <h2 className="section-title mb-8">{t.projects.title}</h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
              selected === cat
                ? "bg-blue-600 text-white border-blue-600 shadow"
                : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100 border-gray-300 dark:border-gray-700 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            {cat === "all" ? t.projects.all : cat}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center text-gray-400 py-12">{t.projects.noProjects}</div>
      ) : (
        <ProjectGrid
          projects={filteredProjects}
          selectedCategory={selected}
          onProjectClick={setSelectedProject}
        />
      )}
      <ProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onClose={(isOpen) => {
          if (!isOpen) setSelectedProject(null);
        }}
      />
    </section>
  );
};

export default Projects;
