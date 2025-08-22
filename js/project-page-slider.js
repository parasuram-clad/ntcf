document.querySelectorAll(".carousel").forEach((carousel) => {
  const images = carousel.querySelector(".carousel-images");
  const imgs = carousel.querySelectorAll("img");
  const totalImages = imgs.length;
  let index = 0;

  // Clone first image and append
  const firstClone = imgs[0].cloneNode(true);
  images.appendChild(firstClone);

  const updateCarousel = (withTransition = true) => {
    images.style.transition = withTransition
      ? "transform 0.5s ease-in-out"
      : "none";
    images.style.transform = `translateX(-${index * 100}%)`;
  };

  const moveToNextSlide = () => {
    index++;
    updateCarousel(true);
  };

  const moveToPrevSlide = () => {
    if (index === 0) {
      // jump to clone first → then go to last real slide
      index = totalImages - 1;
      updateCarousel(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          updateCarousel(true);
        });
      });
    } else {
      index--;
      updateCarousel(true);
    }
  };

  // Fix jump by using transitionend
  images.addEventListener("transitionend", () => {
    if (index === totalImages) {
      index = 0;
      updateCarousel(false); // instantly jump to first real image
    }
  });

  // Manual Controls
  carousel.querySelector(".next").addEventListener("click", moveToNextSlide);
  carousel.querySelector(".prev").addEventListener("click", moveToPrevSlide);

  // Auto-scroll every 10 seconds
  setInterval(moveToNextSlide, 10000);
});
