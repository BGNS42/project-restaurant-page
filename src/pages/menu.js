import "../style/pages.css";
import { MenuItem } from "../components/MenuItem.js";

const menu = document.createElement("div");
menu.classList = "menu";

const container = document.createElement("div");
container.classList = "containerTxt";

const pageTitle = document.createElement("h1");
pageTitle.innerText = "Today's Menu";

const starter = new MenuItem("Maple-Smoked Brie Crostini", "12", "Warm, creamy Brie lightly smoked with maple wood, served on toasted sourdough crostini and topped with a drizzle of wildflower honey and crushed candied pecans.");

const mainCourse = new MenuItem("Oak-Fired Herb-Crusted Ribeye", "34", "A 12-oz ribeye seared over an oak-wood flame, finished with a rosemary–thyme crust. Served with roasted garlic mashed potatoes and charred seasonal vegetables.");

const dessert = new MenuItem("Rustic Apple Bourbon Crumble", "9", "Slow-baked apples infused with cinnamon and small-batch bourbon, topped with a buttery oat crumble and served warm with vanilla bean ice cream.");

// appendChild Session - Where all turns to a single menu export

menu.appendChild(container);

container.appendChild(pageTitle);
container.appendChild(starter.createMenuItem());
container.appendChild(mainCourse.createMenuItem());
container.appendChild(dessert.createMenuItem());


export { menu };