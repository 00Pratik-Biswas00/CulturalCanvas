import React from "react";
import commonImg from "../../assets/Heritage/a.png";
import AllCultures from "./AllCultures";
import StateCultures from "./StateCultures";
import CulturalCalendar from "../../components/CulturalCalendar";

const CultureTradition = () => {
  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text  py-4 px-16 duration-300 flex flex-col gap-10">
      {/* <div>
        <img src={commonImg} alt="Common" />
      </div> */}

      <div>
        <h1 className="text-7xl tracking-wider font-extrabold font-gallient py-5 text-center ">
          Cultural Calendar of India
        </h1>
        <CulturalCalendar />
      </div>

      <div>
        <h1 className="text-7xl tracking-wider font-extrabold font-gallient py-7  text-center ">
          Cultural Richness of India
        </h1>

        <AllCultures />
      </div>

      <div>
        <h1 className="text-7xl tracking-wider font-extrabold font-gallient pt-7 text-center ">
          India's Cultural Odyssey: State-Wise
        </h1>

        <StateCultures />
      </div>
    </section>
  );
};

export default CultureTradition;
