import React from "react";

const MyButton4 = ({ bType, buttonLink, buttonName, buttonIcon }) => {
  return (
    <div>
      <button
        type={`${bType}`}
        onClick={buttonLink}
        class="relative w-full flex items-center justify-center  gap-2  font-medium group overflow-hidden px-5 py-3  rounded-md bg-highlight_dark text-dark_primary_text   font-pangaia
        before:absolute 
        before:inset-0 
        before:bg-highlight 
        before:scale-x-0 
        before:origin-right
        before:transition
        before:duration-300
        hover:before:scale-x-100
        hover:before:origin-left"
      >
        <span class="relative  text-xl ">{buttonName}</span>
        <span class="relative  text-lg ">{buttonIcon}</span>
      </button>
    </div>
  );
};

export default MyButton4;
