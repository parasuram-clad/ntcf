// window.addEventListener("scroll", function () {
//   const section = document.querySelector(".what-we-do");
//   const offset = window.pageYOffset;
//   section.style.backgroundPositionY = `${-offset * 0.2}px`;
// });

// const projectSection = document.querySelector(".projects-tease");

// window.addEventListener("scroll", () => {
//   const scrollY = window.pageYOffset;
//   projectSection.style.backgroundPositionY = `${-scrollY * 0.08}px`;
// });
// const whatWeFocusSection = document.querySelector(".what-we-focus");
// window.addEventListener("scroll", () => {
//   const scrollY = window.pageYOffset;
//   whatWeFocusSection.style.backgroundPositionY = `${-scrollY * 0.04}px`;
// });

// Include.js - Dynamically load HTML components
document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("[data-include]");
  let includeCount = includes.length;
  let loadedCount = 0;

  includes.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    const res = await fetch(file);
    if (res.ok) {
      el.innerHTML = await res.text();

      if (file.includes("our-team-header.html")) {
        setActiveNavLink(); // Optional highlight
      }
    } else {
      el.innerHTML = "Component not found.";
    }

    loadedCount++;
    if (loadedCount === includeCount) {
      scrollToHash(); // 👈 scroll only after all includes are loaded
    }
  });

  function scrollToHash() {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".our-team-nav a");
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (currentPath === href || currentPath.endsWith(href)) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
});
