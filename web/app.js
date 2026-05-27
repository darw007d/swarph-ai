// swarph.ai — scroll reveal. The ONLY script. No fetch, no backend.
(() => {
  "use strict";
  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");
  const reveals = document.querySelectorAll(".reveal");
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    reveals.forEach((el) => el.classList.add("in"));
    return;
  }
  if (!("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
  );
  reveals.forEach((el) => io.observe(el));
})();
