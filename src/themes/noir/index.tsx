import type { Theme } from "../types";
import {
  COMMON_PROJECT_DESCRIPTIONS,
  COMMON_PROJECT_DESCRIPTIONS_FR,
} from "../../data/projects";
import css from "./styles.css?inline";

const noir: Theme = {
  id: "noir",
  name: "Noir Luxury",
  swatch: "linear-gradient(135deg,#0D0C0B 60%,#C8A96A 60%)",
  css,
  fonts:
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Jost:wght@300;400;500&display=swap",
  copy: {
    en: {
      logo: "V·B",
      navWork: "Œuvres",
      navAbout: "Credo",
      navContact: "Contact",
      kicker: "Vincent Bichat — Développeur",
      headline: (
        <>
          Code, tailored like a <em>bespoke</em> suit.
        </>
      ),
      tagline:
        "Software developed with the patience of haute couture — every seam considered, every detail deliberate, nothing off the rack.",
      cta1: "View the collection",
      cta2: "Enquire",
      workTitle: "No. I — Selected Œuvres",
      aboutTitle: "No. II — Credo",
      contactTitle: "Commissions & Enquiries",
      statement:
        "Luxury in software is not ornament — it is the absence of friction, the presence of intention.",
      aboutBody: (
        <>
          <p>
            Vincent Bichat — a full-stack developer practising a quiet,
            deliberate craft. React, Next.js, TypeScript and Node, shaped until
            the seams disappear.
          </p>
          <p>
            A student at Epitech and the founder of the studio 404Factory. Among
            recent commissions: a registration platform for the Opéra national
            de Montpellier and a unified portal for the Université de
            Montpellier.
          </p>
        </>
      ),
      footerLine: "© MMXXVI Vincent Bichat",
      projectDescriptions: COMMON_PROJECT_DESCRIPTIONS,
    },
    fr: {
      logo: "V·B",
      navWork: "Œuvres",
      navAbout: "Credo",
      navContact: "Contact",
      kicker: "Vincent Bichat — Développeur",
      headline: (
        <>
          Du code taillé comme un costume <em>sur mesure</em>.
        </>
      ),
      tagline:
        "Du logiciel développé avec la patience de la haute couture — chaque couture pesée, chaque détail délibéré, rien de prêt-à-porter.",
      cta1: "Voir la collection",
      cta2: "Prendre contact",
      workTitle: "No. I — Œuvres choisies",
      aboutTitle: "No. II — Credo",
      contactTitle: "Commandes & Demandes",
      statement:
        "Le luxe, en logiciel, n'est pas l'ornement — c'est l'absence de friction, la présence d'intention.",
      aboutBody: (
        <>
          <p>
            Vincent Bichat — développeur full-stack pratiquant un artisanat
            calme et délibéré. React, Next.js, TypeScript et Node, façonnés
            jusqu'à ce que les coutures disparaissent.
          </p>
          <p>
            Étudiant à Epitech et fondateur du studio 404Factory. Parmi les
            commandes récentes : une plateforme d'inscription pour l'Opéra
            national de Montpellier et un portail unifié pour l'Université de
            Montpellier.
          </p>
        </>
      ),
      footerLine: "© MMXXVI Vincent Bichat",
      projectDescriptions: COMMON_PROJECT_DESCRIPTIONS_FR,
    },
  },
};

export default noir;
