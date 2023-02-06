// sadory 
import { userID } from "./sharedScript.js";
var swiper = new Swiper(".mySwiper-cities", {
  slidesPerView: 4,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".browse-by-property-mySwiper", {
  slidesPerView: 2,
  spaceBetween: 2,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination4",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper(".connect-with-others-mySwiper", {
  slidesPerView: 2,
  spaceBetween: 2,
  loop: false,
  pagination: {
    el: ".swiper-pagination4",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

let indexPageUserID = userID;
console.log("hi ! it's index Script !");
const customerServiceHelpAnchor = document.getElementById(
  "customer-service-help"
);
customerServiceHelpAnchor.setAttribute(
  "data-tooltip",
  `Your Reference ID is ${indexPageUserID}`
);

const footerRefIDSpan = document.getElementById("refID-span");
footerRefIDSpan.textContent = indexPageUserID;
