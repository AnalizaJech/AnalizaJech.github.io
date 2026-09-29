import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Github,
  Images,
} from "lucide-react";
import type { Project } from "../data/projects";
export default function ProjectGallery({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const [motion, setMotion] = useState(false);
  const current = project.images[index];
  const animated = current.src.endsWith(".gif");
  function move(delta: number) {
    setMotion(false);
    setIndex(
      (value) =>
        (value + delta + project.images.length) % project.images.length,
    );
  }
  useEffect(() => {
    const dialog = ref.current!;
    const previous = document.activeElement as HTMLElement;
    dialog.showModal();
    document.body.classList.add("modal-open");
    return () => {
      dialog.close();
      document.body.classList.remove("modal-open");
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="project-dialog"
      aria-labelledby="gallery-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === ref.current) {
          const r = ref.current!.getBoundingClientRect();
          if (
            event.clientX < r.left ||
            event.clientX > r.right ||
            event.clientY < r.top ||
            event.clientY > r.bottom
          )
            onClose();
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") move(1);
        if (event.key === "ArrowLeft") move(-1);
      }}
    >
      <header className="gallery-header">
        <div>
          <p className="kicker">
            <Images size={13} /> EXPLORAR PROYECTO
          </p>
          <h2 id="gallery-title">{project.title}</h2>
        </div>
        <button
          className="icon-button"
          onClick={onClose}
          aria-label="Cerrar galería"
        >
          <X />
        </button>
      </header>
      <div className="gallery-stage">
        {animated && !motion ? (
          <div className="motion-placeholder">
            <img src={project.images[0].src} alt={project.images[0].alt} />
            <button
              className="button button-blue"
              onClick={() => setMotion(true)}
            >
              Reproducir recorrido
            </button>
          </div>
        ) : (
          <img src={current.src} alt={current.alt} />
        )}
      </div>
      <div className="gallery-controls">
        <p>{current.alt}</p>
        <div>
          <button
            className="icon-button"
            onClick={() => move(-1)}
            aria-label="Imagen anterior"
            disabled={project.images.length === 1}
          >
            <ChevronLeft />
          </button>
          <span>
            {index + 1} / {project.images.length}
          </span>
          <button
            className="icon-button"
            onClick={() => move(1)}
            aria-label="Imagen siguiente"
            disabled={project.images.length === 1}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="gallery-footer">
        <p>{project.description}</p>
        <div>
          <a
            className="button button-blue"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            Abrir demo <ArrowUpRight size={18} />
          </a>
          {project.repo && (
            <a
              className="button button-outline"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> Código
            </a>
          )}
        </div>
      </div>
    </dialog>
  );
}
