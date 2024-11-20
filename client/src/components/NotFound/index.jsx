import React from "react";
import { useSelector } from "react-redux";

const NotFound = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <>
      <img
        src="/illustatus.svg"
        className={theme === "dark" ? "bg-dark_background1 py-4" : "py-4"}
        alt="Not Found"
      />
    </>
  );
};

export default NotFound;