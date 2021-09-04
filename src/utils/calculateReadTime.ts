export const calculateReadTime = (string) => {
  const WPM = 225;
  const words = string.trim().split(/\s+/).length;
  const time = Math.ceil(words / WPM);

  return time;
};
