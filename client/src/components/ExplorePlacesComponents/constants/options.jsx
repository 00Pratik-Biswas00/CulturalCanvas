export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    icon: "🪙",
  },
  {
    id: 2,
    title: "Affordable",
    icon: "💸",
  },
  {
    id: 3,
    title: "Luxury",
    icon: "🧈",
  },
];

export const SelectTravelList = [
  {
    id: 1,
    title: "Just Me",
    icon: "🙋",
    people: "1",
  },
  {
    id: 2,
    title: "A couple",
    icon: "👩🏻‍❤️‍👨🏻",
    people: "2",
  },
  {
    id: 3,
    title: "Family",
    icon: "🏡",
    people: "3 to 5 people",
  },
  {
    id: 4,
    title: "Friends",
    icon: "👩‍👩‍👦‍👦",
    people: "5 to 12 people",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location : {location} for {totalDays} Days for {traveler} with a {budget} budget, Give me a Hotels options list with HotelName,Hotel address,Price, hotel image url,geo coordinates,rating,descriptions and suggest itinerary with placeName,Place Details,Place Image Url, Geo Coordinates,ticket Pricing,rating,Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.";
