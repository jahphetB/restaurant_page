export default function loadContact() {
    const content = document.querySelector("#content");

    const contact = document.createElement("div");
    contact.classList.add("contact-page");

    const heading = document.createElement("h2");
    heading.textContent = "Contact";

    const email = document.createElement("p");
    email.textContent = "Email: hello@example.com";

    contact.appendChild(heading);
    contact.appendChild(email);

    content.appendChild(contact);
}