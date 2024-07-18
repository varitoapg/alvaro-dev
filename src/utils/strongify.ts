import { dictionary } from "../data/strongWords";

export const strongify = (text: string): string => {
  const escapedDictionary = dictionary.map((word) =>
    word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`\\b(${escapedDictionary.join("|")})\\b`, "gi");

  return text.replace(
    regex,
    '<strong class="text-primary dark:text-secondary">$1</strong>'
  );
};
