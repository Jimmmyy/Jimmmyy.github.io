import Image from "next/image";
import type { Project } from "./types";

/**
 * Carte projet V4 — aperçu (image ou placeholder rayé), tag mono,
 * titre display, description, chips techs. Toute la carte est un lien.
 */

const ProjectCard = ({ project }: { project: Project }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col bg-white border border-line rounded-[18px] overflow-hidden text-ink transition-all duration-200 hover:border-accent hover:shadow-[0_20px_40px_-20px_rgba(62,92,118,0.35)] hover:-translate-y-1"
  >
    <div className="relative h-[170px] bg-surface border-b border-line overflow-hidden">
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 370px"
          className="object-cover"
        />
      ) : (
        <div className="h-full flex items-center justify-center bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,rgba(62,92,118,0.04)_10px,rgba(62,92,118,0.04)_20px)]">
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
            {project.placeholder}
          </span>
        </div>
      )}
    </div>
    <div className="px-6 pt-[22px] pb-6 flex flex-col flex-1">
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-accent mb-2">
        {project.tag}
      </p>
      <h3 className="font-display text-[19px] font-bold leading-[1.25] mb-2.5 text-balance">
        {project.title}
      </h3>
      <p className="text-sm leading-[1.6] text-body mb-4 flex-1 text-pretty">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.techs.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[11px] px-2.5 py-[3px] rounded-md bg-surface border border-line text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </a>
);

export default ProjectCard;
