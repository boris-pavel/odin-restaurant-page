const createHeading = (level, content) => {
  const heading = document.createElement(`h${level}`);
  heading.textContent = content;
  return heading;
};

function createTimeTable(days) {
  const ul = document.createElement("ul");
  const entries = Object.entries(days);
  entries.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = `${entry[0]}: ${entry[1]}`;
    ul.append(li);
  });
  return ul;
}

const createDescription = (desc, title) => {
  const description = document.createElement("div");
  description.classList.add("description");
  const para = document.createElement("p");
  para.textContent = desc;
  const heading = createHeading(2, title);
  description.append(heading);
  description.append(para);
  return description;
};

const createTable = (timeTable, title) => {
  const table = document.createElement("div");
  table.classList.add("time-table");
  const heading = createHeading(2, title);
  table.append(heading);
  table.append(createTimeTable(timeTable));
  return table;
};

const createLocation = (address, title) => {
  const location = document.createElement("div");
  location.classList.add("location");
  const heading = createHeading(2, title);
  location.append(heading);
  location.append(address);
  return location;
};

export default function createHomePage(information) {
  const timeTable = createTable(
    information.timeTable.table,
    information.timeTable.title
  );
  const description = createDescription(
    information.description.text,
    information.description.title
  );
  const location = createLocation(
    information.location.address,
    information.location.title
  );

  const arr = [];
  arr.push(timeTable, description, location);
  arr.forEach((el) => el.classList.add("card"));

  const homepage = document.createElement("div");
  homepage.classList.add("homepage");
  homepage.append(createHeading(1, information.title));
  homepage.append(description);
  homepage.append(timeTable);
  homepage.append(location);
  return homepage;
}
