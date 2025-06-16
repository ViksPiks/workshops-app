import { favoriteWorkshops } from "../main";

export const CUSTOM_FAVORITES_CHANGE_EVENT_ID = "custom-favorites-change";

const dispatchCustomFavoritesChangeEvent = () => {
  const customFavoritesChangeEvent = new CustomEvent(
    CUSTOM_FAVORITES_CHANGE_EVENT_ID
  );
  document.dispatchEvent(customFavoritesChangeEvent);
};

export const createCard = (workshop) => {
  const card = document.createElement("li");
  card.classList.add("card");

  const img = document.createElement("img");
  img.setAttribute("src", workshop.image);
  img.setAttribute("alt", `${workshop.name} workshop photo`);
  img.classList.add("card-img-top", "card-workshop-photo");
  card.append(img);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "d-flex", "flex-column", "gap-3");
  card.append(cardBody);

  const heading = document.createElement("h5");
  heading.classList.add("card-title");
  heading.textContent = workshop.name;
  cardBody.append(heading);

  const phoneNumber = document.createElement("a");
  phoneNumber.setAttribute("href", `tel:${workshop.phoneNumber}`);
  phoneNumber.textContent = workshop.phoneNumber;
  cardBody.append(phoneNumber);

  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.classList.add("btn", "btn-outline-danger", "mt-auto");
  button.setAttribute("aria-label", "add workshop to favorites");
  cardBody.append(button);
  const isInFavorites = favoriteWorkshops.find((shop) => {
    return shop.slug === workshop.slug;
  });
  if (isInFavorites) {
    button.classList.toggle("btn-danger");
    button.classList.toggle("btn-outline-danger");
  }
  button.addEventListener("click", () => {
    const isInFavorites = favoriteWorkshops.find((shop) => {
      return shop.slug === workshop.slug;
    });

    if (isInFavorites) {
      const index = favoriteWorkshops.indexOf(workshop);
      if (index > -1) {
        favoriteWorkshops.splice(index, 1);
      }
    } else {
      favoriteWorkshops.push(workshop);
    }

    button.classList.toggle("btn-danger");
    button.classList.toggle("btn-outline-danger");

    dispatchCustomFavoritesChangeEvent();
  });

  const icon = document.createElement("i");
  icon.classList.add("bi", "bi-heart");
  button.append(icon);

  return card;
};
