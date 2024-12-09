import React from "react";
// swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "../../style_swiper.css";
import { EffectCube, Pagination } from "swiper/modules";
import { RiExternalLinkLine } from "react-icons/ri";
import Speaker from "../../components/Settings/Speaker";

const LayoutClothingCulture = ({ heading, description, arrayName }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl font-montserrat">{heading}</h1>

      <div className=" relative">
        <p
          className="text-base"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>

        <Speaker webData={description} />
      </div>

      <h1 className=" text-3xl font-pangaia py-3">
        Checkout Different Types of {heading}
      </h1>

      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        speed={500}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        {arrayName.map((content, index) => (
          <SwiperSlide key={index}>
            <div
              // key={index}
              style={{ backgroundImage: `url(${content.sImg})` }}
              className="w-[100%] h-[100%] bg-cover bg-center bg-no-repeat relative flex justify-end items-end "
            >
              <div className="absolute inset-0  opacity-50 rounded-[20px]"></div>

              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className=" bg-dark_secondary_text hover:bg-black  opacity-40 px-5 py-2 rounded-3xl text-xl mr-2 mb-2 "
              >
                <span className="text-dark_primary_text font-extrabold flex  items-center justify-center gap-2">
                  {" "}
                  {content.sName} <RiExternalLinkLine />
                </span>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LayoutClothingCulture;
