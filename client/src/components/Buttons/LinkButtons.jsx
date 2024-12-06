import React from "react";
import { Link } from "react-scroll";

const LinkButtons = ({ toWhere, LinkName, classDesign }) => {
  return (
    <Link
      to={toWhere}
      smooth={true}
      className={`relative flex items-center justify-center font-bold gap-2  group overflow-hidden px-8 py-2    rounded-3xl
        cursor-pointer
        uppercase 
        before:absolute 
        before:inset-0 
        
        before:scale-y-[0.1] 
        before:origin-bottom
        before:transition
        before:duration-300
        hover:before:scale-y-100

      ${classDesign}

      

      duration-500
      transition-transform hover:scale-105 transform-cpu`}
    >
      <span className="relative text-base text-white"> {LinkName} </span>
    </Link>
  );
};

export default LinkButtons;
