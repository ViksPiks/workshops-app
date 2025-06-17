export const createErrorBanner = (error) => {
  const paragraph = document.createElement("p");
  paragraph.classList.add("alert", "alert-danger");
  paragraph.setAttribute("role", "alert");
  paragraph.textContent = `Unable to load workshops due to error: "${error.message}"`;
  return paragraph;
};
