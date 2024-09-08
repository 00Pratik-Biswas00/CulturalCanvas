import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoSection from "../viewtrip-components/InfoSection";
import Hotels from "../viewtrip-components/Hotels";
import TripPlace from "../viewtrip-components/TripPlace";
import api from "../../../../config/axios";

function ViewTrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState({});
  const GetTripData = async () => {
    const { data } = await api.get(`/trips/${tripId}`);
    setTrip(data);
  };
  useEffect(() => {
    tripId && GetTripData();
  }, [tripId]);
  return (
    <div className="p-12 md:px-32 duration-300 bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-6 flex flex-col gap-3">
      <InfoSection trip={trip} />
      <Hotels trip={trip} />
      <TripPlace trip={trip} />
    </div>
  );
}

export default ViewTrip;
