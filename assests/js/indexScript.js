// start searching

let membersAccommodation = document.getElementById("members-accommodation");
let locationInputValue = document.getElementById("locationInputValue");
membersAccommodation.value = "1 adults . 0 children . 1 rooms";

// where are you going

let placesToVisit = [
  { city: "Cairo", country: "Egypt" },
  { city: "Alexandria", country: "Egypt" },
  { city: "Aswan", country: "Egypt" },
  { city: "Tanta", country: "Egypt" },
  { city: "Qena", country: "Egypt" },
  { city: "Sohag", country: "Egypt" },
  { city: "Loxur", country: "Egypt" },
  { city: "Hurghada", country: "Egypt" },
  { city: "Sharm El Sheikh", country: "Egypt" },
  { city: "Ain Sokhna", country: "Egypt" },
];

function whereToVisit() {
  let term = locationInputValue.value;
  let wantToVisit = [];
  for (let i = 0; i < placesToVisit.length; i++) {
    if (
      placesToVisit[i].city.toLowerCase().includes(term.toLowerCase()) ||
      placesToVisit[i].country.toLowerCase().includes(term.toLowerCase())
    ) {
      wantToVisit.push(placesToVisit[i]);
      document.querySelector(".locations-ul").classList.remove("d-none");
    }
  }

  let cartona = ``;
  for (let i = 0; i < wantToVisit.length; i++) {
    cartona += `
        <li class="d-flex align-items-center py-2" onclick="getPlace('${wantToVisit[i].city}')">
         <span class="location-icon">
          <img class="w-50" src="./assets/images/firstPage/location.svg" alt="" srcset="">
          </span>
          <div class="region">
              <span>
                  ${wantToVisit[i].city}
              </span>
              <div class="Country ">${wantToVisit[i].country}</div>
          </div>
      </li>
        `;
  }
  document.getElementById("downListPlaces").innerHTML = cartona;
}

// getPlace input value
function getPlace(city) {
  locationInputValue.value = city;
  document.querySelector(".locations-ul").classList.add("d-none");
}

// searchBtn

let searchBtn = document.getElementById("searchBtn");
let checkoutValue = document.getElementById("checkoutValue");
let checkInValue = document.getElementById("checkInValue");

searchBtn.addEventListener("click", () => {
  let date1 = new Date(checkInValue.value);
  let date2 = new Date(checkoutValue.value);
  var Difference_In_Time = date2.getTime() - date1.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  let searchFormData = {
    address: locationInputValue.value,
    period: Difference_In_Days,
  };
  return searchFormData;
});

// end search script

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
