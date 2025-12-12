import "./style/styles.css";
import { pageLoad } from "./components/pageLoad.js";
import { home } from "./pages/home.js";
import { contact } from "./pages/contact.js";
import { menu } from "./pages/menu.js";

pageLoad(home);

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        switch (e.target.className) {
            case "home":
                pageLoad(home);
                break;
            case "menu":
                pageLoad(menu);
                break;
            case "about":
                pageLoad(contact);
                break;
            default:
                console.log("Deu ruim no botão");
                break;
        };
    });
});