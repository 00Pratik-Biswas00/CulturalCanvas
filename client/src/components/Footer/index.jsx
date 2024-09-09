import React, { useEffect, useState } from "react";
import mailImg from "../../assets/footer/mail.avif";
import linkedInImg from "../../assets/footer/linkedin.jpeg";
import callImg from "../../assets/footer/call.png";
import fbImg from "../../assets/footer/fb.png";
import instaImg from "../../assets/footer/insta.png";
import xImg from "../../assets/footer/x.png";
import ytImg from "../../assets/footer/yt.avif";

const Footer = () => {
  // const [visitorCount, setVisitorCount] = useState(0);

  // useEffect(() => {
  //   fetch('http://localhost:5000/api/visitor-count')
  //     .then(response => response.json())
  //     .then(data => setVisitorCount(data.visitorCount))
  //     .catch(err => console.error('Error fetching visitor count:', err));
  // }, []);

  return (
    <section className="bg-[#fff3e4] dark:bg-shadow text-primary_text dark:text-dark_primary_text pt-10 px-16 duration-300 flex flex-col items-center relative overflow-hidden">
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
          <ul className=" font-semibold flex flex-col gap-y-2">
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

        <div className="flex relative  justify-center  pl-[5.2rem] ">
          <p className="flex text-sm gap-2  items-end  ">
            {" "}
            <strong>Connect with us:</strong> Join Our Community online
          </p>
          <div className=" absolute flex items-center justify-center bottom-14  ">
            {/* Visitors Count:{visitorCount} */}
            <p className=" px-5 py-1 rounded-xl border border-highlight">
              Visitors Count: 6
            </p>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col pt-10 gap-2 justify-center items-end ">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className=" flex gap-2 justify-start items-center  cursor-pointer transition-transform hover:scale-110 duration-1000  transform-cpu"
          >
            <span className="  font-medium  ">+91 700131656</span>
            <img
              src={callImg}
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
            <span className="  font-medium  ">culturalcanvas@gmail.com</span>
            <img
              src={mailImg}
              alt="mail"
              className=" rounded-full border p-1  w-12 h-12"
            />
          </a>
        </div>
      </div>

      <div className="flex  gap-2  items-end pb-2 ">
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className=" flex gap-2 justify-start items-center  cursor-pointer transition-transform hover:scale-110 duration-1000  transform-cpu"
        >
          <img
            src={fbImg}
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
            src={instaImg}
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
            src={linkedInImg}
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
            src={xImg}
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
            src={ytImg}
            alt="mail"
            className=" rounded-full border p-1  w-12 h-12"
          />
        </a>
      </div>

      <div className=" absolute bottom-3 left-16 font-semibold">
        ⓒ 2024 || Cultural Canvas, All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
