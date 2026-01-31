export function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}

window.addEventListener("scroll", () => {
  const offset = window.scrollY * 0.2;
  document.documentElement.style.setProperty("--scroll-offset", `${offset}px`);
});