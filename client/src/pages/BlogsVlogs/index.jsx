import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";
import stateImg from "../../assets/courses/pratik.jpg";
import MyButton4 from "../../components/Buttons/MyButton4";
const BlogsVlogs = () => {
  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300 min-h-screen">
      <div className="flex items-center tracking-wide justify-center pb-4 text-[2.5rem] font-bold font-playfair uppercase [word-spacing:5px] ">
        India's Cultural Tapestry: Through the Eyes of Creators
      </div>

      <div className="flex flex-col sm:flex-row justify-between  w-full items-center sm:items-center gap-y-3 ">
        {/* <button
          className={`flex items-center gap-2 uppercase bg-highlight hover:bg-highlight_hover text-primary_text hover:text-white px-2 py-1 rounded font-ubuntu duration-500 transition-transform hover:scale-105 transform-cpu`}
        >
          {" "}
          <p className="">Upload your blog</p>
          <FaPlus className=" w-5 h-5" />
        </button> */}

        <MyButton4 buttonName={"Upload Your Blog"} buttonIcon={<FaPlus />} />

        <div className="flex items-center justify-center gap-3">
          <FaFilter className=" cursor-pointer w-4 h-4 sm:w-5 sm:h-5" />

          <div className="relative w-full  flex items-center">
            <input
              type="text"
              placeholder="Search for Users..."
              className=" w-full  bg-background2 dark:bg-shadow rounded-lg focus:outline-none focus:border focus:border-highlight 
            
                  text-base sm:text-base 
                  pl-10 sm:pl-10  
                  py-2
                  sm:px-4"
            />

            <FaSearch className="absolute left-3  w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 py-10">
        <div className="flex items-center cursor-pointer  justify-center ">
          <img src={stateImg} className="w-full h-full rounded-2xl " />
        </div>

        <div className="flex items-center cursor-pointer justify-center ">
          <img src={stateImg} className="w-full h-full rounded-2xl " />
        </div>

        <div className="flex items-center cursor-pointer justify-center ">
          <img src={stateImg} className="w-full h-full rounded-2xl " />
        </div>
      </div>
    </section>
  );
};

export default BlogsVlogs;
