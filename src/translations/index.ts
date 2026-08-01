/**
 * Portfolio translations — FR / EN (Portfolio V4)
 * Usage: import { translations } from "@/translations";
 */

export type Lang = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      about: "À propos",
      skills: "Stack",
      work: "Projets",
      experience: "Parcours",
      terrain: "Terrain",
      contact: "Contact",
    },
    hero: {
      badge: "Data Engineer — disponible",
      subtitle:
        "Je construis des plateformes data de bout en bout sur AWS et GCP — pipelines robustes, infrastructure as code et choix techniques assumés.",
      cta: "Voir mes projets",
      contact: "Me contacter",
      years: "ans d'expérience",
      photoAlt: "Jimmy Nguyen — pont suspendu, Taïwan",
    },
    about: {
      kicker: "À propos",
      title: "Curieux, rigoureux, terrain",
      bio1: "6 ans d'expérience en data engineering, dont 2 comme Lead d'une squad de 6 personnes. J'aime comprendre le besoin métier en profondeur, poser une architecture simple, puis l'automatiser jusqu'au bout.",
      bio2: "Hors du bureau : escalade, montagne et voyages.",
      fName: "nom",
      fRole: "rôle",
      fLocation: "localisation",
      fStatus: "statut",
      fAvailable: "Disponible",
    },
    skills: {
      kicker: "Stack",
      title: "Technologies au quotidien",
      more: "+ dbt · Spark · PostgreSQL · Iceberg · Trino · Polars · Kubernetes · Vault · Grafana · Prometheus · Pytest · mypy",
    },
    work: {
      kicker: "Projets",
      title: "Projets choisis",
    },
    exp: {
      kicker: "Parcours",
      title: "Expérience",
    },
    terrain: {
      kicker: "Terrain",
      title: "Hors du bureau",
      intro: "Escalade, montagne et voyages.",
      cap1: "Escalade",
      cap2: "Montagne",
      cap3: "Voyage",
      soon: "Photo à venir",
    },
    contact: {
      kicker: "Contact",
      title: "Un projet data ? Parlons-en.",
      sub: "Je cherche un rôle hands-on où je peux porter la plateforme et les choix techniques. Basé à Paris, ouvert au remote.",
      name: "Votre nom",
      email: "Votre email",
      message: "Votre message",
      send: "Envoyer",
      mailSubject: "Contact depuis ton portfolio",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Stack",
      work: "Work",
      experience: "Experience",
      terrain: "Terrain",
      contact: "Contact",
    },
    hero: {
      badge: "Data Engineer — available",
      subtitle:
        "I build end-to-end data platforms on AWS and GCP — robust pipelines, infrastructure as code and clear technical choices.",
      cta: "View my work",
      contact: "Contact me",
      years: "years experience",
      photoAlt: "Jimmy Nguyen — suspension bridge, Taiwan",
    },
    about: {
      kicker: "About",
      title: "Curious, rigorous, hands-on",
      bio1: "6 years of data engineering experience, including 2 leading a squad of 6. I like to deeply understand the business need, design a simple architecture, then automate it all the way.",
      bio2: "Off the desk: climbing, mountains and travel.",
      fName: "name",
      fRole: "role",
      fLocation: "location",
      fStatus: "status",
      fAvailable: "Available",
    },
    skills: {
      kicker: "Stack",
      title: "Technologies I work with",
      more: "+ dbt · Spark · PostgreSQL · Iceberg · Trino · Polars · Kubernetes · Vault · Grafana · Prometheus · Pytest · mypy",
    },
    work: {
      kicker: "Work",
      title: "Selected projects",
    },
    exp: {
      kicker: "Career",
      title: "Experience",
    },
    terrain: {
      kicker: "Terrain",
      title: "Off the desk",
      intro: "Climbing, mountains and travel.",
      cap1: "Climbing",
      cap2: "Mountains",
      cap3: "Travel",
      soon: "Photo coming soon",
    },
    contact: {
      kicker: "Contact",
      title: "A data project? Let's talk.",
      sub: "I'm looking for a hands-on role where I can own the platform and the technical choices. Based in Paris, open to remote.",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      send: "Send",
      mailSubject: "Contact from your portfolio",
    },
  },
};
