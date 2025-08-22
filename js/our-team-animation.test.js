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
    this.callback([{ isIntersecting: true, target: element }]);
  }

  unobserve() {}
  disconnect() {}
};

beforeEach(() => {
  // 🔄 Reset DOM before each test
  document.body.innerHTML = `
    <section class="hero-animate"></section>
    <section class="ourteam-section"></section>
    <div class="team-animate"></div>
    <div class="team-animate-2"></div>
  `;

  jest.resetModules(); // Re-import the animation file freshly
  require("./our-team-animation.js");

  // 🔔 Trigger DOMContentLoaded manually
  document.dispatchEvent(new Event("DOMContentLoaded"));
});

describe("Our Team Animations", () => {
  test('adds "animate-in" class to hero-animate section on intersect', () => {
    const section = document.querySelector(".hero-animate");
    expect(section.classList.contains("animate-in")).toBe(true);
  });

  test('adds "visible" class to .ourteam-section when intersecting', () => {
    const teamSection = document.querySelector(".ourteam-section");
    expect(teamSection.classList.contains("visible")).toBe(true);
  });

  test('adds "visible" class to team-animate elements on intersect', () => {
    const member = document.querySelector(".team-animate");
    expect(member.classList.contains("visible")).toBe(true);
  });

  test('adds "animate-in" class to team-animate-2 elements on intersect', () => {
    const member = document.querySelector(".team-animate-2");
    expect(member.classList.contains("animate-in")).toBe(true);
  });
});
