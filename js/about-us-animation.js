document.addEventListener("DOMContentLoaded", () => {
  const aboutHero = document.querySelectorAll(".aboutus-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        } else {
          entry.target.classList.remove("animate-in"); // optional if you want to re-animate on scroll
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  aboutHero.forEach((section) => observer.observe(section));
});

// about us section animation

document.addEventListener("DOMContentLoaded", () => {
  const imageBox = document.querySelector(".animate-left");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        } else {
          entry.target.classList.remove("animate-in"); // Optional reset
        }
      });
    },
    { threshold: 0.3 }
  );

  if (imageBox) observer.observe(imageBox);
});
// vmv animation

document.addEventListener("DOMContentLoaded", () => {
  const vmvElements = document.querySelectorAll(
    ".vmv-animate-left, .vmv-animate-right, .vmv-animate-fade"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("vmv-animate-in");
        } else {
          entry.target.classList.remove("vmv-animate-in"); // Optional reset
        }
      });
    },
    { threshold: 0.2 }
  );

  vmvElements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".vmv-animate-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Stagger using timeout
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 200); // delay each by 200ms
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  items.forEach((item) => observer.observe(item));
});
