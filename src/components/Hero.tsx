import { useLang } from "../i18n/useLang";
import { ArrowUpRight } from "./icons";

/**
 * Hero side image (right 40% column, blended into the dark background).
 * Swap this for a photo of yourself — either a /public path (e.g. "/me.webp")
 * or any image URL. Set to "" to hide the column entirely.
 */
const HERO_IMAGE: string =
  "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=1200&auto=format&fit=crop";

export function Hero() {
  const { t } = useLang();
  const { hero } = t;

  return (
    <section className="hero" id="hero">
      {HERO_IMAGE && (
        <div className="hero__media" aria-hidden="true">
          <img src={HERO_IMAGE} alt="" loading="eager" decoding="async" />
        </div>
      )}
      <div className="wrap hero__inner">
        <p className="eyebrow hero__eyebrow">{hero.eyebrow}</p>

        <h1 className="hero__headline">
          <span>{hero.lines[0]}</span>
          <span className="accent">{hero.lines[1]}</span>
          <span>{hero.lines[2]}</span>
        </h1>

        <div className="hero__bottom">
          <p className="hero__lead">{hero.lead}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#work">
              {hero.ctaWork}
              <ArrowUpRight className="btn__icon" />
            </a>
            <a className="btn btn--outline" href="#contact">
              {hero.ctaContact}
            </a>
          </div>
        </div>

        <div className="hero__footer">
          <div className="hero__scroll">
            <span className="hero__scroll-line" />
            {hero.scroll}
          </div>
          <dl className="hero__stats">
            {hero.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <dt className="stat__value">{stat.value}</dt>
                <dd className="stat__label">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
