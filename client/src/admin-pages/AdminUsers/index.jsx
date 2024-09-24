import React, { useState } from "react";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoStorefront } from "react-icons/io5";

import FilterUser from "../../admin-components/AdminModals/FilterModals/FilterUser";

import { dummyData } from "../../utils/constants";

const AdminUsers = () => {
  const { dummyUser } = dummyData;

  const [searchQuery, setSearchQuery] = useState("");
  const [filterUsersModalOpen, setFilterUsersModalOpen] = useState(false);

  const handleApplyFilters = () => {
    setFilterUsersModalOpen(false);
  };

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-3 sm:py-6 px-4 duration-300 min-h-screen">
      <div className="flex flex-col  gap-5 sm:gap-10">
        <div className="flex flex-col sm:flex-row justify-between  w-full items-center sm:items-center gap-y-3 ">
          <h1 className="text-4xl font-semibold text-center   tracking-tighter font-playfair">
            Manage Your Users
          </h1>
          <div className="flex items-center justify-center gap-3">
            <FaFilter
              className=" cursor-pointer w-4 h-4 sm:w-5 sm:h-5"
              onClick={() => setFilterUsersModalOpen(true)}
            />

            <div className="relative w-full  flex items-center">
              <input
                type="text"
                placeholder="Search for Users..."
                className=" w-full  bg-background2 dark:bg-shadow rounded-lg focus:outline-none focus:border focus:border-highlight 
            
                  text-base sm:text-base 
                  pl-10 sm:pl-10  
                  py-2
                  sm:px-4"
                // value={searchQuery}
                // onChange={(e) => setSearchQuery(e.target.value)}
              />

              <FaSearch className="absolute left-3  w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {dummyData.dummyUser.map((content, ind) => (
            <div className=" relative flex items-start justify-start gap-5 p-3  border rounded-xl shadow-md shadow-primary_text dark:shadow-dark_primary_text  ">
              <div className="w-1/3 ">
                <img
                  src={content.userImg}
                  className=" w-full h-full rounded-xl"
                />
              </div>
              <div className="flex flex-col items-start text-xs lg:text-base justify-evenly h-full w-2/3">
                <p>
                  <b>Name:</b> {content.userName}
                </p>
                <p>
                  <b>Email:</b> {content.userEmail}
                </p>
                <p>
                  <b>Gender:</b> {content.userGender}
                </p>
                <p>
                  <b>Ph No.:</b> {content.userPhone}
                </p>
              </div>
              <div className=" cursor-pointer">
                <IoStorefront className="w-5 h-5 absolute bottom-2 right-8 text-highlight_hover hover:text-highlight_hover_dark" />

                <MdDelete className="w-5 h-5 absolute bottom-2 right-2 text-red-600 hover:text-red-800" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {filterUsersModalOpen && (
        <FilterUser
          filterUsersModalOpen={filterUsersModalOpen}
          setFilterUsersModalOpen={setFilterUsersModalOpen}
          handleApplyFilters={handleApplyFilters}
          // handleResetFilters={handleResetFilters}
        />
      )}
    </section>
  );
};

export default AdminUsers;
