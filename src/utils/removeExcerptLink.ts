export const removeExcerptLink = (excerpt: string): string => {
  return excerpt.split(' <a class="more-link" ')[0];
};
