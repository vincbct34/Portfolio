import { useEffect, useState } from "react";
import { useTheme } from "../theme/useTheme";
import { LangToggle } from "./LangToggle";

const SECTION_IDS = ["work", "about", "contact"];

export function Header() {
  const { copy } = useTheme();
  const [activeId, setActiveId] = useState<string | null>(null);

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

  return (
    <header className="site-header">
      <span className="logo">{copy.logo}</span>
      <nav>
        <ul className="menu">
          <li>
            <a href="#work" aria-current={activeId === "work"}>
              {copy.navWork}
            </a>
          </li>
          <li>
            <a href="#about" aria-current={activeId === "about"}>
              {copy.navAbout}
            </a>
          </li>
          <li>
            <a href="#contact" aria-current={activeId === "contact"}>
              {copy.navContact}
            </a>
          </li>
          <li>
            <LangToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
