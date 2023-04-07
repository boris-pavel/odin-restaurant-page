import "./normalize.css";
import "./style.css";

import { home, menu, contactInfo } from "./config";
import homeSection from "./home";
import menuSection from "./menu";
import contactSection from "./about"

const createFooter = (footerElements) => {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  const ul = document.createElement("ul");

  footerElements.forEach((footerElement) => {
    const li = document.createElement("li");
    li.append(footerElement);
    ul.appendChild(li);
  });
  footer.appendChild(ul);

  return footer;
};

const createSection = (section) => {
  switch (section) {
    case home:
      return homeSection(home);
    case menu:
      return menuSection(menu);
    case contactInfo:
      return contactSection(contactInfo);
    default:
      return homeSection(home);
  }
};

const displaySection = (section) => {
  const content = document.querySelector("#content");
  const currentSection = document.querySelector(".section");
  content.removeChild(currentSection);
  const footer = document.querySelector(".footer");
  content.insertBefore(createSection(section), footer);
};

const createHeader = (...headerElementsText) => {
  const header = document.createElement("div");
  header.classList.add("header");
  const ul = document.createElement("ul");

  headerElementsText.forEach((headerElement) => {
    const li = document.createElement("li");
    li.textContent = headerElement;
    switch (headerElement) {
      case "Home":
        li.addEventListener("click", () => displaySection(home));
        break;
      case "Menu":
        li.addEventListener("click", () => displaySection(menu));
        break;
      case "Contact":
        li.addEventListener("click", () => displaySection(contactInfo));
        break;
      default:
        break;
    }

    ul.appendChild(li);
  });
  header.appendChild(ul);

  return header;
};

const createLinks = (...sentences) => {
  const container = [];
  sentences.forEach((sentence) => {
    const a = document.createElement("a");
    a.href = "https://unsplash.com/@cdc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    a.textContent = sentence;
    container.push(a);
  });
  return container;
};

const displayLayout = ((header, footer) => {
  const content = document.querySelector("#content");
  content.append(header);
  content.append(createSection(home));
  content.append(footer);
})(
  createHeader("Home", "Menu", "Contact"),
  createFooter(createLinks("Photo by CDC on Unsplash"))
);
