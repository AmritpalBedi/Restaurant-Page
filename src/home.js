export function createHomePage() {
    const content = document.getElementById("content");

    const displayArea = document.createElement("div");
    displayArea.classList.toggle("display-area");

    const compNameDiv = createCompName();
    const taglineDiv = createTagline();
    const hoursDiv = createHours();
    const locationDiv = createLocation();

    displayArea.append(compNameDiv);
    displayArea.append(taglineDiv);
    displayArea.append(hoursDiv);
    displayArea.append(locationDiv);

    content.append(displayArea);
}

function createCompName() {
    const div = document.createElement("div");
    div.classList.toggle("company-name");

    const header = document.createElement("h1");
    header.textContent = "Beary's Breakfast Bar";

    div.appendChild(header);

    return div
}

function createTagline() {
    const div = document.createElement("div");
    div.classList.toggle("tagline");

    const quote = document.createElement("div");
    quote.classList.toggle("quote");
    quote.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";

    div.appendChild(quote);

    const header = document.createElement("h3");
    header.classList.toggle("quote-author");
    header.textContent = "Goldilocks";

    div.appendChild(header);

    return div
}

function createHours() {
    const div = document.createElement("div");
    div.classList.toggle("hours");

    const header = document.createElement("h2");
    header.textContent = "Hours";
    div.appendChild(header);

    const schedule = document.createElement("div");
    schedule.classList.toggle("schedule");

    const sunday = document.createElement("div");
    sunday.classList.toggle("days");
    sunday.textContent = "Sunday: 8am - 8pm";
    schedule.appendChild(sunday);

    const monday = document.createElement("div");
    monday.classList.toggle("days");
    monday.textContent = "Monday: 6am - 6pm";
    schedule.appendChild(monday);

    const tuesday = document.createElement("div");
    tuesday.classList.toggle("days");
    tuesday.textContent = "Tuesday: 6am - 6pm";
    schedule.appendChild(tuesday);

    const wednesday = document.createElement("div");
    wednesday.classList.toggle("days");
    wednesday.textContent = "Wednesday: 6am - 6pm";
    schedule.appendChild(wednesday);

    const thursday = document.createElement("div");
    thursday.classList.toggle("days");
    thursday.textContent = "Thursday: 6am - 10pm";
    schedule.appendChild(thursday);

    const friday = document.createElement("div");
    friday.classList.toggle("days");
    friday.textContent = "Friday: 6am - 10pm";
    schedule.appendChild(friday);

    const saturday = document.createElement("div");
    saturday.classList.toggle("days");
    saturday.textContent = "Saturday: 8am - 10pm";
    schedule.appendChild(saturday);

    div.appendChild(schedule);

    return div;
}

function createLocation() {
    const div = document.createElement("div");
    div.classList.toggle("location");

    const header = document.createElement("h2");
    header.textContent = "Location";
    div.appendChild(header);

    const address = document.createElement("div");
    address.classList.toggle("address");
    address.textContent = "123 Forest Drive, Forestville, Maine";
    div.appendChild(address);

    return div;
}

