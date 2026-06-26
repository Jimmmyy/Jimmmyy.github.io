/**
 * Portfolio translations — FR / EN
 * Usage: import { translations } from "@/translations";
 */

export type Lang = "en" | "fr";

export const translations = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      history: "History",
      about: "About",
      contact: "Contact me",
    },
    hero: {
      greeting: "Hello, I'm",
      subtitle:
        "Data Engineer with a passion for building scalable data platforms and enabling data-driven decisions.",
      cta: "See my work",
    },
    projects: {
      title: "Projects",
      all: "All",
      noProjects: "No projects found for this category.",
      view: "View",
      viewProject: "View Project",
      watchVideo: "Watch Video",
    },
    history: {
      title: "History",
      experience: "Experience",
      education: "Education",
      noDetails: "No additional details available.",
    },
    about: {
      title: "About me",
      bio: "I'm a data engineer with over 4 years of experience designing, building, and maintaining modern data platforms. I enjoy solving complex data problems, working with scalable cloud infrastructure, and enabling teams to make data-driven decisions through robust pipelines.",
      downloadCv: "Download my CV",
      techTitle: "Some technologies I work with:",
    },
    contact: {
      title: "Contact Me",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      send: "Send",
      fillAllFields: "Please fill in all fields.",
      invalidEmail: "Please enter a valid email address.",
      success: "Message sent! Thank you.",
    },
    footer: {
      rights: "Jimmy Nguyen",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      projects: "Projets",
      history: "Parcours",
      about: "À propos",
      contact: "Me contacter",
    },
    hero: {
      greeting: "Bonjour, je suis",
      subtitle:
        "Ingénieur Data passionné par la construction de plateformes de données scalables et l'aide à la prise de décision data-driven.",
      cta: "Voir mes projets",
    },
    projects: {
      title: "Projets",
      all: "Tous",
      noProjects: "Aucun projet trouvé pour cette catégorie.",
      view: "Voir",
      viewProject: "Voir le projet",
      watchVideo: "Voir la vidéo",
    },
    history: {
      title: "Parcours",
      experience: "Expérience",
      education: "Formation",
      noDetails: "Aucun détail disponible.",
    },
    about: {
      title: "À propos",
      bio: "Je suis ingénieur data avec plus de 4 ans d'expérience dans la conception, la construction et la maintenance de plateformes de données modernes. J'aime résoudre des problèmes de données complexes, travailler avec une infrastructure cloud scalable, et permettre aux équipes de prendre des décisions éclairées grâce à des pipelines robustes.",
      downloadCv: "Télécharger mon CV",
      techTitle: "Technologies que j'utilise :",
    },
    contact: {
      title: "Me contacter",
      name: "Votre nom",
      email: "Votre email",
      message: "Votre message",
      send: "Envoyer",
      fillAllFields: "Veuillez remplir tous les champs.",
      invalidEmail: "Veuillez entrer une adresse email valide.",
      success: "Message envoyé ! Merci.",
    },
    footer: {
      rights: "Jimmy Nguyen",
    },
  },
} as const;
