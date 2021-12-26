"use strict";

// Scrolling to next page
const firstSection = document.querySelector(".company_section");
const joinUsButton = document.querySelector(".join_us");
const companyBtn = document.querySelector(".company__btn");
const contactBtn = document.querySelector(".contact__btn");
const testimonialsBtn = document.querySelector(".testimonials__btn");
const secondSection = document.querySelector(".contact_section");
const thirdSection = document.querySelector(".testimonials_section");

// scrollSections();

joinUsButton.addEventListener("click", function (e) {
  firstSection.scrollIntoView({ behavior: "smooth" });
  scroll;
});
companyBtn.addEventListener("click", function (e) {
  firstSection.scrollIntoView({ behavior: "smooth" });
  scroll;
});
contactBtn.addEventListener("click", function (e) {
  secondSection.scrollIntoView({ behavior: "smooth" });
  scroll;
});
testimonialsBtn.addEventListener("click", function (e) {
  thirdSection.scrollIntoView({ behavior: "smooth" });
  scroll;
});

// Slider
// const slider = function () {
//   const slides = document.querySelectorAll(".slide");

//   let curSlide = 0;
//   const maxSlide = slides.length;

//   // Functions
//   // const createDots = function () {
//   //   slides.forEach(function (_, i) {
//   //     dotContainer.insertAdjacentHTML(
//   //       'beforeend',
//   //       `<button class="dots__dot" data-slide="${i}"></button>`
//   //     );
//   //   });
//   // };

//   //   const activateDot = function (slide) {
//   //     document
//   //       .querySelectorAll(".dots__dot")
//   //       .forEach((dot) => dot.classList.remove("dots__dot--active"));

//   //     document
//   //       .querySelector(`.dots__dot[data-slide="${slide}"]`)
//   //       .classList.add("dots__dot--active");
//   //   };

//   const goToSlide = function (slide) {
//     slides.forEach(
//       (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//     );
//   };

//   // Next slide
//   const nextSlide = function () {
//     slides.forEach(
//       setTimeout(() => {
//         if (currentSlide === maxSlide - 1) {
//           currentSlide = 0;
//         } else {
//           currentSlide++;
//         }
//         nextSlide();
//       }, 3000)
//     );

//     goToSlide(curSlide);
//     // activateDot(curSlide);
//   };

//   const prevSlide = function () {
//     if (curSlide === 0) {
//       curSlide = maxSlide - 1;
//     } else {
//       curSlide--;
//     }
//     goToSlide(curSlide);
//     // activateDot(curSlide);
//   };

//   const init = function () {
//     goToSlide(0);
//     // createDots();

//     // activateDot(0);
//   };
//   init();

//   // Event handlers
//   //   btnRight.addEventListener("click", nextSlide);
//   //   btnLeft.addEventListener("click", prevSlide);

//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") prevSlide();
//     e.key === "ArrowRight" && nextSlide();
//   });

//   //   dotContainer.addEventListener("click", function (e) {
//   //     if (e.target.classList.contains("dots__dot")) {
//   //       const { slide } = e.target.dataset;
//   //       goToSlide(slide);
//   //       activateDot(slide);
//   //     }
//   //   });
// };
// slider();

// // const Slider = function () {
// //   const slides = document.querySelector(".slide");

// //   let currentSlide = 0;
// //   const maxSlide = slides.length;

// //   const nextSlide = function (slide) {
// //     slides.forEach((s, i) => {
// //       s.style.transform = `translate(${100 * (i - slide)}%)`;
// //     });
// //   };
// //   // Next slide
// //   const timer = setTimeout(() => {
// //     if (currentSlide === maxSlide - 1) {
// //       currentSlide = 0;
// //     } else {
// //       currentSlide++;
// //     }
// //     nextSlide();
// //   }, 3000);

// //   const init = function () {
// //     nextSlide(0);
// //   };
// //   init();

// //   //   document.addEventListener('keydown', function (e) {
// //   //     if (e.key === 'ArrowLeft') prevSlide();
// //   //     e.key === 'ArrowRight' && nextSlide();
// //   //   });
// // };

// Slider();
