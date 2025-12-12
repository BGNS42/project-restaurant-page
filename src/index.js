import "./style/styles.css";
import { plate } from "./components/plates.js";
import { pageLoad } from "./components/pageLoad.js";
//import testeImg from "./assets/teste.png";
import { home } from "./components/home.js";
import { contact } from "./components/contact.js";

console.log(plate);

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

pageLoad(home);