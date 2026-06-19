import { useLang } from "../i18n/useLang";
import { ArrowUpRight } from "./icons";

export function Services() {
  const { t } = useLang();

  return (
    <section className="services section" id="services">
      <div className="wrap">
        <div className="section-head section-head--stacked">
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2 className="section-title">{t.services.title}</h2>
        </div>

        <div className="services__grid">
          {t.services.items.map((item) => (
            <div className="service" key={item.num}>
              <span className="service__num">{item.num}</span>
              <h3 className="service__title">{item.title}</h3>
              <p className="service__body">{item.body}</p>
              <a className="link-arrow link-arrow--sm" href="#contact">
                {t.services.link}
                <ArrowUpRight className="link-arrow__icon" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
