export const CUSTOM_PAGE_CHANGE_EVENT_ID = "custom-page-change";

const dispatchCustomPageChangeEvent = (currentPage) => {
  const customPageChangeEvent = new CustomEvent(CUSTOM_PAGE_CHANGE_EVENT_ID, {
    detail: {
      currentPage,
    },
  });
  document.dispatchEvent(customPageChangeEvent);
};

const createPaginationButton = (textContent, id, disabled) => {
  const div = document.createElement("div");
  div.classList.add("page-item");

  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary");
  button.setAttribute("id", id);
  if (disabled) {
    button.setAttribute("disabled", "true");
  }
  button.setAttribute("type", "button");
  button.textContent = textContent;
  div.append(button);

  return div;
};

const createPaginationCounter = (currentPage, totalPages) => {
  const paginationCounter = document.createElement("div");
  paginationCounter.classList.add("pagination-state");
  paginationCounter.textContent = `${currentPage} of ${totalPages}`;

  return paginationCounter;
};

const PREVIOUS_BUTTON_ID = "prev";
const NEXT_BUTTON_ID = "next";

export const createPagination = (currentPage, totalPages) => {
  const nav = document.createElement("nav");
  nav.setAttribute("aria-label", "Workshops pagination");
  nav.classList.add("pagination", "gap-2", "justify-content-center");

  nav.addEventListener("click", (e) => {
    if (e.target.id === PREVIOUS_BUTTON_ID) {
      dispatchCustomPageChangeEvent(currentPage - 1);
    }
    if (e.target.id === NEXT_BUTTON_ID) {
      dispatchCustomPageChangeEvent(currentPage + 1);
    }
  });

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  nav.append(
    createPaginationButton("Previous", PREVIOUS_BUTTON_ID, isFirstPage),
    createPaginationCounter(currentPage, totalPages),
    createPaginationButton("Next", NEXT_BUTTON_ID, isLastPage)
  );

  return nav;
};
