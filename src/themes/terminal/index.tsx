import type { Theme } from "../types";
import {
  COMMON_PROJECT_DESCRIPTIONS,
  COMMON_PROJECT_DESCRIPTIONS_FR,
} from "../../data/projects";
import css from "./styles.css?inline";

const terminal: Theme = {
  id: "terminal",
  name: "Terminal Craft",
  swatch: "linear-gradient(135deg,#0B0F0C 60%,#4AF626 60%)",
  css,
  fonts:
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap",
  copy: {
    en: {
      logo: "vincent@bichat:~",
      navWork: "work",
      navAbout: "about",
      navContact: "contact",
      kicker: "> availability check ........ [OPEN TO WORK]",
      headline: "$ whoami",
      tagline:
        "Developer who treats the terminal as a workshop. Precise, fast web software — no dependencies I can't explain, no pixels I can't justify.",
      cta1: "ls ./projects",
      cta2: "mail -s hello",
      workTitle: "ls -la ./projects",
      aboutTitle: "cat about.toml",
      contactTitle: "mail -s 'lets build'",
      statement: `philosophy = "simple > clever" — show me your Makefile and I'll tell you how your team ships.`,
      aboutBody: (
        <>
          <p>
            name = "Vincent Bichat" · role = "full-stack developer" · status =
            "freelance @ 404Factory" · school = "Epitech" · loc = "Occitanie,
            FR"
          </p>
          <p>
            stack = ["react", "next", "typescript", "node", "postgres", "redis"]
          </p>
          <p>
            builds = [ "registration platform — Opéra national de Montpellier",
            "federated web portal — Université de Montpellier", "cross-platform
            automation tooling — industry" ]
          </p>
        </>
      ),
      footerLine: "© 2026 vincent bichat — exit code 0",
      projectDescriptions: COMMON_PROJECT_DESCRIPTIONS,
    },
    fr: {
      logo: "vincent@bichat:~",
      navWork: "travaux",
      navAbout: "a-propos",
      navContact: "contact",
      kicker: "> vérification dispo ........ [OUVERT AUX MISSIONS]",
      headline: "$ whoami",
      tagline:
        "Développeur qui traite le terminal comme un atelier. Du logiciel web précis et rapide — aucune dépendance que je ne sache expliquer, aucun pixel que je ne puisse justifier.",
      cta1: "ls ./projets",
      cta2: "mail -s bonjour",
      workTitle: "ls -la ./projets",
      aboutTitle: "cat a-propos.toml",
      contactTitle: "mail -s 'on construit'",
      statement: `philosophie = "simple > malin" — montre-moi ton Makefile et je te dirai comment ton équipe livre.`,
      aboutBody: (
        <>
          <p>
            nom = "Vincent Bichat" · rôle = "développeur full-stack" · statut =
            "freelance @ 404Factory" · école = "Epitech" · loc = "Occitanie, FR"
          </p>
          <p>
            stack = ["react", "next", "typescript", "node", "postgres", "redis"]
          </p>
          <p>
            réalisations = [ "plateforme d'inscription — Opéra national de
            Montpellier", "portail web fédéré — Université de Montpellier",
            "outillage d'automatisation multiplateforme — industrie" ]
          </p>
        </>
      ),
      footerLine: "© 2026 vincent bichat — code de sortie 0",
      projectDescriptions: COMMON_PROJECT_DESCRIPTIONS_FR,
    },
  },
};

export default terminal;
