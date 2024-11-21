import React from "react";
import AllCultures from "./AllCultures";
import StateCultures from "./StateCultures";
import CulturalCalendar from "./CulturalCalendar";

const CultureTradition = () => {
  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text  py-4 px-16 duration-300 flex flex-col gap-10">
      <CulturalCalendar />

      <AllCultures />

      <StateCultures />
    </section>
  );
};

export default CultureTradition;
