// Intersection Observer for hero section animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedSections = document.querySelectorAll(".hero-animate");

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
    {
      threshold: 0.2,
    }
  );

  animatedSections.forEach((section) => observer.observe(section));
});

// Intersection Observer for team section animation
document.addEventListener("DOMContentLoaded", () => {
  const teamSection = document.querySelector(".ourteam-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.3 } // Trigger when 50% of the section is visible
  );

  observer.observe(teamSection); // Observe the team section
});

// Intersection Observer for team member animations

document.addEventListener("DOMContentLoaded", () => {
  const teamSections = document.querySelectorAll(".team-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible"); // Optional: reset on scroll out
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  teamSections.forEach((section) => observer.observe(section));
});

// Intersection Observer for team member animations (alternative)
document.addEventListener("DOMContentLoaded", () => {
  const animatedMembers = document.querySelectorAll(".team-animate-2");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        } else {
          entry.target.classList.remove("animate-in"); // Optional: reset on scroll out
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  animatedMembers.forEach((el) => observer.observe(el));
});
