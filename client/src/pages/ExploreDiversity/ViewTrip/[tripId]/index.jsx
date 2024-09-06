import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoSection from "../viewtrip-components/InfoSection";
import Hotels from "../viewtrip-components/Hotels";
import TripPlace from "../viewtrip-components/TripPlace";
import Footer from "../viewtrip-components/Footer";
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
    <div className="p-12 md:px-25 lg:px-44 xl:px:56">
      <InfoSection trip={trip} />
      <Hotels trip={trip} />
      <TripPlace trip={trip} />
      <Footer trip={trip} />
    </div>
  );
}

export default ViewTrip;
