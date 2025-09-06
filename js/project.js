document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("projectSlider");
  const projects = document.querySelectorAll(".project");
  const totalProjects = projects.length;

  // Clone first and last slides
  const firstClone = projects[0].cloneNode(true);
  const lastClone = projects[totalProjects - 1].cloneNode(true);

  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, projects[0]);

  const allSlides = document.querySelectorAll(".project");
  const totalSlides = allSlides.length;

  let currentIndex = 1; // Start at "real" first project (after lastClone)
  let autoSlideInterval;
  const slideWidth = 100;

  // Set initial position
  slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;

  function goToSlide(index) {
    slider.style.transition = "transform 0.6s ease-in-out";
    slider.style.transform = `translateX(-${index * slideWidth}%)`;
    currentIndex = index;
  }

  function nextProject() {
    if (currentIndex >= totalSlides - 1) return; // Prevent overflow
    goToSlide(currentIndex + 1);
  }

  function prevProject() {
    if (currentIndex <= 0) return; // Prevent underflow
    goToSlide(currentIndex - 1);
  }

  // Transition end – handle clones
  slider.addEventListener("transitionend", () => {
    if (allSlides[currentIndex] === firstClone) {
      slider.style.transition = "none";
      currentIndex = 1; // Jump to real first
      slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    }
    if (allSlides[currentIndex] === lastClone) {
      slider.style.transition = "none";
      currentIndex = totalProjects; // Jump to real last
      slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    }
  });

  // Buttons
  document.getElementById("nextBtn").addEventListener("click", nextProject);
  document.getElementById("prevBtn").addEventListener("click", prevProject);

  // Auto slide
  function startAutoSlide() {
    if (!autoSlideInterval) {
      autoSlideInterval = setInterval(nextProject, 10000);
    }
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }

  startAutoSlide();
});
