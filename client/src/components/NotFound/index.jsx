import React from "react";
import { useSelector } from "react-redux";

const NotFound = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <section className=" min-h-screen">
      <img
        src="/illustatus.svg"
        className={
          theme === "dark"
            ? "bg-dark_background1 py-4  min-h-screen"
            : "py-4  min-h-screen"
        }
        alt="Not Found"
      />
    </section>
  );
};

export default NotFound;
