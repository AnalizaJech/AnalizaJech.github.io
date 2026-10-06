import { useState, useEffect, useCallback } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Reveal from "./components/Reveal";
import useSectionNavigation from "./components/useSectionNavigation";
import {
  ArrowUpRight,
  ArrowDown,
  Download,
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
import { categoryLabel, copy, localizedProjects, type Language } from "./i18n";
import ProjectGallery from "./components/ProjectGallery";
import Contact from "./components/Contact";
import PortraitRotator from "./components/PortraitRotator";
import { SiYoutube } from "react-icons/si";
const videoIds = ["ZtC5TGLyKJs", "nyHikqNBsbQ", "iPPCYmTR9kE"];
const studioPortraits = Array.from(
  { length: 10 },
  (_, index) =>
    `/media/jorge-studio-${String(index + 1).padStart(2, "0")}.webp`,
);
export default function App() {
  const [language, setLanguage] = useState<Language>(() =>
    localStorage.getItem("analiza-jech-language") === "en" ? "en" : "es",
  );
  const t = copy[language];
  const projects = localizedProjects(language);
  const featured = projects.filter((project) => project.featured);
  const videos = videoIds.map((id, index) => ({ id, title: t.videos[index] }));
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState("all");
  const [galleryId, setGalleryId] = useState<string | null>(null);
  const [section, setSection] = useState("home");
  const closeMenu = useCallback(() => setMenu(false), []);
  useSectionNavigation(closeMenu, setSection);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 32 });
  const selected = featured[active];
  useEffect(() => {
    localStorage.setItem("analiza-jech-language", language);
    document.documentElement.lang = language;
    document.title = t.pageTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.metaDescription);
  }, [language, t]);
  const gallery = projects.find((project) => project.id === galleryId) ?? null;
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, []);
  useEffect(() => {
    if (!menu) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const content = document.querySelector("main");
    const footer = document.querySelector("footer");
    content?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    const header = document.querySelector<HTMLElement>(".site-header");
    const trap = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const nodes = [
        ...(header?.querySelectorAll<HTMLElement>("a, button") ?? []),
      ];
      const first = nodes[0],
        last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      }
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth > 800) setMenu(false);
    };
    document.addEventListener("keydown", trap);
    window.addEventListener("resize", resize);
    return () => {
      document.body.style.overflow = previous;
      content?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      document.removeEventListener("keydown", trap);
      window.removeEventListener("resize", resize);
    };
  }, [menu]);
  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <motion.div
        className="scroll-progress"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <header className={`site-header${menu ? " menu-is-open" : ""}`}>
        <a href="#home" className="brand" aria-label={t.homeLabel}>
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
          aria-label={t.navLabel}
        >
          {[
            ["#projects", t.nav[0]],
            ["#about", t.nav[1]],
            ["#content", t.nav[2]],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              aria-current={section === href.slice(1) ? "location" : undefined}
              onClick={() => setMenu(false)}
            >
              {label}
            </a>
          ))}
          <button
            className="language-switch"
            type="button"
            aria-label={t.languageLabel}
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
          >
            <span aria-hidden="true">{language === "es" ? "ES" : "EN"}</span>
            <span className="language-switch-divider" aria-hidden="true" />
            <span aria-hidden="true">{language === "es" ? "EN" : "ES"}</span>
          </button>
          <a
            className="nav-cta"
            href="#contact"
            aria-current={section === "contact" ? "location" : undefined}
            onClick={() => setMenu(false)}
          >
            {t.contactNav} <ArrowUpRight size={16} />
          </a>
        </nav>
        <button
          className="menu-button"
          aria-label={menu ? t.menuClose : t.menuOpen}
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
              <span className="signal" /> {t.heroKicker}
            </p>
            <h1>
              {t.hero1}
              <br />
              {t.hero2}
              <br />
              <span className="hero-last">
                {t.hero3} <em>{t.hero4}</em>
                <span className="hero-asterisk" aria-hidden="true">
                  ✳
                </span>
              </span>
            </h1>
            <p className="hero-description">{t.heroDescription}</p>
            <div className="hero-actions">
              <a className="button button-blue" href="#projects">
                {t.exploreWork} <ArrowUpRight size={19} />
              </a>
              <a
                className="button button-outline"
                href="/documents/jorge-caceres-cv-ats.pdf"
                download
              >
                {t.downloadCv} <Download size={18} />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-window">
              <PortraitRotator
                images={studioPortraits}
                label={t.portraitLabel}
                priority
              />
            </div>
          </div>
          <div className="hero-foot">
            <span>{t.heroFoot}</span>
            <a href="#projects">
              {t.scroll} <ArrowDown size={16} />
            </a>
          </div>
        </section>
        <div className="manifesto-band" aria-hidden="true">
          <span>{t.manifesto[0]}</span>
          <span>✳</span>
          <span>{t.manifesto[1]}</span>
          <span>✳</span>
          <span>{t.manifesto[2]}</span>
        </div>
        <section className="section work-section" id="projects">
          <div className="container">
            <Reveal>
              <div className="section-heading">
                <div>
                  <p className="kicker">{t.workKicker}</p>
                  <h2>
                    {t.workTitle1}
                    <br />
                    <span>{t.workTitle2}</span>
                  </h2>
                </div>
                <p>
                  {t.workDescription1}
                  <br />
                  {t.workDescription2}
                </p>
              </div>
            </Reveal>
            <div
              className="project-tabs"
              role="tablist"
              aria-label={t.featuredLabel}
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
                onClick={() => setGalleryId(selected.id)}
                aria-label={`${t.exploreImages} ${selected.title}`}
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
                  <Images size={16} /> {selected.images.length}{" "}
                  {selected.images.length === 1 ? t.view : t.views} ·{t.explore}{" "}
                  <ArrowUpRight size={16} />
                </div>
              </button>
              <div className="featured-copy">
                <p className="kicker">
                  {categoryLabel(selected.category, language).toUpperCase()} /{" "}
                  {t.featured}
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
                    {t.openDemo} <ArrowUpRight size={17} />
                  </a>
                  <a
                    className="button button-outline code-link"
                    href={selected.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={17} /> {t.viewCode}
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
                      aria-label={t.previousProject}
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
                      aria-label={t.nextProject}
                      onClick={() => setActive((active + 1) % featured.length)}
                    >
                      <ChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </article>
            <div className="catalogue-heading">
              <h3>{t.moreIdeas}</h3>
              <div className="filters" role="group" aria-label={t.filterLabel}>
                {["all", "Herramientas", "Interactivos", "Web"].map(
                  (value, index) => (
                    <button
                      className={filter === value ? "active" : ""}
                      key={value}
                      aria-pressed={filter === value}
                      onClick={() => setFilter(value)}
                    >
                      {t.filters[index]}
                    </button>
                  ),
                )}
              </div>
            </div>
            <div className="project-grid">
              {projects
                .filter(
                  (project) => filter === "all" || project.category === filter,
                )
                .map((project) => (
                  <article className="project-card" key={project.id}>
                    <button
                      className="card-preview"
                      style={{ backgroundColor: project.accent }}
                      onClick={() => setGalleryId(project.id)}
                      aria-label={`${t.preview} ${project.title}`}
                    >
                      <img
                        src={project.images[0].src}
                        alt={project.images[0].alt}
                        loading="lazy"
                      />
                      <span>
                        <Images size={15} /> {t.explore}
                      </span>
                    </button>
                    <div className="card-meta">
                      <span>{categoryLabel(project.category, language)}</span>
                      <span>
                        {project.images.length}{" "}
                        {project.images.length === 1 ? t.view : t.views}
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
                    <div className="card-actions">
                      <a
                        className="button button-blue card-demo"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t.openDemo} <ArrowUpRight size={16} />
                      </a>
                      {project.repo && (
                        <a
                          className="card-repo"
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${t.viewCode}: ${project.title} — GitHub`}
                        >
                          <Github size={16} /> {t.viewCode}
                        </a>
                      )}
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>
        <section className="about-section section" id="about">
          <div className="container">
            <Reveal>
              <div className="about-grid">
                <div className="about-art">
                  <PortraitRotator
                    images={studioPortraits}
                    label={t.aboutPortrait}
                    initialIndex={5}
                  />
                  <span className="about-art-label">
                    <Sparkles size={16} /> {t.creativeSide}
                  </span>
                  <span className="about-art-word" aria-hidden="true">
                    {t.curious1}
                    <br />
                    {t.curious2}
                  </span>
                </div>
                <div className="about-copy">
                  <p className="kicker">{t.aboutKicker}</p>
                  <h2>
                    {t.aboutTitle1}
                    <br />
                    <em>{t.aboutTitle2}</em>
                  </h2>
                  <p>{t.aboutP1}</p>
                  <p>
                    {t.aboutP2} <strong>{t.aboutBold}</strong>
                  </p>
                  <a
                    className="inline-link"
                    href="https://www.linkedin.com/in/analizajech/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.aboutLink} <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </Reveal>
            <div className="capabilities">
              {[
                {
                  icon: PenTool,
                  title: t.capabilities[0].title,
                  text: t.capabilities[0].text,
                },
                {
                  icon: Code2,
                  title: t.capabilities[1].title,
                  text: t.capabilities[1].text,
                },
                {
                  icon: Layers,
                  title: t.capabilities[2].title,
                  text: t.capabilities[2].text,
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
          <Reveal>
            <div className="section-heading">
              <div>
                <p className="kicker">{t.contentKicker}</p>
                <h2>
                  {t.contentTitle1}
                  <br />
                  <span>{t.contentTitle2}</span>
                </h2>
              </div>
              <a
                className="button button-outline channel-button"
                href="https://www.youtube.com/@analizajech"
                target="_blank"
                rel="noreferrer"
              >
                <SiYoutube aria-hidden="true" /> {t.channel}{" "}
                <ArrowUpRight size={18} />
              </a>
            </div>
          </Reveal>
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
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    onError={(event) => {
                      event.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                    }}
                    onLoad={(event) => {
                      const img = event.currentTarget;
                      if (
                        img.naturalWidth < 480 &&
                        img.src.includes("maxresdefault")
                      )
                        img.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                    }}
                    alt={`${t.videoAlt} ${video.title}`}
                    loading="lazy"
                  />
                  <span>
                    <Play size={20} fill="currentColor" />
                  </span>
                </div>
                <h3>
                  {video.title}
                  <ArrowUpRight size={18} />
                </h3>
              </a>
            ))}
          </div>
        </section>
        <Contact language={language} />
      </main>
      <footer className="container footer">
        <a href="#home" className="brand">
          <span className="brand-mark">
            aj<span>✳</span>
          </span>
          <span>ANALIZA JECH</span>
        </a>
        <p>
          © {new Date().getFullYear()} Jorge Cáceres · {t.footer}
        </p>
        <a href="#home">
          {t.backTop} <ArrowUp size={15} />
        </a>
      </footer>
      {gallery && (
        <ProjectGallery
          project={gallery}
          language={language}
          onClose={() => setGalleryId(null)}
        />
      )}
    </>
  );
}
