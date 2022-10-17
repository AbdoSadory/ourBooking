import { wishlistHotels } from "./sharedScript.js";
import {
  saveHotelToWishlistToLocalStorage,
  removeHotelFromWishlistFromLocalStorage,
} from "./searchPageScript.js";

var swiper = new Swiper(".mySwiper-hotel-gallery", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let storedHotel = JSON.parse(localStorage.getItem("hotel_details"));
console.log(storedHotel);

// 1-page title
document.title = storedHotel.name;
// 2- Rating Stars
const starsContainer = document.getElementById("stars");
for (let i = 0; i < storedHotel.stars; i++) {
  const svgContainerSpan = document.createElement("span");
  svgContainerSpan.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15"
                                            hight="15" class="rating-star">
                                            <path
                                                d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z">
                                            </path>
                                        </svg>`;
  starsContainer.appendChild(svgContainerSpan);
}
// 3- wishlist or not
const hotelWishlistIconSpan = document.getElementById("wishlist-svg-container");
hotelWishlistIconSpan.innerHTML =
  storedHotel.id in wishlistHotels
    ? `<svg viewBox="0 0 128 128" class="red-fill-svg" width="1.5em" height="1.5em">
            <path d="M64 112a3.6 3.6 0 0 1-2-.5 138.8 138.8 0 0 1-44.2-38c-10-14.4-10.6-26-9.4-33.2a29 29 0 0 1 22.9-23.7c11.9-2.4 24 2.5 32.7 13a33.7 33.7 0 0 1 32.7-13 29 29 0 0 1 22.8 23.7c1.3 7.2.6 18.8-9.3 33.3-9.1 13.1-24 25.9-44.2 37.9a3.6 3.6 0 0 1-2 .5z">
            </path>
        </svg>`
    : `<svg viewBox="0 0 128 128" class="" width="1.5em" height="1.5em">
            <path d="M64 112a3.6 3.6 0 0 1-2-.5 138.8 138.8 0 0 1-44.2-38c-10-14.4-10.6-26-9.4-33.2a29 29 0 0 1 22.9-23.7c11.9-2.4 24 2.5 32.7 13a33.7 33.7 0 0 1 32.7-13 29 29 0 0 1 22.8 23.7c1.3 7.2.6 18.8-9.3 33.3-9.1 13.1-24 25.9-44.2 37.9a3.6 3.6 0 0 1-2 .5z">
            </path>
        </svg>`;
// hotelWishlistIconSpan.addEventListener("click", () => {});
hotelWishlistIconSpan.addEventListener("click", () => {
  if (storedHotel.id in wishlistHotels) {
    removeHotelFromWishlistFromLocalStorage(storedHotel.id);
    hotelWishlistIconSpan.innerHTML = `<svg viewBox="0 0 128 128" class="" width="1.5em" height="1.5em">
                                                <path d="M64 112a3.6 3.6 0 0 1-2-.5 138.8 138.8 0 0 1-44.2-38c-10-14.4-10.6-26-9.4-33.2a29 29 0 0 1 22.9-23.7c11.9-2.4 24 2.5 32.7 13a33.7 33.7 0 0 1 32.7-13 29 29 0 0 1 22.8 23.7c1.3 7.2.6 18.8-9.3 33.3-9.1 13.1-24 25.9-44.2 37.9a3.6 3.6 0 0 1-2 .5z">
                                                </path>
                                            </svg>`;
  } else {
    saveHotelToWishlistToLocalStorage(storedHotel.id);
    hotelWishlistIconSpan.innerHTML = `<svg viewBox="0 0 128 128" class="red-fill-svg" width="1.5em" height="1.5em">
                                                <path d="M64 112a3.6 3.6 0 0 1-2-.5 138.8 138.8 0 0 1-44.2-38c-10-14.4-10.6-26-9.4-33.2a29 29 0 0 1 22.9-23.7c11.9-2.4 24 2.5 32.7 13a33.7 33.7 0 0 1 32.7-13 29 29 0 0 1 22.8 23.7c1.3 7.2.6 18.8-9.3 33.3-9.1 13.1-24 25.9-44.2 37.9a3.6 3.6 0 0 1-2 .5z">
                                                </path>
                                            </svg>`;
  }
});

// 4- Hotel Title
const hotelTitle = document.getElementById("hotel-title");
hotelTitle.textContent = storedHotel.name;

// 5- Hotel address
const hotelAddress = document.getElementsByClassName("hotel-address");
for (const address of hotelAddress) {
  address.textContent = storedHotel.address.full;
}

// 6- gallery desktop
const leftImageTop = document.getElementById("img-1");
const leftImageBottom = document.getElementById("img-2");
const rightImage = document.getElementById("img-3");
const moreImagecontainer = document.getElementById("hotel-more-imgs-container");
const moreImageContainerMob = document.getElementById(
  "hotel-more-imgs-container-mob"
);
leftImageTop.src = storedHotel.image;
leftImageBottom.src = storedHotel.images[storedHotel.images.length - 1];
rightImage.src = storedHotel.images[1];
if (storedHotel.images.length > 6) {
  for (let i = 0; i < 6; i++) {
    // Desktop
    const moreDiv = document.createElement("div");
    moreDiv.classList.add("more-img");
    const hotelMoreImage = document.createElement("img");
    hotelMoreImage.classList.add("hotel-image");
    hotelMoreImage.src = storedHotel.images[i];
    hotelMoreImage.id = storedHotel.images[i];
    hotelMoreImage.alt = storedHotel.name;
    moreDiv.appendChild(hotelMoreImage);
    moreImagecontainer.appendChild(moreDiv);
  }
  for (let i = 0; i < storedHotel.images.length; i++) {
    // Mobile
    const moreDivMob = document.createElement("div");
    moreDivMob.classList.add("swiper-slide");
    const hotelMoreImageMob = document.createElement("img");
    hotelMoreImageMob.classList.add("m-0", "p-0");
    hotelMoreImageMob.src = storedHotel.images[i];
    hotelMoreImageMob.id = storedHotel.images[i];
    hotelMoreImageMob.alt = storedHotel.name;
    moreDivMob.appendChild(hotelMoreImageMob);
    moreImageContainerMob.appendChild(moreDivMob);
  }
}

// 7- hotel desc
const descPara = document.getElementById("hotel-desc-details");
descPara.textContent = storedHotel.description;

// 8- rating-number
const ratingNumber = document.getElementById("rating-number");
ratingNumber.textContent = storedHotel.rating;
// 9- rating-grade
const ratingGrade = document.getElementById("rating-grade");
ratingGrade.textContent =
  storedHotel.rating >= 8
    ? "very good, "
    : storedHotel.rating >= 5
    ? "good, "
    : "bad, ";
// 10- review-number
const reviewsNumber = document.getElementById("reviews-number");
reviewsNumber.textContent = storedHotel.reviews;

// 11- categoryReviews
const categoriesContainer = document.getElementById("categories-container");
for (let i = 0; i < storedHotel.categoryReviews.length; i++) {
  let scorePercentage = storedHotel.categoryReviews[i].score * 10;
  const categoryContainer = document.createElement("div");
  categoryContainer.classList.add("category-container", "m-0", "mb-3", "p-0");

  const category = document.createElement("div");
  category.classList.add("category");

  const categoryRow = document.createElement("div");
  categoryRow.classList.add("row", "justify-content-between", "m-0", "p-0");

  const categoryType = document.createElement("div");
  categoryType.classList.add(
    "category-type",
    "col",
    "text-capitalize",
    "p-0",
    "m-0",
    "fs-6"
  );
  categoryType.textContent = storedHotel.categoryReviews[i].title;

  const categoryRate = document.createElement("div");
  categoryRate.classList.add(
    "category-rate",
    "col",
    "text-capitalize",
    "p-0",
    "m-0",
    "fs-6",
    "text-end"
  );
  categoryRate.id = storedHotel.categoryReviews[i].title;
  categoryRate.textContent = storedHotel.categoryReviews[i].score;

  const categoryProgressRate = document.createElement("div");
  categoryProgressRate.classList.add(
    "category-progress-rate",
    "m-0",
    "p-0",
    "w-100",
    "rounded-3"
  );
  const categoryProgressValue = document.createElement("div");
  categoryProgressValue.classList.add(
    "category-progress-value",
    "m-0",
    "p-0",
    "rounded-3"
  );
  categoryProgressValue.style.width = `${scorePercentage}%`;
  categoryRow.appendChild(categoryType);
  categoryRow.appendChild(categoryRate);
  category.appendChild(categoryRow);
  categoryProgressRate.appendChild(categoryProgressValue);
  categoryContainer.appendChild(category);
  categoryContainer.appendChild(categoryProgressRate);
  categoriesContainer.appendChild(categoryContainer);
}
