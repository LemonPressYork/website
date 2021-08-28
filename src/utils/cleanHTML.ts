// Removes HTML tags included in text.
export const cleanHTML = (str) => str.replace(/(<([^>]+)>)/gi, "");
