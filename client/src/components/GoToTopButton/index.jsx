import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { useSelector } from "react-redux";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showFooterButton, setShowFooterButton] = useState(false);
  const user = useSelector((state) => state?.user?.userInfo);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    const heightToHidden = 1000;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const footer = document.getElementById("footer");
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (footerTop <= windowHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(winScroll > heightToHidden);
      }
    } else {
      setIsVisible(winScroll > heightToHidden);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-1 ${
        user?.role === "admin" ? "right-1 lg:right-2" : "left-1 lg:left-2"
      }  lg:bottom-2 z-40 mt-8 flex items-center`}
    >
      {isVisible && (
        <div
          className={`text-2xl text-primary_text hover:text-dark_primary_text duration-500 bg-highlight hover:bg-[#FF671F]  rounded-full flex justify-center items-center cursor-pointer w-11 h-11 lg:w-12 lg:h-12 ${
            showFooterButton ? "absolute -top-5" : ""
          }`}
          onClick={goToBtn}
        >
          <IoIosArrowUp />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
