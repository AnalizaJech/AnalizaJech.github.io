# Analiza Jech · Portfolio

Portafolio de Jorge Enrique Cáceres Hernández, construido con React, TypeScript y Vite. Publicación automática en GitHub Pages desde `master` mediante GitHub Actions.

**Sitio:** https://analizajech.github.io/

## Proyectos

| Proyecto               | Demo o presentación                                                             | Código                                                                    |
| ---------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Markdown Studio Pro    | [Abrir demo](https://analizajech.github.io/markdown-studio-pro/)                | [Repositorio](https://github.com/AnalizaJech/markdown-studio-pro)         |
| Cloud Architect Studio | [Abrir demo](https://analizajech.github.io/cloud-architect-studio/)             | [Repositorio](https://github.com/AnalizaJech/cloud-architect-studio)      |
| TwistyLab              | [Abrir demo](https://analizajech.github.io/twistylab/)                          | [Repositorio](https://github.com/AnalizaJech/twistylab)                   |
| Banco Crecer           | [Abrir demo](https://analizajech.github.io/Banco-Crecer/)                       | [Repositorio](https://github.com/AnalizaJech/Banco-Crecer)                |
| TechScan               | [Abrir demo](https://analizajech.github.io/Tech-Scan/)                          | [Repositorio](https://github.com/AnalizaJech/Tech-Scan)                   |
| InnovaSoft             | [Abrir demo](https://analizajech.github.io/InnovaSoft/)                         | [Repositorio](https://github.com/AnalizaJech/InnovaSoft)                  |
| JechCommerce           | [Ver presentación](https://www.loom.com/share/4a1e0fb5c3f74c4d9f7b5e071d6a9b66) | [Repositorio frontend](https://github.com/AnalizaJech/JechCommerce-front) |
| Librería               | [Ver video](https://www.youtube.com/watch?v=nGi3DS0QSzE)                        | [Repositorio](https://github.com/AnalizaJech/Libreria)                    |

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
- `src/components/ProjectGallery.tsx`: galería accesible con imágenes, teclado y recorridos animados bajo demanda.
- `src/components/Contact.tsx`: formulario Web3Forms, validación, envío y recuperación ante errores.
- `src/styles.css`: identidad visual, adaptación móvil y movimiento reducido.
- `public/projects/`: capturas reales y recorridos de las aplicaciones.
- `public/media/`: fotos, retratos creativos y portada social.
- `public/documents/`: CV existente de 2025, conservado sin modificar.
- `.github/workflows/deploy.yml`: instalación, build y despliegue.

## Agregar proyectos

Agrega un objeto a `projects` en `src/data/projects.ts` y coloca las capturas en `public/projects`. Incluye `url` para la demo o presentación y `repo` para el enlace de código. Usa `featured: true` para incluirlo en el showcase; actualmente hay tres proyectos destacados. Los filtros y las galerías se generan desde estos datos. Cada imagen tiene texto alternativo. Los GIF no se reproducen hasta pulsar Reproducir recorrido.

## Imágenes

Las capturas muestran aplicaciones reales. Los retratos editoriales se generaron con la herramienta integrada Image Gen a partir de las fotos suministradas; la portada usa un nuevo retrato generado con la foto frontal como referencia principal. La segunda foto original se usó solo como referencia, no se publica su leyenda de meme. Las imágenes de proyectos y retratos se optimizaron a WebP. Los prompts utilizados están en `docs/image-prompts.md`.

## Contacto

Se usa la clave pública de Web3Forms suministrada por el propietario. La clave está destinada a código cliente. El formulario conserva el mensaje si falla la petición e impide envíos simultáneos. Las pruebas usan respuestas simuladas de éxito y error; la recepción en el correo debe verificarse con un envío real.

## Validación

Build y tipos; revisión visual en Chromium; anchos 320, 390, 768, 820, 1024 y 1440; tabs, filtros, galería con teclado/Escape, cambio de retrato y formulario con respuestas simuladas. No se envían correos de prueba desde las verificaciones automáticas.

## Navegación y controles

Navbar persistente con posición sticky, indicador de sección activa y offset medido según su altura. El scroll de rueda y táctil conserva el comportamiento del navegador; solo las anclas usan desplazamiento suave y respetan movimiento reducido. Motion anima entradas y transiciones. Radix gestiona la galería y el selector con teclado, foco y Escape. El mensaje tiene altura fija y scroll interno. La galería se ajusta al viewport sin un contenedor exterior con borde ni una barra de scroll adicional.
