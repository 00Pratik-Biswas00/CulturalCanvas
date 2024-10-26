import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { useSelector } from "react-redux";
import MyButton2 from "../Buttons/MyButton2";

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
      }  lg:bottom-2 z-40 mt-8 flex items-center `}
    >
      {isVisible && (
        <div className={` ${showFooterButton ? "absolute -top-5" : ""}`}>
          <MyButton2
            classDesign={
              "text-highlight_dark hover:text-dark_primary_text  dark:text-dark_primary_text"
            }
            buttonLink={goToBtn}
            buttonName1={<IoIosArrowUp />}
            buttonName2={"TOP"}
          />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
