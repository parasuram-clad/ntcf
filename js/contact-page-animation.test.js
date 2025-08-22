/**
 * @jest-environment jsdom
 */

// ✅ Mock IntersectionObserver
global.IntersectionObserver = class {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
  }

  observe(element) {
    // Simulate element in view
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
  // 🧱 Add HTML elements required for both animations
  document.body.innerHTML = `
    <section class="contact-animate"></section>
    <div class="contact-left"></div>
    <div class="contact-right"></div>
    <div class="contact-detail"></div>
    <div class="map-container"></div>
  `;

  jest.resetModules(); // Reset modules before re-import
  require("./contact-page-animation.js");

  // Simulate DOMContentLoaded
  document.dispatchEvent(new Event("DOMContentLoaded"));
});

describe("Contact Page Animations", () => {
  it("adds 'animate-in' to .contact-animate", () => {
    const el = document.querySelector(".contact-animate");
    expect(el.classList.contains("animate-in")).toBe(true);
  });

  it("adds 'animate-in' to all contact content elements", () => {
    const selectors = [
      ".contact-left",
      ".contact-right",
      ".contact-detail",
      ".map-container",
    ];

    selectors.forEach((selector) => {
      const el = document.querySelector(selector);
      expect(el.classList.contains("animate-in")).toBe(true);
    });
  });
});
