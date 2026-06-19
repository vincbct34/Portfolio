import { useLang } from "../i18n/useLang";
import { VoidField } from "./VoidField";

/**
 * A faithful, self-contained recreation of the 404Factory site hero
 * ("The Void" identity) — rendered live inside the Studio window so the
 * reveal shows the actual studio brand, not a static screenshot.
 * All styles are scoped under `.studio__site` (see base.css) and sized with
 * container query units so the hero scales to the window.
 */
export function Factory404Hero() {
  const { t } = useLang();

  return (
    <div className="studio__site">
      <div className="f-hero">
        <VoidField className="f-canvas" />
        <div className="f-folio">ERROR 404 — STUDIO FOUND</div>
        <h1 className="f-h1">
          4<span className="f-o" aria-hidden="true" />
          4factory
        </h1>
        <div className="f-strap">
          <p>{t.studio.strap}</p>
          <div className="f-coords">
            43.61° N
            <br />
            3.87° E — MONTPELLIER
          </div>
        </div>
      </div>
    </div>
  );
}
