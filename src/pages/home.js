import "../style/pages.css";
import { DivTitleTxt } from "../components/DivTitleTxt";

const home = document.createElement("div");
home.classList = "home";

const container = document.createElement("div");
container.classList = "containerTxt";

const restaurantName = document.createElement("h1");
restaurantName.innerText = "The Rustic Oak";

const resume = document.createElement("div");
resume.classList = "resume";

const resumeTxt = document.createElement("p");
resumeTxt.classList = "resumeTxt";
resumeTxt.innerText = "Welcome to The Rustic Oak, where countryside charm meets urban sophistication. Our ambiance is a cozy refuge, combining the robustness of oak wood and exposed brick with a modern industrial touch, evident in our metal light fixtures and open design.\nEnjoy a unique dining experience at solid wood tables, perfect for intimate meals or lively gatherings. Whether for a special dinner or a casual lunch, The Rustic Oak offers a warm and inviting atmosphere that celebrates the beauty of natural materials and good company.\nCome discover your new favorite spot, where every detail has been designed for your comfort and pleasure.";

const hoursDiv = new DivTitleTxt("opHours", "Hours", "Sunday: 8am - 8pm\nMonday: 6am - 6pm\nTuesday: 6am - 6pm\nWednesday: 6am - 6pm\nThursday: 6am - 10pm\nFriday: 6am - 10pm\nSaturday: 8am - 10pm");

const locationBar = new DivTitleTxt("locBar", "Location", "123 Oak Forest, ForestVille, Forest Country");

// appendChild Session - Where all turns to a single home export

home.appendChild(container);

container.appendChild(restaurantName);
container.appendChild(resume);
container.appendChild(hoursDiv.create());
container.appendChild(locationBar.create());

resume.appendChild(resumeTxt);

export { home };