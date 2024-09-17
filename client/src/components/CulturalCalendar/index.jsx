import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";
import MapComponent from "../MapComponent";
import { useQuery } from "@apollo/client";
import {
  GET_ALL_FESTIVALS_QUERY,
  GET_FESTIVAL_BY_DATE,
} from "../../graphql/festivalQuery";

const CulturalCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [festival, setFestival] = useState([]);
  const [festivals, setFestivals] = useState([]);
  const [closestFestival, setClosestFestival] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);

  const {
    data: allFestivalsData,
    loading: allFestivalsLoading,
    error: allFestivalsError,
  } = useQuery(GET_ALL_FESTIVALS_QUERY);

  const {
    data: dateSpecificFestivalData,
    loading: dateSpecificFestivalLoading,
    error: dateSpecificFestivalError,
  } = useQuery(GET_FESTIVAL_BY_DATE, {
    variables: { date },
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (!allFestivalsLoading && allFestivalsData) {
      fetchFestivals();
    }
  }, [allFestivalsData, allFestivalsLoading]);

  useEffect(() => {
    if (closestFestival) {
      const festivalDate = new Date(closestFestival.date);
      const interval = setInterval(() => {
        const now = new Date();
        const timeDiff = festivalDate - now;

        if (timeDiff > 0) {
          const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
          const seconds = Math.floor((timeDiff / 1000) % 60);

          setTimeLeft({ days, hours, minutes, seconds });
        } else {
          // Festival has passed, reset timer
          setTimeLeft(null);
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [closestFestival, festivals]);

  useEffect(() => {
    if (!dateSpecificFestivalLoading && dateSpecificFestivalData) {
      console.log(dateSpecificFestivalData);
      setFestival(dateSpecificFestivalData.getFestivalsByDate || []);
    }
  }, [dateSpecificFestivalData, dateSpecificFestivalLoading]);

  const fetchFestivals = () => {
    if (allFestivalsData && allFestivalsData.getFestivals) {
      setFestivals(allFestivalsData.getFestivals);

      if (allFestivalsData.getFestivals.length > 0) {
        // Find the closest upcoming festival
        const upcomingFestival = allFestivalsData.getFestivals.reduce(
          (prev, current) => {
            const now = new Date();
            const prevDate = new Date(prev.date);
            const currentDate = new Date(current.date);
            return currentDate < prevDate && currentDate > now ? current : prev;
          }
        );
        setClosestFestival(upcomingFestival);
      } else {
        setClosestFestival(null);
      }
    }
  };

  const handleDateChange = (newDate) => {
    const formattedDate = newDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    setDate(formattedDate);

    console.log(formattedDate);
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        {/* Loading state for festivals */}
        {allFestivalsLoading && (
          <div className="my-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <p>Loading festivals...</p>
          </div>
        )}

        {/* Error state for fetching festivals */}
        {allFestivalsError && (
          <div className="my-4 p-4 bg-red-100 rounded-lg shadow-md">
            <p>Error loading festivals: {allFestivalsError.message}</p>
          </div>
        )}

        {/* Countdown for the closest festival */}
        {closestFestival && timeLeft && (
          <div className="my-4 p-4 bg-yellow-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">
              Next Festival: {closestFestival.name}
            </h2>
            <p>
              {closestFestival.location.city}, {closestFestival.location.state}
            </p>
            <div className="text-xl mt-2">
              Countdown: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
              {timeLeft.seconds}s
            </div>
          </div>
        )}

        <Calendar onChange={handleDateChange} value={date} />

        {/* Show festivals for the selected date */}
        {dateSpecificFestivalLoading ? (
          <p>Loading festivals for selected date...</p>
        ) : festival.length > 0 ? (
          <ul>
            {festival.map((f) => (
              <li key={f.name} className="my-4">
                <h3 className="text-xl font-bold">{f.name}</h3>
                <p>{f.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No festivals found for the selected date.</p>
        )}
      </div>

      <div className="w-1/2 p-4">
        <MapComponent festivals={festival} />
      </div>
    </div>
  );
};

export default CulturalCalendar;