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
        src: "/projects/cloud-four-1.webp",
        alt: "Cloud Architect Studio v2 con arquitectura de ejemplo y conexiones",
      },
      {
        src: "/projects/cloud-four-2.webp",
        alt: "Inspector y personalización de componentes cloud",
      },
      {
        src: "/projects/cloud-four-3.webp",
        alt: "Opciones de exportación de Cloud Architect Studio",
      },
      {
        src: "/projects/cloud-four-tour.gif",
        alt: "Recorrido por diagrama, inspector y exportación",
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
        src: "/projects/twisty-four-1.webp",
        alt: "TwistyLab con cronómetro y cubo interactivo 3D",
      },
      {
        src: "/projects/twisty-four-2.webp",
        alt: "Laboratorio 3D y movimientos en TwistyLab",
      },
      {
        src: "/projects/twisty-four-3.webp",
        alt: "Panel de estadísticas de TwistyLab",
      },
      {
        src: "/projects/twisty-four-tour.gif",
        alt: "Recorrido por cronómetro, laboratorio y estadísticas",
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
        src: "/projects/banco-four-1.webp",
        alt: "Nueva portada de Banco Crecer",
      },
      {
        src: "/projects/banco-four-2.webp",
        alt: "Catálogo de productos de Banco Crecer",
      },
      {
        src: "/projects/banco-four-3.webp",
        alt: "Simulador de crédito de Banco Crecer",
      },
      {
        src: "/projects/banco-four-tour.gif",
        alt: "Recorrido por portada, productos y simulador",
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
      "Un estudio guiado para conectar síntomas y códigos de error. Genera informes locales con causas posibles, comprobaciones y guías oficiales, y conserva tu historial en el navegador.",
    stack: ["React", "TypeScript", "Análisis local"],
    images: [
      {
        src: "/projects/tech-four-1.webp",
        alt: "Nueva portada de TechScan y acceso al estudio de diagnóstico",
      },
      {
        src: "/projects/tech-four-2.webp",
        alt: "Selección de síntomas en el estudio guiado de TechScan",
      },
      {
        src: "/projects/tech-four-3.webp",
        alt: "Informe de TechScan con causas posibles y pasos de revisión",
      },
      {
        src: "/projects/tech-four-tour.gif",
        alt: "Recorrido por portada, síntomas e informe de TechScan",
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
        src: "/projects/innova-four-1.webp",
        alt: "Nueva biblioteca de cursos InnovaSoft",
      },
      {
        src: "/projects/innova-four-2.webp",
        alt: "Módulos de calidad, gestión y colaboración en InnovaSoft",
      },
      {
        src: "/projects/innova-four-3.webp",
        alt: "Módulos de desarrollo, seguridad y accesibilidad",
      },
      {
        src: "/projects/innova-four-tour.gif",
        alt: "Recorrido por la biblioteca y módulos de InnovaSoft",
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
