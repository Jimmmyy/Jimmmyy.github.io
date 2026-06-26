import Image from "next/image";
import { Project } from "@/components/Projects/types";

type Props = {
  project: Project;
  onClick?: () => void;
  viewLabel?: string;
};

/**
 * Project card — hover lift + badge catégorie + bouton CTA.
 */
const ProjectCard = ({ project, onClick, viewLabel = "View" }: Props) => (
  <div
    onClick={onClick}
    className="group cursor-pointer bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center p-6 w-[280px] min-h-[380px]"
  >
    {/* Image avec overlay au hover */}
    <div className="relative w-full h-36 rounded-xl overflow-hidden mb-5 border border-gray-100 dark:border-gray-800">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="280px"
      />
      {/* Badge catégorie */}
      <span className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-semibold rounded-full bg-black/50 text-white backdrop-blur-sm">
        {project.category}
      </span>
    </div>

    <h3 className="text-lg font-bold text-center text-blue-700 dark:text-blue-400 mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition leading-snug">
      {project.title}
    </h3>
    <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-5 flex-1 leading-relaxed">
      {project.description}
    </p>

    {/* Tech chips */}
    {project.techs && (
      <div className="flex flex-wrap justify-center gap-1 mb-4">
        {project.techs.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
          >
            {tech}
          </span>
        ))}
      </div>
    )}

    <button
      onClick={onClick}
      className="mt-auto inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium shadow hover:bg-blue-700 active:scale-95 transition-all duration-200"
    >
      {viewLabel}
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
);

export default ProjectCard;
