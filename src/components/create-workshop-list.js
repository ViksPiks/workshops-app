import { createCard } from "../components/create-card";

export const createWorkshopList = (workshops) => {
  const ul = document.createElement("ul");
  ul.classList.add("temporary-grid");

  const cards = workshops.map((workshop) => createCard(workshop));
  ul.append(...cards);

  return ul;
};
