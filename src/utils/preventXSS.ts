import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

const window = new JSDOM("").window;
const purify = DOMPurify(window);

export const preventXSS = (html: string): string => {
  return purify.sanitize(html);
};
