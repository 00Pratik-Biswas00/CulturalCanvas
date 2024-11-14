import React from "react";
import commonImg from "../../assets/Heritage/a.png";
import AllCultures from "./AllCultures";
import StateCultures from "./StateCultures";
import CulturalCalendar from "../../components/CulturalCalendar";

const CultureTradition = () => {
  return (
    <section className="bg-background1 dark:bg-dark_background1  py-4 px-16 duration-300">
      <div>
        <img src={commonImg} alt="Common" />
      </div>

      <h1 className="text-7xl tracking-wider font-extrabold font-gallient pt-7 pb-2 text-center ">
        Cultural Richness of India
      </h1>

      <CulturalCalendar />

      <AllCultures />

      <h1 className="text-7xl tracking-wider font-extrabold font-gallient pt-7 pb-2 text-center ">
        India's Cultural Odyssey: State-Wise
      </h1>

      <StateCultures />
    </section>
  );
};

export default CultureTradition;
