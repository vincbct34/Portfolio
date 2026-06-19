import { useLang } from "../i18n/useLang";

export function Process() {
  const { t } = useLang();

  return (
    <section className="process section" id="process">
      <div className="wrap">
        <div className="section-head section-head--stacked">
          <p className="eyebrow">{t.process.eyebrow}</p>
          <h2 className="section-title">{t.process.title}</h2>
        </div>

        <div className="process__grid">
          {t.process.items.map((item) => (
            <div className="step" key={item.num}>
              <div className="step__top">
                <span className="step__num">{item.num}</span>
                <span className="step__dash" aria-hidden="true" />
              </div>
              <h3 className="step__title">{item.title}</h3>
              <p className="step__body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
