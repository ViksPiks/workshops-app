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
  button.classList.add("btn", "btn-primary", "mt-auto");
  button.setAttribute("aria-label", "add workshop to favorites");
  cardBody.append(button);

  const icon = document.createElement("i");
  icon.classList.add("bi", "bi-heart");
  button.append(icon);

  return card;
};
