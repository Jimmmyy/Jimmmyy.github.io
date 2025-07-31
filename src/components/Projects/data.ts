/**
 * Project and category data definitions.
 * - Category: Enum of possible project categories.
 * - Project: Type definition for a project.
 * - categories: List of all available categories.
 * - projects: List of all portfolio projects.
 */

export type Category = "all" | "Data Engineer" | "DevOps" | "other";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: Category;
  link: string;
  techs?: string[];
};

export const categories: Category[] = [
  "all",
  "Data Engineer",
  "DevOps",
  "other",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal website built with Next.js and Tailwind CSS.",
    image: "/images/portfolio.png",
    category: "Data Engineer",
    link: "https://github.com/Jimmmyy/mon-portfolio",
    techs: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    id: 2,
    title: "Todo App",
    description: "A fullstack task management app using React and Firebase.",
    image: "/images/todo.png",
    category: "Data Engineer",
    link: "#",
    techs: ["React", "Firebase", "Auth"],
  },
  {
    id: 3,
    title: "UI Design System",
    description: "Reusable UI component library for internal projects.",
    image: "/images/ui-kit.png",
    category: "DevOps",
    link: "#",
    techs: ["Figma", "Tailwind", "Storybook"],
  },
  {
    id: 4,
    title: "UI Design System",
    description: "Reusable UI component library for internal projects.",
    image: "/images/ui-kit.png",
    category: "DevOps",
    link: "#",
    techs: ["Figma", "Tailwind", "Storybook"],
  },
  {
    id: 5,
    title: "UI Design System",
    description: "Reusable UI component library for internal projects.",
    image: "/images/ui-kit.png",
    category: "DevOps",
    link: "#",
    techs: ["Figma", "Tailwind", "Storybook"],
  },
  {
    id: 6,
    title: "UI Design System",
    description: "Reusable UI component library for internal projects.",
    image: "/images/ui-kit.png",
    category: "DevOps",
    link: "#",
    techs: ["Figma", "Tailwind", "Storybook"],
  },
  // {
  //   id: 7,
  //   title: "UI Design System",
  //   description: "Reusable UI component library for internal projects.",
  //   image: "/images/ui-kit.png",
  //   category: "DevOps",
  //   link: "#",
  //   techs: ["Figma", "Tailwind", "Storybook"],
  // },
  {
    id: 8,
    title: "UI Design System",
    description: "Reusable UI component library for internal projects.",
    image: "/images/ui-kit.png",
    category: "DevOps",
    link: "#",
    techs: ["Figma", "Tailwind", "Storybook"],
  },
];
