export const getIconImage = (stackTitle: string, color?: string) =>
  color === undefined
    ? `https://cdn.simpleicons.org/${stackTitle}`
    : `https://cdn.simpleicons.org/${stackTitle}/${color}`;
