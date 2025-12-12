import "../style/pages.css";
import mapImg from "../assets/map.png";
import { DivImgTitleTxt, DivTitleTxt } from "../components/DivTitleTxt";

const contact = document.createElement("div");
contact.classList = "contact";

const container = document.createElement("div");
container.classList = "containerTxt";

const pageTitle = document.createElement("h1");
pageTitle.innerText = "Contact Us";

const mapDiv = new DivImgTitleTxt("mapDiv", "Address", "123 Oak Forest, ForestVille, Forest Country", mapImg);

const telBar = new DivTitleTxt("telBar", "Contacts", "Whats: 1234-1235\nE-mail: therustic@oak.com\nSocial Media: @theRusticOak");

// appendChild Session - Where all turns to a single contact export

contact.appendChild(container);

container.appendChild(pageTitle);
container.appendChild(mapDiv.create());
container.appendChild(telBar.create());

export { contact };