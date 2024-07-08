export type StatusTypes = "Done" | "WIP" | "Not Started";
export type ProjectTypes = "FrontEnd" | "BackEnd" | "Other";

export type NavIds =
  | "experience"
  | "about-me"
  | "stack"
  | "projects"
  | "education";

export interface Project {
  title: string;
  description: string;
  stack: StackItemStructure[];
  type: ProjectTypes;
  githubUrl: string;
  url?: string;
  isTested: StatusTypes;
  hasMvpDone: StatusTypes;
  nextSteps?: string;
}

export interface StackItemStructure {
  name: string;
  image: string;
}

export interface Experience {
  position: string;
  stack: StackItemStructure[];
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Section {
  title: string;
  id: NavIds;
}

export interface Education {
  degree: string;
  school: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface ProjectTab {
  title: string;
  id: string;
}
