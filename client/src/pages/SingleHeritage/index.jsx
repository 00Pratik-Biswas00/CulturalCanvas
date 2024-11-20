import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useQuery } from "@apollo/client";
import { GET_HERITAGE_QUERY } from "../../graphql/HeritageQuery";
import Agra from "../../assets/Heritage/Agra fort(avif).avif";
import Fateh from "../../assets/Heritage/Fateh(avif).avif";
import RedFort from "../../assets/Heritage/Red fort (avif).avif";
import Suntemple from "../../assets/Heritage/Sun(avif).avif";
import upImg from "../../assets/states/west-bengal.png";
import { useNavigate } from "react-router-dom";

import { MdLocalPolice } from "react-icons/md";
import { IoWoman } from "react-icons/io5";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";
import { MdFireTruck } from "react-icons/md";

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
    navigate("/nearest-attractions");
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
            <div className="bg-background1 dark:bg-dark_background1 py-4 px-16 flex flex-col gap-4 items-center justify-center w-full h-full">
              <h1 className="font-bold font-playfair text-5xl tracking-wider">
                Exploring the {heritage.name} in the Digital Realm
              </h1>
              <ReactPlayer
                url={heritage.endlessDigitalArt.Location}
                width="100%"
                height="100%"
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

            <div className="flex flex-col gap-20 items-center justify-center px-16 py-32 h-screen text-dark_primary_text">
              <p className="text-[7rem] leading-9">{heritage.name}</p>
              <p className="text-2xl font-semibold px-28 text-center">
                {heritage.introduction}
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
                        <button
                          aria-label="Speak Text"
                          className="text-2xl absolute -left-12 "
                        >
                          🔊
                        </button>
                      </div>
                    ))}
                </div>
              )}

              <div className="my-4 w-full flex flex-col gap-4 justify-center">
                <h1 className="font-bold font-montserrat text-2xl tracking-wider">
                  A Journey Through Time: The {heritage.name} Animated
                </h1>
                {heritage?.animatedVideo?.Location && (
                  <ReactPlayer
                    url={heritage.animatedVideo.Location}
                    width="100%"
                    height="100%"
                    className="max-w-full max-h-full m-auto"
                    playing={false}
                    controls
                    config={{
                      file: {
                        attributes: { controlsList: "nodownload" },
                      },
                    }}
                  />
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
                        <button
                          aria-label="Speak Text"
                          className="text-2xl absolute -left-12 "
                        >
                          🔊
                        </button>
                      </div>
                    ))}
                </div>
              )}
            </div>

            <div className="bg-background1 dark:bg-dark_background1 py-4 px-16 pt-0 flex flex-col gap-4 items-center justify-center w-full h-full">
              <h1 className="font-bold font-playfair text-5xl tracking-wider">
                Sensory Experience of {heritage.name}
              </h1>
              <ReactPlayer
                url={heritage.vlogVideo.Location}
                width="100%"
                height="100%"
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

            {/* Nearest attractions section remains unchanged */}
            <div className="bg-background1 dark:bg-dark_background1 py-4 px-16 pt-0  flex flex-col gap-4 items-center justify-center w-full h-full">
              <h1 className="font-bold font-playfair text-5xl tracking-wider">
                Nearest Attractions
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-5">
                <a
                  href="http://localhost:5173/heritage/agra-fort-tm5qapeerlqsiarphpzrm"
                  target="blank"
                  rel=" noopener"
                  className="flex items-center justify-start gap-3 p-3  border-2 rounded-xl shadow-md shadow-primary_text dark:shadow-dark_primary_text  duration-500 transition-transform hover:scale-105 transform-cpu"
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

                <a
                  href="http://localhost:5173/heritage/fatehpur-sikri-jon8oii2eltby4bqztget"
                  target="blank"
                  rel=" noopener"
                  className="flex items-center justify-start gap-3 p-3  border-2 rounded-xl shadow-md shadow-primary_text dark:shadow-dark_primary_text  duration-500 transition-transform hover:scale-105 transform-cpu"
                >
                  <img src={Fateh} className="w-32 rounded-xl" />
                  <div className="flex flex-col items-start">
                    <h1 className=" font-semibold text-2xl tracking-wide">
                      Fatehpur Sikri
                    </h1>
                    <div className="flex flex-wrap w-full items-center justify-center gap-5">
                      <p>
                        <b> Distance:</b> 37km
                      </p>
                      <p>
                        <b>Entry Fee:</b> Rs.50
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="http://localhost:5173/heritage/red-fort-rryfs_ad8atw8szctnij4"
                  target="blank"
                  rel=" noopener"
                  className="flex items-center justify-start gap-3 p-3  border-2 rounded-xl shadow-md shadow-primary_text dark:shadow-dark_primary_text  duration-500 transition-transform hover:scale-105 transform-cpu"
                >
                  <img src={RedFort} className="w-32 rounded-xl" />
                  <div className="flex flex-col items-start">
                    <h1 className=" font-semibold text-2xl tracking-wide">
                      Red Fort
                    </h1>
                    <div className="flex flex-wrap w-full items-center justify-center gap-5">
                      <p>
                        <b> Distance:</b> 230km
                      </p>
                      <p>
                        <b>Entry Fee:</b> Rs.35
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="http://localhost:5173/heritage/sun-temple-z1sxzhmqvwmongbzfqhlr"
                  target="blank"
                  rel=" noopener"
                  className="flex items-center justify-start gap-3 p-3  border-2 rounded-xl shadow-md shadow-primary_text dark:shadow-dark_primary_text  duration-500 transition-transform hover:scale-105 transform-cpu"
                >
                  <img src={Suntemple} className="w-32 rounded-xl" />
                  <div className="flex flex-col items-start">
                    <h1 className=" font-semibold text-2xl tracking-wide">
                      Sun Temple
                    </h1>
                    <div className="flex flex-wrap w-full items-center justify-center gap-5">
                      <p>
                        <b> Distance:</b>1200km
                      </p>
                      <p>
                        <b>Entry Fee:</b> Rs.40
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* ... (unchanged section) ... */}

            <div className="min-h-screen flex items-center justify-center bg-orange-100">
              <button
                onClick={handleNavigation}
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
              >
                Go to Nearest Attractions
              </button>
            </div>

            <div className="bg-background1 dark:bg-dark_background1 py-4 px-16 pt-4 flex flex-col gap-4 items-center justify-center w-full h-full">
              <h1 className="font-bold font-playfair text-5xl tracking-wider">
                A Cultural Odyssey: Exploring {heritage.state_culture_name.name}
              </h1>
              <a
                href="/"
                target="blank"
                rel=" noopener"
                className="flex items-center justify-center "
              >
                {/* <img
                  src={heritage.state_culture_name.image.url}
                  className="w-full h-full duration-500 transition-transform hover:scale-105 transform-cpu"
                /> */}
                <img
                  src={upImg}
                  className="w-full h-full duration-500 transition-transform hover:scale-105 transform-cpu"
                />
              </a>
            </div>

            <div className="bg-background1 dark:bg-dark_background1 py-4 px-16 pt-4 flex flex-col gap-10 items-center justify-center w-full h-full">
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
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SingleHeritage;
