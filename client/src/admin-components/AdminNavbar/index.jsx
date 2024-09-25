import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { logoutUser } from "../../store/slices/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "sonner";
import { IoIosLogOut } from "react-icons/io";
import { MdLightMode, MdDarkMode } from "react-icons/md";

import { switchTheme } from "../../redux/slices/themeSlice";
import { adminNavData } from "../../utils/constants";
import { logoutUser } from "../../redux/slices/authSlice";

const AdminNavSidebar = ({ open }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const user = useSelector((state) => state.user?.userInfo);
  const logout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    if (theme === "dark") {
      dispatch(switchTheme("light"));
    } else {
      dispatch(switchTheme("dark"));
    }
    setDarkMode(!darkMode);
  };

  const getInitials = (name) => {
    const names = name.split(" ");
    const initials = names.map((name) => name[0]).join("");
    return initials.toUpperCase();
  };

  return (
    <div
      className={`fixed z-50 lg:flex inset-y-0 left-0 transform ${
        open ? "w-[200px]" : "w-[0px]"
      } overflow-auto transition-width duration-300 flex flex-col justify-between items-center bg-background2 dark:bg-shadow text-dark_secondary_text dark:text-dark_primary_text`}
    >
      {/* Top section */}
      <div className="flex flex-col items-center">
        {/* admin/owner name and photo */}
        <div className="p-4 flex flex-col justify-center items-center">
          <button onClick={toggleDarkMode} className=" absolute left-2 top-2">
            {darkMode ? (
              <MdLightMode className=" w-5 h-5" />
            ) : (
              <MdDarkMode className=" w-5 h-5 text-primary_text dark:text-dark_primary_text " />
            )}
          </button>
          <div className="flex-shrink-0 mb-2">
            {user ? (
              user.photo ? (
                <img
                  className="w-24 h-24 rounded-full"
                  src={user.photo?.url}
                  alt="User avatar"
                />
              ) : (
                <div className="w-24 h-24 flex items-center justify-center  border-y border-dark_secondary_text dark:border-dark_primary_text rounded-full text-4xl font-semibold">
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
          <p className="text-2xl font-semibold text-center ">{user?.name}</p>

          <p className="text-xs underline font-semibold text-center uppercase ">
            ({user?.role}){/* (Owner) */}
          </p>
        </div>

        {/* Links */}
        <nav>
          <ul className="p-4 flex flex-col items-center justify-center gap-y-2">
            {adminNavData.map((links, i) => (
              <li key={i}>
                <NavLink
                  to={links.path}
                  className="block px-4 py-2  hover:font-bold font-medium rounded font-lato text-base text-center"
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
        <button onClick={logout}>
          <span className="flex flex-row  px-4 py-2 text-md  font-medium hover:font-bold justify-center items-center gap-2">
            Logout
            <IoIosLogOut className="mt-1" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default AdminNavSidebar;
