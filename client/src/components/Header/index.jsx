import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/logo/logo.png";
import headerBG from "../../assets/logo/headerBG.png";

import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import ModalLogin from "../modals/LoginModal/ModalLogin";
import SignUpModal from "../modals/SignUpModal/SignUpModal";
import ForgotPasswordModal from "../modals/ForgotPasswordModal/ForgotPasswordModal";
import ResetPasswordModal from "../modals/ResetPasswordModal/[id]/token/ResetPasswordModal";

// Routes

const RoutesNames = [
  {
    route_link: "/",
    route_name: "Home",
  },
  {
    route_link: "/heritage",
    route_name: "Heritage",
  },
  {
    route_link: "/culture_tradition",
    route_name: "Culture & Tradition",
  },
  {
    route_link: "/learn_Indian_culture",
    route_name: "Learn Indian Culture",
  },
  {
    route_link: "/trip_recommendation",
    route_name: "Trip Recommendation",
  },
  {
    route_link: "/blogs_vlogs",
    route_name: "Blogs & Vlogs",
  },
  {
    route_link: "/virtual_store",
    route_name: "Virtual Store",
  },
];

const Header = ({ open, setOpen }) => {
  const navbarRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isFPModalOpen, setIsFPModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const openResetModal = () => {
    setIsResetModalOpen(true);
    setIsLoginModalOpen(false);
    setIsSignUpModalOpen(false);
    setIsFPModalOpen(false);
  };
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsSignUpModalOpen(false);
    setIsFPModalOpen(false);
    setIsResetModalOpen(false);
  };

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
    setIsLoginModalOpen(false);
    setIsFPModalOpen(false);
    setIsResetModalOpen(false);
  };

  const openFPModal = () => {
    setIsFPModalOpen(true);
    setIsLoginModalOpen(false);
    setIsSignUpModalOpen(false);
    setIsResetModalOpen(false);
  };

  useEffect(() => {
    setOpen(false);
  }, []);

  const handleNavLinkClick = () => {
    setOpen(false);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        backgroundImage: !darkMode ? `url(${headerBG})` : "none",
      }}
      className=" bg-background1 dark:bg-dark_background2  text-dark_secondary_text dark:text-dark_primary_text font-semibold pt-2 pb-1 px-16 flex justify-between items-center bg-cover bg-center"
    >
      <div className="text-xl font-bold">
        <NavLink
          to="/"
          className="flex flex-col items-center"
          onClick={handleNavLinkClick}
        >
          <img src={logo} alt="logo" className=" w-[7rem]" />
          <h2 className="text-3xl sm:text-xl md:text-2xl lg:text-base font-playfair font-bold">
            Cultural Canvas
          </h2>
        </NavLink>
      </div>
      <div className="hidden lg:flex items-center justify-center space-x-5">
        <div className="flex space-x-4 font-ubuntu font-medium text-sm uppercase">
          {RoutesNames.map((routes, ind) => (
            <NavLink
              to={routes.route_link}
              className={({ isActive }) =>
                isActive
                  ? "text-highlight_hover dark:text-dark_primary_text uppercase underline"
                  : " text-dark_secondary_text dark:text-highlight hover:text-highlight_hover dark:hover:text-highlight_hover "
              }
              end
              onClick={handleNavLinkClick}
            >
              {routes.route_name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* theme change and login */}
      <div className="hidden lg:flex items-center justify-center space-x-5">
        <div className="flex space-x-4 font-ubuntu font-medium text-sm ">
          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <MdLightMode className=" w-5 h-5" />
            ) : (
              <MdDarkMode className=" w-5 h-5 text-primary_text dark:text-dark_primary_text " />
            )}
          </button>
          <button
            className="uppercase bg-highlight hover:bg-highlight_hover text-primary_text hover:text-dark_primary_text px-2 py-1 rounded font-ubuntu duration-700"
            onClick={openLoginModal}
          >
            Login
          </button>
        </div>
      </div>

      <div className="lg:hidden flex items-center">
        <button
          className="text-primary_text focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? null : <CiMenuFries size={26} />}
        </button>
      </div>

      {open && (
        <div
          ref={navbarRef}
          className="lg:hidden fixed top-0 right-0 h-screen duration-700 bg-background1 bg-opacity-90 z-40 flex flex-col items-end space-y-4 p-7 gap-y-3"
        >
          <button
            className="self-end text-primary_text focus:outline-none "
            onClick={() => setOpen(!open)}
          >
            <RxCross2 size={24} />
          </button>

          <div className="flex flex-col items-end gap-y-5 text-lg font-ubuntu">
            {RoutesNames.map((routes, ind) => (
              <NavLink
                to={routes.route_link}
                className={({ isActive }) =>
                  isActive
                    ? "text-highlight_hover dark:text-dark_primary_text uppercase underline"
                    : " text-dark_secondary_text dark:text-highlight hover:text-highlight_hover dark:hover:text-highlight_hover "
                }
                end
                onClick={handleNavLinkClick}
              >
                {routes.route_name}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {isLoginModalOpen && (
        <ModalLogin
          onClose={() => setIsLoginModalOpen(false)}
          openFPModal={openFPModal}
          openSignUpModal={openSignUpModal}
          isSignUpModalOpen={isSignUpModalOpen}
          isFPModalOpen={isFPModalOpen}
        />
      )}
      {isSignUpModalOpen && (
        <SignUpModal
          onClose={() => setIsSignUpModalOpen(false)}
          openFPModal={openFPModal}
          openSignUpModal={openSignUpModal}
          isSignUpModalOpen={isSignUpModalOpen}
          isFPModalOpen={isFPModalOpen}
        />
      )}
      {isFPModalOpen && (
        <ForgotPasswordModal
          onClose={() => setIsFPModalOpen(false)}
          openResetModal={openResetModal}
          // openSignUpModal={openSignUpModal}
          // openFPModal={openFPModal}
          isSignUpModalOpen={isSignUpModalOpen}
          isFPModalOpen={isFPModalOpen}
        />
      )}
      {isResetModalOpen && (
        <ResetPasswordModal
          onClose={() => setIsResetModalOpen(false)}
          // openSignUpModal={openSignUpModal}
          // openFPModal={openFPModal}
          isSignUpModalOpen={isSignUpModalOpen}
          isFPModalOpen={isFPModalOpen}
        />
      )}
    </div>
  );
};

export default Header;
