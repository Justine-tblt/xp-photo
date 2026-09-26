// menu mobile
const header = document.querySelector(".header");
const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelectorAll(".nav a");

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  header.classList.remove("menu-open");
  menuButton.querySelector(".sr-only").textContent = "Ouvrir le menu principal";
}

function openMenu() {
  menuButton.setAttribute("aria-expanded", "true");
  header.classList.add("menu-open");
  menuButton.querySelector(".sr-only").textContent = "Fermer le menu principal";
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  isOpen ? closeMenu() : openMenu();
});

// fermeture du menu
navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// fermeture à échap
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuButton.focus();
  }
});

// année
document.querySelector("#year").textContent = new Date().getFullYear();
