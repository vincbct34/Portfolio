export interface Project {
  num: string;
  title: string;
  /** Class hook for themed media blocks (media-1, media-2, …). */
  mediaClass: string;
  /** Path to the project screenshot, served from /public. */
  image?: string;
  tags: string[];
  href: string;
}

export const PROJECTS: Project[] = [
  {
    num: "01",
    title: "CVisual",
    mediaClass: "media-1",
    image: "/projects/cvisual.webp",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "https://www.cvisual.fr/",
  },
  {
    num: "02",
    title: "Portfolio",
    mediaClass: "media-2",
    image: "/projects/portfolio.webp",
    tags: ["React", "TypeScript", "Vite"],
    href: "https://www.vincent-bichat.fr",
  },
  {
    num: "03",
    title: "Opéra Orchestre Montpellier",
    mediaClass: "media-3",
    image: "/projects/opera-orchestre-montpellier.webp",
    tags: ["Next.js", "Prisma", "Tailwind"],
    href: "https://inscriptions.opera-orchestre-montpellier.fr/",
  },
  {
    num: "04",
    title: "404 Factory",
    mediaClass: "media-4",
    image: "/projects/404-factory.webp",
    tags: ["WordPress", "Web Dev", "Freelance"],
    href: "https://404-factory.com",
  },
  {
    num: "05",
    title: "UAR ICS",
    mediaClass: "media-5",
    image: "/projects/uar-ics.webp",
    tags: ["WordPress"],
    href: "https://uar-ics.umontpellier.fr/",
  },
  {
    num: "06",
    title: "Décalé",
    mediaClass: "media-6",
    tags: ["Symfony", "PHP", "In progress"],
    href: "#",
  },
];

/** Default project descriptions (English), shared by most themes. */
export const COMMON_PROJECT_DESCRIPTIONS = [
  "A resume & cover-letter builder — multi-language CVs, five templates, and pixel-accurate export to PDF, DOCX, or JSON.",
  "This site — one page, eight swappable themes, built with React, TypeScript, and Vite.",
  "A registration platform for cultural events at the Opéra Orchestre national de Montpellier, replacing a Google Forms + Excel workflow.",
  "My freelance studio — websites, software, and tooling that help businesses grow online and work smarter.",
  "A showcase site for the UAR ICS, Université de Montpellier's research support unit — services, projects, and news.",
  "An upcoming Symfony app for declaring and tracking staggered working hours — in development.",
];

/** French counterpart of COMMON_PROJECT_DESCRIPTIONS, same order. */
export const COMMON_PROJECT_DESCRIPTIONS_FR = [
  "Un générateur de CV et de lettres de motivation — CV multilingues, cinq modèles, export fidèle au pixel en PDF, DOCX ou JSON.",
  "Ce site — une page, huit thèmes interchangeables, construit avec React, TypeScript et Vite.",
  "Une plateforme d'inscription aux événements culturels de l'Opéra Orchestre national de Montpellier, en remplacement d'un duo Google Forms + Excel.",
  "Mon studio freelance — sites web, logiciels et outils qui aident les entreprises à grandir en ligne et à travailler plus intelligemment.",
  "Un site vitrine pour l'UAR ICS, l'unité d'appui à la recherche de l'Université de Montpellier — services, projets et actualités.",
  "Une application Symfony à venir pour déclarer et suivre les horaires décalés — en cours de développement.",
];
