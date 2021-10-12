export const removeExcerptLink = (excerpt) => {
  return excerpt.split(' <a class="more-link" ')[0];
};
