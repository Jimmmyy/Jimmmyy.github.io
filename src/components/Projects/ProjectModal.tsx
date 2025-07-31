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
  if (!project) return null; // Add this line to handle the case when project is null

  return (
    <Root open={open} onOpenChange={onClose}>
      <Portal>
        <Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
        <Content className="fixed top-1/2 left-1/2 w-[90vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl z-50 flex flex-col gap-6">
          <div className="flex justify-between items-start mb-2">
            <Title className="text-2xl font-bold text-blue-700 dark:text-blue-400">
              {project.title}
            </Title>
            <Close>
              <X className="w-6 h-6 text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer" />
            </Close>
          </div>

          {project && (
            <>
              <Image
                width={800}
                height={600}
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg mb-2 border border-gray-200 dark:border-gray-700"
              />

              <p className="text-gray-700 dark:text-gray-300 mb-2 text-base">
                {project.description}
              </p>

              {project.techs && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full bg-blue-700 text-white font-medium hover:bg-blue-800 transition"
              >
                View on GitHub
              </a>
            </>
          )}
        </Content>
      </Portal>
    </Root>
  );
};

export default ProjectModal;
