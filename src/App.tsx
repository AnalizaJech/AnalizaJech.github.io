import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  Github,
  Menu,
  X,
  Code2,
  Layers,
  PenTool,
  Play,
  Images,
  Sparkles,
} from "lucide-react";
import { projects, type Project } from "./data/projects";
import ProjectGallery from "./components/ProjectGallery";
import Contact from "./components/Contact";
const featured = projects.filter((project) => project.featured);
const videos = [
  { id: "ZtC5TGLyKJs", title: "Programación y desarrollo web" },
  { id: "nyHikqNBsbQ", title: "Explora mis tutoriales" },
  { id: "iPPCYmTR9kE", title: "Creatividad y tecnología" },
];
export default function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState("Todos");
  const [gallery, setGallery] = useState<Project | null>(null);
  const [portrait, setPortrait] = useState(0);
  const selected = featured[active];
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Analiza Jech, inicio">
          <span className="brand-mark">
            aj<span>✳</span>
          </span>
          <span>
            ANALIZA
            <br />
            JECH
          </span>
        </a>
        <nav
          className={menu ? "open" : ""}
          id="navigation"
          aria-label="Principal"
        >
          {[
            ["#projects", "Proyectos"],
            ["#about", "Sobre mí"],
            ["#content", "Contenido"],
          ].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenu(false)}>
            Hablemos <ArrowUpRight size={16} />
          </a>
        </nav>
        <button
          className="menu-button"
          aria-label={menu ? "Cerrar menú" : "Abrir menú"}
          aria-controls="navigation"
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main id="main">
        <section className="hero container" id="home">
          <div className="hero-copy">
            <p className="kicker">
              <span className="signal" /> JORGE CÁCERES / FRONTEND & UX/UI
            </p>
            <h1>
              Diseño que
              <br />
              se siente.
              <br />
              <span className="hero-last">
                Código que <em>vive.</em>
                <span className="hero-asterisk" aria-hidden="true">
                  ✳
                </span>
              </span>
            </h1>
            <p className="hero-description">
              Conecto creatividad, diseño y tecnología para construir
              experiencias que dan ganas de usar.
              <br />
              <strong>Esto es Analiza Jech.</strong>
            </p>
            <div className="hero-actions">
              <a className="button button-blue" href="#projects">
                Explora mi trabajo <ArrowUpRight size={19} />
              </a>
              <a
                className="cv-link"
                href="/documents/jorge-caceres-cv-2025.pdf"
                download
              >
                Descargar CV <ArrowDown size={16} />
              </a>
            </div>
            <div className="hero-disciplines">
              <span>DESARROLLO FRONTEND</span>
              <span>DISEÑO UX/UI</span>
              <span>CREACIÓN DIGITAL</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-number">01 — IDENTIDAD CREATIVA</div>
            <div className="portrait-window">
              <img
                key={portrait}
                className={portrait === 1 ? "original-portrait" : ""}
                src={
                  portrait === 0
                    ? "/media/jorge-editorial.webp"
                    : "/media/jorge-original.png"
                }
                alt={
                  portrait === 0
                    ? "Retrato creativo de Jorge Cáceres, generado a partir de sus fotos"
                    : "Foto original de Jorge Cáceres"
                }
                fetchPriority="high"
              />
              <div className="portrait-overlay">
                <span>
                  Jorge Enrique
                  <br />
                  Cáceres Hernández
                </span>
                <ArrowUpRight size={30} />
              </div>
            </div>
            <div className="portrait-switch">
              <span>
                {portrait === 0 ? "RETRATO CREATIVO" : "FOTO ORIGINAL"}
              </span>
              <div>
                <button
                  className={portrait === 0 ? "active" : ""}
                  onClick={() => setPortrait(0)}
                  aria-label="Ver retrato creativo"
                  aria-pressed={portrait === 0}
                >
                  01
                </button>
                <button
                  className={portrait === 1 ? "active" : ""}
                  onClick={() => setPortrait(1)}
                  aria-label="Ver foto original"
                  aria-pressed={portrait === 1}
                >
                  02
                </button>
              </div>
            </div>
            <div className="portrait-stamp">
              <Code2 size={23} />
              <span>
                De la idea
                <br />a la interacción.
              </span>
            </div>
          </div>
          <div className="hero-foot">
            <span>LA CURIOSIDAD ES MI PUNTO DE PARTIDA.</span>
            <a href="#projects">
              SCROLL PARA EXPLORAR <ArrowDown size={16} />
            </a>
          </div>
        </section>
        <div className="manifesto-band" aria-hidden="true">
          <span>DISEÑO CON INTENCIÓN</span>
          <span>✳</span>
          <span>CÓDIGO CON CURIOSIDAD</span>
          <span>✳</span>
          <span>EXPERIENCIAS CON PERSONALIDAD</span>
        </div>
        <section className="section work-section" id="projects">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="kicker">01 / IDEAS EN FUNCIONAMIENTO</p>
                <h2>
                  El trabajo habla.
                  <br />
                  <span>Explóralo tú mismo.</span>
                </h2>
              </div>
              <p>
                Productos para escribir, diseñar y practicar.
                <br />
                Experiencias reales, listas para probar.
              </p>
            </div>
            <div
              className="project-tabs"
              role="tablist"
              aria-label="Proyectos destacados"
            >
              {featured.map((project, index) => (
                <button
                  key={project.id}
                  role="tab"
                  id={`tab-${project.id}`}
                  aria-controls="featured-panel"
                  aria-selected={active === index}
                  tabIndex={active === index ? 0 : -1}
                  className={active === index ? "active" : ""}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => {
                    if (
                      event.key === "ArrowRight" ||
                      event.key === "ArrowLeft"
                    ) {
                      event.preventDefault();
                      const next =
                        (index +
                          (event.key === "ArrowRight" ? 1 : -1) +
                          featured.length) %
                        featured.length;
                      setActive(next);
                      document
                        .querySelector<HTMLButtonElement>(
                          `#tab-${featured[next].id}`,
                        )
                        ?.focus();
                    }
                  }}
                >
                  <span>0{index + 1}</span>
                  {project.title}
                  <ArrowUpRight size={15} />
                </button>
              ))}
            </div>
            <article
              className="featured-project"
              id="featured-panel"
              role="tabpanel"
              aria-labelledby={`tab-${selected.id}`}
              key={selected.id}
            >
              <button
                className={`featured-image project-${selected.id}`}
                onClick={() => setGallery(selected)}
                aria-label={`Explorar imágenes de ${selected.title}`}
                style={{ backgroundColor: selected.accent }}
              >
                <div className="project-art-title">
                  <span>{selected.title}</span>
                  <span className="project-art-index">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(featured.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="app-window">
                  <div className="window-bar">
                    <span>● ● ●</span>
                    <span>{new URL(selected.url).pathname}</span>
                    <ArrowUpRight size={12} />
                  </div>
                  <img
                    src={selected.images[0].src}
                    alt={selected.images[0].alt}
                    loading="lazy"
                  />
                </div>
                <div className="preview-pill">
                  <Images size={16} /> {selected.images.length} vistas ·
                  Explorar <ArrowUpRight size={16} />
                </div>
              </button>
              <div className="featured-copy">
                <p className="kicker">
                  {selected.category.toUpperCase()} / PROYECTO DESTACADO
                </p>
                <h3>{selected.title}</h3>
                <p className="project-eyebrow">{selected.eyebrow}</p>
                <p className="description">{selected.description}</p>
                <div className="stack">
                  {selected.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={selected.url}
                    className="button button-blue"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir demo <ArrowUpRight size={17} />
                  </a>
                  <a
                    className="code-link"
                    href={selected.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={17} /> Ver código
                  </a>
                </div>
                <div className="project-pagination">
                  <span>
                    {String(active + 1).padStart(2, "0")}{" "}
                    <span>/ {String(featured.length).padStart(2, "0")}</span>
                  </span>
                  <div>
                    <button
                      className="icon-button"
                      aria-label="Proyecto anterior"
                      onClick={() =>
                        setActive(
                          (active + featured.length - 1) % featured.length,
                        )
                      }
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      className="icon-button"
                      aria-label="Proyecto siguiente"
                      onClick={() => setActive((active + 1) % featured.length)}
                    >
                      <ChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </article>
            <div className="catalogue-heading">
              <h3>Más ideas. Más posibilidades.</h3>
              <div
                className="filters"
                role="group"
                aria-label="Filtrar proyectos"
              >
                {["Todos", "Herramientas", "Interactivos", "Web"].map(
                  (value) => (
                    <button
                      className={filter === value ? "active" : ""}
                      key={value}
                      aria-pressed={filter === value}
                      onClick={() => setFilter(value)}
                    >
                      {value}
                    </button>
                  ),
                )}
              </div>
            </div>
            <div className="project-grid">
              {projects
                .filter(
                  (project) =>
                    filter === "Todos" || project.category === filter,
                )
                .map((project) => (
                  <article className="project-card" key={project.id}>
                    <button
                      className="card-preview"
                      style={{ backgroundColor: project.accent }}
                      onClick={() => setGallery(project)}
                      aria-label={`Vista previa de ${project.title}`}
                    >
                      <img
                        src={project.images[0].src}
                        alt={project.images[0].alt}
                        loading="lazy"
                      />
                      <span>
                        <Images size={15} /> Explorar
                      </span>
                    </button>
                    <div className="card-meta">
                      <span>{project.category}</span>
                      <span>
                        {project.images.length}{" "}
                        {project.images.length === 1 ? "vista" : "vistas"}
                      </span>
                    </div>
                    <a
                      className="card-title"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3>{project.title}</h3>
                      <ArrowUpRight size={20} />
                    </a>
                    <p>{project.description}</p>
                  </article>
                ))}
            </div>
          </div>
        </section>
        <section className="about-section section" id="about">
          <div className="container">
            <div className="about-grid">
              <div className="about-art">
                <img
                  src="/media/jorge-creative.webp"
                  alt="Retrato creativo de Jorge inspirado en sus fotos"
                  loading="lazy"
                />
                <span className="about-art-label">
                  <Sparkles size={16} /> EL LADO CREATIVO DE JECH
                </span>
                <span className="about-art-word" aria-hidden="true">
                  curioso
                  <br />
                  por naturaleza.
                </span>
              </div>
              <div className="about-copy">
                <p className="kicker">02 / DETRÁS DE CADA PIXEL</p>
                <h2>
                  No solo construyo.
                  <br />
                  <em>Exploro el porqué.</em>
                </h2>
                <p>
                  Soy Jorge Enrique Cáceres Hernández. Me interesa cómo una idea
                  se convierte en algo que una persona puede entender, disfrutar
                  y usar.
                </p>
                <p>
                  Mi trabajo cruza desarrollo frontend y diseño UX/UI. Mi
                  curiosidad también me lleva a la música, la edición de video y
                  la creación de contenido. Distintas formas de hacer lo mismo:{" "}
                  <strong>dar vida a una idea.</strong>
                </p>
                <a
                  className="inline-link"
                  href="https://www.linkedin.com/in/analizajech/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Conoce mi recorrido <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
            <div className="capabilities">
              {[
                {
                  icon: PenTool,
                  title: "Pensar en personas",
                  text: "Figma · Prototipado · Usabilidad · Diseño responsive",
                },
                {
                  icon: Code2,
                  title: "Construir experiencias",
                  text: "React · Angular · TypeScript · JavaScript · HTML & CSS",
                },
                {
                  icon: Layers,
                  title: "Conectar las piezas",
                  text: "Laravel · Node.js · NestJS · SQL · Git · GitHub",
                },
              ].map(({ icon: Icon, title, text }, index) => (
                <div key={title}>
                  <div className="capability-top">
                    <Icon size={24} />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="content" className="section content-section container">
          <div className="section-heading">
            <div>
              <p className="kicker">03 / APRENDER EN VOZ ALTA</p>
              <h2>
                Lo que descubro,
                <br />
                <span>lo comparto.</span>
              </h2>
            </div>
            <a
              className="button button-outline"
              href="https://www.youtube.com/@analizajech"
              target="_blank"
              rel="noreferrer"
            >
              Visita mi canal <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="video-grid">
            {videos.map((video) => (
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                key={video.id}
                target="_blank"
                rel="noreferrer"
              >
                <div className="video-cover">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={`Video de Analiza Jech: ${video.title}`}
                    loading="lazy"
                  />
                  <span>
                    <Play size={20} fill="currentColor" />
                  </span>
                </div>
                <p className="kicker">ANALIZA JECH / YOUTUBE</p>
                <h3>
                  {video.title}
                  <ArrowUpRight size={18} />
                </h3>
              </a>
            ))}
          </div>
        </section>
        <Contact />
      </main>
      <footer className="container footer">
        <a href="#home" className="brand">
          <span className="brand-mark">
            aj<span>✳</span>
          </span>
          <span>ANALIZA JECH</span>
        </a>
        <p>
          © {new Date().getFullYear()} Jorge Cáceres · Diseño con intención.
        </p>
        <a href="#home">
          Volver arriba <ArrowUp size={15} />
        </a>
      </footer>
      {gallery && (
        <ProjectGallery project={gallery} onClose={() => setGallery(null)} />
      )}
    </>
  );
}
