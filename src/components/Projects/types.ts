/**
 * Type definitions for Projects.
 * - Category: Enum of possible categories.
 * - Project: Structure for a project object.
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
