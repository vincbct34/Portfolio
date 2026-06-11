import type { Theme } from "../types";
import css from "./styles.css?inline";

const broadsheet: Theme = {
  id: "broadsheet",
  name: "The Broadsheet",
  swatch: "linear-gradient(135deg,#F7F4EC 60%,#A41E22 60%)",
  css,
  fonts:
    "https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Playfair+Display:ital,wght@0,500;0,700;0,900;1,500&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap",
  copy: {
    en: {
      logo: "The Bichat Bulletin",
      navWork: "Projects",
      navAbout: "Opinion",
      navContact: "Classifieds",
      kicker: "Vol. III — No. 26 · “All the code that’s fit to ship.”",
      headline:
        "Local Developer Redesigns Portfolio; Witnesses Describe Result as “Actually Quite Good”",
      tagline:
        "FRANCE — Sources close to the developer (his rubber duck) confirm expertise across web platforms, product engineering, and design systems. “He measures twice and ships once,” the duck stated.",
      cta1: "Read §2: Projects",
      cta2: "Place an ad",
      workTitle: "§2 — The Projects Pages",
      aboutTitle: "§3 — The Editorial Position",
      contactTitle: "§4 — Classifieds: Situations Wanted",
      statement:
        "“Software is journalism for machines: get the facts right, cut the fluff, respect the reader’s time. Everything else is decoration.”",
      aboutBody: (
        <>
          <p>
            VINCENT BICHAT, full-stack developer and founder of the studio
            404Factory, reports for duty from Occitanie. A student at Epitech,
            he files in React, Next.js, TypeScript and Node.
          </p>
          <p>
            Recent dispatches include a registration platform for the Opéra
            national de Montpellier, a federated portal for the Université de
            Montpellier, and a desktop automation tool for industry — each filed
            clean and on deadline.
          </p>
        </>
      ),
      footerLine:
        "© 2026 The Bichat Bulletin — printed on 100% recycled pixels",
      projectDescriptions: [
        "“Five templates, zero excuses,” says job-seeker after pixel-perfect PDF lands an interview by Tuesday.",
        "You are reading it. Eight personalities, one developer, no medication required.",
        "Replaces decade-old spreadsheet-and-email pipeline; Excel reportedly “relieved.”",
        "Small businesses commission websites; developer commissions himself. Conflict of interest pending review.",
        "A university research unit gets a homepage worthy of its acronym — finally legible to outsiders.",
        "COMING SOON: an app to track who works when, so managers stop guessing. Developing story.",
      ],
    },
    fr: {
      logo: "Le Bulletin Bichat",
      navWork: "Projets",
      navAbout: "Tribune",
      navContact: "Petites annonces",
      kicker: "Vol. III — No 26 · « Tout le code digne d’être livré. »",
      headline:
        "Un développeur local refait son portfolio ; des témoins décrivent le résultat comme « franchement réussi »",
      tagline:
        "FRANCE — Des sources proches du développeur (son canard en plastique) confirment une expertise en plateformes web, ingénierie produit et design systems. « Il mesure deux fois et livre une fois », a déclaré le canard.",
      cta1: "Lire §2 : Projets",
      cta2: "Passer une annonce",
      workTitle: "§2 — Les pages Projets",
      aboutTitle: "§3 — La ligne éditoriale",
      contactTitle: "§4 — Petites annonces : offres de service",
      statement:
        "« Le logiciel, c’est du journalisme pour machines : vérifier les faits, couper le superflu, respecter le temps du lecteur. Tout le reste est décoration. »",
      aboutBody: (
        <>
          <p>
            VINCENT BICHAT, développeur full-stack et fondateur du studio
            404Factory, au rapport depuis l’Occitanie. Étudiant à Epitech, il
            boucle ses articles en React, Next.js, TypeScript et Node.
          </p>
          <p>
            Parmi les dernières dépêches : une plateforme d’inscription pour
            l’Opéra national de Montpellier, un portail fédéré pour l’Université
            de Montpellier et un outil d’automatisation de bureau pour
            l’industrie — chaque sujet rendu propre et dans les délais.
          </p>
        </>
      ),
      footerLine:
        "© 2026 Le Bulletin Bichat — imprimé sur pixels 100 % recyclés",
      projectDescriptions: [
        "« Cinq modèles, zéro excuse », déclare un candidat après qu’un PDF au pixel près lui a décroché un entretien dès mardi.",
        "Vous êtes en train de le lire. Huit personnalités, un développeur, aucun traitement requis.",
        "Remplace dix ans de tableurs et d’e-mails ; Excel se dit « soulagé ».",
        "Les petites entreprises commandent des sites ; le développeur se commande lui-même. Conflit d’intérêts à l’étude.",
        "Une unité de recherche universitaire obtient une page d’accueil digne de son acronyme — enfin lisible pour les non-initiés.",
        "BIENTÔT : une appli pour savoir qui travaille quand, afin que les managers arrêtent de deviner. Affaire à suivre.",
      ],
    },
  },
};

export default broadsheet;
