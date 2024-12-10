import React from "react";

const InputComponent = ({
  iName,
  iType,
  name,
  value,
  onChange,
  required = false,
  disabled = false,
}) => {
  return (
    <div className="relative w-full my-3 border-b-2 border-dark_background2 dark:border-background2 group">
      <input
        type={iType}
        name={name}
        disabled={disabled}
        required={required}
        value={value}
        className="w-full h-[50px] bg-transparent border-none outline-none text-primary_text dark:text-dark_primary_text text-lg font-playfair"
        onChange={onChange}
      />
      <label
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 text-primary_text dark:text-dark_primary_text text-xl pointer-events-none transition-all duration-500 font-bold font-pangaia ${
          value
            ? "-top-2 text-sm font-medium font-playfair"
            : "group-focus-within:-top-2 group-focus-within:text-sm group-focus-within:font-medium group-focus-within:font-playfair"
        }`}
      >
        {iName}
      </label>
    </div>
  );
};

export default InputComponent;
