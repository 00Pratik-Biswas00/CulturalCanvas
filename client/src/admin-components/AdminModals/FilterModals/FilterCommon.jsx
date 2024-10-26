import React from "react";
import { RxCross1 } from "react-icons/rx";
import MyButton3 from "../../../components/Buttons/MyButton3";
import MyButton4 from "../../../components/Buttons/MyButton4";

const FilterCommon = ({
  filterModalOpen,
  handleReverseFilters,
  handleApplyFilters,
  handleResetFilters,
  children,
}) => {
  if (!filterModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text bg-opacity-50 dark:bg-opacity-50 flex items-center justify-center">
      <div className="bg-background2 dark:bg-shadow sm:w-[40%] p-4 rounded-lg relative flex flex-col gap-4">
        <RxCross1
          className="absolute top-2 right-4 text-red-600 hover:text-red-800 text-2xl font-bold cursor-pointer"
          onClick={handleReverseFilters}
        />
        {/* Constant layout */}
        {children}

        {/* Button Section */}
        <div className="flex justify-end gap-x-4">
          <MyButton4
            buttonLink={handleResetFilters}
            classDesign={
              "bg-red-600 before:bg-red-800  text-dark_primary_text py-1 "
            }
            buttonName={"Reset"}
          />

          <MyButton3
            buttonLink={handleApplyFilters}
            buttonName={"Apply"}
            classDesign={
              "before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text "
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FilterCommon;
