export function createContactPage() {
    const content = document.getElementById("content");

    const displayArea = document.createElement("div");
    displayArea.classList.toggle("display-area");

    const contactDiv = createContactHeader();

    displayArea.append(contactDiv);

    content.append(displayArea);
}

function createContactHeader() {
    const div = document.createElement("div");
    div.classList.toggle("contact");

    const header = document.createElement("h1");
    header.textContent = "Contact Us";

    div.appendChild(header);

    return div
}