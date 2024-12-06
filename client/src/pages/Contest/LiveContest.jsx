import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MyButton1 from "../../components/Buttons/MyButton1";
const LiveContest = () => {
  const { t } = useTranslation();
  const contestContent = t("ContestData", { returnObjects: true });

  const targetDate = new Date("2025-03-07T00:00:00").getTime(); // Replace with your desired date
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
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
        clearInterval(interval); // Stop the countdown when the date is reached
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [targetDate]);

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text  py-4 px-16 duration-300 min-h-screen">
      <div className="flex items-center tracking-widest justify-center py-4 text-6xl font-extrabold font-gallient">
        {contestContent.contestHeading}🏆🥇
      </div>
      <div className="flex flex-col items-center justify-center gap-32">
        {contestContent.diffContests.map((content, ind) => (
          <div key={ind} className="flex items-center justify-center gap-5 ">
            <img src={content.contestImg} className=" w-[30rem] h-[30rem]" />

            <div className="flex flex-col justify-end items-end gap-7">
              <h1 className=" text-right text-4xl font-semibold">
                {content.contestTitle}
              </h1>

              <div className="flex  items-center justify-center gap-24">
                <h1 className="text-3xl font-extrabold border border-black dark:border-white p-2 rounded-2xl">
                  🗓️ 07 March, 2025
                </h1>
                <div className="flex items-center justify-center">
                  <span className=" text-6xl mr-2">🔜</span>
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
                buttonLink={content.contestLink}
                buttonName={"Go To The Contest Page"}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveContest;
