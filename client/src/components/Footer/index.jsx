import React from "react";
import mailImg from "../../assets/courses/mail.avif";
import callImg from "../../assets/courses/linkedin.jpeg";

const Footer = () => {
  return (
    <section className="bg-[#fff3e4] dark:bg-shadow text-primary_text dark:text-dark_primary_text py-10 px-16 duration-300 flex flex-col items-center relative overflow-hidden">
      {/* Background SVG */}
      <div className="absolute top-0 left-0 right-0 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          // fill="bg-background2 dark:bg-shadow"
          className="w-full h-full fill-current text-[#fff] dark:text-dark_background1"
        >
          <path d="M0 0v4c250 0 250 96 500 96S750 4 1000 4V0H0Z"></path>
        </svg>
      </div>

      <div className="flex w-full justify-between gap-5 z-10">
        <div>
          <ul className="font-secondary flex flex-col gap-y-2">
            <li className="cursor-pointer underline-animation h-fit w-fit">
              Terms & Conditions
            </li>
            <li className="cursor-pointer underline-animation h-fit w-fit">
              Privacy Policy
            </li>
            <li className="cursor-pointer underline-animation h-fit w-fit">
              Copyright Policy{" "}
            </li>
            <li className="cursor-pointer underline-animation h-fit w-fit">
              Hyperlinking Policy{" "}
            </li>
            <li className="cursor-pointer underline-animation h-fit w-fit">
              Accessibility Statement{" "}
            </li>
          </ul>
        </div>

        <div className="flex relative gap-2  items-end ">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className=" flex gap-2 justify-start items-center  cursor-pointer transition-transform hover:scale-110 duration-1000  transform-cpu"
          >
            <img
              src={mailImg}
              alt="mail"
              className=" rounded-full border p-1  w-12 h-12"
            />
          </a>

          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className=" flex gap-2 justify-start items-center  cursor-pointer transition-transform hover:scale-110 duration-1000  transform-cpu"
          >
            <img
              src={mailImg}
              alt="mail"
              className=" rounded-full border p-1  w-12 h-12"
            />
          </a>
        </div>

        {/*  */}
        <div className="flex flex-col pt-10 gap-2 justify-center items-end ">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className=" flex gap-2 justify-start items-center  cursor-pointer transition-transform hover:scale-110 duration-1000  transform-cpu"
          >
            <img
              src={mailImg}
              alt="mail"
              className=" rounded-full border p-1  w-12 h-12"
            />
            <span className="  font-medium  ">culturalcanvas@gmail.com</span>
          </a>

          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className=" flex gap-2 justify-start items-center  cursor-pointer transition-transform hover:scale-110 duration-1000  transform-cpu"
          >
            <img
              src={mailImg}
              alt="mail"
              className=" rounded-full border p-1  w-12 h-12"
            />
            <span className="  font-medium  ">culturalcanvas@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
