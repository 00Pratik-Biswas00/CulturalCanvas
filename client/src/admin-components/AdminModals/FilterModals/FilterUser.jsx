import React from "react";
import FilterCommon from "./FilterCommon";

const FilterUser = ({
  filterUsersModalOpen,
  setFilterUsersModalOpen,
  handleApplyFilters,
  handleResetFilters,
}) => {
  return (
    <FilterCommon
      filterModalOpen={filterUsersModalOpen}
      setFilterModalOpen={setFilterUsersModalOpen}
      handleApplyFilters={handleApplyFilters}
      // handleResetFilters={handleResetFilters}
    >
      <h2 className="text-2xl lg:text-3xl font-bold mb-4">Filter Users</h2>
      <div className="flex items-center">
        <input type="radio" name="role" value="Seller" className="h-5 w-5" />
        <span className="ml-2 text-xl font-playfair">Seller</span>
      </div>
    </FilterCommon>
  );
};

export default FilterUser;
