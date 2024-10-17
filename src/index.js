import { createHomePage } from "./home";
import { createMenuPage } from "./menu";
import { createContactPage } from "./contact";
import "./styles.css";

createHomePage();

const navButtons = document.querySelectorAll("button");
navButtons.forEach(element => {
    element.addEventListener("click", () => {
        changeNavTag(element);
        changeCurrentPage(element)
    })
})

function changeNavTag(element) {
    let currentButton = document.querySelector(".current");
    currentButton.classList.toggle("current");
    currentButton = element;
    element.classList.toggle("current");
}

function changeCurrentPage(element) {
    const content = document.getElementById(element.parentElement.parentElement.nextElementSibling.id);

    content.textContent = "";

    if (element.innerText === "Home") {
        createHomePage();
    } else if (element.innerText === "Menu") {
        createMenuPage();
    } else if (element.innerText === "Contact") {
        createContactPage();
    }
}