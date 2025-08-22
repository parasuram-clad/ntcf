/**
 * @jest-environment jsdom
 */

describe("Project Pagination Slider", () => {
  // --- Your full code logic ---
  function setupPaginationSlider() {
    const projects = document.querySelectorAll(".section5-project");
    const paginationItems = document.querySelectorAll(
      ".section5-pagination li"
    );

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
      });
    }

    paginationItems.forEach((item) => {
      item.addEventListener("click", () => {
        const index = parseInt(item.dataset.index);
        showProject(index);
      });
    });
  }

  // --- Test setup ---
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="section5-project active">Project 1</div>
      <div class="section5-project">Project 2</div>
      <ul class="section5-pagination">
        <li data-index="0" class="active"></li>
        <li data-index="1"></li>
      </ul>
    `;

    jest.useFakeTimers(); // Mock timers for requestAnimationFrame
    setupPaginationSlider();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  // --- The test ---
  test("clicking pagination changes active project", () => {
    const projects = document.querySelectorAll(".section5-project");
    const paginations = document.querySelectorAll(".section5-pagination li");

    // Click second pagination item
    paginations[1].click();

    // Simulate next frame
    jest.runAllTimers();

    expect(projects[0].classList.contains("active")).toBe(false);
    expect(projects[1].classList.contains("active")).toBe(true);

    expect(paginations[0].classList.contains("active")).toBe(false);
    expect(paginations[1].classList.contains("active")).toBe(true);
  });
});
