import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useQuery } from "@apollo/client";
import { GET_HERITAGE_QUERY } from "../../graphql/HeritageQuery";
import taj from "../../assets/Heritage/taj.jpeg";

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
                playing
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
              <p className="text-lg">{heritage.introduction}</p>
            </div>

            <div className="bg-background1 dark:bg-dark_background1 py-4 px-16 text-lg flex flex-col items-center justify-center w-full h-full">
              {heritage?.part1?.length > 0 && (
                <div className="flex flex-col gap-1">
                  {heritage.part1
                    .slice(0, Math.ceil(heritage.part1.length / 2))
                    .map((section, index) => (
                      <div key={index} className="mb-4">
                        <h1 className="font-semibold font-montserrat text-2xl">
                          {section.heading}
                        </h1>
                        <p>{section.description}</p>
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
                    playing
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
                      <div key={index} className="mb-4">
                        <h1 className="font-semibold font-montserrat text-2xl">
                          {section.heading}
                        </h1>
                        <p>{section.description}</p>
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
                playing
                controls
                config={{
                  file: {
                    attributes: { controlsList: "nodownload" },
                  },
                }}
              />
            </div>

            {/* Nearest attractions section remains unchanged */}
            {/* ... (unchanged section) ... */}

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
                <img
                  src={heritage.state_culture_name.image.url}
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
