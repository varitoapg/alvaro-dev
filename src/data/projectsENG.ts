import type { Project, ProjectTab } from "../types";
import { getIconImage } from "../utils/stackUtils";

export const frontEndProjects: Project[] = [
  {
    title: "The Yawning Portal",
    description:
      "This is a project where you can create in an easy way your own characters to play Dungeons and Dragons. It is a copy of a simplified D&D spreadsheet to keep your characters.If you are a DM it's useful too to save all your NPC of your games.",
    type: "FrontEnd",
    stack: [
      { name: "React", image: getIconImage("react", "0E39A9") },
      { name: "Redux", image: getIconImage("redux") },
      { name: "TypeScript", image: getIconImage("typescript") },
      { name: "Styled Components", image: getIconImage("styledcomponents") },
      { name: "Jest", image: getIconImage("jest") },
      { name: "Cypress", image: getIconImage("cypress") }
    ],
    url: "https://yawning-portal.netlify.app/",
    githubUrl: "https://github.com/varitoapg/TheYawningPortal-Front",
    isTested: "Done",
    hasMvpDone: "Done",
    nextSteps: "Migrar a Vite desde CRA."
  },
  {
    title: "Álvaro Dev",
    description:
      "This project is a personal portfolio built using HTML, TypeScript, TailwindCSS, and Astro. It showcases projects, skills, and experience in a clean and responsive design. HTML structures the content, TypeScript adds interactivity, TailwindCSS provides a utility-first approach to styling, and Astro optimizes the build process. The goal is to create a fast, lightweight, and maintainable portfolio that effectively highlights professional achievements and capabilities in a straightforward manner.",
    type: "FrontEnd",
    stack: [
      { name: "HTML5", image: getIconImage("html5") },
      { name: "TypeScript", image: getIconImage("typescript") },
      { name: "TailwindCSS", image: getIconImage("tailwindcss") },
      { name: "Astro", image: getIconImage("astro") }
    ],
    url: "https://yawning-portal.netlify.app/",
    githubUrl: "https://github.com/varitoapg/TheYawningPortal-Front",
    isTested: "Done",
    hasMvpDone: "Done",
    nextSteps: "Añadir localización a inglés."
  }
];

export const backEndProjects: Project[] = [
  {
    title: "The Yawning Portal API",
    description:
      "This API allows you to effortlessly create and manage your own characters for Dungeons and Dragons. It replicates a simplified D&D spreadsheet to keep track of your characters' details. Additionally, Dungeon Masters can use this API to store and organize all their NPCs for their games.",
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
    url: "https://yawning-portal-api.herokuapp.com/",
    isTested: "Done",
    hasMvpDone: "Done",
    nextSteps: "Dockerizar la API."
  }
];

export const otherProjects: Project[] = [
  {
    title: "Rick and Morty tech test",
    description:
      "This project provides the following functionalities: It calls the API to display characters on the screen with flexible layout options. Users can edit characters by opening a popup form to modify the name, location, and status fields, with changes saved locally (since PUT requests to the API are not supported). Additionally, it creates a summary table of the first 10 characters, displaying only the main details without images.",
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
      "The Gilded Rose kata is a popular coding exercise designed to improve refactoring skills. It involves working with a legacy codebase that manages an inventory system for a store. The goal is to add new features and improve the existing code without breaking its functionality, emphasizing clean code practices, unit testing, and incremental refactoring. This kata is widely used to practice maintaining and enhancing code quality in a controlled, realistic scenario.",
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
