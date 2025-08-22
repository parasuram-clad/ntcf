document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".service-hero-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        } else {
          entry.target.classList.remove("animate-in");
        }
      });
    },
    { threshold: 0.2 }
  );

  if (heroSection) observer.observe(heroSection);
});

// Card animation
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".property-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${index * 150}ms`;
          entry.target.classList.add("animate-in");
        } else {
          entry.target.classList.remove("animate-in");
          entry.target.style.animationDelay = "0ms";
        }
      });
    },
    { threshold: 0.3 }
  );

  cards.forEach((card) => observer.observe(card));
});
// Why choose us animation
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".why-choose-section");
  const cards = document.querySelectorAll(".why-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 150}ms`;
            card.classList.add("in-view");
          });
        } else {
          cards.forEach((card) => {
            card.classList.remove("in-view");
            card.style.transitionDelay = "0ms";
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  if (section) observer.observe(section);
});
