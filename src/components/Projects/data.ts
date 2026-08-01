/**
 * Projets choisis — contenu FR / EN (V4).
 * Les aperçus vivent dans public/images/projects/.
 */

import type { Lang } from "@/translations";
import type { Project } from "./types";

export const projects: Record<Lang, Project[]> = {
  fr: [
    {
      tag: "Infra · Data",
      title: "Infrastructure GCP + cluster Spark",
      description:
        "6 modules Terraform réutilisables et un cluster Spark 1 master / 2 workers sur VM privées, configuré avec Ansible. Bastion unique point d'entrée SSH.",
      techs: ["Terraform", "Ansible", "GCP", "Spark"],
      link: "https://github.com/Jimmmyy",
      image: "/images/projects/gcp-terraform.png",
    },
    {
      tag: "Data · Python",
      title: "Matching de mots-clés",
      description:
        "2 matchers interchangeables (Pandas / Polars) derrière un pattern Strategy. Architecture en couches, CLI Typer, mypy strict, double config SQLite / PostgreSQL.",
      techs: ["Python", "Polars", "PostgreSQL"],
      link: "https://github.com/Jimmmyy",
      image: "/images/projects/keyword_matching_system.jpg",
    },
    {
      tag: "Mobile · Escalade",
      title: "Crux — suivi d'escalade",
      description:
        "App mobile de suivi de progression et de séances d'entraînement. Expo Router, store Zustand, notifications push — la même exigence de qualité qu'au boulot.",
      techs: ["React Native", "TypeScript", "Supabase"],
      link: "https://github.com/Jimmmyy",
      image: "/images/projects/crux_icon.png",
    },
  ],
  en: [
    {
      tag: "Infra · Data",
      title: "GCP infrastructure + Spark cluster",
      description:
        "6 reusable Terraform modules and a 1-master / 2-worker Spark cluster on private VMs, configured with Ansible. Bastion as the only SSH entry point.",
      techs: ["Terraform", "Ansible", "GCP", "Spark"],
      link: "https://github.com/Jimmmyy",
      image: "/images/projects/gcp-terraform.png",
    },
    {
      tag: "Data · Python",
      title: "Keyword matching",
      description:
        "2 interchangeable matchers (Pandas / Polars) behind a Strategy pattern. Layered architecture, Typer CLI, strict mypy, dual SQLite / PostgreSQL setup.",
      techs: ["Python", "Polars", "PostgreSQL"],
      link: "https://github.com/Jimmmyy",
      image: "/images/projects/keyword_matching_system.jpg",
    },
    {
      tag: "Mobile · Climbing",
      title: "Crux — climbing tracker",
      description:
        "Mobile app tracking climbing progress and training sessions. Expo Router, Zustand store, push notifications — the same quality bar as at work.",
      techs: ["React Native", "TypeScript", "Supabase"],
      link: "https://github.com/Jimmmyy",
      image: "/images/projects/crux_icon.png",
    },
  ],
};
