# Analiza Jech · Portfolio

Portafolio bilingüe de Jorge Enrique Cáceres Hernández, construido con React, TypeScript y Vite. Reúne proyectos de frontend y UX/UI en una interfaz adaptable, con galerías accesibles y recorridos visuales tomados de las aplicaciones publicadas. GitHub Actions lo despliega en GitHub Pages desde `master`.

**Sitio:** https://analizajech.github.io/

## Proyectos

| Proyecto               | Demo o presentación                                                 | Código                                                               |
| ---------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Markdown Studio Pro    | [Abrir demo](https://analizajech.github.io/markdown-studio-pro/)    | [Repositorio](https://github.com/AnalizaJech/markdown-studio-pro)    |
| Cloud Architect Studio | [Abrir demo](https://analizajech.github.io/cloud-architect-studio/) | [Repositorio](https://github.com/AnalizaJech/cloud-architect-studio) |
| TwistyLab              | [Abrir demo](https://analizajech.github.io/twistylab/)              | [Repositorio](https://github.com/AnalizaJech/twistylab)              |
| Banco Crecer           | [Abrir demo](https://analizajech.github.io/Banco-Crecer/)           | [Repositorio](https://github.com/AnalizaJech/Banco-Crecer)           |
| TechScan               | [Abrir demo](https://analizajech.github.io/Tech-Scan/)              | [Repositorio](https://github.com/AnalizaJech/Tech-Scan)              |
| InnovaSoft             | [Abrir demo](https://analizajech.github.io/InnovaSoft/)             | [Repositorio](https://github.com/AnalizaJech/InnovaSoft)             |
| BRAVA                  | [Abrir demo](https://analizajech.github.io/Brava/)                  | [Repositorio](https://github.com/AnalizaJech/Brava)                  |
| Margen                 | [Abrir demo](https://analizajech.github.io/Margen/)                 | [Repositorio](https://github.com/AnalizaJech/Margen)                 |

## Desarrollo

```sh
npm ci
npm run dev
```

## Verificar producción

```sh
npm run build
npm run preview
```

El build comprueba los tipos y genera `dist/`. Esta carpeta y `node_modules/` están excluidas de Git. El sitio usa una única página con anclas, sin rutas que requieran reescrituras de servidor.

## Estructura

- `src/App.tsx`: composición del portafolio y navegación.
- `src/data/projects.ts`: catálogo, enlaces, categorías, tecnologías e imágenes.
- `src/i18n.ts`: textos en español e inglés, traducciones de proyectos y categorías.
- `src/components/ProjectGallery.tsx`: galería accesible con imágenes, teclado y recorridos animados bajo demanda.
- `src/components/Contact.tsx`: formulario Web3Forms, validación, envío y recuperación ante errores.
- `docs/email-template.html`: propuesta visual de notificación para un proveedor que acepte HTML personalizado.
- `src/styles.css`: identidad visual, adaptación móvil y movimiento reducido.
- `public/projects/`: capturas reales y recorridos de las aplicaciones.
- `public/media/`: fotos, retratos creativos y portada social.
- `public/documents/`: CV existente de 2025, conservado sin modificar.
- `.github/workflows/deploy.yml`: instalación, build y despliegue.

## Agregar proyectos

Agrega un objeto a `projects` en `src/data/projects.ts` y coloca las capturas en `public/projects`. Incluye `url` para la demo o presentación y `repo` para el enlace de código. Usa `featured: true` para incluirlo en el showcase; actualmente hay tres proyectos destacados. Los filtros y las galerías se generan desde estos datos. Cada imagen tiene texto alternativo. Los GIF se reproducen al pulsar el botón de play en la galería.

## Imágenes

Los ocho proyectos tienen cuatro vistas: tres capturas estáticas y un GIF reproducible bajo demanda. BRAVA y Margen incluyen demostraciones reales de compra y lectura. Las tarjetas mantienen los botones alineados y el hero aprovecha el ancho del contenido en móvil y tablet.

Las capturas muestran aplicaciones reales. Las vistas y recorridos de Cloud Architect Studio, TechScan, Banco Crecer e InnovaSoft se actualizaron desde sus versiones públicas en octubre de 2026. Los carruseles del hero y «Sobre mí» usan diez retratos con poses abiertas, traje negro y fondo cinematográfico azul oscuro; rostro, cabello y contextura toman como referencia las fotos proporcionadas por el propietario. El segundo carrusel comienza en una pose distinta. Las capturas y retratos estáticos se optimizaron a WebP. Los prompts iniciales están en `docs/image-prompts.md`.

## Contacto

Se usa la clave pública de Web3Forms suministrada por el propietario. La clave está destinada a código cliente. El formulario genera un asunto con el tipo de proyecto y nombre del remitente, añade el tipo como campo visible, conserva el mensaje si falla la petición e impide envíos simultáneos. Web3Forms controla el HTML de la notificación: `docs/email-template.html` es una propuesta preparada para un proveedor que permita plantillas propias y no forma parte del envío actual. La recepción en el correo debe verificarse con un envío real.

## Validación

Build y tipos; revisión visual en Chromium; anchos 320, 390, 768, 820, 1024 y 1440; tabs, filtros, galería con teclado/Escape, cambio de retrato y formulario con respuestas simuladas. No se envían correos de prueba desde las verificaciones automáticas.

## Navegación y controles

Navbar persistente con posición sticky, indicador de sección activa y offset medido según su altura. El scroll de rueda y táctil conserva el comportamiento del navegador; solo las anclas usan desplazamiento suave y respetan movimiento reducido. Motion anima entradas y transiciones. Radix gestiona la galería y el selector con teclado, foco y Escape. El mensaje tiene altura fija y scroll interno. La galería se ajusta al viewport sin un contenedor exterior con borde ni una barra de scroll adicional.

El control ES/EN cambia el idioma del contenido, proyectos, galerías y formulario sin recargar la página. La preferencia se guarda en `localStorage`, actualiza `html[lang]`, el título y la descripción de la página, y se restaura al regresar. El acento sky de la interfaz se define en `--blue` y `--blue-light` en `src/styles.css`.
