/**
 * @jest-environment jsdom
 */

jest.useFakeTimers();

beforeEach(() => {
  document.body.innerHTML = `
    <div class="section5-project">
      <div class="carousel-images" style="width: 300px;">
        <img src="img1.jpg" />
        <img src="img2.jpg" />
        <img src="img3.jpg" />
      </div>
      <div class="carousel-dots"></div>
      <div class="carousel-arrow prev"></div>
      <div class="carousel-arrow next"></div>
    </div>
  `;

  jest.resetModules();
  require("./project.js");
  document.dispatchEvent(new Event("DOMContentLoaded"));
});

describe("Carousel Functionality", () => {
  it("generates correct number of dots", () => {
    const dots = document.querySelectorAll(".dot");
    expect(dots.length).toBe(3);
  });

  it("activates correct dot on initialization", () => {
    const dots = document.querySelectorAll(".dot");
    expect(dots[0].classList.contains("active")).toBe(true);
  });

  it("navigates to next slide on next arrow click", () => {
    const nextBtn = document.querySelector(".carousel-arrow.next");
    nextBtn.click();

    const dots = document.querySelectorAll(".dot");
    expect(dots[1].classList.contains("active")).toBe(true);
  });

  it("navigates to previous slide on prev arrow click", () => {
    const prevBtn = document.querySelector(".carousel-arrow.prev");
    prevBtn.click();

    const dots = document.querySelectorAll(".dot");
    expect(dots[2].classList.contains("active")).toBe(true); // wrap around
  });

  it("jumps to specific slide on dot click", () => {
    const dots = document.querySelectorAll(".dot");
    dots[2].click();

    expect(dots[2].classList.contains("active")).toBe(true);
  });

  it("auto advances to next slide every 5 seconds", () => {
    const dots = document.querySelectorAll(".dot");

    jest.advanceTimersByTime(5000);
    expect(dots[1].classList.contains("active")).toBe(true);

    jest.advanceTimersByTime(5000);
    expect(dots[2].classList.contains("active")).toBe(true);
  });
});
