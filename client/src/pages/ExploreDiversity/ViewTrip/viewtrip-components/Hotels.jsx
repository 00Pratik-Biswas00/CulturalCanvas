import React from "react";
import HotelCardItem from "./HotelCardItem";

function Hotels({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-2xl my-2">Hotel Recommendation</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-2 gap-6">
        {trip?.plan?.hotelOptions?.map((item, index) => (
          <HotelCardItem item={item} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
