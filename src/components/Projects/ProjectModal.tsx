"use client";

import {
  Root,
  Portal,
  Overlay,
  Content,
  Close,
  Title,
} from "@radix-ui/react-dialog";
import Image from "next/image";
import { X } from "lucide-react";

import { Project } from "@/components/Projects/types";

type ProjectModalProps = {
  project: Project | null;
  open: boolean;
  onClose: (open: boolean) => void;
};

/**
 * Modal dialog for displaying detailed information about a project.
 * Uses Radix UI Dialog for accessibility and UX.
 * Props:
 * - project: Project object to display (or null if closed).
 * - open: Boolean indicating if the modal is open.
 * - onClose: Callback when the modal is closed.
 */

const ProjectModal = ({ project, open, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Root open={open} onOpenChange={onClose}>
      <Portal>
        <Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
        <Content className="fixed top-1/2 left-1/2 w-[90vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-2xl p-8 shadow-2xl z-50 flex flex-col gap-8 border border-gray-800">
          <div className="flex justify-between items-start mb-4">
            <Title className="text-3xl font-bold text-white">
              {project.title}
            </Title>
            <Close>
              <X className="w-7 h-7 text-gray-400 hover:text-blue-600 transition cursor-pointer" />
            </Close>
          </div>

          <Image
            width={800}
            height={600}
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-xl mb-2 border border-gray-800 shadow"
          />

          <p className="text-gray-200 mb-2 text-lg text-center px-2">
            {project.description}
          </p>

          {project.techs && (
            <div className="flex flex-wrap gap-3 justify-center mb-2">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1 bg-gray-800 text-sm text-gray-200 rounded-full font-medium shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex justify-center mt-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow transition"
            >
              <span>
                {project.link.includes("youtube.com") ||
                project.link.includes("youtu.be")
                  ? "Watch Video"
                  : "View Project"}
              </span>
            </a>
          </div>
        </Content>
      </Portal>
    </Root>
  );
};

export default ProjectModal;
