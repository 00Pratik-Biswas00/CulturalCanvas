import React from "react";

const TextareaComponent = ({ pText, value, onChange }) => {
  return (
    <textarea
      placeholder={pText}
      value={value}
      className="w-full mt-2 px-4 py-2 border rounded-lg bg-background1 dark:bg-dark_background1 focus:outline-none focus:ring-2 focus:ring-highlight placeholder:text-sm"
      onChange={onChange}
    />
  );
};

export default TextareaComponent;
