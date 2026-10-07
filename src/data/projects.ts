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
      "Editor Markdown con vista previa, diagramas, ecuaciones y modo Zen. Guarda documentos localmente y exporta tu trabajo.",
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
      "Diagnóstico guiado por síntomas y códigos de error, con informes locales, comprobaciones y guías oficiales.",
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
    title: "BRAVA",
    category: "Web",
    eyebrow: "Carácter que se lleva",
    description:
      "Tienda editorial de cuero con catálogo, variantes, zoom y bolsa persistente para solicitar una compra por WhatsApp.",
    stack: ["Angular", "TypeScript", "Signals"],
    images: [
      {
        src: "/projects/brava-1.webp",
        alt: "Portada editorial de BRAVA y selección de piezas de cuero",
      },
      {
        src: "/projects/brava-2.webp",
        alt: "Catálogo de BRAVA con categorías y productos",
      },
      {
        src: "/projects/brava-3.webp",
        alt: "Ficha de producto de BRAVA con galería, colores y tallas",
      },
      {
        src: "/projects/brava-tour.gif",
        alt: "Demostración de variantes, zoom y bolsa de compra en BRAVA",
      },
    ],
    url: "https://analizajech.github.io/Brava/",
    repo: "https://github.com/AnalizaJech/Brava",
    accent: "#dbc5b6",
  },
  {
    id: "library",
    title: "Margen",
    category: "Web",
    eyebrow: "Historias que se quedan contigo",
    description:
      "Biblioteca digital de obras completas con lectura interactiva, ediciones PDF, notas y progreso guardado en tu navegador.",
    stack: ["React", "Vite", "StPageFlip"],
    images: [
      {
        src: "/projects/margen-1.webp",
        alt: "Portada de Margen con identidad editorial y selección de libros",
      },
      {
        src: "/projects/margen-2.webp",
        alt: "Catálogo de Margen con portadas, búsqueda y filtros",
      },
      {
        src: "/projects/margen-3.webp",
        alt: "Lector de Margen con libro abierto e índice de capítulos",
      },
      {
        src: "/projects/margen-tour.gif",
        alt: "Demostración del giro de páginas en el lector de Margen",
      },
    ],
    url: "https://analizajech.github.io/Margen/",
    repo: "https://github.com/AnalizaJech/Margen",
    accent: "#c9cfbb",
  },
];
