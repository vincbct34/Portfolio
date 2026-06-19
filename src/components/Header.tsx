import { useEffect, useState } from "react";
import { useLang } from "../i18n/useLang";
import { LangToggle } from "./LangToggle";

const SECTION_IDS = ["work", "services", "process", "contact"];

export function Header() {
  const { t } = useLang();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    let ticking = false;
    const update = () => {
      const offset = window.innerHeight * 0.4;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 1;
      let current: string | null = null;
      if (atBottom) {
        current = sections[sections.length - 1].id;
      } else {
        for (const section of sections) {
          if (section.getBoundingClientRect().top <= offset)
            current = section.id;
        }
      }
      setActiveId(current);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const links = [
    { id: "work", label: t.nav.work },
    { id: "services", label: t.nav.services },
    { id: "process", label: t.nav.process },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="logo" href="#hero" aria-label="Vincent Bichat — home">
          VB<span className="logo__dot">.</span>
        </a>

        <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Primary">
          <ul className="nav__menu">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={activeId === link.id}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__right">
          <LangToggle />
          <a className="btn btn--primary btn--sm header-cta" href="#contact">
            {t.nav.cta}
          </a>
          <button
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
