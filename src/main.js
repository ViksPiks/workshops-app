import { getWorkshops } from "./api/get-workshops";
import { createCard } from "./components/create-card";
import { createContainer } from "./components/create-container";
import "./styles.css";

const app = document.querySelector("#app");

const container = createContainer();
app.append(container);

const ul = document.createElement("ul");
ul.classList.add("temporary-grid");
container.append(ul);

getWorkshops(1, 20).then((workshops) => {
  workshops.forEach((workshop) => ul.append(createCard(workshop)));
});
