import createHeading from "./elements";

const createContactCard = (contact) => {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("card");
  const contactName = createHeading(2, contact.contactName);
  contactDiv.append(contactName);
  const ul = document.createElement("ul");
  const title = document.createElement("li");
  title.textContent = contact.title;
  const phone = document.createElement("li");
  phone.textContent = contact.phone;
  const email = document.createElement("li");
  email.textContent = contact.email;
  ul.append(title, phone, email);
  contactDiv.append(ul);
  const img = new Image();
  img.src = contact.photo;
  contactDiv.append(img);
  return contactDiv;
};

export default function createContactPage(contacts) {
  const contact = document.createElement("div");
  contact.classList.add("contact","section")
  const title = createHeading(1, "Contact Us");
  contact.append(title);
  contacts.forEach((con) => {
    contact.append(createContactCard(con));
  });
  return contact;
}
