document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("hero");
  const heroContent = document.getElementById("hero-content");
  const card1 = document.getElementById("card-1");
  const card2 = document.getElementById("card-2");
  const card3 = document.getElementById("card-3");

  const alreadyAnimated = sessionStorage.getItem("heroAnimated");

  if (alreadyAnimated === "true") {
    // Instantly apply final position, no animation
    hero.classList.add("hero-animated");
    return;
  }

  // Only animate when scroll happens once
  let animated = false;

  window.addEventListener("scroll", () => {
    if (!animated && window.scrollY > 100) {
      animated = true;

      heroContent.classList.add("translate-middle-y");

      setTimeout(() => card1.classList.add("card-slide-left"), 0);
      setTimeout(() => card2.classList.add("card-slide-left"), 200);
      setTimeout(() => card3.classList.add("card-slide-left"), 400);

      sessionStorage.setItem("heroAnimated", "true");
    }
  });
});
