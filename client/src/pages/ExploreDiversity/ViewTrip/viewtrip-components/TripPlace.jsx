import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function TripPlace({ trip }) {
  return (
    <div className="mt-2">
      <h2 className="font-bold text-2xl">Places to Visit</h2>
      <div>
        {trip?.plan?.itinerary?.map((item, i) => (
          <div key={i}>
            <h2 className="font-medium text-xl">Day {item?.day}</h2>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-1">
              {item.plan?.map((place, index) => (
                <PlaceCardItem key={index} place={place} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TripPlace;
