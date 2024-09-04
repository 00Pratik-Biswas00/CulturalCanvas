import React from "react";
import commonImg from "../../assets/Heritage/a.png";
import AllCultures from "./AllCultures";
import StateCultures from "./StateCultures";

const CultureTradition = () => {
  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300">
      <div>
        <img src={commonImg} alt="Common" />
      </div>

      <div className="flex items-center justify-center py-4 text-7xl gap-12 font-bold font-playfair uppercase ">
        <p className="tracking-wider">Cultural</p>
        <p className="tracking-wider">Richness</p>
        <p className="tracking-wider">of</p>
        <p className="tracking-wider">India</p>
      </div>

      <AllCultures />

      <div className="flex items-center justify-center py-4 text-6xl gap-5 font-bold font-playfair uppercase ">
        <p className="tracking-wider">India's</p>
        <p className="tracking-wider">Cultural</p>
        <p className="tracking-wider">Odyssey:</p>
        <p className="tracking-wider">State-Wise</p>
      </div>

      <StateCultures />
    </section>
  );
};

export default CultureTradition;
