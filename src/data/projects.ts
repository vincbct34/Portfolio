import type { Lang } from "../i18n/lang";

export interface Project {
  num: string;
  title: string;
  /** Localized category label shown above the title (e.g. "Web App"). */
  category: Record<Lang, string>;
  year: string;
  /** Class hook for themed media blocks (media-1, media-2, …). */
  mediaClass: string;
  /** Path to the project screenshot, served from /public. */
  image?: string;
  tags: string[];
  href: string;
  /** Highlighted at the top of the Work section as a large card. */
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    num: "01",
    title: "CVisual",
    category: { en: "Web App — SaaS", fr: "Application web — SaaS" },
    year: "2024",
    mediaClass: "media-1",
    image: "/projects/cvisual.webp",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "https://www.cvisual.fr/",
  },
  {
    num: "02",
    title: "Opéra Orchestre Montpellier",
    category: { en: "Cultural Platform", fr: "Plateforme culturelle" },
    year: "2024",
    mediaClass: "media-3",
    image: "/projects/opera-orchestre-montpellier.webp",
    tags: ["Next.js", "Prisma", "Tailwind"],
    href: "https://inscriptions.opera-orchestre-montpellier.fr/",
    featured: true,
  },
  {
    num: "03",
    title: "404 Factory",
    category: { en: "Studio — Freelance", fr: "Studio — Freelance" },
    year: "2023",
    mediaClass: "media-4",
    image: "/projects/404-factory.webp",
    tags: ["WordPress", "Web Dev", "Freelance"],
    href: "https://www.404-factory.com",
  },
  {
    num: "04",
    title: "UAR ICS",
    category: { en: "Institutional Site", fr: "Site institutionnel" },
    year: "2024",
    mediaClass: "media-5",
    image: "/projects/uar-ics.webp",
    tags: ["WordPress"],
    href: "https://uar-ics.umontpellier.fr/",
    featured: true,
  },
  {
    num: "05",
    title: "Portfolio",
    category: { en: "Personal Site", fr: "Site personnel" },
    year: "2025",
    mediaClass: "media-2",
    image: "/projects/portfolio.webp",
    tags: ["React", "TypeScript", "Vite"],
    href: "https://www.vincent-bichat.fr",
  },
  {
    num: "06",
    title: "Décalé",
    category: { en: "Internal Tool — WIP", fr: "Outil interne — En cours" },
    year: "2025",
    mediaClass: "media-6",
    tags: ["Symfony", "PHP", "In progress"],
    href: "#",
  },
];

/** Default project descriptions (English), same order as PROJECTS. */
export const PROJECT_DESCRIPTIONS_EN = [
  "A resume & cover-letter builder — multi-language CVs, five templates, and pixel-accurate export to PDF, DOCX, or JSON.",
  "A registration platform for cultural events at the Opéra Orchestre national de Montpellier, replacing a Google Forms + Excel workflow.",
  "My freelance studio — websites, software, and tooling that help businesses grow online and work smarter.",
  "A showcase site for the UAR ICS, Université de Montpellier's research support unit — services, projects, and news.",
  "This site — a single-page portfolio built with React, TypeScript, and Vite.",
  "An upcoming Symfony app for declaring and tracking staggered working hours — in development.",
];

/** French counterpart of PROJECT_DESCRIPTIONS_EN, same order. */
export const PROJECT_DESCRIPTIONS_FR = [
  "Un générateur de CV et de lettres de motivation — CV multilingues, cinq modèles, export fidèle au pixel en PDF, DOCX ou JSON.",
  "Une plateforme d'inscription aux événements culturels de l'Opéra Orchestre national de Montpellier, en remplacement d'un duo Google Forms + Excel.",
  "Mon studio freelance — sites web, logiciels et outils qui aident les entreprises à grandir en ligne et à travailler plus intelligemment.",
  "Un site vitrine pour l'UAR ICS, l'unité d'appui à la recherche de l'Université de Montpellier — services, projets et actualités.",
  "Ce site — un portfolio une page construit avec React, TypeScript et Vite.",
  "Une application Symfony à venir pour déclarer et suivre les horaires décalés — en cours de développement.",
];

export function projectDescriptions(lang: Lang): string[] {
  return lang === "fr" ? PROJECT_DESCRIPTIONS_FR : PROJECT_DESCRIPTIONS_EN;
}
