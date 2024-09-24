import React, { useState } from "react";
import { FaSearch, FaEdit } from "react-icons/fa";
import { RiEditFill } from "react-icons/ri";

import { MdDelete } from "react-icons/md";

import { dummyData } from "../../utils/constants";
import GoToTop from "../../components/GoToTopButton";

const AdminStates = () => {
  const { StateCulturesData } = dummyData;

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-6 px-4 duration-300 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-y-3 ">
        <h1 className="text-4xl font-semibold text-center   tracking-tighter font-playfair">
          Manage Your States
        </h1>

        <div className="relative w-full sm:w-1/2 flex items-center">
          <input
            type="text"
            placeholder="Search for States..."
            className=" w-full  bg-background2 dark:bg-shadow rounded-lg focus:outline-none focus:border focus:border-highlight 
          
                text-base 
                pl-10 sm:pl-10  
                py-2
                sm:px-4"
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
          />

          <FaSearch className="absolute left-3  w-4 h-4" />
        </div>
        <button className="bg-highlight_hover hover:bg-highlight_hover_dark text-dark_primary_text font-medium font-ubuntu sm:text-base py-1 px-4 rounded  transition-transform hover:scale-110 duration-1000  transform-cpu">
          Add New State
        </button>
      </div>
      <div className="flex flex-col py-5 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          {dummyData.StateCulturesData.map((content, index) => {
            let shadowClass;
            let borderClass;

            if (index % 3 === 0) {
              shadowClass = "shadow-custom-orange ";
              borderClass = "border-highlight";
            } else if (index % 3 === 1) {
              shadowClass = "shadow-custom-blue";
              borderClass = "border-secondary_text dark:border-background1";
            } else if (index % 3 === 2) {
              shadowClass = "shadow-custom-green";
              borderClass = "border-highlight_hover ";
            }

            return (
              <div
                className={`backdrop-blur-lg bg-opacity-80  rounded-lg flex flex-col items-center justify-center gap-1`}
              >
                <div className="flex items-center justify-center ">
                  <img src={content.stateImg} className="w-full h-full  " />
                </div>

                <div className="flex items-center  justify-center pt-5 gap-x-3">
                  <RiEditFill className="w-7 h-7  cursor-pointer text-highlight_hover hover:text-highlight_hover_dark" />

                  <div
                    className={` ${borderClass} ${shadowClass} border-x-2 border-t-2 font-bold font-ubuntu px-5 py-2  flex items-center justify-center rounded-xl  `}
                  >
                    <p className="text-xl">{content.stateName}</p>
                  </div>
                  <MdDelete className="w-7 h-7  cursor-pointer text-red-600 hover:text-red-800" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdminStates;
