/**
 * @jest-environment jsdom
 */

let sectionObserverCallback = null;
let cardObserverCallback = null;

global.IntersectionObserver = class {
  constructor(callback, options) {
    // differentiate based on threshold (custom logic)
    if (options.threshold === 0.3) {
      sectionObserverCallback = callback;
    } else if (options.threshold === 0.2) {
      cardObserverCallback = callback;
    }
    this.options = options;
  }

  observe() {}
  unobserve() {}
  disconnect() {}
};

beforeEach(() => {
  document.body.innerHTML = `
    <section class="services-animate"></section>
    <section class="services-animate"></section>
    <div class="service-card"></div>
    <div class="service-card"></div>
    <div class="service-card"></div>
  `;

  jest.useFakeTimers();
  jest.resetModules(); // fresh import
  require("./services-page-animation.js");

  document.dispatchEvent(new Event("DOMContentLoaded"));
});

describe("services-page-animation.js", () => {
  it("adds 'animate-in' to all .services-animate sections", () => {
    const sections = document.querySelectorAll(".services-animate");

    // Simulate IntersectionObserver entries for sections
    sectionObserverCallback(
      Array.from(sections).map((el) => ({ target: el, isIntersecting: true }))
    );

    sections.forEach((section) => {
      expect(section.classList.contains("animate-in")).toBe(true);
    });
  });

  it("adds 'in-view' and sets stagger delay for .service-card elements", () => {
    const cards = document.querySelectorAll(".service-card");

    // Simulate IntersectionObserver entries for cards
    cardObserverCallback(
      Array.from(cards).map((el, index) => ({
        target: el,
        isIntersecting: true,
      }))
    );

    cards.forEach((card, index) => {
      expect(card.classList.contains("in-view")).toBe(true);
      expect(card.style.animationDelay).toBe(`${index * 150}ms`);
    });
  });
});
