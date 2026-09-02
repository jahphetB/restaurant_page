Find the page here: https://jahphetb.github.io/restaurant_page/

# Saffron & Stone — Restaurant Page

A restaurant website built for The Odin Project using HTML, CSS, JavaScript, and Webpack.

The website has Home, Menu, and Contact tabs. JavaScript switches between them without reloading the page. Restaurant details and prices are fictional.

[View Website](https://jahphetb.github.io/restaurant_page/) | [GitHub Repository](https://github.com/jahphetB/restaurant_page)

## 1. Project Setup and Files

The project started with:

```bash
npm init -y
```

This creates `package.json`, which stores project information and dependencies.

The development tools were installed with:

```bash
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin html-loader style-loader css-loader
```

### File responsibilities

| File or folder | Purpose |
|---|---|
| `src/template.html` | Provides the HTML skeleton, navigation buttons, and empty content container. |
| `src/index.js` | Imports styles and page modules, loads Home, and handles tab switching. |
| `src/home.js` | Creates the Home heading, description, and food image. |
| `src/menu.js` | Creates menu categories, dish names, ingredients, and prices. |
| `src/contact.js` | Creates location, opening hours, and other contact information. |
| `src/styles.css` | Controls colors, fonts, spacing, layouts, and responsive design. |
| `src/food.jpeg` | Food image used on the Home tab. |
| `webpack.config.js` | Configures how Webpack processes and bundles the project. |
| `package.json` | Records dependencies and project settings. |
| `package-lock.json` | Records the exact dependency versions used. |
| `node_modules/` | Contains installed packages. |
| `dist/` | Contains the generated website files used for deployment. |
| `.gitignore` | Specifies files and folders excluded from normal Git tracking. |

The `.gitignore` contains:

```text
node_modules
dist
```

Dependencies can be recreated with `npm install`, and build output can be recreated with `npx webpack`.

Make website changes inside `src/`. Files inside `dist/` are generated and can be overwritten during the next build.

## 2. HTML, JavaScript, and DOM Manipulation

### HTML provides the structure

The HTML template contains the navigation and an empty content container:

```html
<header>
    <nav>
        <button id="home-btn">Home</button>
        <button id="menu-btn">Menu</button>
        <button id="contact-btn">Contact</button>
    </nav>
</header>

<div id="content"></div>
```

The homepage content was initially drafted in HTML, then moved into JavaScript.

The navigation stays in HTML because it remains visible across every tab. JavaScript fills `#content` with the selected tab.

### JavaScript creates the page content

The **DOM**, or Document Object Model, is the browser’s representation of the HTML document as objects that JavaScript can access and change.

Each page module exports a function that creates elements and adds them to the DOM.

For example:

```javascript
const content = document.querySelector("#content");

const home = document.createElement("div");
home.classList.add("home-page");

const heading = document.createElement("h3");
heading.textContent = "Saffron & Stone";

home.appendChild(heading);
content.appendChild(home);
```

Here is what happens:

- `querySelector()` finds an existing element.
- `createElement()` creates a new element that is not yet attached to the page.
- `classList.add()` assigns a class that CSS can target.
- `textContent` sets the element’s text.
- `appendChild()` attaches an element to its parent.

Creating an element alone does not display it. It becomes part of the visible page when it is attached to the document.

### Modules organize the JavaScript

Each tab has its own file and exported function:

```javascript
export default function loadHome() {
    // Create and display the Home content.
}
```

`index.js` imports those functions:

```javascript
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
```

Importing makes a function available. Calling it runs the function:

```javascript
loadHome();
```

This initial call displays Home when the website opens.

### Tab switching replaces the content

Each navigation button has a click listener:

```javascript
menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadMenu();
});
```

When Menu is clicked:

1. The listener runs.
2. `content.innerHTML = ""` removes the current contents of `#content`.
3. `loadMenu()` creates and inserts the Menu content.

Clearing first prevents multiple tabs from appearing together.

The `#content` container itself remains. The navigation also remains because it is outside that container.

### Arrays keep repeated content organized

Menu items and contact information are stored in arrays of objects.

The Menu module uses nested `forEach()` loops:

- The outer loop creates each category.
- The inner loop creates the dishes inside that category.

The Contact module similarly loops through information cards and their paragraphs.

To change a dish or contact detail, edit its data in the array.

## 3. CSS and Webpack

### How Webpack connects the files

Webpack starts at `src/index.js`, follows its imports, and builds the files needed by the browser.

| Tool or setting | Responsibility |
|---|---|
| `webpack` | Processes and bundles the application. |
| `webpack-cli` | Allows Webpack commands to run in the terminal. |
| `webpack-dev-server` | Serves the project locally during development. |
| `HtmlWebpackPlugin` | Creates `dist/index.html` from the template and adds the bundled JavaScript reference. |
| `html-loader` | Processes HTML and asset references inside it. It is optional when the template has no asset references that require processing. |
| `css-loader` | Processes imported CSS and its references. |
| `style-loader` | Inserts the processed CSS into the document using `<style>` elements. |
| `asset/resource` | Emits imported images as files and supplies their generated URLs. |

The output configuration creates `dist/main.js`. The `clean: true` setting removes old build output.

### How importing CSS works

`index.js` imports the stylesheet:

```javascript
import "./styles.css";
```

Webpack processes this import using `css-loader` and `style-loader`. When the bundled JavaScript runs, the styles are inserted into the document.

CSS selectors connect the styling to the elements:

```javascript
home.classList.add("home-page");
```

```css
.home-page {
    background-color: var(--forest-dark);
}
```

The class name is the connection.

All tabs share the same HTML document, so the stylesheet stays active when tabs change. Newly created elements automatically receive matching styles.

With this setup, CSS is included through JavaScript, so `dist/` does not need a separate CSS file.

### How the image works

The Home module imports the image:

```javascript
import foodImage from "./food.jpeg";
```

Webpack emits the image into the build output and provides its URL.

```javascript
image.src = foodImage;
```

This assigns the generated URL to the image element.

### How the design is organized

- **CSS variables:** Store shared colors and fonts.
- **Grid:** Arranges the Home layout, menu categories, and contact cards.
- **Flexbox:** Aligns navigation buttons and dish names with prices.
- **Media queries:** Adjust layouts for smaller screens.
- **Hover and focus styles:** Provide feedback when interacting with buttons.

## 4. Running, Building, and Deploying

### Run locally

With Node.js and npm installed, run these commands from the project root:

```bash
npm install
npx webpack serve
```

Open:

```text
http://localhost:8080
```

Check that all tabs work, repeated clicks do not duplicate content, and the layout adapts to a smaller browser window.

Restart the development server after changing `webpack.config.js`.

### Build the website

```bash
npx webpack
```

This writes the deployable website into `dist/`, including:

- `index.html`
- `main.js`
- The generated image file

### Deploy to GitHub Pages

First, commit source changes on `main`. Use `git status` to check for uncommitted work.

Create the deployment branch only for the first deployment:

```bash
git branch gh-pages
```

Then run:

```bash
git checkout gh-pages && git merge main --no-edit
npx webpack
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main
```

What these commands do:

- Switch to the local deployment branch and merge the latest source changes.
- Build the website into `dist/`.
- Force-add `dist/` because it is normally ignored, then commit the output.
- Push the contents of `dist/` to the root of the remote `gh-pages` branch.
- Return to `main` for future development.

The subtree command puts `index.html` at the root of the published branch, where GitHub Pages can serve it.

In the repository’s GitHub settings, select:

```text
Settings → Pages

Source: Deploy from a branch
Branch: gh-pages
Folder: / (root)
```

Save and wait for deployment to finish.

### Publish future changes

Edit and commit your source files on `main`, then repeat the deployment commands.

Skip `git branch gh-pages` because the branch already exists.

Updating source files on `main` alone does not update the published website. Rebuild and deploy to publish those changes.