import { SITE } from "../data/site";
import { useTheme } from "../theme/useTheme";

export function Contact() {
  const { copy } = useTheme();

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">{copy.contactTitle}</h2>
      <a className="mail" href={`mailto:${SITE.email}`}>
        {SITE.email}
      </a>
    </section>
  );
}
