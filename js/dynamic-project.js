const projects = document.querySelectorAll(".section5-project");
const paginationItems = document.querySelectorAll(".section5-pagination li");

let currentIndex = 0;

function showProject(index) {
  if (index === currentIndex) return;

  const current = projects[currentIndex];
  const next = projects[index];

  current.classList.remove("active");
  paginationItems[currentIndex].classList.remove("active");

  requestAnimationFrame(() => {
    next.classList.add("active");
    paginationItems[index].classList.add("active");
    currentIndex = index;

    const isMobile = window.innerWidth <= 768;

    // Get titles and values
    const clientTitle = document.getElementById("meta-client-title");
    const industryTitle = document.getElementById("meta-industry-title");
    const sectorTitle = document.getElementById("meta-sector-title");

    const clientValue = document.getElementById("meta-client");
    const industryValue = document.getElementById("meta-industry");
    const sectorValue = document.getElementById("meta-sector");

    const allMetaElements = [
      clientTitle,
      clientValue,
      industryTitle,
      industryValue,
      sectorTitle,
      sectorValue,
    ];

    // Remove animation classes and force reflow
    allMetaElements.forEach((el) => {
      el.classList.remove("animate-up", "animate-left", "animate-right");
      void el.offsetWidth;
    });

    // Apply animation based on device size
    if (isMobile) {
      clientTitle.classList.add("animate-left");
      clientValue.classList.add("animate-left");

      industryTitle.classList.add("animate-right");
      industryValue.classList.add("animate-right");

      sectorTitle.classList.add("animate-left");
      sectorValue.classList.add("animate-left");
    } else {
      allMetaElements.forEach((el) => el.classList.add("animate-up"));
    }

    // Update values
    clientValue.textContent = next.dataset.client || "N/A";
    industryValue.textContent = next.dataset.industry || "N/A";
    sectorValue.textContent = next.dataset.sector || "N/A";
  });
}

// Pagination click listeners
paginationItems.forEach((item) => {
  item.addEventListener("click", () => {
    const index = parseInt(item.dataset.index);
    showProject(index);
  });
});
