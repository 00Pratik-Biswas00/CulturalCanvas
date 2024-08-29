import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/slices/userSlice";

import { toast } from "sonner";
import { switchLoginModalOpen } from "../../store/slices/loginModalOpenSlice";

import logo from "../../assets/logo/chobimancha_logo3.png";
// import LoginModal from "../modals/login";
// import SignUpModal from "../modals/signup";
// import ForgotPasswordModal from "../modals/forgotpassword";

import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Header = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const [isSignupModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isForgotPassModalOpen, setIsForgotPassModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const dispatch = useDispatch();
  const navbarRef = useRef(null);

  // const user = useSelector((state) => state.user.userInfo);

  const getInitials = (name) => {
    const names = name.split(" ");
    const initials = names.map((n) => n[0]).join("");
    return initials.toUpperCase();
  };

  const openLoginModal = () => {
    dispatch(switchLoginModalOpen(true));
  };

  const toggleSignUpModal = () => {
    setIsSignUpModalOpen(!isSignupModalOpen);
  };

  const toggleForgotPassModal = () => {
    setIsForgotPassModalOpen(!isForgotPassModalOpen);
  };

  const switchToSignUpModal = () => {
    dispatch(switchLoginModalOpen(false));
    setIsSignUpModalOpen(true);
  };

  const switchToLoginModal = () => {
    setIsSignUpModalOpen(false);
    setIsForgotPassModalOpen(false);
    dispatch(switchLoginModalOpen(true));
  };

  const switchToForgotPassModal = () => {
    dispatch(switchLoginModalOpen(false));
    setIsForgotPassModalOpen(true);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    setIsDropdownOpen(false);
    navigate("/");
    window.location.reload();
    toast.success("Please visit again!");
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

  return (
    <div className="bg-background2 text-primary_text font-semibold py-4 px-5 md:px-10 flex justify-between items-center">
      <div className="text-xl font-bold">
        <NavLink
          to="/"
          className="gap-x-2 flex items-center"
          onClick={handleNavLinkClick}
        >
          <img
            src={logo}
            alt="chobimancha_logo"
            className="rounded-full w-12"
          />
          <h2 className="text-3xl sm:text-xl md:text-2xl lg:text-3xl font-logo_text font-bold">
            Chhobimancha
          </h2>
        </NavLink>
      </div>
      <div className="hidden lg:flex items-center justify-center space-x-5">
        <div className="flex space-x-4 font-ubuntu font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary_text"
                : "text-highlight hover:text-highlight_hover"
            }
            end
            onClick={handleNavLinkClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/explore/movies"
            className={({ isActive }) =>
              isActive
                ? "text-primary_text"
                : "text-highlight  hover:text-highlight_hover"
            }
            onClick={handleNavLinkClick}
          >
            Explore Movies
          </NavLink>
          <NavLink
            to="/explore/shows"
            className={({ isActive }) =>
              isActive
                ? "text-primary_text"
                : "text-highlight hover:text-highlight_hover"
            }
            onClick={handleNavLinkClick}
          >
            Book a Show
          </NavLink>
          <NavLink
            to="/subscribe"
            className={({ isActive }) =>
              isActive
                ? "text-primary_text"
                : "text-highlight hover:text-highlight_hover"
            }
            onClick={handleNavLinkClick}
          >
            Buy Subscription
          </NavLink>
        </div>

        {/* <div className="relative flex items-center ">
          {user ? (
            <>
              {user.image ? (
                <img
                  src={user.image}
                  alt="Profile"
                  className="w-12 h-12 rounded-full cursor-pointer border border-highlight"
                  onClick={toggleDropdown}
                />
              ) : (
                <div
                  className="bg-shadow w-12 h-12 rounded-full border border-primary_text flex items-center justify-center text-lg cursor-pointer"
                  onClick={toggleDropdown}
                >
                  {getInitials(user.name)}
                </div>
              )}
              {isDropdownOpen && (
                <div className="z-30 absolute right-0 mt-56 w-48 bg-shadow rounded-md shadow-lg font-ubuntu text-primary_text font-medium">
                  <NavLink
                    to="/myfavourites"
                    className="block px-4 py-2 hover:rounded-t-md hover:bg-secondary_text"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    My Favorites
                  </NavLink>
                  <NavLink
                    to="/mybookings"
                    className="block px-4 py-2 hover:bg-secondary_text"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    My Bookings
                  </NavLink>
                  <NavLink
                    to="/myprofile"
                    className="block px-4 py-2 hover:bg-secondary_text"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    My Profile
                  </NavLink>
                  <button
                    className="block px-4 py-2 hover:bg-secondary_text hover:rounded-b-md w-full text-left"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <button
              onClick={openLoginModal}
              className="bg-highlight hover:bg-highlight_hover text-primary_text px-4 py-2 rounded font-ubuntu"
            >
              Login
            </button>
          )}
        </div> */}
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

          {/* <div className="relative flex items-center">
            {user ? (
              <>
                {user.image ? (
                  <img
                    src={user.image}
                    alt="Profile"
                    className="w-20 h-20 rounded-full cursor-pointer border border-highlight"
                    onClick={toggleDropdown}
                  />
                ) : (
                  <div
                    className="bg-gray-800 w-20 h-20 rounded-full border border-primary_text flex items-center justify-center text-lg cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    {getInitials(user.name)}
                  </div>
                )}
              </>
            ) : (
              <button
                onClick={openLoginModal}
                className="bg-highlight hover:bg-highlight_hover text-primary_text px-4 py-2 rounded font-ubuntu"
              >
                Login
              </button>
            )}
          </div> */}

          <div className="flex flex-col items-end gap-y-5 text-lg font-ubuntu">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary_text"
                  : "text-highlight hover:text-highlight_hover"
              }
              end
              onClick={handleNavLinkClick}
            >
              Home
            </NavLink>
            <NavLink
              to="/explore/movies"
              className={({ isActive }) =>
                isActive
                  ? "text-primary_text"
                  : "text-highlight  hover:text-highlight_hover"
              }
              onClick={handleNavLinkClick}
            >
              Explore Movies
            </NavLink>
            <NavLink
              to="/explore/shows"
              className={({ isActive }) =>
                isActive
                  ? "text-primary_text"
                  : "text-highlight hover:text-highlight_hover"
              }
              onClick={handleNavLinkClick}
            >
              Book a Show
            </NavLink>
            <NavLink
              to="/subscribe"
              className={({ isActive }) =>
                isActive
                  ? "text-primary_text"
                  : "text-highlight hover:text-highlight_hover"
              }
              onClick={handleNavLinkClick}
            >
              Buy Subscription
            </NavLink>
            {/* {user && (
              <>
                <NavLink
                  to="/myfavourites"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary_text"
                      : "text-highlight hover:text-highlight_hover"
                  }
                  onClick={handleNavLinkClick}
                >
                  My Favorites
                </NavLink>
                <NavLink
                  to="/mybookings"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary_text"
                      : "text-highlight hover:text-highlight_hover"
                  }
                  onClick={handleNavLinkClick}
                >
                  My Bookings
                </NavLink>
                <NavLink
                  to="/myprofile"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary_text"
                      : "text-highlight hover:text-highlight_hover"
                  }
                  onClick={handleNavLinkClick}
                >
                  My Profile
                </NavLink>
                <button
                  className="text-highlight hover:text-highlight_hover"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )} */}
          </div>
        </div>
      )}

      {/* <LoginModal
        isOpen={useSelector((state) => state.loginModalOpen)}
        onClose={() => dispatch(switchLoginModalOpen(false))}
        onSignUpClick={switchToSignUpModal}
        onForgotPassClick={switchToForgotPassModal}
      />
      <SignUpModal
        isOpen={isSignupModalOpen}
        onClose={toggleSignUpModal}
        onLoginClick={switchToLoginModal}
      />
      <ForgotPasswordModal
        isOpen={isForgotPassModalOpen}
        onClose={toggleForgotPassModal}
        onLoginClick={switchToLoginModal}
      /> */}
    </div>
  );
};

export default Header;
