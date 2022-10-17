import jsonDataset from "../data/resultsDataset.json" assert { type: "json" };
const results = jsonDataset.search_result;
export let wishlistHotels = {};
export let IndexedResults = [];
export let userID = localStorage.getItem("userRefID")
  ? JSON.parse(localStorage.getItem("userRefID"))
  : null;
export let clearAnchorTitles = document.getElementsByClassName("hide-title");

// Generating User Reference ID
const userReferenceID = () => {
  let id = (Math.random() * 0xfffff * 1000000).toString(16);
  userID = id.slice(0, 8).toUpperCase();
  localStorage.setItem("userRefID", JSON.stringify(userID));
};

// Hiding Title of anchor
let title;
export const hidingAnchorTitle = () => {
  for (const anchor of clearAnchorTitles) {
    anchor.addEventListener("mouseover", () => {
      title = anchor.getAttribute("title");
      anchor.setAttribute("title", "");
    });
    anchor.addEventListener("mouseout", () => {
      anchor.setAttribute("title", title);
    });
  }
};

// for in loop to add index for each result in the dataset
const addingIdToResultsJSONData = () => {
  for (const result in results) {
    results[result].id = result;
    IndexedResults.push(results[result]);
  }
};

const exportWishlistHotelsFromLocalStorage = () => {
  let localStorageDataLength = JSON.parse(localStorage.getItem("User_Wishlist"))
    ? Object.keys(JSON.parse(localStorage.getItem("User_Wishlist"))).length
    : 0;

  if (localStorageDataLength != 0) {
    let storedUserWishlist = localStorage.getItem("User_Wishlist");
    wishlistHotels = { ...JSON.parse(storedUserWishlist) };
    console.log(
      `There's data in localStorage with length ${localStorageDataLength}`
    );
  } else {
    console.log(`There's no data in localStorage`);
  }
};

exportWishlistHotelsFromLocalStorage();
addingIdToResultsJSONData();
hidingAnchorTitle();
userID ? null : userReferenceID();
// console.log(`user id is ${userID}`);
console.log("hi ! it's shared Script !");
// console.log(results);
// console.log(IndexedResults[IndexedResults.length - 1]);
