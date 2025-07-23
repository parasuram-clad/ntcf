const header = document.querySelector(".header");
const logo = document.getElementById("siteLogo"); // Get the logo image

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("sticky");
    logo.src = "assets/NTC-Infra-Logo.webp"; // Sticky logo
  } else {
    header.classList.remove("sticky");
    logo.src = "assets/NTC-Infra-Logo-white.webp"; // Default logo
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header-style");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
});

const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
  mobileNav.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  mobileNav.classList.remove("show");
});
