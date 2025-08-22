/**
 * @jest-environment jsdom
 */

// ✅ Mock IntersectionObserver globally
global.IntersectionObserver = class {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
  }

  observe(element) {
    // Immediately simulate intersection
    this.callback([
      {
        isIntersecting: true,
        target: element,
      },
    ]);
  }

  unobserve() {}
  disconnect() {}
};

beforeEach(() => {
  // 🧱 Inject all elements needed for each observer
  document.body.innerHTML = `
    <section class="aboutus-animate"></section>
    <div class="animate-left"></div>
    <div class="vmv-animate-left"></div>
    <div class="vmv-animate-right"></div>
    <div class="vmv-animate-fade"></div>
    <div class="vmv-animate-item"></div>
    <div class="vmv-animate-item"></div>
  `;

  jest.useFakeTimers(); // For testing stagger timeout
  jest.resetModules(); // Fresh require
  require("./about-us-animation.js");

  // DOMContentLoaded
  document.dispatchEvent(new Event("DOMContentLoaded"));
});

describe("About Us Animations", () => {
  it("adds 'animate-in' to .aboutus-animate elements", () => {
    const el = document.querySelector(".aboutus-animate");
    expect(el.classList.contains("animate-in")).toBe(true);
  });

  it("adds 'animate-in' to .animate-left element", () => {
    const el = document.querySelector(".animate-left");
    expect(el.classList.contains("animate-in")).toBe(true);
  });

  it("adds 'vmv-animate-in' to vmv-related elements", () => {
    const left = document.querySelector(".vmv-animate-left");
    const right = document.querySelector(".vmv-animate-right");
    const fade = document.querySelector(".vmv-animate-fade");

    expect(left.classList.contains("vmv-animate-in")).toBe(true);
    expect(right.classList.contains("vmv-animate-in")).toBe(true);
    expect(fade.classList.contains("vmv-animate-in")).toBe(true);
  });

  it("adds 'visible' to .vmv-animate-item elements with stagger", () => {
    const items = document.querySelectorAll(".vmv-animate-item");

    // Fast-forward all timers (staggered animations)
    jest.runAllTimers();

    items.forEach((el) => {
      expect(el.classList.contains("visible")).toBe(true);
    });
  });
});
