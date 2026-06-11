import type { Theme } from "../types";
import {
  COMMON_PROJECT_DESCRIPTIONS,
  COMMON_PROJECT_DESCRIPTIONS_FR,
} from "../../data/projects";
import css from "./styles.css?inline";

const atmos: Theme = {
  id: "atmos",
  name: "Dark Atmospheric",
  swatch: "linear-gradient(135deg,#050508,#6D5DFC)",
  css,
  fonts:
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap",
  copy: {
    en: {
      logo: "VB.",
      navWork: "Work",
      navAbout: "About",
      navContact: "Contact",
      kicker: "● Available for new projects",
      headline: (
        <>
          Building in the <span className="glow">dark</span>, shipping light.
        </>
      ),
      tagline:
        "Immersive web experiences and precise interfaces. Depth, motion, and atmosphere in every pixel.",
      cta1: "View work",
      cta2: "Get in touch",
      workTitle: "SELECTED WORK",
      aboutTitle: "ABOUT",
      contactTitle: "CONTACT",
      statement:
        "I work where engineering meets atmosphere — interfaces that feel alive, not just functional.",
      aboutBody: (
        <>
          <p>
            Full-stack developer working at the seam between engineering and
            feel. React, Next.js, TypeScript, Node — the stack is just the
            instrument.
          </p>
          <p>
            I study at Epitech and build under my own banner, 404Factory.
            Lately: a live registration platform for the Opéra national de
            Montpellier, a federated portal for the Université de Montpellier,
            and automation that quietly removes friction for the teams who use
            it.
          </p>
        </>
      ),
      footerLine: "© 2026 Vincent Bichat",
      projectDescriptions: COMMON_PROJECT_DESCRIPTIONS,
    },
    fr: {
      logo: "VB.",
      navWork: "Travaux",
      navAbout: "À propos",
      navContact: "Contact",
      kicker: "● Disponible pour de nouveaux projets",
      headline: (
        <>
          Construire dans le <span className="glow">noir</span>, livrer la
          lumière.
        </>
      ),
      tagline:
        "Expériences web immersives et interfaces précises. De la profondeur, du mouvement et de l'atmosphère dans chaque pixel.",
      cta1: "Voir les travaux",
      cta2: "Me contacter",
      workTitle: "TRAVAUX CHOISIS",
      aboutTitle: "À PROPOS",
      contactTitle: "CONTACT",
      statement:
        "Je travaille là où l'ingénierie rencontre l'atmosphère — des interfaces vivantes, pas seulement fonctionnelles.",
      aboutBody: (
        <>
          <p>
            Développeur full-stack à la couture entre l'ingénierie et la
            sensation. React, Next.js, TypeScript, Node — la stack n'est que
            l'instrument.
          </p>
          <p>
            J'étudie à Epitech et je construis sous ma propre bannière,
            404Factory. Dernièrement : une plateforme d'inscription en
            production pour l'Opéra national de Montpellier, un portail fédéré
            pour l'Université de Montpellier, et de l'automatisation qui
            supprime discrètement la friction pour les équipes qui l'utilisent.
          </p>
        </>
      ),
      footerLine: "© 2026 Vincent Bichat",
      projectDescriptions: COMMON_PROJECT_DESCRIPTIONS_FR,
    },
  },
};

export default atmos;
