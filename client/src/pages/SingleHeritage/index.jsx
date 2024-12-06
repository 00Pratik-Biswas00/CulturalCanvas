import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useQuery } from "@apollo/client";
import { GET_HERITAGE_QUERY } from "../../graphql/HeritageQuery";
import Agra from "../../assets/Heritage/Agra fort(avif).avif";
import Fateh from "../../assets/Heritage/Fateh(avif).avif";
import RedFort from "../../assets/Heritage/Red fort (avif).avif";
import upImg from "../../assets/states/west-bengal.png";
import { useNavigate } from "react-router-dom";

import { MdLocalPolice } from "react-icons/md";
import { IoWoman } from "react-icons/io5";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";
import { MdFireTruck } from "react-icons/md";
import MyButton1 from "../../components/Buttons/MyButton1";

const SingleHeritage = () => {
  const { slug } = useParams();
  const [heritage, setHeritage] = useState(null);
  const { loading, error, data } = useQuery(GET_HERITAGE_QUERY, {
    variables: { slug },
  });

  useEffect(() => {
    if (data && data.getHeritage) {
      setHeritage(data.getHeritage);
    }
  }, [data]);

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/explore-diversity/nearest-attractions");
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.error(error);
    return <div>Error fetching heritage!</div>;
  }

  return (
    <section className="duration-300 text-primary_text dark:text-dark_primary_text">
      {heritage && (
        <div
          style={{ backgroundImage: `url(${heritage.image.url})` }}
          className="relative bg-center bg-cover bg-fixed bg-no-repeat"
        >
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

          <div className="relative z-20 flex flex-col items-center justify-center">
            <div className="bg-background1 dark:bg-dark_background1 py-4 px-16 flex flex-col items-center justify-center w-full h-full">
              <h1 className="font-bold font-gallient text-5xl tracking-wider pt-2 pb-6">
                Exploring the {heritage.name} in the Digital Realm
              </h1>
              <div className="flex flex-col items-center justify-center w-full h-full m-auto">
                <ReactPlayer
                  url={heritage.endlessDigitalArt.Location}
                  width="85%"
                  height="85%"
                  playing={false}
                  controls
                  config={{
                    file: {
                      attributes: { controlsList: "nodownload" },
                    },
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-20 items-center justify-center px-16 py-32 h-screen text-dark_primary_text">
              <p className=" text-5xl xl:text-7xl font-extrabold text-center  ">
                {heritage.name}
              </p>
            </div>

            <div className="bg-background1 dark:bg-dark_background1 py-4 px-16 text-lg flex flex-col items-center justify-center w-full h-full">
              {heritage?.part1?.length > 0 && (
                <div className="flex flex-col gap-1">
                  {heritage.part1
                    .slice(0, Math.ceil(heritage.part1.length / 2))
                    .map((section, index) => (
                      <div
                        key={index}
                        className="mb-4 flex items-start flex-col justify-center relative"
                      >
                        <h1 className="font-semibold font-montserrat text-2xl">
                          {section.heading}
                        </h1>
                        <p>{section.description}</p>
                        {/* <button
                          aria-label="Speak Text"
                          className="text-2xl absolute -left-12 "
                        >
                          🔊
                        </button> */}
                      </div>
                    ))}
                </div>
              )}

              <div className="my-4 w-full flex flex-col gap-4 justify-center items-center">
                <h1 className="font-bold font-montserrat text-2xl tracking-wider">
                  A Journey Through Time: The {heritage.name} Animated
                </h1>
                {heritage?.animatedVideo?.Location && (
                  <div className=" w-full h-full m-auto">
                    <ReactPlayer
                      url={heritage.animatedVideo.Location}
                      width="85%"
                      height="85%"
                      className="max-w-full max-h-full m-auto"
                      playing={false}
                      controls
                      config={{
                        file: {
                          attributes: { controlsList: "nodownload" },
                        },
                      }}
                    />
                  </div>
                )}
              </div>

              {heritage?.part1?.length > 0 && (
                <div className="flex flex-col gap-1">
                  {heritage.part1
                    .slice(Math.ceil(heritage.part1.length / 2))
                    .map((section, index) => (
                      <div
                        key={index}
                        className="mb-4 flex items-start flex-col justify-center relative"
                      >
                        <h1 className="font-semibold font-montserrat text-2xl">
                          {section.heading}
                        </h1>
                        <p>{section.description}</p>
                        {/* <button
                          aria-label="Speak Text"
                          className="text-2xl absolute -left-12 "
                        >
                          🔊
                        </button> */}
                      </div>
                    ))}
                </div>
              )}
            </div>

            <div className="py-4 px-16 pt-0  flex flex-col gap-10 items-center justify-center w-full h-full">
              <h1 className="font-bold font-gallient text-5xl tracking-wider text-dark_primary_text pt-8">
                Nearest Main Attractions
              </h1>

              {/* ekhane backend theke data anis admin panel e field add kore dis je nearest attraction e ki ki add korbi diye manually add kore dis ba jodi kono bhabe existing jaiga r drop down select kore korte paris dekhis */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-5">
                <a
                  href="http://localhost:5173/heritage/agra-fort-tm5qapeerlqsiarphpzrm"
                  target="blank"
                  rel=" noopener"
                  className="flex items-center bg-background2 dark:bg-shadow justify-start gap-3 p-3  border-2 rounded-xl shadow-md shadow-primary_text dark:shadow-dark_primary_text  duration-500 transition-transform hover:scale-105 transform-cpu"
                >
                  <img src={Agra} className="w-32 rounded-xl" />
                  <div className="flex flex-col items-start">
                    <h1 className=" font-semibold text-2xl tracking-wide">
                      Agra Fort
                    </h1>
                    <div className="flex flex-wrap w-full items-center justify-center gap-5">
                      <p>
                        <b> Distance:</b> 2.5km
                      </p>
                      <p>
                        <b>Entry Fee:</b> Rs.40
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex items-center justify-center ">
                <MyButton1
                  classDesign={
                    "bg-gradient-to-r from-[#ff9b00] to-[#174926] hover:to-[#06038D] font-bold "
                  }
                  buttonLink={"/explore-diversity/nearest-attractions"}
                  buttonName={"Find Other Nearest Attractions using AI"}
                />
              </div>
            </div>
            {/* ... (unchanged section) ... */}

            <div className="bg-background1 dark:bg-dark_background1 py-10 px-16  flex gap-4 items-center justify-center w-full h-full">
              <h1 className="font-bold font-pangaia text-2xl tracking-wider w-3/4">
                Do you know that {heritage.name} is just one of the glimpse of
                the majesty of the {heritage.state_culture_name.name} 🤩? If you
                want to know explore more about{" "}
                {heritage.state_culture_name.name} click on the image!
              </h1>
              <a
                href={`/culture-tradition/${heritage.state_culture_name.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="flex items-center justify-center"
              >
                <img
                  src={upImg}
                  className="w-52 h-52 duration-500 transition-transform hover:scale-105 transform-cpu"
                />
              </a>
            </div>

            <div className="bg-background1 dark:bg-dark_background1 py-4 px-16 pt-0 flex flex-col gap-4 items-center justify-center w-full h-full">
              <h1 className="font-bold font-gallient text-5xl tracking-wider pt-2 pb-6">
                Sensory Experience of {heritage.name}
              </h1>
              <div className=" w-full h-full m-auto">
                <ReactPlayer
                  url={heritage.vlogVideo.Location}
                  width="85%"
                  height="85%"
                  className="max-w-full max-h-full m-auto"
                  playing={false}
                  controls
                  config={{
                    file: {
                      attributes: { controlsList: "nodownload" },
                    },
                  }}
                />
              </div>
            </div>

            {/* <div className="bg-background1 dark:bg-dark_background1 py-4 px-16 pt-4 flex flex-col gap-10 items-center justify-center w-full h-full">
              <h1 className="font-bold font-playfair text-5xl tracking-wider">
                Helpline numbers of {heritage.name}
              </h1>
              <div className="grid grid-cols-3 items-center justify-center text-xl gap-5">
                <div className="flex items-center justify-center gap-1 border-2 p-2 rounded-xl">
                  <MdLocalPolice className="text-highlight" />
                  <p>
                    <b className="text-highlight"> Police Control Room: </b>
                    {heritage.helpline_numbers[0].police_helpline}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-1 border-2 p-2 rounded-xl">
                  <IoWoman className="text-highlight_hover" />
                  <p>
                    <b className="text-highlight_hover"> Women's Helpline: </b>
                    {heritage.helpline_numbers[0].women_helpline}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-1 border-2 p-2 rounded-xl">
                  <FaHandsHoldingChild className="text-highlight" />
                  <p>
                    <b className="text-highlight"> Child Helpline: </b>
                    {heritage.helpline_numbers[0].child_helpline}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-1 border-2 p-2 rounded-xl">
                  <FaAmbulance className="text-highlight_hover" />
                  <p>
                    <b className="text-highlight_hover">
                      {" "}
                      Ambulance Helpline:{" "}
                    </b>
                    {heritage.helpline_numbers[0].ambulance_helpline}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-1 border-2 p-2 rounded-xl">
                  <FaBriefcaseMedical className="text-highlight" />
                  <p>
                    <b className="text-highlight"> Hospital Helpline: </b>
                    {heritage.helpline_numbers[0].hospital_helpline}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-1 border-2 p-2 rounded-xl">
                  <MdFireTruck className="text-highlight_hover" />
                  <p>
                    <b className="text-highlight_hover"> Fire Brigade: </b>
                    {heritage.helpline_numbers[0].fire_brigade}
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default SingleHeritage;
