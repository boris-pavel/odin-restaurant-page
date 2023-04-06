import "./normalize.css";
import "./style.css";

import {home} from "./config";
import defaultExport from "./home"

const createHeader = (...headerElementsText) => {
  const header = document.createElement("div");
  header.classList.add("header");
  const ul = document.createElement("ul");

  headerElementsText.forEach((headerElement) => {
    const li = document.createElement("li");
    li.textContent = headerElement;
    ul.appendChild(li);
  });
  header.appendChild(ul);

  return header;
};

const createSection = (section) => {
  const div = defaultExport(home);
  return div;
};

const createLinks = (...sentences) => {
  const container = [];
  sentences.forEach((sentence) => {
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = sentence;
    container.push(a);
  });
  return container;
};

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

const displayLayout = ((header, section, footer) => {
  const content = document.querySelector("#content");

  content.append(header);
  content.append(section);
  content.append(footer);
})(
  createHeader("Home", "Menu", "Contact"),
  createSection(),
  createFooter(createLinks("sadfasf sadf asdf asd", "lol"))
);
