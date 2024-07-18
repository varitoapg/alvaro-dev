import { techImagesToInvert } from "../data/invertTechImages";

export const applyImageInversion = (image: string): string => {
  return techImagesToInvert.includes(image) ? "dark:invert" : "";
};
