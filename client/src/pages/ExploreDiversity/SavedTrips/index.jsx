import React, { useEffect, useState } from "react";
import UserTripCard from "./components/UserTripCard";
import { toast } from "sonner";
import api from "../../../config/axios";

function SavedTrips() {
  const [userTrips, setUserTrips] = useState([]);
  useEffect(() => {
    GetUserTrips();
  }, []);
  const GetUserTrips = async () => {
    try {
      await api
        .get("/history")
        .then((response) => {
          setUserTrips(response.data);
        })
        .catch((err) => console.error(err));
    } catch (e) {
      console.log(e);
      toast.error("Failed Fetching");
    }
  };
  return (
    <div className="relative px-5  sm:px-10 md:px-32 lg:px-56 duration-300 bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-6 flex flex-col gap-2">
      <h2 className="font-bold text-3xl">Saved Trips 🗺️</h2>{" "}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-7 gap-y-10 my-3">
        {userTrips?.length > 0
          ? userTrips.map((trip, index) => (
              <UserTripCard trip={trip} key={index} />
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="h-[200px] w-full bg-slate-200 animate-pulse rounded-xl"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default SavedTrips;
