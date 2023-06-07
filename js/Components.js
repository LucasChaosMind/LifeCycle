import { footer } from "../components/footer.js";
import { header } from "../components/header.js";

window.addEventListener('DOMContentLoaded', () =>{
    const appFooter = document.getElementById("footer");
    appFooter.innerHTML += footer;

    const appHeader = document.getElementById("header");
    appFooter.innerHTML += header;
    
});