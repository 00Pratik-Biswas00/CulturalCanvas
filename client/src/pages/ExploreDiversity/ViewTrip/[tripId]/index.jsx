import React, { useEffect, useState } from "react";
import { db } from "../../../../components/ExplorePlacesComponents/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

import InfoSection from "../viewtrip-components/InfoSection";
import Hotels from "../viewtrip-components/Hotels";
import TripPlace from "../viewtrip-components/TripPlace";
import Footer from "../viewtrip-components/Footer";

function ViewTrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState();
  const GetTripData = async () => {
    const docRef = doc(db, "AiTrips", tripId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setTrip(docSnap.data());
    } else {
      console.log("No such document!");
      toast("No trip found!");
    }
  };
  useEffect(() => {
    tripId && GetTripData();
  }, [tripId]);
  // Get Trip Info DAta from Firebase

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
