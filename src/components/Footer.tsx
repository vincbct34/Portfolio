import { Fragment } from "react";
import { SITE } from "../data/site";
import { useTheme } from "../theme/useTheme";

export function Footer() {
  const { copy } = useTheme();

  return (
    <footer className="site-footer">
      <span>{copy.footerLine}</span>
      <span className="socials">
        {SITE.socials.map((social, i) => (
          <Fragment key={social.label}>
            {i > 0 && " · "}
            <a href={social.href} target="_blank" rel="noopener noreferrer">
              {social.label}
            </a>
          </Fragment>
        ))}
      </span>
    </footer>
  );
}
