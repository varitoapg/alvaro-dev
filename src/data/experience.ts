import type { Experience } from "../types";
import { getIconImage } from "../utils/stackUtils";

export const experiences: Experience[] = [
  {
    company: "Estoko Logistics",
    description: [
      "- Mantenimiento del ERP de la empresa e implementación de nuevas features con NextJS, React, TypeScript y una base de datos MySQL.",
      "- Diseño y desarrollo de un nuevo microservicio del ERP, con una API GraphQL, capaz de manejar la información de más de 1000 almacenes y reduciendo la captación de clientes de casi 1 semana a menos de 1 día.",
      "- Optimización de endpoints y queries SQL, llegando a reducir de 20s a menos de 1s el tiempo de respuesta.",
      "- Mejora del entorno Agile estandarizando las definiciones de las tareas en Jira y reduciendo el tiempo de las dailies de más de 30 min a menos de 10."
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
      "- Desarrollé SPAs usando un stack MERN (Mongo, Express, React, Node), con Redux para la gestión del estado.",
      "- Implementé de test unitarios con Jest, subiendo el coverage hasta estar por encima del 80%.",
      "- Mejoré la UX/UI de las aplicaciones, aumentando los valores de LightHouse a más de 90."
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
