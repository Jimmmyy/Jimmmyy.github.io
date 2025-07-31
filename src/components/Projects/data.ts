/**
 * Project and category data definitions.
 * - Category: Enum of possible project categories.
 * - Project: Type definition for a project.
 * - categories: List of all available categories.
 * - projects: List of all portfolio projects.
 */

export type Category = "all" | "Data Engineer" | "DevOps" | "Other";

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
  "Other",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal website built with Next.js and Tailwind CSS.",
    image: "/images/portfolio_image.jpg",
    category: "Other",
    link: "https://github.com/Jimmmyy/Jimmmyy.github.io",
    techs: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    id: 2,
    title: "Backend API with FastAPI",
    description: "A backend API built with FastAPI and PostgreSQL.",
    image: "/images/fastAPI.png",
    category: "Data Engineer",
    link: "https://github.com/Jimmmyy/backend-api",
    techs: ["FastAPI", "PostgreSQL", "Docker"],
  },
  {
    id: 3,
    title: "Wordle project from Josh Comeau Course",
    description: "Reusable UI component library for internal projects.",
    image: "/images/wordle.png",
    category: "Other",
    link: "https://github.com/Jimmmyy/project-wordle-josh-course",
    techs: ["Figma", "Tailwind", "Storybook"],
  },
  {
    id: 4,
    title: "Terraform module GCP",
    description:
      "Terraform module for GCP resources such as VPC, bastion, spark cluster, NAT, private VM.",
    image: "/images/gcp-terraform.png",
    category: "DevOps",
    link: "#",
    techs: ["Terraform", "GCP"],
  },
  {
    id: 5,
    title: "Ansible PoC",
    description: "Proof of Concept for Ansible automation.",
    image: "/images/ansible.png",
    category: "DevOps",
    link: "#",
    techs: ["Ansible", "Automation"],
  },
  {
    id: 6,
    title: "Databricks tutorial from Ansh Lamba",
    description: "Databricks tutorial covering basics of Spark.",
    image: "/images/databricks_spark.png",
    category: "Data Engineer",
    link: "https://youtu.be/94w6hPk7nkM?si=UyZR6ZmJDQ3nEpmS",
    techs: ["Databricks", "Spark", "Python"],
  },
  {
    id: 7,
    title: "Spark Kubernetes cluster",
    description: "A Kubernetes cluster setup for Spark applications.",
    image: "/images/spark_cluster.png",
    category: "Data Engineer",
    link: "https://www.youtube.com/watch?v=dVCHcU--9aI",
    techs: ["Kubernetes", "Spark", "Docker"],
  },
];
