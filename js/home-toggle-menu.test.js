/**
 * @jest-environment jsdom
 */

// ✅ Mock IntersectionObserver for footer animation test
global.IntersectionObserver = class {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
    this._element = null;
  }

  observe(element) {
    this._element = element;

    // Simulate intersection
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
  // 🧱 Setup DOM
  document.body.innerHTML = `
    <div class="header"></div>
    <img id="siteLogo" />
    <div class="header-style"></div>
    <div class="footer-section"></div>
    <div id="mobileNav"></div>
    <button id="hamburger"></button>
    <button id="closeBtn"></button>
  `;

  // 🌀 Clear previous modules and re-require JS file
  jest.resetModules();
  require("./home-toggle-menu.js");

  // ✅ Simulate DOMContentLoaded
  document.dispatchEvent(new Event("DOMContentLoaded"));
});

describe("Header scroll interaction", () => {
  it("adds and removes 'sticky' class and changes logo src based on scroll", () => {
    const header = document.querySelector(".header");
    const logo = document.getElementById("siteLogo");

    Object.defineProperty(window, "scrollY", {
      configurable: true,
      get: () => 20,
    });
    window.dispatchEvent(new Event("scroll"));

    expect(header.classList.contains("sticky")).toBe(true);
    expect(logo.src).toMatch(/NTC-Infra-Logo\.webp/);

    Object.defineProperty(window, "scrollY", {
      configurable: true,
      get: () => 0,
    });
    window.dispatchEvent(new Event("scroll"));

    expect(header.classList.contains("sticky")).toBe(false);
    expect(logo.src).toMatch(/NTC-Infra-Logo-white\.webp/);
  });

  it("adds and removes 'sticky' class on .header-style based on scroll", () => {
    const headerStyle = document.querySelector(".header-style");

    Object.defineProperty(window, "scrollY", {
      configurable: true,
      get: () => 15,
    });
    window.dispatchEvent(new Event("scroll"));

    expect(headerStyle.classList.contains("sticky")).toBe(true);

    Object.defineProperty(window, "scrollY", {
      configurable: true,
      get: () => 0,
    });
    window.dispatchEvent(new Event("scroll"));

    expect(headerStyle.classList.contains("sticky")).toBe(false);
  });
});

describe("Footer visibility animation", () => {
  it("adds 'visible' class when footer enters viewport", () => {
    const footer = document.querySelector(".footer-section");

    // ✅ This is auto-triggered by the mocked IntersectionObserver
    expect(footer.classList.contains("visible")).toBe(true);
  });
});
