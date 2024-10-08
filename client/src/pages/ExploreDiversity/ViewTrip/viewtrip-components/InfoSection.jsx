import {
  GetPlaceDetails,
  PHOTO_REF_URL,
} from "../../../../components/ExplorePlacesComponents/service/GlobalApi";
import React, { useEffect, useState } from "react";

function InfoSection({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    trip && GetPlaceImg();
  }, [trip]);
  console.log(trip);
  const GetPlaceImg = async () => {
    const data = {
      textQuery: trip?.location,
    };
    await GetPlaceDetails(data).then((resp) => {
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[3].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };
  return (
    <div>
      <img
        src={photoUrl ? photoUrl : "/public/road-trip-vacation.jpg"}
        className="h-[500px] w-full object-cover rounded-xl"
      />
      <div className="flex justify-between items-center">
        <div className="my-4 flex flex-col gap-4">
          <h2 className="font-bold text-3xl">{trip?.location}</h2>
          <div className="flex gap-6 ">
            <h2 className="bg-gray-200 font-medium text-gray-600 rounded-xl p-1 px-4 md:text-md">
              🗓️ {trip?.totalDays} Day
            </h2>
            <h2 className="bg-gray-200 font-medium text-gray-600 rounded-xl p-1 px-4 md:text-md">
              👩‍👧‍👦 Number of Traveler : {trip?.traveler} People
            </h2>
            <h2 className="bg-gray-200 font-medium text-gray-600 rounded-xl p-1 px-4 md:text-md">
              💵 {trip?.budget} Budget{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
