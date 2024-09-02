"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".splide", {
    autoStart: true,
    type: "loop",
    drag: "free",
    focus: 0,
    perPage: 6,
    arrows: false,
    pauseOnHover: false,
    pagination: false,
    autoScroll: {
      speed: 0.5,
    },
    gap: '32px',
    breakpoints: {
      991 : {
        perPage: 5
      },
      768 : {
        perPage: 4
      },
      576 : {
        perPage: 3
      },
      420 : {
        perPage: 2
      },
    },
  });

  splide.mount(window.splide.Extensions);
});
