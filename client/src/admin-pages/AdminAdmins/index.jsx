import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

import SignUpModal from "../../components/modals/SignUpModal/SignUpModal";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_ADMINS } from "../../graphql/roleQuery";
import MalePng from "./../../assets/logo/male.png";
import FemalePng from "./../../assets/logo/female.png";
import DeleteUserButton from "../../components/UserDeleteButton";
import AdminSignUpModal from "../../admin-components/AdminModals/AdminSignUpModal/AdminSignUpModal";
import AdminApplications from "./AdminApplications";

const AdminAdmins = () => {
  const user = useSelector((state) => state?.user?.userInfo);
  const [admins, setAdmins] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const [isAdminSignUpModalOpen, setIsAdminSignUpModalOpen] = useState(false);

  const openSignUpModal = () => {
    setIsAdminSignUpModalOpen(true);
  };

  const { data, loading, error, refetch } = useQuery(GET_ADMINS, {
    fetchPolicy: "network-only",
  });

  const loadAdmins = async () => {
    await refetch();
  };

  useEffect(() => {
    if (data) {
      setAdmins(data.getAdmins);
      loadAdmins();
    }
  }, [user, data]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredAdmins = admins.filter((admin) =>
    admin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-3 sm:py-6 px-4 duration-300 min-h-screen">
      <div className="flex flex-col  gap-5 sm:gap-10 ">
        <div className="flex flex-col  gap-5 ">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-y-3 ">
            <h1 className="text-4xl font-semibold text-center   tracking-tighter font-playfair">
              Manage Your Admins
            </h1>

            <div className="relative w-full sm:w-1/3  flex items-center">
              <input
                type="text"
                placeholder="Search for Admins..."
                className=" w-full  bg-background2 dark:bg-shadow rounded-lg focus:outline-none focus:border focus:border-highlight 
            
                  text-base sm:text-base 
                  pl-10 sm:pl-10  
                  py-2
                  sm:px-4"
                value={searchQuery}
                onChange={handleSearch}
              />

              <FaSearch className="absolute left-3  w-4 h-4" />
            </div>
          </div>
          {user?.role === "owner" && (
            <button
              onClick={openSignUpModal}
              className="bg-highlight_hover hover:bg-highlight_hover_dark text-dark_primary_text font-medium font-ubuntu  w-1/3 py-1 px-4 rounded  "
            >
              Add New Admins
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filteredAdmins.length > 0 &&
            filteredAdmins.map((admin, ind) => (
              <div className=" relative flex items-start justify-start gap-5 p-3  border rounded-xl shadow-md shadow-primary_text dark:shadow-dark_primary_text  ">
                <div className="w-1/3">
                  <img
                    src={
                      admin.photo?.url ||
                      (admin.gender === "Male" ? MalePng : FemalePng)
                    }
                    alt={admin.name}
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
                <div className="flex flex-col items-start text-xs lg:text-base justify-evenly h-full w-2/3">
                  <p>
                    <b>Name:</b> {admin.name}
                  </p>
                  <p>
                    <b>Email:</b> {admin.email}
                  </p>
                  <p>
                    <b>Gender:</b> {admin.gender}
                  </p>
                  <p>
                    <b>Ph No.:</b> {admin.phone}
                  </p>
                </div>
                <div className=" cursor-pointer">
                  {/*conditional  */}
                  {user?.role === "owner" && (
                    <DeleteUserButton userId={admin.id} reload={loadAdmins} />
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>

      {user?.role === "owner" && <AdminApplications />}

      {isAdminSignUpModalOpen && (
        <AdminSignUpModal
          onClose={() => setIsAdminSignUpModalOpen(false)}
          loadAdmins={loadAdmins}
        />
      )}
    </section>
  );
};

export default AdminAdmins;
