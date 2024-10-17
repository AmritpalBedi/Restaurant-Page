export function createMenuPage() {
    const content = document.getElementById("content");

    const displayArea = document.createElement("div");
    displayArea.classList.toggle("display-area");

    const menuDiv = createMenuHeader();

    displayArea.append(menuDiv);

    content.append(displayArea);
}

function createMenuHeader() {
    const div = document.createElement("div");
    div.classList.toggle("menu");

    const header = document.createElement("h1");
    header.textContent = "Menu";

    div.appendChild(header);

    return div
}