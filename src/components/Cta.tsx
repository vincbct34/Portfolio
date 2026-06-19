import { useLang } from "../i18n/useLang";
import { ArrowUpRight } from "./icons";

export function Cta() {
  const { t } = useLang();

  return (
    <section className="cta">
      <div className="wrap cta__inner">
        <h2 className="cta__title">{t.cta.title}</h2>
        <a className="btn btn--dark" href="#contact">
          {t.cta.button}
          <ArrowUpRight className="btn__icon" />
        </a>
      </div>
    </section>
  );
}
