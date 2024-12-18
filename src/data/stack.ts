import type { StackItemStructure } from "../types";
import { getIconImage } from "../utils/stackUtils";

export const languages: StackItemStructure[] = [
  { name: "Typescript", image: getIconImage("typescript") },
  { name: "JavaScript", image: getIconImage("javascript") }
];

export const frontend: StackItemStructure[] = [
  { name: "React", image: getIconImage("react", "0E39A9") },
  { name: "Next.js", image: getIconImage("nextdotjs", "black") },
  { name: "HTML5", image: getIconImage("html5") },
  { name: "CSS3", image: getIconImage("css3", "red") },
  { name: "Redux", image: getIconImage("redux") },
  { name: "TailwindCSS", image: getIconImage("tailwindcss") },
  { name: "Styled Components", image: getIconImage("styledcomponents") },
  { name: "Jest", image: getIconImage("jest") },
  { name: "Cypress", image: getIconImage("cypress") }
];

export const backend: StackItemStructure[] = [
  { name: "Node.js", image: getIconImage("nodedotjs", "black") },
  { name: "Express", image: getIconImage("express", "black") },
  { name: "GraphQL", image: getIconImage("graphql", "D90166") },
  { name: "Prisma", image: getIconImage("prisma", "black") },
  { name: "PostgreSQL", image: getIconImage("postgresql", "black") },
  { name: "MongoDB", image: getIconImage("mongodb") }
];

export const tools: StackItemStructure[] = [
  { name: "Jira", image: getIconImage("jira") },
  { name: "Git", image: getIconImage("git") },
  { name: "Docker", image: getIconImage("docker") },
  { name: "Figma", image: getIconImage("figma") },
  { name: "Github", image: getIconImage("github") }
];
