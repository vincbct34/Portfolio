import { useLang } from "../i18n/useLang";
import { ArrowUpRight } from "./icons";
import { Factory404Hero } from "./Factory404Hero";

const STUDIO_URL = "https://www.404-factory.com";

export function Studio() {
  const { t } = useLang();

  return (
    <section className="studio section" id="studio">
      <div className="wrap">
        <p className="eyebrow">{t.studio.eyebrow}</p>

        <a
          className="studio__window"
          href={STUDIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="404Factory — visit the studio"
        >
          <Factory404Hero />

          <span className="studio__panel studio__panel--l" aria-hidden="true">
            <span className="studio__word">
              404<span className="accent">Factory</span>
            </span>
          </span>
          <span className="studio__panel studio__panel--r" aria-hidden="true">
            <span className="studio__word">
              404<span className="accent">Factory</span>
            </span>
          </span>

          <span className="studio__peek" aria-hidden="true">
            {t.studio.cta}
            <ArrowUpRight className="studio__peek-icon" />
          </span>
        </a>

        <div className="studio__caption">
          <span className="studio__lead">{t.studio.lead}</span>
          <a
            className="studio__cta"
            href={STUDIO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.studio.cta}
            <ArrowUpRight className="studio__cta-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
