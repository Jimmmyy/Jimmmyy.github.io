/**
 * Parcours professionnel — contenu FR / EN (V4).
 */

import type { Lang } from "@/translations";

export type Experience = {
  date: string;
  place: string;
  role: string;
  org: string;
  bullets: string[];
};

export const experiences: Record<Lang, Experience[]> = {
  fr: [
    {
      date: "Sep. 2025 – Mars 2026",
      place: "Créteil",
      role: "Data Engineer",
      org: "Fondation FondaMental — recherche en santé mentale, données cliniques sensibles (RGPD)",
      bullets: [
        "Health Dataflow : outil CLI Python (Pandas, Polars) qui valide et extrait les données cliniques selon des règles métier — 90 % de couverture de tests.",
        "Modèle de données Bronze / Silver / Gold en dbt.",
        "MOSAIC : POC Airflow de 3 DAGs avec un FLAN-T5 hébergé en local pour que les données de santé ne sortent jamais de l'infra.",
      ],
    },
    {
      date: "2023 – Fév. 2025",
      place: "Paris",
      role: "Lead Data Engineer",
      org: "Quantcube Technology — indicateurs économiques temps réel",
      bullets: [
        "Encadrement d'une squad de 6 data engineers et développeurs ; équipe passée de 5 à 20+ personnes.",
        "Module Terraform réutilisable devenu le standard de création des environnements.",
      ],
    },
    {
      date: "2021 – 2023",
      place: "Paris",
      role: "Data Engineer",
      org: "Quantcube Technology",
      bullets: [
        "Responsable des pipelines des indicateurs d'inflation et de consommation : séries temporelles quotidiennes en production.",
        "-40 % sur la facture EC2 mensuelle via des Lambda EventBridge qui éteignent les instances de dev hors horaires.",
        "Pipeline SQS : 2 000 images satellites Landsat-8 (500 Mo+) téléchargées en parallèle sur 3 EC2.",
        "Choix d'Airflow plutôt que Dagster pour le replay et la durabilité, auto-hébergé sur EC2.",
      ],
    },
    {
      date: "2019 – 2020",
      place: "Paris",
      role: "Data Scientist en alternance",
      org: "Groupe BPCE",
      bullets: [
        "POC de classification automatique d'e-mails par topic modelling (NLP, BERT), visualisé en graphe Neo4j.",
      ],
    },
  ],
  en: [
    {
      date: "Sep. 2025 – Mar. 2026",
      place: "Créteil",
      role: "Data Engineer",
      org: "Fondation FondaMental — mental-health research, sensitive clinical data (GDPR)",
      bullets: [
        "Health Dataflow: Python CLI tool (Pandas, Polars) validating and extracting clinical data against business rules — 90% test coverage.",
        "Bronze / Silver / Gold data model in dbt.",
        "MOSAIC: Airflow PoC of 3 DAGs with a locally hosted FLAN-T5 so health data never leaves the infrastructure.",
      ],
    },
    {
      date: "2023 – Feb. 2025",
      place: "Paris",
      role: "Lead Data Engineer",
      org: "Quantcube Technology — real-time economic indicators",
      bullets: [
        "Led a squad of 6 data engineers and developers; team grew from 5 to 20+ people.",
        "Reusable Terraform module that became the standard way to create environments.",
      ],
    },
    {
      date: "2021 – 2023",
      place: "Paris",
      role: "Data Engineer",
      org: "Quantcube Technology",
      bullets: [
        "Owner of the pipelines behind the inflation and consumption indicators: daily time series in production.",
        "Cut monthly EC2 spend by 40% with EventBridge-triggered Lambdas stopping dev instances outside working hours.",
        "SQS pipeline: 2,000 Landsat-8 satellite images (500MB+) downloaded in parallel across 3 EC2 consumers.",
        "Chose Airflow over Dagster for replay and durability, self-hosted on EC2.",
      ],
    },
    {
      date: "2019 – 2020",
      place: "Paris",
      role: "Data Scientist Apprentice",
      org: "Groupe BPCE",
      bullets: [
        "PoC classifying emails automatically with topic modelling (NLP, BERT), visualised as a Neo4j graph.",
      ],
    },
  ],
};
