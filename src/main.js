import { getWorkshops } from "./api/get-workshops";
import { CUSTOM_FAVORITES_CHANGE_EVENT_ID } from "./components/create-card";
import { createContainer } from "./components/create-container";
import {
  createPagination,
  CUSTOM_PAGE_CHANGE_EVENT_ID,
} from "./components/create-pagination";
import { createWorkshopList } from "./components/create-workshop-list";
import "./styles.css";

const app = document.querySelector("#app");

const container = createContainer();
app.append(container);

const renderWorkshops = (page) => {
  getWorkshops(page, 20).then(({ workshops, pagination }) => {
    container.replaceChildren(
      createWorkshopList(workshops),
      createPagination(pagination.page, pagination.totalPages)
    );
  });
};

const FAVORITE_WORKSHOPS_LOCAL_STORAGE_KEY = "favoriteWorkshops";
export const favoriteWorkshops =
  JSON.parse(localStorage.getItem(FAVORITE_WORKSHOPS_LOCAL_STORAGE_KEY)) ?? [];

const favoritesContainer = createContainer();
app.append(favoritesContainer);

const renderFavorites = () => {
  const heading = document.createElement("h2");
  heading.textContent = "Favorite workshops";

  favoritesContainer.replaceChildren(
    heading,
    createWorkshopList(favoriteWorkshops)
  );
};

renderWorkshops(1);
renderFavorites();

document.addEventListener(CUSTOM_PAGE_CHANGE_EVENT_ID, (e) =>
  renderWorkshops(e.detail.currentPage)
);

document.addEventListener(CUSTOM_FAVORITES_CHANGE_EVENT_ID, () => {
  renderFavorites();
  localStorage.setItem(
    FAVORITE_WORKSHOPS_LOCAL_STORAGE_KEY,
    JSON.stringify(favoriteWorkshops)
  );
});
