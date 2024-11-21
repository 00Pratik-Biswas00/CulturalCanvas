import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import {
  GET_ALL_FESTIVALS_QUERY,
  GET_FESTIVAL_BY_DATE,
} from "../../graphql/festivalQuery";
import { format } from "date-fns";

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
        const upcomingFestival = allFestivalsData.getFestivals
          .filter((festival) => new Date(festival.date) > new Date()) // Only future festivals
          .reduce((prev, current) => {
            const prevDate = new Date(prev.date);
            const currentDate = new Date(current.date);

            // Return the festival that is closest to today
            return currentDate < prevDate ? current : prev;
          });

        console.log("UPCOMING: ", upcomingFestival);
        setClosestFestival(upcomingFestival);
      } else {
        setClosestFestival(null);
      }
    }
  };

  const handleDateChange = (newDate) => {
    const formattedDate = format(newDate, "yyyy-MM-dd"); // Use local date format
    setDate(formattedDate);
  };

  // Function to check if a festival exists on the given date
  const isFestivalOnDate = (date) => {
    const dateStr = format(date, "yyyy-MM-dd"); // Use local date format here as well
    return festivals.some((festival) => festival.date === dateStr);
  };

  console.log(closestFestival);

  return (
    <div>
      <h1 className="text-6xl tracking-wider font-extrabold font-gallient py-3 text-center ">
        📆Cultural Calendar of India
      </h1>
      <div className="flex  justify-center gap-16 px-5 py-7">
        <div className="flex flex-col items-center justify-center">
          <Calendar
            className="bg-background1 dark:bg-dark_background1 shadow-custom-black dark:shadow-custom-white text-primary_text dark:text-dark_primary_text font-bold rounded-xl"
            onChange={handleDateChange}
            value={date}
            tileContent={({ date, view }) =>
              view === "month" && isFestivalOnDate(date) ? (
                <div
                  className="dot"
                  style={{
                    backgroundColor: "red",
                    height: "8px",
                    width: "8px",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                ></div>
              ) : null
            }
          />

          {/* Show festivals for the selected date */}
          {dateSpecificFestivalLoading ? (
            <p className="h-5 w-full bg-slate-400 rounded-xl my-4 animate-pulse"></p>
          ) : festival.length > 0 ? (
            <ul>
              {festival.map((f) => (
                <li key={f.name} className="my-4">
                  <h3 className="text-xl font-bold font-playfair">
                    {f.name} 🤩
                  </h3>
                  <p>{f.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className=" my-4 font-playfair">
              No festivals found for the selected date.😞
            </p>
          )}
        </div>

        <div>
          {/* Loading state for festivals */}
          {allFestivalsLoading && (
            <div className="flex flex-col items-center justify-center gap-5">
              <div className="w-[550px] h-[35px] bg-slate-400 rounded-xl  animate-pulse"></div>

              <div className="w-[550px] h-[35px] bg-slate-400 rounded-xl  animate-pulse"></div>

              <div className="w-[25rem] h-[14.063rem] bg-slate-400 rounded-xl  animate-pulse"></div>

              <div className="w-[550px] h-[35px] bg-slate-400 rounded-xl  animate-pulse"></div>
            </div>
          )}

          {/* Error state for fetching festivals */}
          {allFestivalsError && (
            <div className="w-[550px] h-[390px] bg-background2 dark:bg-dark_background2 rounded-xl shadow-custom-orange flex flex-col items-center justify-center text-2xl font-playfair">
              <p>Error loading festivals: {allFestivalsError.message}</p>
            </div>
          )}

          {/* Countdown for the closest festival */}
          {closestFestival && timeLeft && (
            <div className="p-4 bg-background2 dark:bg-dark_background2 rounded-xl shadow-custom-orange flex flex-col items-center justify-center gap-5">
              <div className="flex flex-col gap-2 items-center">
                <h2 className="text-2xl font-bold font-playfair">
                  Upcoming Festival: {closestFestival.name}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  incidunt repudiandae, sequi veniam alias ab pariatur totam,
                  quos saepe inventore nobis nam a rem hic obcaecati fugit vitae
                </p>
              </div>
              <img
                // src="https://i.ytimg.com/vi/znMbKz6ZPno/maxresdefault.jpg"
                src={closestFestival?.image?.url}
                alt={closestFestival.name}
                className="w-[25rem] h-[14.063rem] rounded-xl"
              />
              <div className="text-xl font-pangaia">
                <b>Countdown: </b> {timeLeft.days}d {timeLeft.hours}h{" "}
                {timeLeft.minutes}m {timeLeft.seconds}s
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CulturalCalendar;
