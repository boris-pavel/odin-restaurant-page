import ContagionCooler from "./img/contagion-cooler.jpg";
import FluShot from "./img/flu-shot.jpg";
import InfectedGuacamole from "./img/infected-guacamole.jpg";
import ToxicTortilla from "./img/toxic-tortilla-chips.jpg";
import ViralVeggiePlatter from "./img/viral-veggie-platter.jpg";
import ZombieVirus from "./img/zombie-virus.jpg";
import Bacterium from "./img/dr-bacterium.jpg";
import Antibody from "./img/ms-antibody.png";
import Probiotic from "./img/mr-probiotic.png";

export const home = {
  title: "The Germ Tavern",
  description: {
    text: "The Germ Tavern is a cozy and rustic pub located in the heart of a bustling city. The atmosphere inside the tavern is warm and inviting, with exposed brick walls and low lighting that creates a comfortable and intimate ambiance. The tavern has a wide selection of craft beers on tap, as well as a variety of signature cocktails and wines to choose from. The menu features classic pub fare with a modern twist, such as hearty sandwiches, savory soups, and gourmet burgers made with locally sourced ingredients. The Germ Tavern is a popular spot for locals and tourists alike, with friendly and attentive staff who provide excellent service. Whether you're looking for a casual night out with friends or a romantic date spot, The Germ Tavern is the perfect place to relax and enjoy delicious food and drinks in a welcoming and unpretentious setting.",
    title:
      "The Germ Tavern: A Cozy and Rustic Pub with Delicious Food and Drinks",
  },
  timeTable: {
    table: {
      Monday: "8am - 8pm",
      Tuesday: "6am - 6pm",
      Wednesday: "6am - 6pm",
      Thursday: "6am - 6pm",
      Friday: "6am - 10pm",
      Saturday: "6am - 10pm",
      Sunday: "8am - 10pm",
    },
    title: "Hours",
  },
  location: {
    address:
      "The Germ Tavern, 123 Main Street, Veridian City, CA 12345, United States of America",
    title: "Location",
  },
};

const MenuItem = (type, title, description, price, image) => ({
  type,
  title,
  description,
  price,
  image,
});

export const menu = [
  MenuItem(
    "drink",
    "Flu Shot",
    "green tea with a splash of lemon juice",
    "$8.50",
    FluShot
  ),
  MenuItem(
    "drink",
    "Zombie Virus",
    "green apple juice with a hint of ginger",
    "$3.50",
    ZombieVirus
  ),
  MenuItem(
    "drink",
    "Contagion Cooler",
    "kale and spinach smoothie with a splash of lime juice",
    "$5.00",
    ContagionCooler
  ),
  MenuItem(
    "snack",
    "Infected Guacamole",
    "avocado dip with green peppers and jalapenos",
    "$14.50",
    InfectedGuacamole
  ),
  MenuItem(
    "snack",
    "Toxic Tortilla Chips",
    "spinach and kale chips with a sprinkle of sea salt",
    "$10.75",
    ToxicTortilla
  ),
  MenuItem(
    "snack",
    "Viral Veggie Platter",
    "celery, broccoli, and cucumber sticks with green goddess dip",
    "$10.00",
    ViralVeggiePlatter
  ),
];

const Contact = (title, contactName, email, phone, photo) => ({
  title,
  contactName,
  email,
  phone,
  photo,
});

export const contactInfo = [
  Contact(
    "Chef",
    "Dr. Bacterium",
    "chef@bacteria-bar.com",
    "555-555-1212",
    Bacterium
  ),
  Contact(
    "Manager",
    "Ms. Antibody",
    "manager@bacteria-bar.com",
    "555-555-2323",
    Antibody
  ),
  Contact(
    "Waiter",
    "Mr. Probiotic",
    "waiter@bacteria-bar.com",
    "555-555-3434",
    Probiotic
  ),
];
