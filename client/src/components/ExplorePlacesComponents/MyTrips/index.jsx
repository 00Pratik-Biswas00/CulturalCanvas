import React, { useEffect, useState } from "react";
import UserTripCard from "./components/UserTripCard";
import { toast } from "sonner";
import api from "../../../config/axios";

function MyTrips() {
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
    <div className='px-5 mt-12 sm:px-10 md:px-32 lg:px-56 xl:px-72"'>
      <h2 className="font-bold text-3xl mb-10">My Trips</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 my-3">
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

export default MyTrips;
