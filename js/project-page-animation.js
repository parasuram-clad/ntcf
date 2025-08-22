document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector(".projects-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        } else {
          entry.target.classList.remove("animate-in"); // 🔁 allow re-animation
        }
      });
    },
    { threshold: 0.2 }
  );

  if (target) observer.observe(target);
});

// Project animation

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".animate-project");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        } else {
          // 🔁 Remove class when out of view to allow re-animation
          entry.target.classList.remove("animate-in");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
