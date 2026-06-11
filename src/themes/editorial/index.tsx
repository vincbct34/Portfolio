import type { Theme } from "../types";
import {
  COMMON_PROJECT_DESCRIPTIONS,
  COMMON_PROJECT_DESCRIPTIONS_FR,
} from "../../data/projects";
import css from "./styles.css?inline";

const editorial: Theme = {
  id: "editorial",
  name: "Editorial Minimal",
  swatch: "linear-gradient(135deg,#FAF7F2 60%,#C13B2A 60%)",
  css,
  fonts:
    "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Inter:wght@400;500;600;700&display=swap",
  copy: {
    en: {
      logo: "Vincent Bichat",
      navWork: "Work",
      navAbout: "About",
      navContact: "Contact",
      kicker: "Portfolio — Edition 2026",
      headline: (
        <>
          A developer with an <em>editor's</em> eye for detail.
        </>
      ),
      tagline:
        "Engineering rigor meets typographic care. Currently crafting things at 404 Factory.",
      cta1: "Selected work",
      cta2: "Get in touch",
      workTitle: "Selected work",
      aboutTitle: "(About)",
      contactTitle: "Let's make something worth reading",
      statement:
        "The best interfaces read like good prose — clear, rhythmic, and quietly confident.",
      aboutBody: (
        <>
          <p>
            I'm Vincent Bichat — a full-stack developer who treats an interface
            like a manuscript: drafted, edited, and edited again until nothing
            extra remains. I write mostly in React, Next.js, TypeScript and
            Node.
          </p>
          <p>
            I study at Epitech and run a small studio, 404Factory. Recent
            chapters include a registration platform for the Opéra national de
            Montpellier and a unified portal for the Université de Montpellier,
            along with quiet automation work for industry.
          </p>
        </>
      ),
      footerLine: "© 2026 Vincent Bichat",
      projectDescriptions: COMMON_PROJECT_DESCRIPTIONS,
    },
    fr: {
      logo: "Vincent Bichat",
      navWork: "Travaux",
      navAbout: "À propos",
      navContact: "Contact",
      kicker: "Portfolio — Édition 2026",
      headline: (
        <>
          Un développeur avec un œil d'<em>éditeur</em> pour le détail.
        </>
      ),
      tagline:
        "La rigueur de l'ingénierie rencontre le soin typographique. Actuellement à l'œuvre chez 404 Factory.",
      cta1: "Travaux choisis",
      cta2: "Me contacter",
      workTitle: "Travaux choisis",
      aboutTitle: "(À propos)",
      contactTitle: "Écrivons quelque chose qui vaille la lecture",
      statement:
        "Les meilleures interfaces se lisent comme une bonne prose — claires, rythmées, sereinement sûres d'elles.",
      aboutBody: (
        <>
          <p>
            Je suis Vincent Bichat — un développeur full-stack qui traite une
            interface comme un manuscrit : rédigée, relue, et relue encore
            jusqu'à ce qu'il ne reste rien de superflu. J'écris surtout en
            React, Next.js, TypeScript et Node.
          </p>
          <p>
            J'étudie à Epitech et dirige un petit studio, 404Factory. Parmi les
            chapitres récents : une plateforme d'inscription pour l'Opéra
            national de Montpellier et un portail unifié pour l'Université de
            Montpellier, ainsi qu'un discret travail d'automatisation pour
            l'industrie.
          </p>
        </>
      ),
      footerLine: "© 2026 Vincent Bichat",
      projectDescriptions: COMMON_PROJECT_DESCRIPTIONS_FR,
    },
  },
};

export default editorial;
