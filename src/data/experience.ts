import type { Experience } from "../types";
import { getIconImage } from "../utils/stackUtils";

export const experiences: Experience[] = [
  {
    company: "Estoko Logistics",
    description: [
      "- Desarrollo del ERP de la empresa, que utiliza nuevas tecnologías como PostgreSQL, Next.js, Apollo GraphQL y Prisma, enfocándome en el desarrollo frontend y brindando soporte backend ocasional para garantizar un enfoque total.",
      "- Mantenimiento de varias aplicaciones, priorizando la optimización del frontend y las mejoras de la interfaz de usuario para una experiencia de usuario perfecta.",
      "- Colaboración estrecha con el tech lead y el project manager para garantizar una coordinación eficiente del equipo en una metodología Agile, manteniendo un ambiente de trabajo altamente productivo usando Jira."
    ],
    endDate: "Actual",
    startDate: "Abr. 2021",
    position: "Desarrollador Fullstack",
    stack: [
      {
        name: "Typescript",
        image: getIconImage("typescript")
      },
      {
        name: "JavaScript",
        image: getIconImage("javascript")
      },
      {
        name: "Next.js",
        image: getIconImage("nextdotjs", "black")
      },
      {
        name: "CSS3",
        image: getIconImage("css3", "red")
      },
      { name: "GraphQL", image: getIconImage("graphql", "D90166") },
      { name: "Prisma", image: getIconImage("prisma", "black") },
      { name: "PostgreSQL", image: getIconImage("postgresql", "black") },
      { name: "Jira", image: getIconImage("jira") },
      { name: "Cypress", image: getIconImage("cypress") }
    ]
  },
  {
    company: "Freelance",
    description: [
      "- Desarrollé SPAs usando un stack MERN, con Redux para la gestión del estado.",
      "- Trabajé con un equipo de programadores full stack y un tech lead utilizando metodología Agile para crear una aplicaciones con buenas prácticas.",
      "- Creé test unitarios y de integración."
    ],
    endDate: "Dic. 2021",
    startDate: "Sept. 2021",
    position: "Desarrollador Fullstack",
    stack: [
      {
        name: "Typescript",
        image: getIconImage("typescript")
      },
      {
        name: "React",
        image: getIconImage("react", "0E39A9")
      },
      { name: "HTML5", image: getIconImage("html5") },
      {
        name: "CSS3",
        image: getIconImage("css3")
      },
      { name: "Redux", image: getIconImage("redux") },
      { name: "Express", image: getIconImage("express", "black") },
      { name: "Jest", image: getIconImage("jest") },
      { name: "Cypress", image: getIconImage("cypress") },
      { name: "MongoDB", image: getIconImage("mongodb") }
    ]
  },
  {
    company: "Oxigen Salud",
    description: [
      "- Mejoré de manera continua el proceso de producción , optimizando los layouts almacenamiento y producción.",
      "- Control de stock y pedidos mediante automatización de hojas de cálculo Excel.",
      "- Mejoré componentes de la web."
    ],
    endDate: "Sept. 2021",
    startDate: "Jun. 2021",
    position: "Ingeniero Junior",
    stack: [
      {
        name: "JavaScript",
        image: getIconImage("javascript")
      },
      { name: "HTML5", image: getIconImage("html5") },
      {
        name: "CSS3",
        image: getIconImage("css3")
      }
    ]
  }
];
