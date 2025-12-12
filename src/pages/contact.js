import "../style/pages.css";
import mapImg from "../assets/map.png";

const contact = document.createElement("div");
contact.classList = "contact";

const container = document.createElement("div");
container.classList = "containerTxt";

const pageTitle = document.createElement("h1");
pageTitle.innerText = "Contact Us";

const mapDiv = document.createElement("div");
mapDiv.classList = "mapDiv";

const mapImage = document.createElement("img");
mapImage.src = mapImg;
mapImage.innerText = "mapImg";

const mapTitle = document.createElement("h2");
mapTitle.innerText = "Address";

const mapTxt = document.createElement("p");
mapTxt.innerText = "123 Oak Forest, ForestVille, Forest Country";

const telBar = document.createElement("div");
telBar.classList = "telBar";

const telTitle = document.createElement("h2");
telTitle.innerText = "Contacts";

const telTxt = document.createElement("p");
telTxt.innerText = "Whats: 1234-1235\nE-mail: therustic@oak.com\nSocial Media: @theRusticOak";

// appendChild Session - Where all turns to a single contact export

contact.appendChild(container);

container.appendChild(pageTitle);
container.appendChild(mapDiv);
container.appendChild(telBar);

mapDiv.appendChild(mapImage);
mapDiv.appendChild(mapTitle);
mapDiv.appendChild(mapTxt);

telBar.appendChild(telTitle);
telBar.appendChild(telTxt);

export { contact };