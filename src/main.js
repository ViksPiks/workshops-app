import { getWorkshops } from "./api/get-workshops";
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
  getWorkshops(page).then(({ workshops, pagination }) => {
    container.replaceChildren(
      createWorkshopList(workshops),
      createPagination(pagination.page, pagination.totalPages)
    );
  });
};

renderWorkshops(1);

document.addEventListener(CUSTOM_PAGE_CHANGE_EVENT_ID, (e) =>
  renderWorkshops(e.detail.currentPage)
);
