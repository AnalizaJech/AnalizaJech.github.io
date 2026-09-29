import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, CheckCircle2 } from "lucide-react";
import ProjectTypeSelect from "./ProjectTypeSelect";
export default function Contact() {
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
          <p className="kicker">04 / CONSTRUYAMOS ALGO JUNTOS</p>
          <h2>
            Una buena idea
            <br />
            merece una{" "}
            <em>
              gran
              <br />
              experiencia.
            </em>
          </h2>
          <p className="contact-description">
            ¿Un proyecto, una colaboración o algo que todavía no tiene nombre?
            Me gustaría escucharlo.
          </p>
          <a className="email-link" href="mailto:jc3568248@gmail.com">
            <Mail size={18} /> jc3568248@gmail.com <ArrowUpRight size={20} />
          </a>
          <div className="socials">
            <a
              href="https://github.com/AnalizaJech"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/analizajech/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://www.instagram.com/analizajech/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.tiktok.com/@analizajech"
              target="_blank"
              rel="noreferrer"
            >
              TikTok ↗
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
              Tu nombre
              <input
                name="name"
                placeholder="¿Cómo te llamas?"
                autoComplete="name"
                required
                maxLength={100}
              />
            </label>
            <label>
              Tu email
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
          <ProjectTypeSelect />
          <label>
            Cuéntame tu idea
            <textarea
              name="message"
              placeholder="El punto de partida, el reto, lo que te gustaría crear…"
              rows={4}
              required
              minLength={10}
              maxLength={5000}
            />
          </label>
          <p className="form-note">
            Tu mensaje llega a mi correo mediante Web3Forms.
          </p>
          <button
            className="button button-blue"
            type="submit"
            disabled={state === "sending"}
          >
            {state === "sending" ? "Enviando…" : "Enviar mensaje"}
            <ArrowUpRight size={20} />
          </button>
          <div
            className={`form-status ${state}`}
            role="status"
            aria-live="polite"
          >
            {state === "success" ? (
              <>
                <CheckCircle2 size={18} /> ¡Gracias! Tu mensaje se envió
                correctamente.
              </>
            ) : state === "error" ? (
              "No se pudo enviar. Tu mensaje se conserva; inténtalo otra vez o escríbeme por correo."
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
