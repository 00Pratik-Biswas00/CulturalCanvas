import React from "react";

const MyButtons3 = ({ buttonLink, buttonName, buttonIcon }) => {
  return (
    <div>
      <button
        onClick={buttonLink}
        class="relative flex items-center justify-center font-bold gap-2  group overflow-hidden px-8 h-10 rounded-md bg-highlight_hover
        before:absolute 
        before:inset-0 
        before:bg-highlight_hover_dark
        before:scale-y-[0.1] 
        before:origin-bottom
        before:transition
        before:duration-300
        hover:before:scale-y-100

        text-dark_primary_text 

        duration-500
        transition-transform hover:scale-105 transform-cpu
                      "
      >
        <span class="relative uppercase text-lg ">{buttonName}</span>
        <span class="relative uppercase text-lg ">{buttonIcon}</span>
      </button>
    </div>
  );
};

export default MyButtons3;
