import React from "react";
// swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "../../style_swiper.css";
import { EffectCube, Pagination } from "swiper/modules";

const LayoutClothingCulture = ({ heading, description, arrayName }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl font-montserrat">{heading}</h1>
      <p
        className="text-base"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>

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
            <img src={content.sImg} alt={`Drawing ${index + 1}`} className="" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="grid grid-cols-4 gap-5">
        {arrayName.map((content, ind) => (
          <div
            key={ind}
            className="flex items-center justify-center gap-5 shadow-custom-blue dark:shadow-custom-orange p-3 rounded-xl transition-transform hover:scale-105 duration-700 transform-cpu cursor-pointer"
          >
            <img src={content.sImg} className="w-28 h-28 rounded-xl" />
            <div className="flex flex-col items-center justify-center gap-2">
              <h2>{content.sName}</h2>
              <p>{content.sIntro}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default LayoutClothingCulture;
