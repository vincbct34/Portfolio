import { useTheme } from "../theme/useTheme";

export function Hero() {
  const { copy } = useTheme();

  return (
    <section className="hero">
      <span className="kicker">{copy.kicker}</span>
      <h1 className="headline">{copy.headline}</h1>
      <p className="tagline">{copy.tagline}</p>
      <div className="actions">
        <a className="btn-primary" href="#work">
          {copy.cta1}
        </a>
        <a className="btn-secondary" href="#contact">
          {copy.cta2}
        </a>
      </div>
    </section>
  );
}
