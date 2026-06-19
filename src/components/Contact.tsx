import { useState, type FormEvent } from "react";
import { useLang } from "../i18n/useLang";
import { ArrowUpRight } from "./icons";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const { t } = useLang();
  const { contact } = t;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
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
          <button
            className="btn btn--primary btn--block"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? contact.form.sending : contact.form.send}
            <ArrowUpRight className="btn__icon" />
          </button>
          {status === "sent" && (
            <p className="contact__status" role="status">
              {contact.form.success}
            </p>
          )}
          {status === "error" && (
            <p className="contact__status contact__status--error" role="alert">
              {contact.form.error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
