new TypeIt('#type', {
  speed: 100,
  strings: ["Hello World", "Web Developer", "Designer", "Animator"],
  deleteSpeed: null,
  lifeLike: true,
  cursor: true,
  cursorSpeed: 1000,
  startDelay: 250,
  breakLines: false,
  loop: true,
  loopDelay: 1500,
  nextStringDelay: 1500
}).go();

$(".move-link").on("click", function () {
  document.querySelector(".contact-nav").scrollIntoView({
      behavior: "smooth"
  });
});