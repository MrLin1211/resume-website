const backToTop = document.querySelector(".back-to-top");

const toggleBackToTop = () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 520);
};

window.addEventListener("scroll", toggleBackToTop, { passive: true });

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

toggleBackToTop();
