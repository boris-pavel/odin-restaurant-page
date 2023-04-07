import createHeading from "./elements";

const createItemCard = (item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  const title = createHeading(3, item.title);
  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = item.description;
  const price = document.createElement("p");
  price.classList.add("price");
  price.textContent = item.price;
  const image = new Image();
  image.src = item.image;
  card.append(title, description, price, image);
  return card;
};

export default function createMenu(menu) {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");
  menuDiv.classList.add("section");
  const title = createHeading(1, "Menu");
  const items = document.createElement("div");
  items.classList.add("items");
  const beverages = document.createElement("div");
  beverages.classList.add("beverages");
  beverages.append(createHeading(2, "Beverages"));
  menu.forEach((item) => {if(item.type==="drink") beverages.append(createItemCard(item))});
  const snacks = document.createElement("div");
  snacks.classList.add("snacks");
  snacks.append(createHeading(2,"Snacks"));
  menu.forEach((item) => {if(item.type==="snack") snacks.append(createItemCard(item))});
  items.append(beverages);
  items.append(snacks);
  menuDiv.append(title);
  menuDiv.append(items);
  return menuDiv;
}
