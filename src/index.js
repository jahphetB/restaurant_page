import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const content = document.querySelector("#content");

const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const contactButton = document.querySelector("#contact-btn");

loadHome();

homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadHome();
});

menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadMenu();
});

contactButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadContact();
});