import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Github,
  Images,
} from "lucide-react";
import type { Project } from "../data/projects";
import { copy, type Language } from "../i18n";
export default function ProjectGallery({
  project,
  language,
  onClose,
}: {
  project: Project;
  language: Language;
  onClose: () => void;
}) {
  const t = copy[language];
  const opener = useRef(document.activeElement as HTMLElement | null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const reduced = useReducedMotion();
  const current = project.images[index];
  const animated = current.src.endsWith(".gif");
  function move(delta: number) {
    setPlaying(false);
    setIndex(
      (value) =>
        (value + delta + project.images.length) % project.images.length,
    );
  }
  useEffect(() => {
    const scroll = window.scrollY;
    return () => {
      requestAnimationFrame(() =>
        window.scrollTo({ top: scroll, behavior: "instant" }),
      );
    };
  }, []);
  return (
    <Dialog.Root
      open
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="gallery-overlay" />
        <Dialog.Content
          className="gallery-lightbox"
          aria-describedby="gallery-description"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            opener.current?.focus({ preventScroll: true });
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              move(1);
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              move(-1);
            }
          }}
        >
          <motion.div
            className="lightbox-inner"
            initial={reduced ? false : { opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="gallery-header">
              <div>
                <p className="kicker">
                  <Images size={13} /> {t.galleryKicker}
                </p>
                <Dialog.Title asChild>
                  <h2 id="gallery-title">{project.title}</h2>
                </Dialog.Title>
              </div>
              <Dialog.Close asChild>
                <button className="icon-button" aria-label={t.closeGallery}>
                  <X />
                </button>
              </Dialog.Close>
            </header>
            <div className="gallery-stage">
              {animated && !playing ? (
                <div className="motion-placeholder">
                  <img
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                  />
                  <button
                    className="button button-blue"
                    onClick={() => setPlaying(true)}
                  >
                    {t.playTour}
                  </button>
                </div>
              ) : (
                <motion.img
                  key={current.src}
                  initial={reduced ? false : { opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  src={current.src}
                  alt={current.alt}
                />
              )}
            </div>
            <div className="gallery-controls">
              <p aria-live="polite">{current.alt}</p>
              <div>
                <button
                  className="icon-button"
                  aria-label={t.previousImage}
                  disabled={project.images.length === 1}
                  onClick={() => move(-1)}
                >
                  <ChevronLeft />
                </button>
                <span>
                  {index + 1} / {project.images.length}
                </span>
                <button
                  className="icon-button"
                  aria-label={t.nextImage}
                  disabled={project.images.length === 1}
                  onClick={() => move(1)}
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
            <div className="gallery-footer">
              <Dialog.Description asChild>
                <p id="gallery-description">{project.description}</p>
              </Dialog.Description>
              <div>
                <a
                  className="button button-blue"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.openDemo} <ArrowUpRight size={18} />
                </a>
                {project.repo && (
                  <a
                    className="button button-outline"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} /> {t.code}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
