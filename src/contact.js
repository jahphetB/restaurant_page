const contactSections = [
    {
        title: "Visit Us",
        lines: [
            "Saffron & Stone",
            "128 Olive Lane",
            "Willowbrook, Oregon",
        ],
    },
    {
        title: "Opening Hours",
        lines: [
            "Monday: Closed",
            "Tuesday–Thursday: 5:00 PM–10:00 PM",
            "Friday–Saturday: 5:00 PM–11:00 PM",
            "Sunday: 4:00 PM–9:00 PM",
        ],
    },
    {
        title: "Reservations & Inquiries",
        lines: [
            "Phone: (503) 555-0148",
            "Email: hello@saffronandstone.example",
            "Call or email to request a table. For parties of six or more, please contact us in advance.",
        ],
    },
    {
        title: "Plan Your Visit",
        lines: [
            "Complimentary parking is available behind the restaurant.",
            "Our step-free entrance is on Olive Lane.",
            "Please let our team know about dietary requirements when booking.",
        ],
    },
];

export default function loadContact() {
    const content = document.querySelector("#content");

    const contact = document.createElement("div");
    contact.classList.add("contact-page");

    const heading = document.createElement("h2");
    heading.textContent = "Come Join Us";

    const introduction = document.createElement("p");
    introduction.classList.add("page-intro");
    introduction.textContent =
        "A quiet dinner, a special occasion, or an evening with friends. We look forward to welcoming you.";

    const contactGrid = document.createElement("div");
    contactGrid.classList.add("contact-grid");

    contactSections.forEach((section) => {
        const card = document.createElement("section");
        card.classList.add("contact-card");

        const cardHeading = document.createElement("h3");
        cardHeading.textContent = section.title;
        card.appendChild(cardHeading);

        section.lines.forEach((line) => {
            const paragraph = document.createElement("p");
            paragraph.textContent = line;
            card.appendChild(paragraph);
        });

        contactGrid.appendChild(card);
    });

    contact.appendChild(heading);
    contact.appendChild(introduction);
    contact.appendChild(contactGrid);

    content.appendChild(contact);
}