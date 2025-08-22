const header = document.querySelector(".header");
const logo = document.getElementById("siteLogo"); // Get the logo image

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const logo = document.getElementById("siteLogo");

  if (header) {
    window.addEventListener("scroll", () => {
      const isScrolled = window.scrollY > 10;

      header.classList.toggle("sticky", isScrolled);

      if (logo) {
        logo.src = isScrolled
          ? "assets/NTC-Infra-Logo.webp"
          : "assets/NTC-Infra-Logo-white.webp";
      }
    });
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

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footer.classList.add("visible");
        } else {
          footer.classList.remove("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(footer);
});
