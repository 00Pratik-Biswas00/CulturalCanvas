import {
  GetPlaceDetails,
  PHOTO_REF_URL,
} from "../../../../components/ExplorePlacesComponents/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function PlaceCardItem({ place, index }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    place && GetPlaceImg();
  }, [place]);

  const GetPlaceImg = async () => {
    const data = {
      textQuery: place.placeName,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[3].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };

  return (
    <div>
      <Link
        to={
          "https://www.google.com/maps/search/?api=1&query=" +
          place?.placeName +
          "," +
          place?.geoCoordinates
        }
        target="_blank"
      >
        <div className="my-4 px-3 py-1 gap-3 border rounded-lg flex flex-cols-2 hover:scale-105 transition-all hover:shadow-md cursor-pointer duration-500">
          <div>
            <h1 className="px-3 rounded-full text-4xl bg-slate-500 text-white flex flex-col items-start justify-normal">
              {index + 1}
            </h1>{" "}
          </div>

          {/* Dynamic Card Number */}
          <div className="py-2 ">
            <img
              src={photoUrl ? photoUrl : "/public/road-trip-vacation.jpg"}
              className="w-[320px] h-[180px] rounded-xl object-cover"
            />
          </div>
          <div className="py-2 flex flex-col gap-1">
            <h2 className="font-medium text-sm text-orange-600">
              {place.time}
            </h2>
            <h2 className="font-bold">{place.placeName}</h2>
            <p className="text-sm">{place.placeDetails}</p>
            <h2 className="text-highlight text-sm">{place.ticketPricing}</h2>
            <h2 className="text-sm text-yellow-500">⭐{place.rating}</h2>
          </div>
          <div className="py-2">
            <FaLocationDot />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PlaceCardItem;
