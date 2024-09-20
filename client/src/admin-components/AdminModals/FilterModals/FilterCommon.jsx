import React from "react";
import { FaTimes } from "react-icons/fa";

const FilterCommon = ({
  filterUsersModalOpen,
  setFilterUsersModalOpen,
  handleApplyFilters,
  handleResetFilters,
  children,
}) => {
  if (!filterUsersModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text bg-opacity-50 dark:bg-opacity-50 flex items-center justify-center">
      <div className="bg-background2 dark:bg-shadow sm:w-[40%] px-4 py-2 rounded-lg relative">
        <FaTimes
          className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-xl cursor-pointer"
          onClick={() => setFilterUsersModalOpen(false)}
        />
        {/* Constant layout */}
        {children}

        {/* Button Section */}
        <div className="flex justify-end gap-x-4">
          <button
            className="bg-red-600 hover:bg-red-800 text-dark_primary_text font-medium py-1 px-3 rounded-lg"
            onClick={handleResetFilters}
          >
            Reset
          </button>
          <button
            className="bg-highlight hover:bg-[#FF671F] text-dark_primary_text font-medium py-1 px-3 rounded-lg"
            onClick={handleApplyFilters}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterCommon;
