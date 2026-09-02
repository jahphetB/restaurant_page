import foodImage from "./food.jpeg";

export default function loadHome() {
    const content = document.querySelector("#content");

    const home = document.createElement("div");
    home.classList.add("home-page");

    const header = document.createElement("h3");
    header.textContent = "Saffron & Stone";

    const image = document.createElement("img");
    image.src = foodImage;
    image.alt = "res food";

    const bottom = document.createElement("p");
    bottom.textContent = "Seasonal dishes, thoughtful details, and warm hospitality. Make yourself at home at our table.";

    home.appendChild(header);
    home.appendChild(image);
    home.appendChild(bottom);

    content.appendChild(home);
}