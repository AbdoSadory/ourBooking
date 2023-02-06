import HotelModel from "./dataModel/hotelModel.js";
import { wishlistHotels, IndexedResults } from "./sharedScript.js";
import { searchFormData } from "./searchScript.js";
let searchData = { ...JSON.parse(localStorage.getItem("search")) };
const resultNumbers = document.getElementById("results-number");
const searchResultsContainer = document.getElementById(
  "results-side-results-container"
);

export const saveHotelToWishlistToLocalStorage = (wishlistHotelID) => {
  if (!(wishlistHotelID in wishlistHotels)) {
    wishlistHotels[`${wishlistHotelID}`] = wishlistHotelID;
    // console.log(wishlistHotels);
    localStorage.setItem("User_Wishlist", JSON.stringify(wishlistHotels));
  }
};
export const removeHotelFromWishlistFromLocalStorage = (elementID) => {
  delete wishlistHotels[elementID];
  localStorage.setItem("User_Wishlist", JSON.stringify(wishlistHotels));
};
export const saveHotelDetailsToLocalStorage = (
  hotelDetailsID,
  hotelDetailsName,
  hotelDetailsType,
  hotelDetailsDescription,
  hotelDetailsStars,
  hotelDetailsPrice,
  hotelDetailsRating,
  hotelDetailsReviews,
  hotelDetailsBreakfast,
  hotelDetailsCheckInFrom,
  hotelDetailsCheckInTo,
  hotelDetailsLocation,
  hotelDetailsAddress,
  hotelDetailsImage,
  hotelDetailsRooms,
  hotelDetailsImages,
  hotelDetailsCategoryReviews,
  hotelDetailsUserReviews
) => {
  let choosenElement = {
    id: hotelDetailsID,
    name: hotelDetailsName,
    type: hotelDetailsType,
    description: hotelDetailsDescription,
    stars: hotelDetailsStars,
    price: hotelDetailsPrice,
    rating: hotelDetailsRating,
    reviews: hotelDetailsReviews,
    breakfast: hotelDetailsBreakfast,
    checkInFrom: hotelDetailsCheckInFrom,
    checkInTo: hotelDetailsCheckInTo,
    location: hotelDetailsLocation,
    address: hotelDetailsAddress,
    image: hotelDetailsImage,
    rooms: hotelDetailsRooms,
    images: hotelDetailsImages,
    categoryReviews: hotelDetailsCategoryReviews,
    userReviews: hotelDetailsUserReviews,
  };
  console.log(choosenElement);
  localStorage.setItem("hotel_details", JSON.stringify(choosenElement));
};
const searchResultHotelCard = (hotelObject) => {
  const parentResultCardDiv = document.createElement("div");
  parentResultCardDiv.classList.add(
    "result-card",
    "border",
    "border-2",
    "rounded-3",
    "m-0",
    "mb-3",
    "p-0"
  );
  parentResultCardDiv.id = hotelObject.hotelID;

  const resultCardRowDiv = document.createElement("div");
  resultCardRowDiv.classList.add(
    "row",
    "justify-content-between",
    "m-0",
    "p-3"
  );

  const hotelImageContainer = document.createElement("div");
  hotelImageContainer.classList.add(
    "hotel-image-container",
    "col-3",
    "m-0",
    "p-0"
  );
  const hotelImageContainerAnchor = document.createElement("a");
  hotelImageContainerAnchor.classList.add("hide-title", "text-decoration-none");
  hotelImageContainerAnchor.href = "hotelDetailsPage.html";
  hotelImageContainerAnchor.title = "result-card-img";
  hotelImageContainerAnchor.innerHTML = `<div class="result-card-img-container w-100 overflow-hidden rounded-3">
                                                <img src="${hotelObject.hotelImage}" class="w-100 rounded-3" alt="${hotelObject.hotelName}">
                                            </div>`;
  hotelImageContainerAnchor.addEventListener("click", () => {
    saveHotelDetailsToLocalStorage(
      hotelObject.hotelID,
      hotelObject.hotelName,
      hotelObject.hotelType,
      hotelObject.hotelDescription,
      hotelObject.hotelStars,
      hotelObject.hotelPrice,
      hotelObject.hotelRating,
      hotelObject.hotelReviews,
      hotelObject.hotelBreakfast,
      hotelObject.hotelCheckInFrom,
      hotelObject.hotelCheckInTo,
      hotelObject.hotelLocation,
      hotelObject.hotelAddress,
      hotelObject.hotelImage,
      hotelObject.hotelRooms,
      hotelObject.hotelImages,
      hotelObject.hotelCategoryReviews,
      hotelObject.hotelUserReviews
    );
  });

  const hotelImageContainerWishlistIconSpan = document.createElement("span");
  hotelImageContainerWishlistIconSpan.classList.add("wishlist-icon");
  hotelImageContainerWishlistIconSpan.innerHTML =
    hotelObject.hotelID in wishlistHotels
      ? `<svg viewBox="0 0 128 128" class="red-fill-svg" width="1.5em" height="1.5em">
            <path d="M64 112a3.6 3.6 0 0 1-2-.5 138.8 138.8 0 0 1-44.2-38c-10-14.4-10.6-26-9.4-33.2a29 29 0 0 1 22.9-23.7c11.9-2.4 24 2.5 32.7 13a33.7 33.7 0 0 1 32.7-13 29 29 0 0 1 22.8 23.7c1.3 7.2.6 18.8-9.3 33.3-9.1 13.1-24 25.9-44.2 37.9a3.6 3.6 0 0 1-2 .5z">
            </path>
        </svg>
        <p class="wishlist-icon-save text-capitalize m-0 p-2 rounded-3">save</p>`
      : `<svg viewBox="0 0 128 128" class="" width="1.5em" height="1.5em">
            <path d="M64 112a3.6 3.6 0 0 1-2-.5 138.8 138.8 0 0 1-44.2-38c-10-14.4-10.6-26-9.4-33.2a29 29 0 0 1 22.9-23.7c11.9-2.4 24 2.5 32.7 13a33.7 33.7 0 0 1 32.7-13 29 29 0 0 1 22.8 23.7c1.3 7.2.6 18.8-9.3 33.3-9.1 13.1-24 25.9-44.2 37.9a3.6 3.6 0 0 1-2 .5z">
            </path>
        </svg>
        <p class="wishlist-icon-save text-capitalize m-0 p-2 rounded-3">save</p>`;
  // hotelImageContainerWishlistIconSpan.addEventListener("click", () => {});
  hotelImageContainerWishlistIconSpan.addEventListener("click", () => {
    if (hotelObject.hotelID in wishlistHotels) {
      removeHotelFromWishlistFromLocalStorage(hotelObject.hotelID);
      hotelImageContainerWishlistIconSpan.innerHTML = `<svg viewBox="0 0 128 128" class="" width="1.5em" height="1.5em">
                                                <path d="M64 112a3.6 3.6 0 0 1-2-.5 138.8 138.8 0 0 1-44.2-38c-10-14.4-10.6-26-9.4-33.2a29 29 0 0 1 22.9-23.7c11.9-2.4 24 2.5 32.7 13a33.7 33.7 0 0 1 32.7-13 29 29 0 0 1 22.8 23.7c1.3 7.2.6 18.8-9.3 33.3-9.1 13.1-24 25.9-44.2 37.9a3.6 3.6 0 0 1-2 .5z">
                                                </path>
                                            </svg>
                                            <p class="wishlist-icon-save text-capitalize m-0 p-2 rounded-3">save</p>`;
    } else {
      saveHotelToWishlistToLocalStorage(hotelObject.hotelID);
      hotelImageContainerWishlistIconSpan.innerHTML = `<svg viewBox="0 0 128 128" class="red-fill-svg" width="1.5em" height="1.5em">
                                                <path d="M64 112a3.6 3.6 0 0 1-2-.5 138.8 138.8 0 0 1-44.2-38c-10-14.4-10.6-26-9.4-33.2a29 29 0 0 1 22.9-23.7c11.9-2.4 24 2.5 32.7 13a33.7 33.7 0 0 1 32.7-13 29 29 0 0 1 22.8 23.7c1.3 7.2.6 18.8-9.3 33.3-9.1 13.1-24 25.9-44.2 37.9a3.6 3.6 0 0 1-2 .5z">
                                                </path>
                                            </svg>
                                            <p class="wishlist-icon-save text-capitalize m-0 p-2 rounded-3">save</p>`;
    }
  });

  const hotelContentContainer = document.createElement("div");
  hotelContentContainer.classList.add(
    "hotel-content-container",
    "col",
    "m-0",
    "py-0",
    "px-3"
  );

  const hotelContentRowDiv = document.createElement("div");
  hotelContentRowDiv.classList.add("row", "justify-content-between");

  const hotelContentLeft = document.createElement("div");
  hotelContentLeft.classList.add("result-card-content-left", "col");

  const hotelContentLeftHeaderAnchor = document.createElement("a");
  hotelContentLeftHeaderAnchor.classList.add(
    "result-card-header",
    "hide-title",
    "text-decoration-none"
  );
  hotelContentLeftHeaderAnchor.href = "hotelDetailsPage.html";
  hotelContentLeftHeaderAnchor.title = `${hotelObject.hotelName}`;
  hotelContentLeftHeaderAnchor.innerHTML = `<span class="result-card-heading text-capitalize fw-bold m-0 p-0">${hotelObject.hotelName}</span>`;
  hotelContentLeftHeaderAnchor.addEventListener("click", () => {
    saveHotelDetailsToLocalStorage(
      hotelObject.hotelID,
      hotelObject.hotelName,
      hotelObject.hotelType,
      hotelObject.hotelDescription,
      hotelObject.hotelStars,
      hotelObject.hotelPrice,
      hotelObject.hotelRating,
      hotelObject.hotelReviews,
      hotelObject.hotelBreakfast,
      hotelObject.hotelCheckInFrom,
      hotelObject.hotelCheckInTo,
      hotelObject.hotelLocation,
      hotelObject.hotelAddress,
      hotelObject.hotelImage,
      hotelObject.hotelRooms,
      hotelObject.hotelImages,
      hotelObject.hotelCategoryReviews,
      hotelObject.hotelUserReviews
    );
  });
  const hotelContentLeftRatingStars = document.createElement("span");
  hotelContentLeftRatingStars.classList.add(
    "result-card-rating-stars",
    "m-0",
    "p-0"
  );
  hotelContentLeftRatingStars.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" hight="15" class="rating-star"> <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path></svg>'.repeat(
      Math.ceil(hotelObject.hotelStars)
    );

  const hotelContentLeftAddress = document.createElement("div");
  hotelContentLeftAddress.classList.add("result-card-address", "m-0", "p-0");

  const hotelContentLeftAddressAnchor = document.createElement("a");
  hotelContentLeftAddressAnchor.classList.add(
    "result-card-address-link",
    "text-decoration-underline",
    "hide-title",
    "fw-bold"
  );
  hotelContentLeftAddressAnchor.href = "hotelDetailsPage.html";
  hotelContentLeftAddressAnchor.title = hotelObject.hotelAddress["full"];
  hotelContentLeftAddressAnchor.textContent = hotelObject.hotelAddress["full"];
  hotelContentLeftAddressAnchor.addEventListener("click", () => {
    saveHotelDetailsToLocalStorage(
      hotelObject.hotelID,
      hotelObject.hotelName,
      hotelObject.hotelType,
      hotelObject.hotelDescription,
      hotelObject.hotelStars,
      hotelObject.hotelPrice,
      hotelObject.hotelRating,
      hotelObject.hotelReviews,
      hotelObject.hotelBreakfast,
      hotelObject.hotelCheckInFrom,
      hotelObject.hotelCheckInTo,
      hotelObject.hotelLocation,
      hotelObject.hotelAddress,
      hotelObject.hotelImage,
      hotelObject.hotelRooms,
      hotelObject.hotelImages,
      hotelObject.hotelCategoryReviews,
      hotelObject.hotelUserReviews
    );
  });
  const hotelContentLeftDesc = document.createElement("div");
  hotelContentLeftDesc.classList.add("result-card-desc");
  hotelContentLeftDesc.textContent = hotelObject.hotelDescription;

  const hotelContentLeftRatingMobile = document.createElement("div");
  hotelContentLeftRatingMobile.classList.add(
    "result-card-content-left-rating-mobile",
    "m-0"
  );

  const hotelContentLeftRatingMobileAnchor = document.createElement("a");
  hotelContentLeftRatingMobileAnchor.classList.add(
    "result-card-content-left-rating-link",
    "text-decoration-none",
    "hide-title"
  );
  hotelContentLeftRatingMobileAnchor.href = "hotelDetailsPage.html";
  hotelContentLeftRatingMobileAnchor.title = hotelObject.hotelStars;
  hotelContentLeftRatingMobileAnchor.innerHTML = `
<div class="result-card-rating m-0 p-0">
    <div class="d-inline-block rating-number m-0 p-1">${
      hotelObject.hotelRating
    }</div>
    <div class="d-inline-block rating-grade m-0 p-0">
        <h6 class="text-capitalize">${
          hotelObject.hotelRating >= 8
            ? "very good"
            : hotelObject.hotelRating >= 5
            ? "good"
            : "bad"
        }</h6>
    </div>
    <span class="seperator text-capitalize">-</span>
    <span class="reviews-number text-capitalize">${
      hotelObject.hotelReviews
    } reviews</span>
</div>
<span class="result-left-address">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12">
        <path d="M15 8.25a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0zM12 1.5a6.75 6.75 0 0 1 6.75 6.75c0 2.537-3.537 9.406-6.75 14.25-3.214-4.844-6.75-11.713-6.75-14.25A6.75 6.75 0 0 1 12 1.5zM12 0a8.25 8.25 0 0 0-8.25 8.25c0 2.965 3.594 9.945 7 15.08a1.5 1.5 0 0 0 2.5 0c3.406-5.135 7-12.115 7-15.08A8.25 8.25 0 0 0 12 0z">
        </path>
    </svg>
    ${hotelObject.hotelAddress["full"]}
</span>`;
  hotelContentLeftRatingMobileAnchor.addEventListener("click", () => {
    saveHotelDetailsToLocalStorage(
      hotelObject.hotelID,
      hotelObject.hotelName,
      hotelObject.hotelType,
      hotelObject.hotelDescription,
      hotelObject.hotelStars,
      hotelObject.hotelPrice,
      hotelObject.hotelRating,
      hotelObject.hotelReviews,
      hotelObject.hotelBreakfast,
      hotelObject.hotelCheckInFrom,
      hotelObject.hotelCheckInTo,
      hotelObject.hotelLocation,
      hotelObject.hotelAddress,
      hotelObject.hotelImage,
      hotelObject.hotelRooms,
      hotelObject.hotelImages,
      hotelObject.hotelCategoryReviews,
      hotelObject.hotelUserReviews
    );
  });

  const hotelContentRight = document.createElement("div");
  hotelContentRight.classList.add(
    "result-card-content-right",
    "col-3",
    "m-0",
    "p-0",
    "text-end"
  );

  const hotelContentRightRating = document.createElement("div");
  hotelContentRightRating.classList.add(
    "result-card-content-right-rating",
    "mb-2"
  );

  const hotelContentRightRatingAnchor = document.createElement("a");
  hotelContentRightRatingAnchor.classList.add(
    "result-card-content-right-rating-link",
    "text-decoration-none",
    "hide-title"
  );
  hotelContentRightRatingAnchor.href = "hotelDetailsPage.html";
  hotelContentRightRatingAnchor.title = hotelObject.hotelStars;
  hotelContentRightRatingAnchor.innerHTML = `
<div class="result-card-rating text-end m-0 p-0">
    <div class="d-inline-block rating-grade m-0 me-1 p-0">
        <h6 class="text-capitalize">${
          hotelObject.hotelRating >= 8
            ? "very good"
            : hotelObject.hotelRating >= 5
            ? "good"
            : "bad"
        }</h6>
    </div>
    <div class="d-inline-block rating-number m-0 p-1">${
      hotelObject.hotelRating
    }</div>
</div>`;
  hotelContentRightRatingAnchor.addEventListener("click", () => {
    saveHotelDetailsToLocalStorage(
      hotelObject.hotelID,
      hotelObject.hotelName,
      hotelObject.hotelType,
      hotelObject.hotelDescription,
      hotelObject.hotelStars,
      hotelObject.hotelPrice,
      hotelObject.hotelRating,
      hotelObject.hotelReviews,
      hotelObject.hotelBreakfast,
      hotelObject.hotelCheckInFrom,
      hotelObject.hotelCheckInTo,
      hotelObject.hotelLocation,
      hotelObject.hotelAddress,
      hotelObject.hotelImage,
      hotelObject.hotelRooms,
      hotelObject.hotelImages,
      hotelObject.hotelCategoryReviews,
      hotelObject.hotelUserReviews
    );
  });
  const hotelContentRightShowPriceAnchor = document.createElement("a");
  hotelContentRightShowPriceAnchor.classList.add(
    "show-prices",
    "btn",
    "text-decoration-none",
    "hide-title",
    "text-capitalize"
  );
  hotelContentRightShowPriceAnchor.href = "hotelDetailsPage.html";
  hotelContentRightShowPriceAnchor.title =
    hotelObject.hotelPrice ?? "price not found so default value is 1000";
  hotelContentRightShowPriceAnchor.textContent = `show prices`;
  hotelContentRightShowPriceAnchor.addEventListener("click", () => {
    saveHotelDetailsToLocalStorage(
      hotelObject.hotelID,
      hotelObject.hotelName,
      hotelObject.hotelType,
      hotelObject.hotelDescription,
      hotelObject.hotelStars,
      hotelObject.hotelPrice,
      hotelObject.hotelRating,
      hotelObject.hotelReviews,
      hotelObject.hotelBreakfast,
      hotelObject.hotelCheckInFrom,
      hotelObject.hotelCheckInTo,
      hotelObject.hotelLocation,
      hotelObject.hotelAddress,
      hotelObject.hotelImage,
      hotelObject.hotelRooms,
      hotelObject.hotelImages,
      hotelObject.hotelCategoryReviews,
      hotelObject.hotelUserReviews
    );
  });
  // //////
  const hotelContentRightMobile = document.createElement("div");
  hotelContentRightMobile.classList.add(
    "result-card-content-right-mobile",
    "col-3",
    "m-0",
    "p-0",
    "text-end",
    "align-self-center"
  );

  const hotelContentRightMobileArrowAnchor = document.createElement("a");
  hotelContentRightMobileArrowAnchor.classList.add(
    "details-anchor",
    "text-decoration-none"
  );
  hotelContentRightMobileArrowAnchor.href = "hotelDetailsPage.html";
  hotelContentRightMobileArrowAnchor.title = "go to details";
  hotelContentRightMobileArrowAnchor.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="50" fill="#000" data-rtl-flip="true">
                                                        <path d="M9.45 6c.2 0 .39.078.53.22l5 5c.208.206.323.487.32.78a1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z">
                                                        </path>
                                                    </svg>`;
  hotelContentRightMobileArrowAnchor.addEventListener("click", () => {
    saveHotelDetailsToLocalStorage(
      hotelObject.hotelID,
      hotelObject.hotelName,
      hotelObject.hotelType,
      hotelObject.hotelDescription,
      hotelObject.hotelStars,
      hotelObject.hotelPrice,
      hotelObject.hotelRating,
      hotelObject.hotelReviews,
      hotelObject.hotelBreakfast,
      hotelObject.hotelCheckInFrom,
      hotelObject.hotelCheckInTo,
      hotelObject.hotelLocation,
      hotelObject.hotelAddress,
      hotelObject.hotelImage,
      hotelObject.hotelRooms,
      hotelObject.hotelImages,
      hotelObject.hotelCategoryReviews,
      hotelObject.hotelUserReviews
    );
  });

  hotelContentLeftAddress.appendChild(hotelContentLeftAddressAnchor);
  hotelContentLeftRatingMobile.appendChild(hotelContentLeftRatingMobileAnchor);
  hotelContentLeft.appendChild(hotelContentLeftHeaderAnchor);
  hotelContentLeft.appendChild(hotelContentLeftRatingStars);
  hotelContentLeft.appendChild(hotelContentLeftAddress);
  hotelContentLeft.appendChild(hotelContentLeftDesc);
  hotelContentLeft.appendChild(hotelContentLeftRatingMobile);

  hotelContentRightRating.appendChild(hotelContentRightRatingAnchor);
  hotelContentRight.appendChild(hotelContentRightRating);
  hotelContentRight.appendChild(hotelContentRightShowPriceAnchor);

  hotelContentRightMobile.appendChild(hotelContentRightMobileArrowAnchor);

  hotelContentRowDiv.appendChild(hotelContentLeft);
  hotelContentRowDiv.appendChild(hotelContentRight);
  hotelContentRowDiv.appendChild(hotelContentRightMobile);

  hotelImageContainer.appendChild(hotelImageContainerAnchor);
  hotelImageContainer.appendChild(hotelImageContainerWishlistIconSpan);
  hotelContentContainer.appendChild(hotelContentRowDiv);

  resultCardRowDiv.appendChild(hotelImageContainer);
  resultCardRowDiv.appendChild(hotelContentContainer);
  parentResultCardDiv.appendChild(resultCardRowDiv);
  searchResultsContainer
    ? searchResultsContainer.appendChild(parentResultCardDiv)
    : null;
};
const renderSearchResultHotelCardResults = (
  prodcutsFromJSONFile,
  searchWord
) => {
  // JSON file data
  const hotels = prodcutsFromJSONFile;

  searchWord = `${searchWord.charAt(0).toUpperCase()}${searchWord.slice(1)}`;
  console.log(searchWord);
  //for render cards from json file
  let filteredHotels = hotels.filter((hotel) =>
    hotel.address.full.includes(searchWord)
  );
  console.log(filteredHotels);
  if (filteredHotels.length == 0) {
    searchResultsContainer.innerHTML = `<h4>No Results</h4>`;
  } else {
    for (let hotelIndex in filteredHotels) {
      resultNumbers ? (resultNumbers.textContent = +hotelIndex + 1) : null;
      let hotelObject = new HotelModel(
        filteredHotels[hotelIndex].id,
        filteredHotels[hotelIndex].order,
        filteredHotels[hotelIndex].url,
        filteredHotels[hotelIndex].name,
        filteredHotels[hotelIndex].type,
        filteredHotels[hotelIndex].description,
        filteredHotels[hotelIndex].stars,
        filteredHotels[hotelIndex].price,
        filteredHotels[hotelIndex].rating,
        filteredHotels[hotelIndex].reviews,
        filteredHotels[hotelIndex].breakfast,
        filteredHotels[hotelIndex].checkInFrom,
        filteredHotels[hotelIndex].checkInTo,
        filteredHotels[hotelIndex].location,
        filteredHotels[hotelIndex].address,
        filteredHotels[hotelIndex].image,
        filteredHotels[hotelIndex].rooms,
        filteredHotels[hotelIndex].images,
        filteredHotels[hotelIndex].categoryReviews,
        filteredHotels[hotelIndex].userReviews
      );
      searchResultHotelCard(hotelObject);
    }
  }
};

renderSearchResultHotelCardResults(IndexedResults, searchData.address);
console.log("hi it's search Script " + Object.keys(wishlistHotels).length);
