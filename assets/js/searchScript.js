// start searching

let membersAccommodation = document.getElementById("members-accommodation");
let locationInputValue = document.getElementById("locationInputValue");
membersAccommodation &&
  (membersAccommodation.value = "1 adults . 0 children . 1 rooms");

// where are you going

let placesToVisit = [
  { city: "Cairo", country: "Egypt" },
  { city: "Alexandria", country: "Egypt" },
  { city: "Aswan", country: "Egypt" },
  { city: "Alamein", country: "Egypt" },
  { city: "Marina", country: "Egypt" },
  { city: "Sohag", country: "Egypt" },
  { city: "Luxor", country: "Egypt" },
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
        <li class="singlePlace d-flex align-items-center py-2">
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
  let places = document.getElementsByClassName("singlePlace");

  for (let i = 0; i < places.length; i++) {
    places[i].addEventListener(
      "click",
      getPlace.bind(this, `${wantToVisit[i].city}`)
    );
  }
}

locationInputValue &&
  locationInputValue.addEventListener("keyup", whereToVisit);

// getPlace input valuev
function getPlace(city) {
  locationInputValue.value = city;
  document.querySelector(".locations-ul").classList.add("d-none");
}

// searchBtn

let searchBtn = document.getElementById("searchBtn");
let checkoutValue = document.getElementById("checkoutValue");
let checkInValue = document.getElementById("checkInValue");

export let searchFormData = {
  address: " ",
  period: 1,
};

searchBtn
  ? searchBtn.addEventListener("click", () => {
      let date1 = new Date(checkInValue.value);
      let date2 = new Date(checkoutValue.value);
      let Difference_In_Time = date2.getTime() - date1.getTime();
      let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      insertSearchDataToLocalStorage(
        locationInputValue.value,
        Difference_In_Days
      );
    })
  : "no data ";

export const insertSearchDataToLocalStorage = (location, time) => {
  searchFormData.address = location.length == 0 ? " " : location;
  searchFormData.period = isNaN(time) ? 1 : time < 0 ? time * -1 : time;
  console.log(searchFormData);
  localStorage.setItem("search", JSON.stringify(searchFormData));
};
// end search script
