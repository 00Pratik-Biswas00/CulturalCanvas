import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

const CulturalCalendar = () => {
  const { t } = useTranslation();
  const culturalCalendarContent = t("CultureCalendarData", {
    returnObjects: true,
  });

  const [date, setDate] = useState(new Date());
  const [festival, setFestival] = useState([]);
  const [closestFestival, setClosestFestival] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    fetchFestivals();
  }, []);

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
  }, [closestFestival]);

  const fetchFestivals = () => {
    if (culturalCalendarContent && culturalCalendarContent.length > 0) {
      // Filter only future festivals
      const futureFestivals = culturalCalendarContent.filter(
        (festival) => new Date(festival.date) > new Date()
      );

      if (futureFestivals.length > 0) {
        // Find the closest upcoming festival
        const upcomingFestival = futureFestivals.reduce((prev, current) => {
          const prevDate = new Date(prev.date);
          const currentDate = new Date(current.date);
          return currentDate < prevDate ? current : prev;
        });

        console.log("UPCOMING: ", upcomingFestival);
        setClosestFestival(upcomingFestival);
      } else {
        setClosestFestival(null); // No future festivals
      }
    } else {
      setClosestFestival(null); // No festivals in data
    }
  };

  const handleDateChange = (newDate) => {
    const formattedDate = format(newDate, "yyyy-MM-dd"); // Use local date format
    setDate(formattedDate);

    // Check if a festival exists on the selected date
    const festivalsOnDate = culturalCalendarContent.filter(
      (festival) => festival.date === formattedDate
    );
    setFestival(festivalsOnDate);
  };

  const isFestivalOnDate = (date) => {
    const dateStr = format(date, "yyyy-MM-dd");
    return culturalCalendarContent.some(
      (festival) => festival.date === dateStr
    );
  };

  return (
    <div>
      <h1 className="text-6xl tracking-wider font-extrabold font-gallient py-3 text-center">
        📆Cultural Calendar of India
      </h1>
      <div className="flex justify-center gap-16 px-5 py-7">
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
          {/* Show festivals for the selected date */}
          {festival.length > 0 ? (
            <ul>
              {festival.map((f) => (
                <li key={f.name} className="my-4">
                  <h3 className="text-xl font-bold font-playfair">
                    {f.name} 🤩
                  </h3>
                </li>
              ))}
            </ul>
          ) : (
            <p className="my-4 font-playfair">
              No festivals found for the selected date. 😞
            </p>
          )}
        </div>

        <div>
          {/* Countdown for the closest festival */}
          {closestFestival && timeLeft && (
            <div className="p-4 bg-background2 dark:bg-dark_background2 rounded-xl shadow-custom-orange flex flex-col items-center justify-center gap-5">
              <div className="flex flex-col gap-2 items-center">
                <h2 className="text-2xl font-bold font-playfair">
                  Upcoming Festival: {closestFestival.name}
                </h2>
                <p>{closestFestival.description}</p>
              </div>
              <img
                src={closestFestival.image}
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
