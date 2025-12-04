function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function sendMessage(event) {
    event.preventDefault();
    alert("Your message has been sent successfully!");
}

function contactDean() {
    alert("Redirecting to CIT contact information…");
}

function toggleProgram(card) {
    const text = card.querySelector("p");
    text.classList.toggle("hidden");
}

function showInfo(person) {
    if (person === "feliciano")
        alert("Mr. Frederick R. Feliciano — Dean & Program Head of CIT.");
    if (person === "john")
        alert("Prof. John Doe — Coordinator of Drafting Technology.");
    if (person === "maria")
        alert("Prof. Maria Santos — Coordinator of Electrical Technology.");
}
