import React from "react";

const TextareaComponent = ({ pText, name, value, onChange }) => {
  return (
    <textarea
      placeholder={pText}
      name={name}
      value={value}
      className="w-full mt-2 px-4 py-2 border border-black dark:border-white rounded-lg bg-background1 dark:bg-dark_background1 focus:outline-none focus:ring-2 focus:ring-highlight placeholder:text-sm"
      onChange={onChange}
    />
  );
};

export default TextareaComponent;
