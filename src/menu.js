export default function loadMenu() {
    const content = document.querySelector("#content");

    const menu = document.createElement("div");
    menu.classList.add("menu-page");

    const heading = document.createElement("h2");
    heading.textContent = "Menu";

    const item = document.createElement("p");
    item.textContent = "Pasta — $12";

    menu.appendChild(heading);
    menu.appendChild(item);

    content.appendChild(menu);
}