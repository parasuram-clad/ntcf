/**
 * @jest-environment jsdom
 */

beforeEach(() => {
  document.body.innerHTML = `
    <div class="service-hero-section"></div>
    <div class="property-card"></div>
    <div class="property-card"></div>
    <div class="property-card"></div>
    <div class="why-choose-section"></div>
    <div class="why-card"></div>
    <div class="why-card"></div>
  `;

  global.observerCallbacks = [];

  global.IntersectionObserver = class {
    constructor(callback) {
      this.callback = callback;
      global.observerCallbacks.push(callback);
    }
    observe() {}
    disconnect() {}
  };

  jest.resetModules();
  require("./services-animation.js"); // Load animation code
  document.dispatchEvent(new Event("DOMContentLoaded"));
});

describe("Service Page Animations", () => {
  function triggerAll(entries) {
    for (const cb of global.observerCallbacks) {
      cb(entries);
    }
  }

  it("animates hero section when in view", () => {
    const hero = document.querySelector(".service-hero-section");

    triggerAll([{ target: hero, isIntersecting: true }]);
    expect(hero.classList.contains("animate-in")).toBe(true);

    triggerAll([{ target: hero, isIntersecting: false }]);
    expect(hero.classList.contains("animate-in")).toBe(false);
  });

  it("animates property cards with delays", () => {
    const cards = document.querySelectorAll(".property-card");

    // Simulate all cards entering view at once (like real intersection behavior)
    const entries = Array.from(cards).map((card) => ({
      target: card,
      isIntersecting: true,
    }));

    triggerAll(entries);

    cards.forEach((card, index) => {
      expect(card.classList.contains("animate-in")).toBe(true);
      expect(card.style.animationDelay).toBe(`${index * 150}ms`);
    });

    // Simulate all cards leaving view
    const leaveEntries = Array.from(cards).map((card) => ({
      target: card,
      isIntersecting: false,
    }));

    triggerAll(leaveEntries);

    cards.forEach((card) => {
      expect(card.classList.contains("animate-in")).toBe(false);
      expect(card.style.animationDelay).toBe("0ms");
    });
  });

  it("animates why-choose cards together when section is in view", () => {
    const section = document.querySelector(".why-choose-section");
    const cards = document.querySelectorAll(".why-card");

    triggerAll([{ target: section, isIntersecting: true }]);
    cards.forEach((card, i) => {
      expect(card.classList.contains("in-view")).toBe(true);
      expect(card.style.transitionDelay).toBe(`${i * 150}ms`);
    });

    triggerAll([{ target: section, isIntersecting: false }]);
    cards.forEach((card) => {
      expect(card.classList.contains("in-view")).toBe(false);
      expect(card.style.transitionDelay).toBe("0ms");
    });
  });
});
