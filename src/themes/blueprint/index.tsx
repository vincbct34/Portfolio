import type { Theme } from "../types";
import {
  COMMON_PROJECT_DESCRIPTIONS,
  COMMON_PROJECT_DESCRIPTIONS_FR,
} from "../../data/projects";
import css from "./styles.css?inline";

const blueprint: Theme = {
  id: "blueprint",
  name: "Blueprint",
  swatch: "linear-gradient(135deg,#0E3A5C 60%,#FFD166 60%)",
  css,
  fonts:
    "https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Space+Mono:wght@400;700&display=swap",
  copy: {
    en: {
      logo: "DWG VB-2026-001 · REV 3.0",
      navWork: "§1 Work",
      navAbout: "§2 Notes",
      navContact: "§3 Contact",
      kicker:
        "MATERIAL: TypeScript, React, patience · TOLERANCE: ±0 layout shift · SCALE 1:1",
      headline: "Vincent Bichat, software engineered to drawing.",
      tagline:
        "What you see is what ships. All interfaces keyboard-accessible, all animations transform-only, all dependencies justified in writing.",
      cta1: "Assembly drawings",
      cta2: "Request quotation",
      workTitle: "§1 — Assembly Drawings",
      aboutTitle: "§2 — General Notes",
      contactTitle: "§3 — Request for Quotation",
      statement:
        '"Plans are worthless, but planning is everything — so I do both." — V.B., margin of every project',
      aboutBody: (
        <>
          <p>
            NOTE 1 — Subject: Vincent Bichat. Full-stack developer, freelance
            under 404Factory, student at Epitech. Builds in React, Next.js,
            TypeScript and Node.
          </p>
          <p>
            NOTE 2 — Selected works: registration platform, Opéra national de
            Montpellier; federated web portal, Université de Montpellier;
            cross-platform automation tooling, industry. All built to spec, then
            field-tested.
          </p>
        </>
      ),
      footerLine: "© 2026 V. BICHAT — DO NOT SCALE FROM THIS DRAWING",
      projectDescriptions: COMMON_PROJECT_DESCRIPTIONS,
    },
    fr: {
      logo: "DWG VB-2026-001 · REV 3.0",
      navWork: "§1 Travaux",
      navAbout: "§2 Notes",
      navContact: "§3 Contact",
      kicker:
        "MATÉRIAU : TypeScript, React, patience · TOLÉRANCE : ±0 décalage de mise en page · ÉCHELLE 1:1",
      headline: "Vincent Bichat, du logiciel exécuté conforme au plan.",
      tagline:
        "Ce que vous voyez est ce qui est livré. Toutes les interfaces accessibles au clavier, toutes les animations en transform uniquement, toutes les dépendances justifiées par écrit.",
      cta1: "Plans d'assemblage",
      cta2: "Demander un devis",
      workTitle: "§1 — Plans d'assemblage",
      aboutTitle: "§2 — Notes générales",
      contactTitle: "§3 — Demande de devis",
      statement:
        "« Les plans ne valent rien, mais la planification est tout — alors je fais les deux. » — V.B., en marge de chaque projet",
      aboutBody: (
        <>
          <p>
            NOTE 1 — Sujet : Vincent Bichat. Développeur full-stack, freelance
            sous 404Factory, étudiant à Epitech. Construit en React, Next.js,
            TypeScript et Node.
          </p>
          <p>
            NOTE 2 — Ouvrages sélectionnés : plateforme d'inscription, Opéra
            national de Montpellier ; portail web fédéré, Université de
            Montpellier ; outillage d'automatisation multiplateforme, industrie.
            Le tout construit selon les spécifications, puis éprouvé sur le
            terrain.
          </p>
        </>
      ),
      footerLine: "© 2026 V. BICHAT — NE PAS MESURER SUR CE PLAN",
      projectDescriptions: COMMON_PROJECT_DESCRIPTIONS_FR,
    },
  },
};

export default blueprint;
