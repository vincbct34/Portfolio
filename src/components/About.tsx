import { useTheme } from "../theme/useTheme";

export function About() {
  const { copy } = useTheme();

  return (
    <section className="about" id="about">
      <h2 className="section-title">{copy.aboutTitle}</h2>
      <blockquote className="statement">{copy.statement}</blockquote>
      <div className="about-body">{copy.aboutBody}</div>
    </section>
  );
}
