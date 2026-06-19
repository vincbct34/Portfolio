import { LangProvider } from "./i18n/LangProvider";
import { useLang } from "./i18n/useLang";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Work } from "./components/Work";
import { Services } from "./components/Services";
import { Studio } from "./components/Studio";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { Cta } from "./components/Cta";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function AppShell() {
  const { lang } = useLang();

  return (
    <>
      <a href="#main" className="skip-link">
        {lang === "fr" ? "Aller au contenu" : "Skip to content"}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <Studio />
        <Process />
        <Testimonials />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <AppShell />
    </LangProvider>
  );
}
