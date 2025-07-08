export function menu() {

const menu = document.createElement("div");
menu.classList.add("menu")

const first = document.createElement("div");
first.classList.add("cards");
menu.appendChild(first);
const second = document.createElement("div");
second.classList.add("cards");
menu.appendChild(second);
const third = document.createElement("div");
third.classList.add("cards");
menu.appendChild(third);
const fourth = document.createElement("div");
fourth.classList.add("cards");
menu.appendChild(fourth);
const fifth = document.createElement("div");
fifth.classList.add("cards");
menu.appendChild(fifth);

content.appendChild(menu);
};