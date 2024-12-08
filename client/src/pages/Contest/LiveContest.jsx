import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MyButton1 from "../../components/Buttons/MyButton1";
import blogWriterImg from "../../assets/career/blogWriter.png";
import { useQuery } from "@apollo/client";
import { GET_CURRENT_CONTEST } from "../../graphql/contest";

const LiveContest = () => {
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(GET_CURRENT_CONTEST);

  const getTargetDate = (contestDate, contestTime) => {
    const [day, month, year] = contestDate.split("-").map(Number);
    const [hours, minutes] = contestTime.split(":").map(Number);
    return new Date(year, month - 1, day, hours, minutes).getTime();
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (data?.currentContest) {
      const targetDate = getTargetDate(
        data.currentContest.date,
        data.currentContest.time
      );

      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance > 0) {
          setTimeLeft({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
              (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
          });
        } else {
          clearInterval(interval);
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300 min-h-screen">
      <div className="flex items-center tracking-widest justify-center py-4 text-6xl font-extrabold font-gallient">
        {t("ContestData.contestHeading")}🏆🥇
      </div>
      <div className="flex flex-col items-center justify-center gap-32">
        {data?.currentContest && (
          <div className="flex items-center justify-center gap-5">
            <img
              src={blogWriterImg}
              className="w-[30rem] h-[30rem] order-1"
              alt="Blog Writer"
            />

            <div className="flex flex-col gap-7 order-2 justify-end items-end">
              <h1 className="text-right text-4xl font-semibold">
                {data.currentContest.topic}
              </h1>

              <div className="flex items-center justify-center gap-24">
                <h1 className="text-3xl font-extrabold border border-black dark:border-white p-2 rounded-2xl">
                  🗓️ {data.currentContest.date}
                </h1>
                <div className="flex items-center justify-center">
                  <span className="text-6xl mr-2">🔜</span>
                  <div className="text-3xl font-bold flex gap-4">
                    <div className="text-center">
                      <span className="block text-4xl">{timeLeft.days}</span>
                      <span className="text-sm">Days</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-4xl">{timeLeft.hours}</span>
                      <span className="text-sm">Hours</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-4xl">{timeLeft.minutes}</span>
                      <span className="text-sm">Minutes</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-4xl">{timeLeft.seconds}</span>
                      <span className="text-sm">Seconds</span>
                    </div>
                  </div>
                </div>
              </div>

              <MyButton1
                classDesign={
                  "bg-gradient-to-r from-[#193c70e9] to-[#1489386c] hover:to-[#174926]"
                }
                buttonLink={`/live-contest/blog/${data.currentContest.id}`}
                buttonName={"Go To The Contest Page"}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LiveContest;
