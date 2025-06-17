export const createErrorBanner = (error) => {
  const paragraph = document.createElement("p");
  paragraph.textContent = `Unable to load workshops due to error: "${error.message}"`;
  return paragraph;
};
