import { useState, type FormEvent } from "react";
import { useLang } from "../i18n/useLang";
import { ArrowUpRight } from "./icons";

export function Contact() {
  const { t } = useLang();
  const { contact } = t;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Single source of truth: the EMAIL entry in contact.links.
  const contactEmail =
    contact.links
      .find((l) => l.href.startsWith("mailto:"))
      ?.href.slice("mailto:".length) ?? "";

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project enquiry — ${name || "New message"}`,
    );
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact section" id="contact">
      <div className="wrap contact__inner">
        <div className="contact__intro">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 className="section-title">{contact.title}</h2>
          <p className="contact__lead">{contact.lead}</p>

          <ul className="contact__links">
            {contact.links.map((link) => (
              <li key={link.label}>
                <a
                  className="clink"
                  href={link.href}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="clink__label">{link.label}</span>
                  <span className="clink__lead" aria-hidden="true" />
                  <span className="clink__value">{link.value}</span>
                  <ArrowUpRight className="clink__icon" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="contact__form" onSubmit={onSubmit}>
          <label className="field">
            <span className="field__label">{contact.form.name}</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={contact.form.namePlaceholder}
              required
            />
          </label>
          <label className="field">
            <span className="field__label">{contact.form.email}</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={contact.form.emailPlaceholder}
              required
            />
          </label>
          <label className="field">
            <span className="field__label">{contact.form.message}</span>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={contact.form.messagePlaceholder}
              required
            />
          </label>
          <button className="btn btn--primary btn--block" type="submit">
            {contact.form.send}
            <ArrowUpRight className="btn__icon" />
          </button>
        </form>
      </div>
    </section>
  );
}
