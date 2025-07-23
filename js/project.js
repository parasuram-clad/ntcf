document.addEventListener("DOMContentLoaded", () => {
  const allProjects = document.querySelectorAll(".section5-project");

  allProjects.forEach((project) => {
    const imagesContainer = project.querySelector(".carousel-images");
    const images = imagesContainer.querySelectorAll("img");
    const dotsContainer = project.querySelector(".carousel-dots");
    const nextBtn = project.querySelector(".carousel-arrow.next");
    const prevBtn = project.querySelector(".carousel-arrow.prev");

    const totalSlides = images.length;
    let currentSlide = 0;
    let autoSlideInterval;

    // Generate dots
    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.setAttribute("data-index", i);
      dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll(".dot");

    function updateDots(index) {
      dots.forEach((dot) => dot.classList.remove("active"));
      if (dots[index]) dots[index].classList.add("active");
    }

    function showSlide(index) {
      if (index < 0 || index >= totalSlides) return;

      const slideWidth = imagesContainer.clientWidth; // Dynamically get container width
      imagesContainer.style.transition = "transform 0.6s ease-out";
      imagesContainer.style.transform = `translateX(-${index * slideWidth}px)`;

      updateDots(index);
      currentSlide = index;
    }

    function nextSlide() {
      const nextIndex = (currentSlide + 1) % totalSlides;
      showSlide(nextIndex);
    }

    function prevSlide() {
      const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(prevIndex);
    }

    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function restartAutoSlide() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    }

    // Arrow navigation
    nextBtn?.addEventListener("click", () => {
      nextSlide();
      restartAutoSlide();
    });

    prevBtn?.addEventListener("click", () => {
      prevSlide();
      restartAutoSlide();
    });

    // Dot navigation
    dotsContainer?.addEventListener("click", (e) => {
      if (e.target.classList.contains("dot")) {
        const index = parseInt(e.target.dataset.index);
        showSlide(index);
        restartAutoSlide();
      }
    });

    // Recalculate position on window resize
    window.addEventListener("resize", () => {
      showSlide(currentSlide);
    });

    // Initialize carousel
    showSlide(0);
    startAutoSlide();
  });
});
