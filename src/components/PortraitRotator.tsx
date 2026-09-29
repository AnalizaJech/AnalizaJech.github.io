import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Pause, Play } from "lucide-react";

export default function PortraitRotator({
  images,
  label,
  priority = false,
}: {
  images: string[];
  label: string;
  priority?: boolean;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );
    if (root.current) observer.observe(root.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (paused || interacting || reduced || !visible) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((value) => (value + 1) % images.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused, interacting, reduced, visible, images.length]);
  return (
    <div
      ref={root}
      className="portrait-rotator"
      role="group"
      aria-label={label}
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocus={() => setInteracting(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setInteracting(false);
      }}
    >
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={index === active ? label : ""}
          aria-hidden={index !== active}
          className={index === active ? "is-active" : ""}
          fetchPriority={priority && index === 0 ? "high" : "auto"}
          loading={priority ? "eager" : "lazy"}
        />
      ))}
      <div className="portrait-controls">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Ver pose ${index + 1}`}
            aria-pressed={active === index}
            onClick={() => setActive(index)}
          >
            <span />
          </button>
        ))}
        {!reduced && (
          <button
            type="button"
            aria-label={paused ? "Reanudar retratos" : "Pausar retratos"}
            onClick={() => setPaused((value) => !value)}
          >
            {paused ? <Play size={13} /> : <Pause size={13} />}
          </button>
        )}
      </div>
    </div>
  );
}
