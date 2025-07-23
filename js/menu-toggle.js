const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".our-team-nav");
const overlay = document.getElementById("menuOverlay");
const closeBtn = document.getElementById("menuClose");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  toggle.classList.toggle("open");
  overlay.style.display = nav.classList.contains("open") ? "block" : "none";
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.classList.remove("open");
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.classList.remove("open");
  overlay.style.display = "none";
});
