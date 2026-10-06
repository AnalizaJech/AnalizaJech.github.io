import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, CheckCircle2, Linkedin } from "lucide-react";
import { SiGithub, SiInstagram, SiTiktok } from "react-icons/si";
import ProjectTypeSelect from "./ProjectTypeSelect";
import { copy, type Language } from "../i18n";
export default function Contact({ language }: { language: Language }) {
  const t = copy[language];
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form));
    delete data.redirect;
    const sender = String(data.name ?? "").trim();
    const project = String(data.project_type ?? "").trim();
    data.subject = `Nuevo proyecto · ${project || "Contacto"} · ${sender}`;
    data.from_name = `Analiza Jech · ${sender}`;
    data["Tipo de proyecto"] = project;
    delete data.project_type;
    setState("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Failed");
      form.reset();
      setState("success");
    } catch {
      setState("error");
    }
  }
  return (
    <section id="contact" className="contact-section section">
      <div className="container contact-grid">
        <div>
          <p className="kicker">{t.contactKicker}</p>
          <h2>
            {t.contactTitle1}
            <br />
            {t.contactTitle2}{" "}
            <em>
              {t.contactTitle3}
              <br />
              {t.contactTitle4}
            </em>
          </h2>
          <p className="contact-description">{t.contactDescription}</p>
          <a className="email-link" href="mailto:jc3568248@gmail.com">
            <Mail size={18} /> jc3568248@gmail.com <ArrowUpRight size={20} />
          </a>
          <div className="socials">
            <a
              href="https://github.com/AnalizaJech"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub aria-hidden="true" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/analizajech/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin aria-hidden="true" /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/analizajech/"
              target="_blank"
              rel="noreferrer"
            >
              <SiInstagram aria-hidden="true" /> Instagram
            </a>
            <a
              href="https://www.tiktok.com/@analizajech"
              target="_blank"
              rel="noreferrer"
            >
              <SiTiktok aria-hidden="true" /> TikTok
            </a>
          </div>
        </div>
        <form
          onSubmit={submit}
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="2901a3db-ea82-4ba8-9f66-994e07a899a7"
          />
          <input
            type="hidden"
            name="subject"
            value="Nuevo contacto · Analiza Jech"
          />
          <input
            type="hidden"
            name="from_name"
            value="Portafolio Analiza Jech"
          />
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />
          <input
            className="honeypot"
            name="botcheck"
            type="checkbox"
            tabIndex={-1}
            aria-hidden="true"
          />
          <div className="form-row">
            <label>
              {t.name}
              <input
                name="name"
                placeholder={t.namePlaceholder}
                autoComplete="name"
                required
                maxLength={100}
              />
            </label>
            <label>
              {t.email}
              <input
                name="email"
                type="email"
                placeholder="hola@ejemplo.com"
                autoComplete="email"
                required
                maxLength={254}
              />
            </label>
          </div>
          <ProjectTypeSelect language={language} />
          <label>
            {t.idea}
            <textarea
              name="message"
              placeholder={t.ideaPlaceholder}
              rows={4}
              required
              minLength={10}
              maxLength={5000}
            />
          </label>
          <p className="form-note">{t.formNote}</p>
          <button
            className="button button-blue"
            type="submit"
            disabled={state === "sending"}
          >
            {state === "sending" ? t.sending : t.send}
            <ArrowUpRight size={20} />
          </button>
          <div
            className={`form-status ${state}`}
            role="status"
            aria-live="polite"
          >
            {state === "success" ? (
              <>
                <CheckCircle2 size={18} /> {t.sent}
              </>
            ) : state === "error" ? (
              t.sendError
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
