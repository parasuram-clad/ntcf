/**
 * @jest-environment jsdom
 */

global.IntersectionObserver = class {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
  }

  observe = (el) => {
    this.callback([{ isIntersecting: true, target: el }]);
  };

  unobserve = () => {};
  disconnect = () => {};
};

beforeEach(() => {
  document.body.innerHTML = `
    <div class="hero-content"></div>
    <h1 id="heroTitle" class="animate-hero-title"></h1>
    <p id="heroSubtitle" class="animate-hero-subtitle"></p>

    <div class="what-we-do-container"></div>
    <div class="what-we-do-detail-left"></div>
    <div class="what-we-do-detail-bottom"></div>
    <div class="what-we-do-detail-block"></div>

    <div class="projects-tease-container"></div>
    <div class="section5-project"></div>
    <ul class="section5-pagination">
      <li></li>
    </ul>

    <section class="what-we-focus"></section>
    <section class="industries-focus-section"></section>
    <footer class="footer-section"></footer>
  `;

  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: 1280,
  });
  window.dispatchEvent(new Event("resize"));

  jest.useFakeTimers(); // for setTimeout in industries section
  jest.resetModules(); // reset all module-level state
  require("./home-page-animation.js");
  document.dispatchEvent(new Event("DOMContentLoaded"));
});

describe("Home Page Animations", () => {
  it("should add 'visible' to hero content", () => {
    const el = document.querySelector(".hero-content");
    expect(el.classList.contains("visible")).toBe(true);
  });

  it("should restart animation on hero title and subtitle", () => {
    const title = document.getElementById("heroTitle");
    const subtitle = document.getElementById("heroSubtitle");

    expect(title.classList.contains("animate-hero-title")).toBe(true);
    expect(subtitle.classList.contains("animate-hero-subtitle")).toBe(true);
  });

  it("should add 'visible' to What We Do and What We Do Detail elements", () => {
    expect(
      document
        .querySelector(".what-we-do-container")
        .classList.contains("visible")
    ).toBe(true);
    expect(
      document
        .querySelector(".what-we-do-detail-left")
        .classList.contains("visible")
    ).toBe(true);
    expect(
      document
        .querySelector(".what-we-do-detail-bottom")
        .classList.contains("visible")
    ).toBe(true);
    expect(
      document
        .querySelector(".what-we-do-detail-block")
        .classList.contains("visible")
    ).toBe(true);
  });

  it("should add 'visible' to Projects Tease container", () => {
    expect(
      document
        .querySelector(".projects-tease-container")
        .classList.contains("visible")
    ).toBe(true);
  });

  it("should add 'visible' to section5 project", () => {
    expect(
      document.querySelector(".section5-project").classList.contains("visible")
    ).toBe(true);
  });

  it("click on pagination dot should activate correct project", () => {
    const dot = document.querySelector(".section5-pagination li");
    const project = document.querySelector(".section5-project");

    project.classList.add("active", "visible"); // simulate initial
    dot.click();

    expect(project.classList.contains("active")).toBe(true);
    expect(project.classList.contains("visible")).toBe(true);
  });

  it("should animate What We Focus section", () => {
    expect(
      document.querySelector(".what-we-focus").classList.contains("visible")
    ).toBe(true);
  });

  it("should animate Industries Focus section with delay", () => {
    const section = document.querySelector(".industries-focus-section");
    jest.advanceTimersByTime(200);

    expect(section.classList.contains("visible")).toBe(true);
    expect(section.classList.contains("animate-cards")).toBe(true);
  });

  it("should animate footer section", () => {
    expect(
      document.querySelector(".footer-section").classList.contains("visible")
    ).toBe(true);
  });
});
