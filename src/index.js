import "./style/styles.css";
import { plate } from "./components/plates.js";
import testeImg from "./assets/teste.png";

console.log(plate);

const imgTeste = document.createElement("img");
imgTeste.src = testeImg;

document.body.appendChild(imgTeste);