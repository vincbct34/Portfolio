import type { Theme } from "../types";
import {
  COMMON_PROJECT_DESCRIPTIONS,
  COMMON_PROJECT_DESCRIPTIONS_FR,
} from "../../data/projects";
import css from "./styles.css?inline";

const swiss: Theme = {
  id: "swiss",
  name: "Swiss Precision",
  swatch: "linear-gradient(135deg,#F4F4F2 50%,#E8420C 50%)",
  css,
  fonts:
    "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;800&family=JetBrains+Mono:wght@400;500&display=swap",
  copy: {
    en: {
      logo: "BICHAT VINCENT",
      navWork: "Work",
      navAbout: "About",
      navContact: "Contact",
      kicker: "DEV — SYSTEMS / INTERFACES — FR",
      headline: (
        <>
          Code
          <br />
          with
          <br />
          inten<span className="hl">t.</span>
        </>
      ),
      tagline:
        "I build software the way Swiss designers set type: on a grid, with purpose, nothing decorative that isn't doing work.",
      cta1: "View work",
      cta2: "Contact",
      workTitle: "01 / SELECTED WORK",
      aboutTitle: "02 / ABOUT",
      contactTitle: "03 / CONTACT",
      statement:
        "Every element earns its place. Constraint is the feature — fast, legible, honest software.",
      aboutBody: (
        <>
          <p>
            Full-stack developer based in southern France. I build web platforms
            and the tools around them with React, Next.js, TypeScript and Node —
            and I keep them simple on purpose.
          </p>
          <p>
            Currently studying at Epitech and running 404Factory, my own studio.
            Recent systems: a registration platform for the Opéra national de
            Montpellier, a federated portal for the Université de Montpellier,
            and automation tooling for industry.
          </p>
        </>
      ),
      footerLine: "© 2026 VINCENT BICHAT — ALL GRIDS RESERVED",
      projectDescriptions: COMMON_PROJECT_DESCRIPTIONS,
    },
    fr: {
      logo: "BICHAT VINCENT",
      navWork: "Travaux",
      navAbout: "À propos",
      navContact: "Contact",
      kicker: "DÉV — SYSTÈMES / INTERFACES — FR",
      headline: (
        <>
          Coder
          <br />
          avec
          <br />
          inten<span className="hl">tion.</span>
        </>
      ),
      tagline:
        "Je construis des logiciels comme les graphistes suisses composent leurs pages : sur une grille, avec intention, rien de décoratif qui ne travaille pas.",
      cta1: "Voir les travaux",
      cta2: "Contact",
      workTitle: "01 / TRAVAUX CHOISIS",
      aboutTitle: "02 / À PROPOS",
      contactTitle: "03 / CONTACT",
      statement:
        "Chaque élément mérite sa place. La contrainte est la fonctionnalité — un logiciel rapide, lisible, honnête.",
      aboutBody: (
        <>
          <p>
            Développeur full-stack basé dans le sud de la France. Je construis
            des plateformes web et leurs outils avec React, Next.js, TypeScript
            et Node — et je les garde simples, volontairement.
          </p>
          <p>
            Actuellement étudiant à Epitech et fondateur de 404Factory, mon
            propre studio. Systèmes récents : une plateforme d'inscription pour
            l'Opéra national de Montpellier, un portail fédéré pour l'Université
            de Montpellier, et de l'outillage d'automatisation pour l'industrie.
          </p>
        </>
      ),
      footerLine: "© 2026 VINCENT BICHAT — TOUTES GRILLES RÉSERVÉES",
      projectDescriptions: COMMON_PROJECT_DESCRIPTIONS_FR,
    },
  },
};

export default swiss;
