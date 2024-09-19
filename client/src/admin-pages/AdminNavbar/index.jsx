import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { logoutUser } from "../../store/slices/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "sonner";
import { IoIosLogOut } from "react-icons/io";

export const adminNavData = [
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Manage Users",
    path: "/users",
  },
  {
    name: "Manage Movies",
    path: "/movies",
  },
  {
    name: "Manage Cineasts",
    path: "/cineasts",
  },
  {
    name: "Manage Shows",
    path: "/shows",
  },
  {
    name: "Manage Theatres",
    path: "/theatres",
  },
  {
    name: "Profile Settings",
    path: "/settings",
  },
];

const AdminNavSidebar = ({ open }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.userInfo);

  const getInitials = (name) => {
    const names = name.split(" ");
    const initials = names.map((name) => name[0]).join("");
    return initials.toUpperCase();
  };

  // const handleLogout = () => {
  //   try {
  //     dispatch(logoutUser());

  //     navigate("/");
  //     window.location.reload();
  //     toast.success("Please visit again!");
  //   } catch (e) {
  //     toast.error("Failed logging out! Please try again.");
  //   }
  // };

  return (
    <div
      className={`fixed z-50 lg:flex inset-y-0 left-0 transform ${
        open ? "w-[200px]" : "w-[0px]"
      } overflow-auto transition-width duration-700 bg-background2 text-primary_text flex flex-col justify-between items-center`}
    >
      {/* Top section */}
      <div className="flex flex-col items-center">
        {/* admin/owner name and photo */}
        <div className="p-4 flex flex-col justify-center items-center">
          <div className="flex-shrink-0 mb-2">
            {user ? (
              user.image ? (
                <img
                  className="w-24 h-24 rounded-full"
                  src={user.image}
                  alt="User avatar"
                />
              ) : (
                <div className="w-24 h-24 flex items-center justify-center bg-shadow rounded-full text-4xl font-semibold">
                  {getInitials(user.name)}
                </div>
              )
            ) : (
              <img
                className="w-24 h-24 rounded-full"
                src="\avatar.jpg"
                alt="User avatar"
              />
            )}
          </div>
          <p className="text-2xl font-semibold text-center font-logo_text">
            {user?.name}
          </p>
        </div>

        {/* Links */}
        <nav>
          <ul className="p-4 flex flex-col items-center justify-center gap-y-2">
            {adminNavData.map((links, i) => (
              <li key={i}>
                <NavLink
                  to={links.path}
                  className="block px-4 py-2 hover:bg-shadow hover:font-bold font-medium rounded font-lato text-base text-center"
                >
                  {links.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Logout button at the bottom */}
      <div className="mb-4">
        <button>
          <span className="flex flex-row  px-4 py-2 text-md hover:bg-shadow font-medium hover:font-bold justify-center items-center gap-2">
            Logout
            <IoIosLogOut className="mt-1" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default AdminNavSidebar;
