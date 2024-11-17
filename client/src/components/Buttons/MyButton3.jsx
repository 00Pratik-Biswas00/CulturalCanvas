import React from "react";

const MyButton3 = ({ classDesign, onClick, buttonName, buttonIcon }) => {
  return (
    <div>
      <button
        onClick={onClick}
        class={`relative flex items-center justify-center font-bold gap-2  group overflow-hidden px-8 py-2 rounded-md 
        before:absolute 
        before:inset-0 
        
        before:scale-y-[0.1] 
        before:origin-bottom
        before:transition
        before:duration-300
        hover:before:scale-y-100

        ${classDesign}

        

        duration-500
        transition-transform hover:scale-105 transform-cpu
                      `}
      >
        <span class="relative uppercase text-lg ">{buttonName}</span>
        <span class="relative uppercase text-lg ">{buttonIcon}</span>
      </button>
    </div>
  );
};

export default MyButton3;
