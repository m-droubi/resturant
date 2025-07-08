import "./style.css";

import { menu } from "./menu";
import { about } from "./about";
import { home } from "./home";

const content = document.querySelector("#content");
const nav = document.querySelector("nav");

home();

nav.addEventListener("click", (e) => {
switch (e.target.id) {
  case "home":
    content.innerHTML = ""
    home();
    break;
  case "menu":
    content.innerHTML = ""
    menu();
    break;
  case 'about':
    content.innerHTML = ""
    about();
    break;
}
})