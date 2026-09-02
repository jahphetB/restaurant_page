const menuSections = [
    {
        title: "Appetizers",
        items: [
            {
                name: "Tomato Bruschetta",
                description: "Grilled sourdough, cherry tomatoes, fresh basil, garlic, and extra virgin olive oil.",
                price: "$12",
            },
            {
                name: "Burrata & Peaches",
                description: "Creamy burrata, grilled peaches, arugula, toasted almonds, and balsamic glaze.",
                price: "$16",
            },
            {
                name: "Crispy Calamari",
                description: "Lightly fried calamari, lemon, parsley, and house-made garlic aioli.",
                price: "$15",
            },
        ],
    },
    {
        title: "Main Courses",
        items: [
            {
                name: "Herb-Roasted Chicken",
                description: "Rosemary chicken, buttery mashed potatoes, seasonal vegetables, and pan jus.",
                price: "$28",
            },
            {
                name: "Wild Mushroom Risotto",
                description: "Arborio rice, roasted mushrooms, Parmesan, fresh thyme, and truffle oil.",
                price: "$26",
            },
            {
                name: "Grilled Atlantic Salmon",
                description: "Salmon fillet, lemon couscous, asparagus, and a citrus butter sauce.",
                price: "$32",
            },
        ],
    },
    {
        title: "Desserts",
        items: [
            {
                name: "Classic Tiramisu",
                description: "Espresso-soaked ladyfingers, mascarpone cream, and a dusting of cocoa.",
                price: "$11",
            },
            {
                name: "Lemon Tart",
                description: "Buttery pastry, fresh lemon curd, vanilla cream, and seasonal berries.",
                price: "$10",
            },
            {
                name: "Chocolate Mousse",
                description: "Dark chocolate mousse, whipped cream, and shaved chocolate.",
                price: "$10",
            },
        ],
    },
    {
        title: "Drinks",
        items: [
            {
                name: "Rosemary Lemonade",
                description: "Fresh lemon juice, rosemary syrup, sparkling water, and ice.",
                price: "$7",
            },
            {
                name: "Peach Iced Tea",
                description: "Freshly brewed black tea, peach purée, and mint.",
                price: "$6",
            },
            {
                name: "Vanilla Latte",
                description: "Double espresso, steamed milk, and vanilla syrup.",
                price: "$6",
            },
        ],
    },
];

export default function loadMenu() {
    const content = document.querySelector("#content");

    const menu = document.createElement("div");
    menu.classList.add("menu-page");

    const heading = document.createElement("h2");
    heading.textContent = "Our Menu";

    const introduction = document.createElement("p");
    introduction.classList.add("page-intro");
    introduction.textContent =
        "Something to share, something to savor. Explore our kitchen’s favorites, from the first bite to the last sip.";

    const categories = document.createElement("div");
    categories.classList.add("menu-categories");

    menuSections.forEach((section) => {
        const category = document.createElement("section");
        category.classList.add("menu-category");

        const categoryHeading = document.createElement("h3");
        categoryHeading.textContent = section.title;
        category.appendChild(categoryHeading);

        section.items.forEach((item) => {
            const dish = document.createElement("article");
            dish.classList.add("menu-item");

            const dishTop = document.createElement("div");
            dishTop.classList.add("menu-item-top");

            const name = document.createElement("h4");
            name.textContent = item.name;

            const price = document.createElement("span");
            price.classList.add("price");
            price.textContent = item.price;

            const description = document.createElement("p");
            description.textContent = item.description;

            dishTop.appendChild(name);
            dishTop.appendChild(price);

            dish.appendChild(dishTop);
            dish.appendChild(description);

            category.appendChild(dish);
        });

        categories.appendChild(category);
    });

    menu.appendChild(heading);
    menu.appendChild(introduction);
    menu.appendChild(categories);

    content.appendChild(menu);
}