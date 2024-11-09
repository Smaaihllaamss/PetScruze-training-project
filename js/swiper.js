// var swiper = new Swiper(".swiperFeedback", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

const swiper = new Swiper(".swiperFeedback", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "slider",
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Adaptive:
  //   breakpoints: {
  //     1380: {
  //       spaceBetween: 0,
  //       slidesPerView: 1,
  //       slidesPerGroup: 1,
  //     },

  //     768: {
  //       spaceBetween: 0,
  //       slidesPerView: 1,
  //       slidesPerGroup: 1,
  //     },
  //   },
});
