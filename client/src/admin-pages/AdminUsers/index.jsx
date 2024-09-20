import React, { useState } from "react";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { IoStorefront } from "react-icons/io5";

import Fateh from "../../assets/Heritage/aichat.png";
import FilterUser from "../../admin-components/AdminModals/FilterModals/FilterUser";

const dummyUser = [
  {
    userImg: Fateh,
    userName: "Arka Biswas",
    userEmail: "messi10.pratikbiswas@gmail.com",
    userGender: "Male",
    userPhone: "7001316356",
  },
  {
    userImg: Fateh,
    userName: "Chandrima Kar",
    userEmail: "chandrimakar16@gmail.com",
    userGender: "Female",
    userPhone: "9163145748",
  },
  {
    userImg: Fateh,
    userName: "Rupal Paul",
    userEmail: "ganjakhor@gmail.com",
    userGender: "Male",
    userPhone: "986537415",
  },
  {
    userImg: Fateh,
    userName: "Sattwikee Ghosh",
    userEmail: "sattwikeeghosh@gmail.com",
    userGender: "Female",
    userPhone: "9387456245",
  },
];
const AdminUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterUsersModalOpen, setFilterUsersModalOpen] = useState(false);

  const handleApplyFilters = () => {
    setFilterUsersModalOpen(false);
  };

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-6 px-4 duration-300 min-h-screen">
      <div className="flex flex-col  gap-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-y-3 ">
          <h1 className="text-4xl font-semibold   tracking-tighter font-playfair">
            Admin User Management
          </h1>
          <div className="flex items-center justify-center gap-3">
            <FaFilter
              className=" cursor-pointer w-4 h-4 sm:w-5 sm:h-5"
              onClick={() => setFilterUsersModalOpen(true)}
            />

            <div className="relative w-full sm:w-fit flex items-center">
              <input
                type="text"
                placeholder="Search for users..."
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
          {dummyUser.map((content, ind) => (
            <div className=" relative flex items-start justify-start gap-5 p-3  border rounded-xl shadow-md shadow-primary_text dark:shadow-dark_primary_text  ">
              <div>
                <img src={content.userImg} className="w-24 h-24 rounded-xl" />
              </div>
              <div className="flex flex-col items-start">
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
                <GrUserAdmin className="w-5 h-5 absolute bottom-2 right-8 text-highlight hover:text-[#FF671F]" />
                {/* <IoStorefront className="w-5 h-5 absolute bottom-2 right-8 text-highlight_hover hover:text-[#174926]" /> */}

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
