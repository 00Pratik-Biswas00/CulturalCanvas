import React from "react";

const InputComponent = ({ iName, iType }) => {
  return (
    <input
      name={iName}
      type={iType}
      className="w-full px-4 py-2 border rounded-lg bg-background1 dark:bg-dark_background1 focus:outline-none focus:ring-2 focus:ring-highlight"
    />
  );
};

export default InputComponent;
