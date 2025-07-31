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

/**
 * Projects section.
 * - Displays category filters.
 * - Shows a grid of projects filtered by category.
 * - Opens a modal with project details when a project is selected.
 */
const Projects = () => {
  // Assumes "all" is a valid value in categories. If not, this will throw an error.
  if (!categories.includes("all")) {
    throw new Error(
      'Initial category "all" is not present in categories array.'
    );
  }
  const [selected, setSelected] = useState<Category>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    selected === "all"
      ? projects
      : projects.filter((p) => p.category === selected);

  return (
    <section
      id="projects"
      className="scroll-mt-28 my-24 px-6 max-w-6xl mx-auto"
    >
      <h2 className="section-title mb-8 text-blue-600 dark:text-blue-400">
        Projects
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selected === cat
                ? "bg-blue-600 dark:bg-blue-500 text-white shadow"
                : "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-800"
            }`}
          >
            {cat === "all" ? "All" : cat}
          </button>
        ))}
      </div>

      {/* Animated grid container */}
      {filteredProjects.length === 0 ? (
        <div className="text-center text-gray-500 py-12">
          Aucun projet trouvé pour cette catégorie.
        </div>
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
