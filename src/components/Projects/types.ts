/**
 * Type definitions for Projects (V4).
 */

export type Project = {
  tag: string;
  title: string;
  description: string;
  techs: string[];
  link: string;
  /** Chemin public de l'aperçu ; absent → placeholder stylé. */
  image?: string;
  /** Libellé affiché dans le placeholder quand il n'y a pas d'image. */
  placeholder?: string;
};
