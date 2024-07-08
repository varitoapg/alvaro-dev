import type { Project, ProjectTab } from "../types";
import { getIconImage } from "../utils/stackUtils";

export const frontEndProjects: Project[] = [
  {
    title: "The Yawning Portal",
    description:
      "Este es un proyecto donde puedes crear de manera fácil tus propios personajes para jugar Dungeons and Dragons. Es una copia de una hoja simplificada de D&D con la información de tus personajes. Si eres un DM, también es útil para guardar todos tus NPC de tus partidas.",
    type: "FrontEnd",
    stack: [
      { name: "React", image: getIconImage("react", "0E39A9") },
      { name: "Redux", image: getIconImage("redux") },
      { name: "TypeScript", image: getIconImage("typescript") },
      { name: "Styled Components", image: getIconImage("styledcomponents") },
      { name: "Jest", image: getIconImage("jest") },
      { name: "Cypress", image: getIconImage("cypress") }
    ],
    url: "https://the-yawning-portal.netlify.app/",
    githubUrl: "https://github.com/varitoapg/TheYawningPortal-Front",
    isTested: "Done",
    hasMvpDone: "Done",
    nextSteps: "Migrar a Vite desde CRA."
  },
  {
    title: "Álvaro Dev",
    description:
      "Este proyecto es un portafolio personal construido con HTML, TypeScript, TailwindCSS y Astro. Muestra proyectos, habilidades y experiencia en un diseño limpio y adaptable. HTML estructura el contenido, TypeScript añade interactividad, TailwindCSS ofrece un enfoque de estilización orientado a utilidades, y Astro optimiza el proceso de construcción. El objetivo es crear un portafolio rápido, ligero y fácil de mantener que destaque de manera efectiva los logros y capacidades profesionales de forma directa.",
    type: "FrontEnd",
    stack: [
      { name: "HTML5", image: getIconImage("html5") },
      { name: "TypeScript", image: getIconImage("typescript") },
      { name: "TailwindCSS", image: getIconImage("tailwindcss") },
      { name: "Astro", image: getIconImage("astro") }
    ],
    url: "https://alvaro-dev.netlify.app/",
    githubUrl: "https://github.com/varitoapg/alvaro-dev",
    isTested: "Not Started",
    hasMvpDone: "Done",
    nextSteps: "Añadir localización a inglés."
  }
];

export const backEndProjects: Project[] = [
  {
    title: "The Yawning Portal API",
    description:
      "Esta API te permite crear y gestionar fácilmente tus propios personajes para Dungeons and Dragons. Replica una hoja de cálculo simplificada de D&D para llevar un registro de los detalles de tus personajes. Además, los Dungeon Masters pueden utilizar esta API para almacenar y organizar todos sus NPCs de sus partidas.",
    type: "BackEnd",
    stack: [
      { name: "TypeScript", image: getIconImage("typescript") },
      { name: "Node.js", image: getIconImage("nodedotjs", "black") },
      { name: "Express", image: getIconImage("express", "black") },
      { name: "MongoDB", image: getIconImage("mongodb") },
      { name: "Mongoose", image: getIconImage("mongoose") },
      { name: "Jest", image: getIconImage("jest") }
    ],
    githubUrl: "https://github.com/varitoapg/TheYawningPortal-Back",
    url: "https://theyawningportalapi.onrender.com/",
    isTested: "Done",
    hasMvpDone: "Done",
    nextSteps: "Dockerizar la API."
  }
];

export const otherProjects: Project[] = [
  {
    title: "Rick and Morty tech test",
    description:
      "Este proyecto proporciona las siguientes funcionalidades: Llama a la API para mostrar los personajes en la pantalla con opciones de diseño flexibles. Los usuarios pueden editar los personajes abriendo un formulario emergente para modificar los campos de nombre, ubicación y estado, con los cambios guardados localmente (ya que no se admiten las solicitudes PUT a la API). Además, crea una tabla resumen de los primeros 10 personajes, mostrando solo los detalles principales sin imágenes.",
    type: "Other",
    stack: [
      { name: "React", image: getIconImage("react", "0E39A9") },
      { name: "TypeScript", image: getIconImage("typescript") },
      { name: "TailwindCSS", image: getIconImage("tailwindcss") }
    ],
    githubUrl: "https://github.com/varitoapg/Rick-Morty-test",
    isTested: "WIP",
    hasMvpDone: "Done",
    nextSteps: "Añador test unitarios faltantes y E2E."
  },
  {
    title: "Gilded Rose",
    description:
      "La kata de Gilded Rose es un ejercicio de codificación popular diseñado para mejorar las habilidades de refactorización. Involucra trabajar con una base de código heredada que gestiona un sistema de inventario para una tienda. El objetivo es añadir nuevas funcionalidades y mejorar el código existente sin romper su funcionalidad, haciendo énfasis en prácticas de código limpio, pruebas unitarias y refactorización incremental. Esta kata se utiliza ampliamente para practicar el mantenimiento y la mejora de la calidad del código en un escenario controlado y realista.",

    type: "Other",
    stack: [
      { name: "TypeScript", image: getIconImage("typescript") },
      { name: "Jest", image: getIconImage("jest") }
    ],
    githubUrl: "https://github.com/varitoapg/gilded-rose-kata",
    isTested: "Done",
    hasMvpDone: "Done"
  }
];

export const projectTabs: ProjectTab[] = [
  { title: "Frontend", id: "frontend-tab" },
  { title: "Backend", id: "backend-tab" },
  { title: "Others", id: "others-tab" }
];
