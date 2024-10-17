export function createHomePage() {
    const content = document.getElementById("content");

    const displayArea = document.createElement("div");
    displayArea.classList.toggle("display-area");

    const compName = createCompName();

    displayArea.append(compName);

    content.append(displayArea);
}

function createCompName() {
    const div = document.createElement("div");
    div.classList.toggle("company-name");

    const h1 = document.createElement("h1");
    h1.textContent = "Beary's Breakfast Bar";

    div.appendChild(h1);
    
    return div
}

