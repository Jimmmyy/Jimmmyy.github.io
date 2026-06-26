import Image from "next/image";
import { Project } from "@/components/Projects/types";

/**
 * Single project card component.
 */

type Props = {
  project: Project;
  onClick?: () => void;
  viewLabel?: string;
};

const ProjectCard = ({ project, onClick, viewLabel = "View" }: Props) => (
  <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center p-6 w-[280px] aspect-square min-h-[400px]">
    <Image
      src={project.image}
      alt={project.title}
      width={800}
      height={600}
      className="w-full h-32 object-cover rounded-xl mb-6 border border-gray-100 dark:border-gray-800"
    />
    <h3 className="text-xl font-bold text-center text-blue-600 dark:text-blue-400 mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition">
      {project.title}
    </h3>
    <p className="text-base text-center text-gray-600 dark:text-gray-300 mb-4">
      {project.description}
    </p>

    <button
      onClick={onClick}
      className="mt-auto inline-block px-5 py-2 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
    >
      {viewLabel}
    </button>
  </div>
);

export default ProjectCard;
