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
      "Editor Markdown con vista previa en vivo, diagramas Mermaid y PlantUML, ecuaciones y modo Zen. Guarda tus documentos localmente y exporta tu trabajo.",
    stack: ["TypeScript", "Mermaid", "KaTeX", "Offline"],
    images: [
      {
        src: "/projects/markdown-oct6-editor.webp",
        alt: "Editor Markdown Studio Pro con escritura y vista previa",
      },
      {
        src: "/projects/markdown-oct6-preview.webp",
        alt: "Vista previa de documentos en Markdown Studio Pro",
      },
      {
        src: "/projects/markdown-oct6-zen.webp",
        alt: "Modo Zen de Markdown Studio Pro",
      },
      {
        src: "/projects/markdown-oct6-tour.gif",
        alt: "Recorrido por editor, vista previa y modo Zen",
      },
    ],
    url: "https://analizajech.github.io/markdown-studio-pro/",
    repo: "https://github.com/AnalizaJech/markdown-studio-pro",
    accent: "#afc6dd",
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
        src: "/projects/cloud-2026.webp",
        alt: "Cloud Architect Studio v2 con arquitectura de ejemplo y conexiones",
      },
      {
        src: "/projects/cloud-tour.gif",
        alt: "Recorrido por el editor y el ejemplo de Cloud Architect Studio v2",
      },
      {
        src: "/projects/cloud-customization.webp",
        alt: "Inspector y personalización de componentes cloud",
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
    description:
      "Sitio bancario editorial con productos, herramientas y simulación de crédito.",
    stack: ["HTML", "CSS", "Bootstrap"],
    images: [
      {
        src: "/projects/banco-2026.webp",
        alt: "Nueva portada de Banco Crecer",
      },
      {
        src: "/projects/banco-tour.gif",
        alt: "Recorrido por productos y secciones de Banco Crecer",
      },
    ],
    url: "https://analizajech.github.io/Banco-Crecer/",
    repo: "https://github.com/AnalizaJech/Banco-Crecer",
    accent: "#adc7db",
  },
  {
    id: "tech",
    title: "TechScan",
    category: "Herramientas",
    eyebrow: "Diagnóstico interactivo",
    description:
      "Analiza síntomas de hardware, sistema y conectividad en tu navegador. Genera informes con causas posibles, pasos de revisión y fuentes, con historial y base de conocimiento.",
    stack: ["JavaScript", "Tailwind"],
    images: [
      {
        src: "/projects/tech-oct6-report.webp",
        alt: "Informe de TechScan con causas posibles y pasos de revisión",
      },
      {
        src: "/projects/tech-oct6-form.webp",
        alt: "Configuración de equipo y selección de síntomas en TechScan",
      },
      {
        src: "/projects/tech-oct6-knowledge.webp",
        alt: "Base de conocimiento de TechScan",
      },
      {
        src: "/projects/tech-oct6-tour.gif",
        alt: "Recorrido por síntomas, informe y base de conocimiento de TechScan",
      },
    ],
    url: "https://analizajech.github.io/Tech-Scan/",
    repo: "https://github.com/AnalizaJech/Tech-Scan",
    accent: "#d8c4ad",
  },
  {
    id: "innova",
    title: "InnovaSoft",
    category: "Web",
    eyebrow: "Aprendizaje aplicado",
    description:
      "Biblioteca de aprendizaje con módulos de software, calidad, gestión y accesibilidad.",
    stack: ["JavaScript", "HTML", "Tailwind"],
    images: [
      {
        src: "/projects/innova-2026.webp",
        alt: "Nueva biblioteca de cursos InnovaSoft",
      },
      {
        src: "/projects/innova-tour.gif",
        alt: "Recorrido por los módulos de InnovaSoft",
      },
    ],
    url: "https://analizajech.github.io/InnovaSoft/",
    repo: "https://github.com/AnalizaJech/InnovaSoft",
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
    repo: "https://github.com/AnalizaJech/JechCommerce-front",
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
    repo: "https://github.com/AnalizaJech/Libreria",
    accent: "#b8cad9",
  },
];
