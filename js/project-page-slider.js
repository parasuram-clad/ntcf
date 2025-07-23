document.querySelectorAll('.carousel').forEach(carousel => {
  const images = carousel.querySelector('.carousel-images');
  const imgs = carousel.querySelectorAll('img');
  let index = 0;

  const updateCarousel = () => {
    images.style.transform = `translateX(-${index * 100}%)`;
  };

  carousel.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % imgs.length;
    updateCarousel();
  });

  carousel.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + imgs.length) % imgs.length;
    updateCarousel();
  });
});
