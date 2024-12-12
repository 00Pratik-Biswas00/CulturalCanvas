import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useQuery } from "@apollo/client";
import {
  GET_HERITAGE_QUERY,
  GET_HERITAGES_WITH_DISTANCE,
} from "../../graphql/HeritageQuery";
import upImg from "../../assets/states/west-bengal.png";
import { useNavigate } from "react-router-dom";
import HeritageNotifications from "./nearestHeritage";

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

  const { latitude, longitude } = heritage?.coordinates || {};

  const {
    data: heritageData,
    loading: heritageLoading,
    error: heritageError,
  } = useQuery(GET_HERITAGES_WITH_DISTANCE, {
    skip: !heritage || !heritage.coordinates,
    variables: {
      currentLocation: { latitude, longitude },
      state: heritage?.state_culture_name,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const nearestHeritages = heritageData?.getHeritagesWithDistance || [];

  if (heritageLoading) return <h1>Loading nearest heritages...</h1>;
  if (heritageError) {
    console.error(heritageError);
    return <div>Error fetching nearest heritage!</div>;
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
              <p className="text-5xl xl:text-7xl font-extrabold text-center">
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
                      </div>
                    ))}
                </div>
              )}

              <div className="my-4 w-full flex flex-col gap-4 justify-center items-center">
                <h1 className="font-bold font-montserrat text-2xl tracking-wider">
                  A Journey Through Time: The {heritage.name} Animated
                </h1>
                {heritage?.animatedVideo?.Location && (
                  <div className="w-full h-full m-auto">
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
                      </div>
                    ))}
                </div>
              )}
            </div>

            <div className="bg-background1 dark:bg-dark_background1 py-10 px-16 flex gap-4 items-center justify-center w-full h-full">
              <h1 className="font-bold font-pangaia text-2xl tracking-wider w-3/4">
                Do you know that {heritage.name} is just one glimpse of the
                majesty of {heritage.state_culture_name} 🤩? If you want to
                explore more about {heritage.state_culture_name}, click on the
                image!
              </h1>
              <a
                href={`/culture-tradition/${heritage.state_culture_name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="flex items-center justify-center"
              >
                <img
                  src={upImg}
                  alt={`${heritage.state_culture_name} image`}
                  className="w-52 h-52 duration-500 transition-transform hover:scale-105 transform-cpu"
                />
              </a>
            </div>

            <div className="bg-background1 dark:bg-dark_background1 py-4 px-16 pt-0 flex flex-col gap-4 items-center justify-center w-full h-full">
              <h1 className="font-bold font-gallient text-5xl tracking-wider pt-2 pb-6">
                Sensory Experience of {heritage.name}
              </h1>
              <div className="w-full h-full m-auto">
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
          </div>
        </div>
      )}
      <HeritageNotifications heritages={nearestHeritages} />
    </section>
  );
};

export default SingleHeritage;
