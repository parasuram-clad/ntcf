//hero animation
document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero-content");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          heroContent.classList.add("visible");
        } else {
          heroContent.classList.remove("visible"); // Remove to re-trigger when re-entered
        }
      });
    },
    { threshold: 0.5 } // Adjust as needed
  );

  observer.observe(heroContent);
});

//hero title animation
document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.getElementById("heroTitle");
  const heroSubtitle = document.getElementById("heroSubtitle");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // restart title animation
          heroTitle.classList.remove("animate-hero-title");
          void heroTitle.offsetWidth;
          heroTitle.classList.add("animate-hero-title");

          // restart subtitle animation
          heroSubtitle.classList.remove("animate-hero-subtitle");
          void heroSubtitle.offsetWidth;
          heroSubtitle.classList.add("animate-hero-subtitle");
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(heroTitle);
});

//what we do
document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector(".what-we-do-container");

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
    {
      threshold: 0.4, // Adjust based on how early you want to trigger
    }
  );

  if (target) observer.observe(target);
});

//what we do detail
document.addEventListener("DOMContentLoaded", () => {
  const left = document.querySelector(".what-we-do-detail-left");
  const right = document.querySelector(".what-we-do-detail-bottom");
  const blocks = document.querySelectorAll(".what-we-do-detail-block");

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
    { threshold: 0.3 }
  );

  if (left) observer.observe(left);
  if (right) observer.observe(right);
  blocks.forEach((block) => observer.observe(block));
});

//projects-tease
document.addEventListener("DOMContentLoaded", () => {
  const projectContainer = document.querySelector(".projects-tease-container");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          projectContainer.classList.add("visible");
        } else {
          projectContainer.classList.remove("visible");
        }
      });
    },
    { threshold: 0.4 }
  );

  if (projectContainer) {
    observer.observe(projectContainer);
  }
});

// Projects animation
document.addEventListener("DOMContentLoaded", () => {
  const projectSection = document.querySelector(".project-section"); // <-- FIXED (added .)

  if (!projectSection) return; // safety check

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          projectSection.classList.add("visible");
        } else {
          projectSection.classList.remove("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(projectSection);
});

// Example basic logic – update this with your actual logic
document.querySelectorAll(".section5-pagination li").forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const projects = document.querySelectorAll(".section5-project");

    projects.forEach((proj, i) => {
      proj.classList.remove("active", "visible");
    });

    projects[index].classList.add("active");

    // 🔁 Force reflow to restart animation
    void projects[index].offsetWidth;

    projects[index].classList.add("visible");
  });
});

//what-we-focus
document.addEventListener("DOMContentLoaded", () => {
  const focusSection = document.querySelector(".what-we-focus");

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
    {
      threshold: 0.5, // Trigger when 40% is visible
    }
  );

  observer.observe(focusSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".industries-focus-section");

  // If screen is less than 720px, skip animation and show directly
  if (window.innerWidth < 720) {
    section.classList.add("visible", "animate-cards");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("visible");

          // Wait for the expand animation to finish before showing cards
          setTimeout(() => {
            section.classList.add("animate-cards");
          }, 100); // match animation duration
        } else {
          // Reset animation classes for re-entry
          section.classList.remove("visible", "animate-cards");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(section);
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
