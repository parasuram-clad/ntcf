const projects = document.querySelectorAll(".section5-project");
const paginationItems = document.querySelectorAll(".section5-pagination li");

let currentIndex = 0;

function showProject(index) {
  if (index === currentIndex) return;

  const current = projects[currentIndex];
  const next = projects[index];

  // Deactivate current
  current.classList.remove("active");
  paginationItems[currentIndex].classList.remove("active");

  // Wait for next repaint before adding next
  requestAnimationFrame(() => {
    next.classList.add("active");
    paginationItems[index].classList.add("active");
    currentIndex = index;
  });
}

// Pagination click listeners
paginationItems.forEach((item) => {
  item.addEventListener("click", () => {
    const index = parseInt(item.dataset.index);
    showProject(index);
  });
});
