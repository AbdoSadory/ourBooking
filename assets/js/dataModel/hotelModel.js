export default class HotelModel {
  constructor(
    id,
    order,
    url,
    name,
    type,
    description,
    stars,
    price,
    rating,
    reviews,
    breakfast,
    checkInFrom,
    checkInTo,
    location,
    address,
    image,
    rooms,
    images,
    categoryReviews,
    userReviews
  ) {
    this.hotelID = id;
    this.hotelOrder = order;
    this.hotelUrl = url;
    this.hotelName = name;
    this.hotelType = type;
    this.hotelDescription = description;
    this.hotelStars = stars;
    this.hotelPrice = price;
    this.hotelRating = rating;
    this.hotelReviews = reviews;
    this.hotelBreakfast = breakfast;
    this.hotelCheckInFrom = checkInFrom;
    this.hotelCheckInTo = checkInTo;
    this.hotelLocation = location;
    this.hotelAddress = address;
    this.hotelImage = image;
    this.hotelRooms = rooms;
    this.hotelImages = images;
    this.hotelCategoryReviews = categoryReviews;
    this.hotelUserReviews = userReviews;
  }
}
