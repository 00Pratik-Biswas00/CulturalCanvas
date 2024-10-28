import React from "react";

const SquareAnimation = () => {
  return (
    <div className="squareAnimatedBox">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute  w-14 h-14 rounded-full border-[5px]  border-dark_background2 dark:border-background2"
        ></div>
      ))}
    </div>
  );
};

export default SquareAnimation;
