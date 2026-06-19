import { useLang } from "../i18n/useLang";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <a className="logo" href="#hero" aria-label="Vincent Bichat — home">
          VB<span className="logo__dot">.</span>
        </a>
        <span className="site-footer__copy">{t.footer.copyright}</span>
        <span className="site-footer__location">{t.footer.location}</span>
      </div>
    </footer>
  );
}
