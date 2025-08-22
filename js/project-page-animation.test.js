/**
 * @jest-environment jsdom
 */

// ✅ Mock IntersectionObserver globally
global.IntersectionObserver = class {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
    this.elements = [];
  }

  observe(element) {
    this.elements.push(element);
    // Simulate entering viewport
    this.callback([{ isIntersecting: true, target: element }]);
  }

  unobserve() {}
  disconnect() {}
};

beforeEach(() => {
  document.body.innerHTML = `
    <section class="projects-animate"></section>
    <div class="animate-project"></div>
    <div class="animate-project"></div>
  `;

  jest.resetModules(); // reload script cleanly
  require("./project-page-animation.js");
  document.dispatchEvent(new Event("DOMContentLoaded"));
});

describe("Project Page Animations", () => {
  it('adds "animate-in" to .projects-animate when intersecting', () => {
    const el = document.querySelector(".projects-animate");
    expect(el.classList.contains("animate-in")).toBe(true);
  });

  it('adds "animate-in" to each .animate-project element when intersecting', () => {
    const elements = document.querySelectorAll(".animate-project");
    elements.forEach((el) => {
      expect(el.classList.contains("animate-in")).toBe(true);
    });
  });
});
