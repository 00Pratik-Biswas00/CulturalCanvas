import React from "react";
import { useNavigate } from "react-router-dom";

const MyButton1 = ({ buttonLink, buttonName }) => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate(`${buttonLink}`);
        }}
        className="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-[#193c70e9] to-[#1489386c] hover:to-[#174926]"
      >
        <span className="relative text-sm text-white">{buttonName} </span>
        <div className="flex items-center -space-x-3 translate-x-3">
          <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default MyButton1;
