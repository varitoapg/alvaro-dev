import { dictionary } from "../data/strongWords";

export const strongify = (text: string): string => {
  const escapedDictionary = dictionary.map((word) =>
    word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`\\b(${escapedDictionary.join("|")})\\b`, "gi"); // Create regex to match dictionary words

  return text.replace(regex, '<strong class="text-primary">$1</strong>');
};
