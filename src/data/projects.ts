export type Project = {
  id: string;
  title: string;
  category: "Herramientas" | "Interactivos" | "Web";
  eyebrow: string;
  description: string;
  stack: string[];
  images: { src: string; alt: string }[];
  url: string;
  repo?: string;
  accent: string;
  featured?: boolean;
};
export const projects: Project[] = [
  {
    id: "markdown",
    title: "Markdown Studio Pro",
    category: "Herramientas",
    eyebrow: "Un escritorio para tus ideas",
    description:
      "Escribe, visualiza y comparte. Markdown, diagramas y ecuaciones en un espacio que se adapta a tu forma de pensar.",
    stack: ["TypeScript", "Mermaid", "Offline"],
    images: [
      {
        src: "/projects/markdown-studio.webp",
        alt: "Editor Markdown Studio Pro con escritura y vista previa",
      },
      {
        src: "/projects/markdown-tour.gif",
        alt: "Recorrido real por las herramientas de Markdown Studio Pro",
      },
    ],
    url: "https://analizajech.github.io/markdown-studio-pro/",
    repo: "https://github.com/AnalizaJech/markdown-studio-pro",
    accent: "#bdd4c7",
    featured: true,
  },
  {
    id: "cloud",
    title: "Cloud Architect Studio",
    category: "Herramientas",
    eyebrow: "De sistema complejo a idea clara",
    description:
      "Diseña arquitecturas cloud en un lienzo visual. Conecta componentes, organiza tus sistemas y exporta diagramas sin perder el hilo.",
    stack: ["JavaScript", "SVG", "PWA"],
    images: [
      {
        src: "/projects/cloud-architect.webp",
        alt: "Diagrama cloud real con biblioteca y conexiones",
      },
      {
        src: "/projects/cloud-customization.webp",
        alt: "Inspector de Cloud Architect Studio con personalización de nodos",
      },
      {
        src: "/projects/cloud-mobile.webp",
        alt: "Cloud Architect Studio funcionando en una pantalla móvil",
      },
    ],
    url: "https://analizajech.github.io/cloud-architect-studio/",
    repo: "https://github.com/AnalizaJech/cloud-architect-studio",
    accent: "#adbfdb",
    featured: true,
  },
  {
    id: "twisty",
    title: "TwistyLab",
    category: "Interactivos",
    eyebrow: "Encuentra tu propio ritmo",
    description:
      "Un laboratorio de speedcubing. Puzzles 3D, cronómetro, resolución virtual y estadísticas para convertir cada intento en progreso.",
    stack: ["React", "TypeScript", "cubing.js"],
    images: [
      {
        src: "/projects/twistylab.webp",
        alt: "TwistyLab con cronómetro y cubo interactivo 3D",
      },
      {
        src: "/projects/twisty-playground.webp",
        alt: "Laboratorio 3D y movimientos en TwistyLab",
      },
      {
        src: "/projects/twisty-tour.gif",
        alt: "Recorrido real por cronómetro y estadísticas de TwistyLab",
      },
    ],
    url: "https://analizajech.github.io/twistylab/",
    repo: "https://github.com/AnalizaJech/twistylab",
    accent: "#d2e6a3",
    featured: true,
  },
  {
    id: "banco",
    title: "Banco Crecer",
    category: "Web",
    eyebrow: "Experiencia web",
    description: "Una experiencia bancaria adaptable construida con Bootstrap.",
    stack: ["HTML", "CSS", "Bootstrap"],
    images: [
      { src: "/projects/banco-crecer.webp", alt: "Página de Banco Crecer" },
    ],
    url: "https://analizajech.github.io/Banco-Crecer/",
    accent: "#adc7db",
  },
  {
    id: "tech",
    title: "TechScan",
    category: "Herramientas",
    eyebrow: "Diagnóstico interactivo",
    description:
      "Identifica posibles problemas de hardware a partir de los síntomas de tu equipo.",
    stack: ["JavaScript", "Tailwind"],
    images: [
      {
        src: "/projects/techscan.webp",
        alt: "Interfaz de diagnóstico de hardware TechScan",
      },
    ],
    url: "https://analizajech.github.io/Tech-Scan/",
    accent: "#d8c4ad",
  },
  {
    id: "innova",
    title: "InnovaSoft",
    category: "Web",
    eyebrow: "Aprendizaje aplicado",
    description:
      "Módulos interactivos para explorar normas ISO y gestión de proyectos.",
    stack: ["JavaScript", "HTML", "Tailwind"],
    images: [
      {
        src: "/projects/innovasoft.webp",
        alt: "Plataforma educativa InnovaSoft",
      },
    ],
    url: "https://analizajech.github.io/InnovaSoft/",
    accent: "#c4b9da",
  },
  {
    id: "commerce",
    title: "JechCommerce",
    category: "Web",
    eyebrow: "Comercio digital",
    description:
      "Demostración de una plataforma ecommerce con productos, usuarios y autenticación.",
    stack: ["Ecommerce", "UX/UI"],
    images: [
      {
        src: "/projects/jechcommerce.webp",
        alt: "Vista de la plataforma JechCommerce",
      },
    ],
    url: "https://www.loom.com/share/4a1e0fb5c3f74c4d9f7b5e071d6a9b66",
    accent: "#dbc5b6",
  },
  {
    id: "library",
    title: "Librería",
    category: "Web",
    eyebrow: "Gestión de contenido",
    description: "Aplicación Laravel para gestionar usuarios y contenido.",
    stack: ["Laravel", "PHP", "MySQL"],
    images: [
      {
        src: "https://img.youtube.com/vi/nGi3DS0QSzE/hqdefault.jpg",
        alt: "Demostración en video de la aplicación Librería",
      },
    ],
    url: "https://www.youtube.com/watch?v=nGi3DS0QSzE",
    accent: "#b8cad9",
  },
];
