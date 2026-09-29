import { useEffect } from "react";
import { useReducedMotion } from "motion/react";
export default function useSectionNavigation(
  onNavigate: () => void,
  onActive: (section: string) => void,
) {
  const reduced = useReducedMotion();
  useEffect(() => {
    function navigate(id: string, instant = false) {
      const target = document.getElementById(id);
      if (!target) return;
      const header = document.querySelector("header.site-header")!;
      const offset = header.getBoundingClientRect().height + 16;
      window.scrollTo({
        top: Math.max(
          0,
          target.getBoundingClientRect().top + window.scrollY - offset,
        ),
        behavior: instant || reduced ? "instant" : "smooth",
      });
      onNavigate();
    }
    function click(event: MouseEvent) {
      if (
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      )
        return;
      const anchor = (event.target as Element).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!anchor) return;
      const id = anchor.getAttribute("href")!.slice(1);
      if (!document.getElementById(id)) return;
      event.preventDefault();
      history.pushState(null, "", `#${id}`);
      navigate(id);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) onActive(entry.target.id);
      },
      { rootMargin: "-90px 0px -50% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    const header = document.querySelector(".site-header")!;
    const resize = new ResizeObserver(() =>
      document.documentElement.style.setProperty(
        "--section-offset",
        `${header.getBoundingClientRect().height + 16}px`,
      ),
    );
    resize.observe(header);
    if (location.hash)
      requestAnimationFrame(() => navigate(location.hash.slice(1), true));
    const pop = () => navigate(location.hash.slice(1) || "home");
    document.addEventListener("click", click);
    window.addEventListener("popstate", pop);
    return () => {
      document.removeEventListener("click", click);
      window.removeEventListener("popstate", pop);
      observer.disconnect();
      resize.disconnect();
    };
  }, [reduced, onNavigate, onActive]);
}
