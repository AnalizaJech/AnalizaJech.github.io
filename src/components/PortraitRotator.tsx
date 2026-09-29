import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

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
    if (reduced || !visible) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((value) => (value + 1) % images.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [reduced, visible, images.length]);
  return (
    <div
      ref={root}
      className="portrait-rotator"
      role="group"
      aria-label={label}
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
    </div>
  );
}
