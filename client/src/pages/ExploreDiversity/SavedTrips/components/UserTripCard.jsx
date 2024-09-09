import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  GetPlaceDetails,
  PHOTO_REF_URL,
} from "../../../../components/ExplorePlacesComponents/service/GlobalApi";
import { MdDelete } from "react-icons/md";
import { GoLink } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function UserTripCard({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();
  const navigate = useNavigate();

  const openSingleSavedTrips = () => {
    navigate(`/explore-diversity/create-trip/view-trip/${trip._id}`);
  };

  useEffect(() => {
    trip && GetPlaceImg();
  }, [trip]);

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
    <div className="hover:scale-105 transition-all duration-500 hover:shadow-sm">
      <div className=" relative">
        <img
          src={photoUrl}
          className="rounded-xl h-[200px] w-full object-cover"
        />
        <button
          className="absolute right-2 -bottom-16 "
          onClick={openSingleSavedTrips}
        >
          <GoLink className="w-5 h-5 text-primary_text dark:text-dark_primary_text hover:text-highlight dark:hover:text-highlight duration-500" />
        </button>

        <button
          className="absolute right-2 -bottom-6"
          onClick={() => {
            if (window.confirm("Are you sure to delete the trip?")) {
              // Add your delete logic here
              console.log("Trip deleted");
            } else {
              console.log("Trip not deleted");
            }
          }}
        >
          <MdDelete className="w-5 h-5 text-red-500 hover:text-red-700 duration-500" />
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className=" text-lg leading-6 font-medium text-primary_text dark:text-dark_primary_text mr-8">
          {trip?.location}
        </h2>
        <h2 className="text-sm text-secondary_text dark:text-background2">
          {trip?.totalDays} Days {trip?.budget} Trip
        </h2>
      </div>
    </div>
  );
}

export default UserTripCard;
