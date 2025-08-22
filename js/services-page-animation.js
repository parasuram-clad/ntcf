document.addEventListener("DOMContentLoaded", () => {
  const animatedSections = document.querySelectorAll(".services-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        } else {
          entry.target.classList.remove("animate-in"); // optional: remove for one-time animation
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  animatedSections.forEach((section) => observer.observe(section));
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${index * 150}ms`;
          entry.target.classList.add("in-view");
        } else {
          // 🔁 Remove the class to reset animation
          entry.target.classList.remove("in-view");
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});
