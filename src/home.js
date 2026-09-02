import foodImage from "./food.jpeg";

export default function loadHome() {
    const content = document.querySelector("#content");

    const header = document.createElement("h3");
    header.textContent = "this is the greatest restaurant design";

    const image = document.createElement("img");
    image.src = foodImage;
    image.alt = "res food";

    const bottom = document.createElement("p");
    bottom.textContent = "ok this thing actually might work";

    content.appendChild(header);
    content.appendChild(image);
    content.appendChild(bottom);

}