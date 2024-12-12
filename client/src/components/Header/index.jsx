import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModalLogin from "../modals/LoginModal/ModalLogin";
import SignUpModal from "../modals/SignUpModal/SignUpModal";
import ForgotPasswordModal from "../modals/ForgotPasswordModal/ForgotPasswordModal";
import ResetPasswordModal from "../modals/ResetPasswordModal/[id]/token/ResetPasswordModal";
import { switchTheme } from "../../redux/slices/themeSlice";
import { switchLoginModalOpen } from "../../redux/slices/loginModalOpenSlice";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo/logo.png";
import headerBG from "../../assets/logo/headerBG.png";

import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { MdLightMode, MdDarkMode, MdOutlineTranslate } from "react-icons/md";
// import { routeContent } from "../../utils/constants";
import TranslatePopUp from "./TranslatePopUp";

// Routes

const Header = ({ open, setOpen }) => {
  const navbarRef = useRef(null);
  const user = useSelector((state) => state.user.userInfo);
  const theme = useSelector((state) => state.theme);
  const isLoginModalOpen = useSelector((state) => state.loginModalOpen);
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false);

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isFPModalOpen, setIsFPModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [showTranslate, setShowTranslate] = useState(false);

  const { t } = useTranslation();
  const routeContent = t("UserRoutesNames", { returnObjects: true });

  const [isTranslatePopUp, setIsTranslatePopUp] = useState(false);
  const toggleTranslatePopup = () => {
    setIsTranslatePopUp(!isTranslatePopUp);
  };
  const openResetModal = () => {
    setIsResetModalOpen(true);
    dispatch(switchLoginModalOpen(false));
    setIsSignUpModalOpen(false);
    setIsFPModalOpen(false);
  };

  const openLoginModal = () => {
    dispatch(switchLoginModalOpen(true));
    setIsSignUpModalOpen(false);
    setIsFPModalOpen(false);
    setIsResetModalOpen(false);
  };

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
    dispatch(switchLoginModalOpen(false));
    setIsFPModalOpen(false);
    setIsResetModalOpen(false);
  };

  const openFPModal = () => {
    setIsFPModalOpen(true);
    dispatch(switchLoginModalOpen(false));
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
    const initials = names.map((n) => n[0]).join("");
    return initials.toUpperCase();
  };

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (
        !document.querySelector(
          "script[src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit']"
        )
      ) {
        const script = document.createElement("script");
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);
      }
    };

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "as,bn,en,gu,hi,kn,ml,mr,or,pa,ta,te,ur,ks,ne,sd,si,sa,brx,doi,dv,mni,mrj,sat,bh,lep,mai,kok,ks",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div
      style={{
        backgroundImage: !darkMode ? `url(${headerBG})` : "none",
      }}
      className=" bg-background1 dark:bg-dark_background2 text-dark_secondary_text dark:text-dark_primary_text font-semibold  px-16 flex justify-between items-center bg-cover bg-center"
    >
      <div className="">
        <NavLink
          to="/"
          className="flex  items-center"
          onClick={handleNavLinkClick}
        >
          <h1 className="logo-name text-[5rem]   ">C</h1>
          <div>
            <h1 className="logo-name leading-5 text-xl">ultural </h1>
            <h1 className="logo-name leading-5 text-xl">anvas</h1>
          </div>
        </NavLink>
      </div>

      <div className="hidden lg:flex items-center justify-center space-x-5">
        <div className="flex space-x-7 font-ubuntu font-medium ">
          {routeContent.map((routes, ind) => (
            <NavLink
              key={ind}
              to={routes.route_link}
              className={({ isActive }) =>
                isActive
                  ? "text-highlight_hover dark:text-dark_primary_text  "
                  : " text-dark_secondary_text dark:text-highlight hover:text-highlight_hover dark:hover:text-highlight_hover header_links transition-transform duration-500 ease transform hover:scale-110 "
              }
              end
              onClick={handleNavLinkClick}
            >
              {routes.route_name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* <div id="google_translate_element"></div> */}
      {/* Google Translate Element */}

      {/* theme change, login, and Google */}
      <div className="hidden lg:flex items-center justify-center space-x-5">
        <div className="flex items-center justify-center gap-x-4 font-ubuntu font-medium text-sm ">
          {/* <div className="flex flex-col items-center justify-center ">
            <button onClick={() => setShowTranslate(!showTranslate)}>
              <MdOutlineTranslate className="w-5 h-5" />
            </button>

            <div
              id="google_translate_element"
              className={` absolute top-14 transition-opacity duration-300 ${
                showTranslate ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            ></div>
          </div> */}

          <div className="flex flex-col items-center justify-center ">
            <button onClick={toggleTranslatePopup}>
              <MdOutlineTranslate className="w-5 h-5" />
            </button>

            <div
              id="google_translate_element"
              className={` absolute top-14 transition-opacity duration-300 ${
                showTranslate ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            ></div>
          </div>

          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <MdLightMode className=" w-5 h-5" />
            ) : (
              <MdDarkMode className=" w-5 h-5 text-primary_text dark:text-dark_primary_text " />
            )}
          </button>

          <div className=" flex items-center">
            {user ? (
              <a href="/my-profile">
                {user.photo?.url ? (
                  <img
                    src={user.photo.url}
                    alt="Profile"
                    className="w-14 h-14 rounded-full cursor-pointer "
                  />
                ) : (
                  <div className="bg-background1 dark:bg-dark_background1 w-14 h-14 rounded-full border border-dark_background1 dark:border-background1 flex items-center justify-center text-lg cursor-pointer">
                    {getInitials(user.name)}
                  </div>
                )}
              </a>
            ) : (
              <button
                className="uppercase bg-highlight hover:bg-highlight_hover text-primary_text hover:text-dark_primary_text px-2 py-1 rounded font-ubuntu duration-700"
                onClick={openLoginModal}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
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
            {routeContent.map((routes, ind) => (
              <NavLink
                key={ind}
                to={routes.route_link}
                className={({ isActive }) =>
                  isActive
                    ? "text-highlight_hover dark:text-dark_primary_text uppercase "
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
          onClose={() => dispatch(switchLoginModalOpen(false))}
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
          isSignUpModalOpen={isSignUpModalOpen}
          isFPModalOpen={isFPModalOpen}
        />
      )}
      {isResetModalOpen && (
        <ResetPasswordModal
          onClose={() => setIsResetModalOpen(false)}
          isSignUpModalOpen={isSignUpModalOpen}
          isFPModalOpen={isFPModalOpen}
        />
      )}

      {isTranslatePopUp && <TranslatePopUp />}
    </div>
  );
};

export default Header;
