document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.querySelector(".contact-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        } else {
          entry.target.classList.remove("animate-in"); // optional: reset animation on scroll out
        }
      });
    },
    { threshold: 0.2 }
  );

  if (contactSection) observer.observe(contactSection);
});

// Contact Page Animation
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".contact-left, .contact-right, .contact-detail, .map-container"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
});
