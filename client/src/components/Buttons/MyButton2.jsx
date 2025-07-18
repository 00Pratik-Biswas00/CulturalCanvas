import React from "react";

const MyButton2 = ({ classDesign, buttonLink, buttonName1, buttonName2 }) => {
  return (
    <div>
      <button
        onClick={buttonLink}
        className={`relative group overflow-hidden  cursor-pointer w-11 h-11 lg:w-12 lg:h-12  rounded-full text-2xl   ${classDesign}
          flex flex-col items-center
        hollowBorder`}
      >
        <div
          aria-hidden="true"
          className="transition duration-500 group-hover:-translate-y-12"
        >
          <div className="h-12 flex items-center justify-center">
            <span className="">{buttonName1}</span>
          </div>
          <div className="h-12 text-base font-bold flex items-center justify-center">
            <span className="">{buttonName2}</span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default MyButton2;
