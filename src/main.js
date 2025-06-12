import { getWorkshops } from "./api/get-workshops";
import { createCard } from "./components/create-card";
import { createContainer } from "./components/create-container";
import {
  createPagination,
  CUSTOM_PAGE_CHANGE_EVENT_ID,
} from "./components/create-pagination";
import "./styles.css";

const app = document.querySelector("#app");

const container = createContainer();
app.append(container);

const ul = document.createElement("ul");
ul.classList.add("temporary-grid");
container.append(ul);

const renderWorkshops = (page) => {
  getWorkshops(page).then((workshops) => {
    const cards = workshops.map((workshop) => createCard(workshop));
    ul.replaceChildren(...cards);
  });
};

renderWorkshops();
container.append(createPagination());

document.addEventListener(CUSTOM_PAGE_CHANGE_EVENT_ID, (e) =>
  renderWorkshops(e.detail.currentPage)
);
