import type { Theme } from "../types";
import {
  COMMON_PROJECT_DESCRIPTIONS,
  COMMON_PROJECT_DESCRIPTIONS_FR,
} from "../../data/projects";
import css from "./styles.css?inline";

const pop: Theme = {
  id: "pop",
  name: "Playful Pop",
  swatch: "linear-gradient(135deg,#FFD43B 50%,#FF7AB6 50%)",
  css,
  fonts:
    "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=Inter:wght@400;500;600;700&display=swap",
  copy: {
    en: {
      logo: "VB!",
      navWork: "Work",
      navAbout: "About",
      navContact: "Say hi",
      kicker: "👋 Hi, I'm Vincent",
      headline: (
        <>
          I build <span className="hl-y">serious</span> software with an{" "}
          <span className="hl-p">unserious</span> smile.
        </>
      ),
      tagline:
        "Maker of delightful web things. I sweat the engineering so the fun stays fun — fast, accessible, and a little bit loud.",
      cta1: "See my stuff →",
      cta2: "Say hello",
      workTitle: "Things I've made",
      aboutTitle: "The deal",
      contactTitle: "Let's make something fun.",
      statement:
        "Good engineering doesn't have to look boring. Clean code, interfaces people actually remember.",
      aboutBody: (
        <>
          <p>
            Hey — I'm Vincent. Full-stack dev, founder of 404Factory, and a
            student at Epitech who'd rather ship something people remember than
            something that merely works. I build with React, Next.js, TypeScript
            and Node.
          </p>
          <p>
            Recent stuff: a registration platform for the Opéra national de
            Montpellier, a big federated portal for the Université de
            Montpellier, and automation tools that save real teams real hours.
          </p>
        </>
      ),
      footerLine: "© 2026 Vincent Bichat — made with too much coffee",
      projectDescriptions: COMMON_PROJECT_DESCRIPTIONS,
    },
    fr: {
      logo: "VB!",
      navWork: "Travaux",
      navAbout: "À propos",
      navContact: "Dis bonjour",
      kicker: "👋 Salut, moi c'est Vincent",
      headline: (
        <>
          Je construis du logiciel <span className="hl-y">sérieux</span> avec un
          sourire <span className="hl-p">pas sérieux</span>.
        </>
      ),
      tagline:
        "Fabricant de chouettes choses web. Je transpire sur l'ingénierie pour que le fun reste fun — rapide, accessible, et un brin bruyant.",
      cta1: "Voir mes trucs →",
      cta2: "Dire bonjour",
      workTitle: "Ce que j'ai fabriqué",
      aboutTitle: "Le topo",
      contactTitle: "Fabriquons un truc fun.",
      statement:
        "Une bonne ingénierie n'a pas à être ennuyeuse. Du code propre, des interfaces dont les gens se souviennent vraiment.",
      aboutBody: (
        <>
          <p>
            Hey — moi c'est Vincent. Dév full-stack, fondateur de 404Factory et
            étudiant à Epitech, qui préfère livrer quelque chose dont on se
            souvient plutôt qu'un truc qui marche, sans plus. Je construis avec
            React, Next.js, TypeScript et Node.
          </p>
          <p>
            Au menu récemment : une plateforme d'inscription pour l'Opéra
            national de Montpellier, un gros portail fédéré pour l'Université de
            Montpellier, et des outils d'automatisation qui font gagner de
            vraies heures à de vraies équipes.
          </p>
        </>
      ),
      footerLine: "© 2026 Vincent Bichat — fait avec trop de café",
      projectDescriptions: COMMON_PROJECT_DESCRIPTIONS_FR,
    },
  },
};

export default pop;
