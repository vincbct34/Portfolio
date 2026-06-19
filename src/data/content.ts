import type { Lang } from "../i18n/lang";

export interface StatItem {
  value: string;
  label: string;
}

export interface NumberedItem {
  num: string;
  title: string;
  body: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface SiteContent {
  nav: {
    work: string;
    services: string;
    process: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    /** Three display lines; the middle one is rendered in the accent color. */
    lines: [string, string, string];
    lead: string;
    ctaWork: string;
    ctaContact: string;
    scroll: string;
    stats: StatItem[];
  };
  work: {
    eyebrow: string;
    title: string;
    /** Badge shown on highlighted projects. */
    featured: string;
    /** Subheading above the non-featured projects. */
    more: string;
  };
  services: {
    eyebrow: string;
    title: string;
    items: NumberedItem[];
    link: string;
  };
  process: {
    eyebrow: string;
    title: string;
    items: NumberedItem[];
  };
  studio: {
    eyebrow: string;
    lead: string;
    cta: string;
    /** Strapline shown inside the live 404Factory hero preview. */
    strap: string;
  };
  testimonials: {
    eyebrow: string;
  };
  cta: {
    title: string;
    button: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    links: ContactLink[];
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      send: string;
    };
  };
  footer: {
    copyright: string;
    location: string;
  };
}

const en: SiteContent = {
  nav: {
    work: "Work",
    services: "Services",
    process: "Process",
    contact: "Contact",
    cta: "Start a project",
  },
  hero: {
    eyebrow: "FULL-STACK DEVELOPER & STUDIO OWNER — AVAILABLE FOR 2026",
    lines: ["Modern.", "Memorable.", "Built to last."],
    lead: "I'm Vincent Bichat — a full-stack developer running a one-person studio, 404Factory. I build web apps and sites that businesses are proud to send people to.",
    ctaWork: "View work",
    ctaContact: "Get in touch",
    scroll: "SCROLL",
    stats: [
      { value: "6", label: "Projects shipped" },
      { value: "3+", label: "Years coding" },
      { value: "100%", label: "Hand-built" },
    ],
  },
  work: {
    eyebrow: "SELECTED WORK",
    title: "Projects that moved the needle",
    featured: "Featured",
    more: "More work",
  },
  services: {
    eyebrow: "WHAT I DO",
    title: "Three things I do exceptionally well",
    items: [
      {
        num: "01",
        title: "Web Applications",
        body: "Full-stack apps in React, Next.js and Node — from registration platforms to internal tools, built to scale and easy to maintain.",
      },
      {
        num: "02",
        title: "Websites & Portals",
        body: "Fast, accessible marketing sites and institutional portals. Clean design, solid SEO, and a CMS your team can actually use.",
      },
      {
        num: "03",
        title: "Tooling & Automation",
        body: "Internal tools, integrations and automation that replace spreadsheets and manual workflows with software that just works.",
      },
    ],
    link: "Discuss your project",
  },
  process: {
    eyebrow: "HOW I WORK",
    title: "A process that respects your time",
    items: [
      {
        num: "01",
        title: "Discovery",
        body: "Deep-dive into your business, users, and constraints. Comes out the other end with a clear brief.",
      },
      {
        num: "02",
        title: "Design",
        body: "Iterative design and prototyping. One direction explored fully, not three mediocre options.",
      },
      {
        num: "03",
        title: "Build",
        body: "Production-grade code. Performant, accessible, and easy for your team to maintain after handoff.",
      },
      {
        num: "04",
        title: "Launch",
        body: "Deployment, analytics setup, and a support window so the go-live is smooth.",
      },
    ],
  },
  studio: {
    eyebrow: "THE STUDIO",
    lead: "Behind the work is a one-person studio.",
    cta: "Visit the studio",
    strap:
      "We build what's missing — websites, software and tooling for teams that refuse the default.",
  },
  testimonials: {
    eyebrow: "CLIENT WORDS",
  },
  cta: {
    title: "Your next website should be your best one yet.",
    button: "Let's talk",
  },
  contact: {
    eyebrow: "GET IN TOUCH",
    title: "Tell me about your project",
    lead: "I take on a handful of projects at a time and give each one my full focus. If you have a project in mind, reach out and we'll set up a call.",
    links: [
      {
        label: "EMAIL",
        value: "vincent260705@gmail.com",
        href: "mailto:vincent260705@gmail.com",
      },
      {
        label: "GITHUB",
        value: "/vincbct34",
        href: "https://github.com/vincbct34/",
      },
      {
        label: "LINKEDIN",
        value: "/in/vincent-bichat",
        href: "https://www.linkedin.com/in/vincent-bichat/",
      },
      {
        label: "MALT",
        value: "/vincentbichat",
        href: "https://www.malt.fr/profile/vincentbichat",
      },
    ],
    form: {
      name: "YOUR NAME",
      namePlaceholder: "Jane Doe",
      email: "EMAIL",
      emailPlaceholder: "jane@company.com",
      message: "TELL ME ABOUT YOUR PROJECT",
      messagePlaceholder: "We're looking to build…",
      send: "Send message",
    },
  },
  footer: {
    copyright: "© 2026 Vincent Bichat. All rights reserved.",
    location: "Based in Montpellier — working worldwide.",
  },
};

const fr: SiteContent = {
  nav: {
    work: "Projets",
    services: "Services",
    process: "Process",
    contact: "Contact",
    cta: "Démarrer un projet",
  },
  hero: {
    eyebrow:
      "DÉVELOPPEUR FULL-STACK & FONDATEUR DE STUDIO — DISPONIBLE EN 2026",
    lines: ["Moderne.", "Mémorable.", "Conçu pour durer."],
    lead: "Je suis Vincent Bichat — développeur full-stack à la tête d'un studio d'une personne, 404Factory. Je construis des applications et des sites que les entreprises sont fières de montrer.",
    ctaWork: "Voir les projets",
    ctaContact: "Me contacter",
    scroll: "SCROLL",
    stats: [
      { value: "6", label: "Projets livrés" },
      { value: "3+", label: "Ans de code" },
      { value: "100%", label: "Fait main" },
    ],
  },
  work: {
    eyebrow: "PROJETS CHOISIS",
    title: "Des projets qui font la différence",
    featured: "À la une",
    more: "Autres projets",
  },
  services: {
    eyebrow: "CE QUE JE FAIS",
    title: "Trois choses que je fais exceptionnellement bien",
    items: [
      {
        num: "01",
        title: "Applications web",
        body: "Des applis full-stack en React, Next.js et Node — des plateformes d'inscription aux outils internes, pensées pour durer et faciles à maintenir.",
      },
      {
        num: "02",
        title: "Sites & portails",
        body: "Sites vitrines et portails institutionnels rapides et accessibles. Design soigné, SEO solide, et un CMS utilisable par votre équipe.",
      },
      {
        num: "03",
        title: "Outils & automatisation",
        body: "Outils internes, intégrations et automatisations qui remplacent les tableurs et les tâches manuelles par des logiciels qui fonctionnent.",
      },
    ],
    link: "Parlons de votre projet",
  },
  process: {
    eyebrow: "MA MÉTHODE",
    title: "Une méthode qui respecte votre temps",
    items: [
      {
        num: "01",
        title: "Cadrage",
        body: "Immersion dans votre activité, vos utilisateurs et vos contraintes. On en ressort avec un brief clair.",
      },
      {
        num: "02",
        title: "Design",
        body: "Design et prototypage itératifs. Une direction explorée à fond, pas trois options médiocres.",
      },
      {
        num: "03",
        title: "Développement",
        body: "Du code prêt pour la production. Performant, accessible et facile à maintenir après livraison.",
      },
      {
        num: "04",
        title: "Mise en ligne",
        body: "Déploiement, mise en place de l'analytics, et une période de support pour un lancement serein.",
      },
    ],
  },
  studio: {
    eyebrow: "LE STUDIO",
    lead: "Derrière les projets, un studio d'une personne.",
    cta: "Voir le studio",
    strap:
      "On construit ce qui manque — sites, logiciels et outils pour les équipes qui refusent le défaut.",
  },
  testimonials: {
    eyebrow: "AVIS CLIENTS",
  },
  cta: {
    title: "Votre prochain site devrait être le meilleur.",
    button: "Discutons",
  },
  contact: {
    eyebrow: "CONTACT",
    title: "Parlez-moi de votre projet",
    lead: "Je prends quelques projets à la fois et donne à chacun toute mon attention. Si vous avez un projet en tête, écrivez-moi et on cale un appel.",
    links: [
      {
        label: "EMAIL",
        value: "vincent260705@gmail.com",
        href: "mailto:vincent260705@gmail.com",
      },
      {
        label: "GITHUB",
        value: "/vincbct34",
        href: "https://github.com/vincbct34/",
      },
      {
        label: "LINKEDIN",
        value: "/in/vincent-bichat",
        href: "https://www.linkedin.com/in/vincent-bichat/",
      },
      {
        label: "MALT",
        value: "/vincentbichat",
        href: "https://www.malt.fr/profile/vincentbichat",
      },
    ],
    form: {
      name: "VOTRE NOM",
      namePlaceholder: "Jean Dupont",
      email: "EMAIL",
      emailPlaceholder: "jean@entreprise.com",
      message: "PARLEZ-MOI DE VOTRE PROJET",
      messagePlaceholder: "Nous souhaitons créer…",
      send: "Envoyer le message",
    },
  },
  footer: {
    copyright: "© 2026 Vincent Bichat. Tous droits réservés.",
    location: "Basé à Montpellier — disponible partout.",
  },
};

export const CONTENT: Record<Lang, SiteContent> = { en, fr };

/** Marquee tech tags — Vincent's stack (shared across languages). */
export const MARQUEE_TAGS = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "NODE.JS",
  "POSTGRESQL",
  "PRISMA",
  "TAILWIND",
  "SYMFONY",
  "PHP",
  "WORDPRESS",
  "VITE",
  "WEB PERFORMANCE",
  "ACCESSIBILITY",
];
