import React from "react";

const StartChat = () => {
  return (
    <div className="flex justify-end w-full gap-2">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Write your message..."
          className="w-full py-2  px-3 bg-shadow rounded-xl text-dark_primary_text placeholder:text-dark_primary_text focus:outline-none focus:bg-shadow focus:border-shadow"
        />
      </div>
      <button className="text-dark_primary_text px-3 cursor-pointer bg-[#2a3d4c] hover:bg-[#1b2934] rounded-xl ">
        Submit
      </button>
    </div>
  );
};

export default StartChat;
