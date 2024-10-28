import React from "react";
import FilterCommon from "../../admin-components/AdminModals/FilterModals/FilterCommon";
import InputComponent from "../Input/InputComponent";

const FilterBlogsVlogs = ({
  BlogsVlogsModalOpen,
  setBlogsVlogsModalOpen,
  handleApplyFilters,
  handleResetFilters,
  setSelectedContentType, // Add this line to use the state setter
  handleReverseFilters,
  selectedContentType,
}) => {
  return (
    <div>
      <FilterCommon
        filterModalOpen={BlogsVlogsModalOpen}
        setFilterModalOpen={setBlogsVlogsModalOpen}
        handleApplyFilters={handleApplyFilters}
        handleResetFilters={handleResetFilters} // Pass reset function
        handleReverseFilters={handleReverseFilters}
      >
        <h2 className="text-2xl lg:text-3xl font-bold font-searchBars">
          Filter Blogs and Vlogs
        </h2>
        <div className="flex mt-4 justify-center gap-5 items-center font-playfair">
          <div className="flex justify-center gap-5 items-center font-playfair">
            <button
              onClick={() => setSelectedContentType("Blog")}
              className={`hollowBorder h-12 w-32 text-2xl rounded ${
                selectedContentType === "Blog"
                  ? "bg-highlight_dark text-dark_primary_text dark:text-primary_text"
                  : " "
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => setSelectedContentType("Vlog")}
              className={`hollowBorder h-12 w-32 text-2xl rounded ${
                selectedContentType === "Vlog"
                  ? "bg-highlight_dark text-dark_primary_text dark:text-primary_text"
                  : ""
              }`}
            >
              Vlog
            </button>
          </div>
        </div>

        <div className="flex gap-7">
          <InputComponent iName={"State-wise Filter"} />
          <InputComponent iName={"City-wise Filter"} />
        </div>
      </FilterCommon>
    </div>
  );
};

export default FilterBlogsVlogs;
