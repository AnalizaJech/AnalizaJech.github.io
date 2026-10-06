import { projects, type Project } from "./data/projects";

export type Language = "es" | "en";

export const copy = {
  es: {
    skip: "Saltar al contenido",
    navLabel: "Principal",
    homeLabel: "Analiza Jech, inicio",
    nav: ["Proyectos", "Sobre mí", "Contenido"],
    contactNav: "Hablemos",
    languageLabel: "Cambiar idioma a inglés",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    heroKicker: "JORGE CÁCERES / FRONTEND & UX/UI",
    hero1: "Diseño que",
    hero2: "se siente.",
    hero3: "Código que",
    hero4: "vive.",
    heroDescription:
      "Conecto creatividad, diseño y tecnología para construir experiencias que dan ganas de usar.",
    exploreWork: "Explora mi trabajo",
    downloadCv: "Descargar CV",
    portraitNumber: "01 — IDENTIDAD CREATIVA",
    portraitLabel: "Retratos de Jorge Cáceres",
    heroFoot: "LA CURIOSIDAD ES MI PUNTO DE PARTIDA.",
    scroll: "SCROLL PARA EXPLORAR",
    manifesto: [
      "DISEÑO CON INTENCIÓN",
      "CÓDIGO CON CURIOSIDAD",
      "EXPERIENCIAS CON PERSONALIDAD",
    ],
    workKicker: "01 / IDEAS EN FUNCIONAMIENTO",
    workTitle1: "El trabajo habla.",
    workTitle2: "Explóralo tú mismo.",
    workDescription1: "Productos para escribir, diseñar y practicar.",
    workDescription2: "Experiencias reales, listas para probar.",
    featuredLabel: "Proyectos destacados",
    exploreImages: "Explorar imágenes de",
    views: "vistas",
    view: "vista",
    explore: "Explorar",
    featured: "PROYECTO DESTACADO",
    openDemo: "Abrir demo",
    viewCode: "Ver código",
    previousProject: "Proyecto anterior",
    nextProject: "Proyecto siguiente",
    moreIdeas: "Más ideas. Más posibilidades.",
    filterLabel: "Filtrar proyectos",
    filters: ["Todos", "Herramientas", "Interactivos", "Web"],
    preview: "Vista previa de",
    aboutPortrait: "Jorge en su lado creativo",
    creativeSide: "EL LADO CREATIVO DE JECH",
    curious1: "curioso",
    curious2: "por naturaleza.",
    aboutKicker: "02 / DETRÁS DE CADA PIXEL",
    aboutTitle1: "No solo construyo.",
    aboutTitle2: "Exploro el porqué.",
    aboutP1:
      "Me interesa cómo una idea se convierte en algo que una persona puede entender, disfrutar y usar.",
    aboutP2:
      "Mi trabajo cruza desarrollo frontend y diseño UX/UI. Mi curiosidad también me lleva a la música, la edición de video y la creación de contenido. Distintas formas de hacer lo mismo:",
    aboutBold: "dar vida a una idea.",
    aboutLink: "Conoce mi recorrido",
    capabilities: [
      {
        title: "Pensar en personas",
        text: "Figma · Prototipado · Usabilidad · Diseño responsive",
      },
      {
        title: "Construir experiencias",
        text: "React · Angular · TypeScript · JavaScript · HTML & CSS",
      },
      {
        title: "Conectar las piezas",
        text: "Laravel · Node.js · NestJS · SQL · Git · GitHub",
      },
    ],
    contentKicker: "03 / APRENDER EN VOZ ALTA",
    contentTitle1: "Lo que descubro,",
    contentTitle2: "lo comparto.",
    channel: "Visita mi canal",
    videos: [
      "Programación y desarrollo web",
      "Explora mis tutoriales",
      "Creatividad y tecnología",
    ],
    videoAlt: "Video de Analiza Jech:",
    contactKicker: "04 / CONSTRUYAMOS ALGO JUNTOS",
    contactTitle1: "Una buena idea",
    contactTitle2: "merece una",
    contactTitle3: "gran",
    contactTitle4: "experiencia.",
    contactDescription:
      "¿Un proyecto, una colaboración o algo que todavía no tiene nombre? Me gustaría escucharlo.",
    name: "Tu nombre",
    namePlaceholder: "¿Cómo te llamas?",
    email: "Tu email",
    ideaType: "¿Qué tienes en mente?",
    projectTypes: [
      "Un proyecto web",
      "Diseño UX/UI",
      "Una colaboración",
      "Otra idea",
    ],
    idea: "Cuéntame tu idea",
    ideaPlaceholder: "El punto de partida, el reto, lo que te gustaría crear…",
    formNote: "Tu mensaje llega a mi correo mediante Web3Forms.",
    sending: "Enviando…",
    send: "Enviar mensaje",
    sent: "¡Gracias! Tu mensaje se envió correctamente.",
    sendError:
      "No se pudo enviar. Tu mensaje se conserva; inténtalo otra vez o escríbeme por correo.",
    galleryKicker: "EXPLORAR PROYECTO",
    closeGallery: "Cerrar galería",
    playTour: "Reproducir recorrido",
    previousImage: "Imagen anterior",
    nextImage: "Imagen siguiente",
    code: "Código",
    footer: "Diseño con intención.",
    backTop: "Volver arriba",
    metaDescription:
      "Jorge Cáceres: diseño UX/UI, desarrollo frontend y experiencias digitales con personalidad. Explora proyectos reales, demos y contenido de Analiza Jech.",
    pageTitle: "Analiza Jech · Jorge Cáceres — Frontend & UX/UI",
  },
  en: {
    skip: "Skip to content",
    navLabel: "Main",
    homeLabel: "Analiza Jech, home",
    nav: ["Projects", "About me", "Content"],
    contactNav: "Let's talk",
    languageLabel: "Cambiar idioma a español",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    heroKicker: "JORGE CÁCERES / FRONTEND & UX/UI",
    hero1: "Design you",
    hero2: "can feel.",
    hero3: "Code that",
    hero4: "comes alive.",
    heroDescription:
      "I bring creativity, design, and technology together to build experiences people enjoy using.",
    exploreWork: "Explore my work",
    downloadCv: "Download résumé",
    portraitNumber: "01 — CREATIVE IDENTITY",
    portraitLabel: "Portraits of Jorge Cáceres",
    heroFoot: "CURIOSITY IS WHERE I BEGIN.",
    scroll: "SCROLL TO EXPLORE",
    manifesto: [
      "DESIGN WITH PURPOSE",
      "CODE WITH CURIOSITY",
      "EXPERIENCES WITH PERSONALITY",
    ],
    workKicker: "01 / IDEAS IN ACTION",
    workTitle1: "The work speaks.",
    workTitle2: "Explore it yourself.",
    workDescription1: "Tools to write, design, and practice.",
    workDescription2: "Real experiences, ready to try.",
    featuredLabel: "Featured projects",
    exploreImages: "Explore images of",
    views: "views",
    view: "view",
    explore: "Explore",
    featured: "FEATURED PROJECT",
    openDemo: "Open demo",
    viewCode: "View code",
    previousProject: "Previous project",
    nextProject: "Next project",
    moreIdeas: "More ideas. More possibilities.",
    filterLabel: "Filter projects",
    filters: ["All", "Tools", "Interactive", "Web"],
    preview: "Preview of",
    aboutPortrait: "Jorge's creative side",
    creativeSide: "THE CREATIVE SIDE OF JECH",
    curious1: "curious",
    curious2: "by nature.",
    aboutKicker: "02 / BEHIND EVERY PIXEL",
    aboutTitle1: "I don't just build.",
    aboutTitle2: "I explore why.",
    aboutP1:
      "I care about how an idea becomes something a person can understand, enjoy, and use.",
    aboutP2:
      "My work connects frontend development and UX/UI design. Curiosity also takes me into music, video editing, and content creation. Different ways of doing the same thing:",
    aboutBold: "bringing an idea to life.",
    aboutLink: "Learn about my journey",
    capabilities: [
      {
        title: "Think about people",
        text: "Figma · Prototyping · Usability · Responsive design",
      },
      {
        title: "Build experiences",
        text: "React · Angular · TypeScript · JavaScript · HTML & CSS",
      },
      {
        title: "Connect the pieces",
        text: "Laravel · Node.js · NestJS · SQL · Git · GitHub",
      },
    ],
    contentKicker: "03 / LEARNING OUT LOUD",
    contentTitle1: "What I discover,",
    contentTitle2: "I share.",
    channel: "Visit my channel",
    videos: [
      "Web programming and development",
      "Explore my tutorials",
      "Creativity and technology",
    ],
    videoAlt: "Analiza Jech video:",
    contactKicker: "04 / LET'S BUILD SOMETHING",
    contactTitle1: "A good idea",
    contactTitle2: "deserves a",
    contactTitle3: "great",
    contactTitle4: "experience.",
    contactDescription:
      "A project, a collaboration, or an idea that doesn't have a name yet? I'd love to hear it.",
    name: "Your name",
    namePlaceholder: "What should I call you?",
    email: "Your email",
    ideaType: "What do you have in mind?",
    projectTypes: [
      "A web project",
      "UX/UI design",
      "A collaboration",
      "Another idea",
    ],
    idea: "Tell me about your idea",
    ideaPlaceholder:
      "Where it starts, the challenge, what you'd like to create…",
    formNote: "Your message reaches my inbox through Web3Forms.",
    sending: "Sending…",
    send: "Send message",
    sent: "Thank you! Your message was sent successfully.",
    sendError:
      "The message could not be sent. Your text is still here; please try again or email me directly.",
    galleryKicker: "EXPLORE PROJECT",
    closeGallery: "Close gallery",
    playTour: "Play walkthrough",
    previousImage: "Previous image",
    nextImage: "Next image",
    code: "Code",
    footer: "Design with purpose.",
    backTop: "Back to top",
    metaDescription:
      "Jorge Cáceres: UX/UI design, frontend development, and digital experiences with personality. Explore real projects, demos, and content from Analiza Jech.",
    pageTitle: "Analiza Jech · Jorge Cáceres — Frontend & UX/UI",
  },
} as const;

const englishProjects: Record<
  string,
  Pick<Project, "eyebrow" | "description"> & { images: string[] }
> = {
  markdown: {
    eyebrow: "A workspace for your ideas",
    description:
      "Write, preview, and share. Markdown, diagrams, and equations in a space that adapts to the way you think.",
    images: [
      "Markdown Studio Pro editor with writing and live preview",
      "Tour of Markdown Studio Pro tools",
    ],
  },
  cloud: {
    eyebrow: "Making complex systems clear",
    description:
      "Design cloud architectures on a visual canvas. Connect components, organize systems, and export diagrams.",
    images: [
      "Cloud Architect Studio v2 sample architecture and connections",
      "Tour of the Cloud Architect Studio v2 editor and sample",
      "Cloud component inspector and customization",
    ],
  },
  twisty: {
    eyebrow: "Find your own rhythm",
    description:
      "A speedcubing lab with 3D puzzles, timer, virtual solving, and statistics to turn every attempt into progress.",
    images: [
      "TwistyLab timer and interactive 3D cube",
      "3D playground and cube moves in TwistyLab",
      "Tour of TwistyLab timer and statistics",
    ],
  },
  banco: {
    eyebrow: "Web experience",
    description:
      "An editorial banking website with products, tools, and a loan simulator.",
    images: [
      "New Banco Crecer homepage",
      "Tour of Banco Crecer products and sections",
    ],
  },
  tech: {
    eyebrow: "Interactive diagnosis",
    description:
      "Local technical diagnosis based on symptoms, with likely causes and action steps.",
    images: [
      "New TechScan diagnosis interface",
      "Tour of TechScan symptom form",
    ],
  },
  innova: {
    eyebrow: "Applied learning",
    description:
      "A learning library with modules on software, quality, management, and accessibility.",
    images: ["New InnovaSoft course library", "Tour of InnovaSoft modules"],
  },
  commerce: {
    eyebrow: "Digital commerce",
    description:
      "An ecommerce platform demo with products, users, and authentication.",
    images: ["JechCommerce platform preview"],
  },
  library: {
    eyebrow: "Content management",
    description: "A Laravel application for managing users and content.",
    images: ["Video demo of the Librería application"],
  },
};

export function localizedProjects(language: Language): Project[] {
  if (language === "es") return projects;
  return projects.map((project) => {
    const translation = englishProjects[project.id];
    return {
      ...project,
      ...translation,
      images: project.images.map((image, index) => ({
        ...image,
        alt: translation.images[index] ?? image.alt,
      })),
    };
  });
}

export function categoryLabel(
  category: Project["category"],
  language: Language,
): string {
  const labels = {
    Herramientas: ["Herramientas", "Tools"],
    Interactivos: ["Interactivos", "Interactive"],
    Web: ["Web", "Web"],
  } as const;
  return labels[category][language === "es" ? 0 : 1];
}
