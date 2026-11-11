const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("open");

    if (mainNav.classList.contains("open")) {
        menuToggle.textContent = "×";
    } else {
        menuToggle.textContent = "☰";
    }
});

const navLinks = document.querySelectorAll("#mainNav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});

const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(function (link) {
        link.removeAttribute("aria-current");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.setAttribute("aria-current", "location");
        }
    });
});