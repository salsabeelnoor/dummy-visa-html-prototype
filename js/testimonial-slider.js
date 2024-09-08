"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const testimonial = new Splide("#testimonialSlider", {
    type: 'loop',
    perPage: 3,
    // autoplay: true,
    interval: 5000,
    start: 1,
    gap: '10px',
    focus: 'center',
    updateOnMove: true,
    pagination: false,
    // height: '450px',
    classes: {
      arrow: 'splide__arrow testimonial__arrow ',
    },
    breakpoints: {
      991: {
        perPage: 1,
        gap:'24px',
      },
    },
  });

  testimonial.mount();
});