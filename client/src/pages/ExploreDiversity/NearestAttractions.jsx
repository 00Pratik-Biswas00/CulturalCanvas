import React, { useState } from "react";
import axios from "axios";
import MyButton4 from "../../components/Buttons/MyButton4";
import bgImg from "../../assets/explorePlaces/bgImg.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import TranslationButton from "../../components/Buttons/TranslationButton";

const NearestAttractions = () => {
  const [place, setPlace] = useState("");
  const [attractionType, setAttractionType] = useState("tourist_spots");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResults(null);
    setLoading(true);
    const ML_API_URL = import.meta.env.VITE_API_KEY_FLASKAPI;
    console.log(ML_API_URL);
    // updated variable name
    try {
      const response = await axios.post(`${ML_API_URL}/find-attractions`, {
        place,
        attraction: attractionType,
      });
      setResults(response.data);
    } catch (err) {
      console.error(err); // Log full error to inspect
      setError(err.response?.data?.error || err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300 flex flex-col items-center bg-contain bg-no-repeat bg-center"
    >
      <div className="flex items-start justify-center gap-10 p-8 my-8 rounded-xl  shadow-custom-black  dark:shadow-custom-white   blogCards ">
        <div>
          <h1 className="text-4xl font-extrabold mb-6 text-center ">
            Nearest Attraction Finder 🔍
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 font-pangaia">
            <div className="flex flex-col gap-2">
              <label htmlFor="place" className="block text-lg font-bold">
                Enter a Place:
              </label>
              <input
                type="text"
                id="place"
                className="px-4 gap-x-3 w-full py-2 border  border-primary_text dark:border-dark_primary_text  dark:bg-shadow bg-dark_primary_text rounded-lg  focus:outline-none focus:border focus:border-highlight "
                placeholder="E.g., Taj Mahal"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                required
              />
              {/* {place === "" && (
                <span className="text-red-600 text-sm">
                  Please enter a place
                </span>
              )} */}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="attraction" className="block text-lg font-bold ">
                Select Attraction Type:
              </label>
              <select
                id="attraction"
                className="px-4 gap-x-3 w-full py-2 border  border-primary_text dark:border-dark_primary_text  dark:bg-shadow bg-dark_primary_text rounded-lg  focus:outline-none focus:border focus:border-highlight"
                value={attractionType}
                onChange={(e) => setAttractionType(e.target.value)}
                required
              >
                <option value="tourist_spots">Tourist Spots</option>
                <option value="restaurants">Restaurants</option>
                <option value="hotels">Hotels</option>
                <option value="hospitals">Hospitals</option>
                <option value="police_stations">Police Stations</option>
              </select>
            </div>
            {/* <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-200"
            >
              {loading ? "Finding..." : "Find Nearest Attractions"}
            </button> */}

            <MyButton4
              classDesign={
                "bg-highlight_dark before:bg-highlight  text-dark_primary_text "
              }
              buttonName={"Find Nearest Attractions"}
              bType="submit"
            />
          </form>
        </div>

        {error && (
          <div className="mt-6 bg-red-100 text-red-800 border border-red-300 rounded-lg p-4 w-full max-w-md">
            {error}
          </div>
        )}

        {results && (
          <div className="w-full   rounded-lg px-5 ">
            <h3 className="text-4xl text-center capitalize font-extrabold ">
              Results for {results.place_name} -{" "}
              {(() => {
                const attractionTypeDisplayNames = {
                  tourist_spots: "Tourist Spots",
                  restaurants: "Restaurants",
                  hotels: "Hotels",
                  hospitals: "Hospitals",
                  police_stations: "Police Stations",
                };

                return (
                  attractionTypeDisplayNames[results.attraction_type] ||
                  "Unknown Type"
                );
              })()}
            </h3>

            <div className="grid grid-cols-2 items-center justify-center gap-5 py-5">
              {results.attractions.map((attraction, index) => (
                <div
                  key={index}
                  className="bg-background2 dark:bg-dark_background2 bg-opacity-50 rounded-lg py-4 px-8 flex items-center justify-evenly gap-3 font-montserrat shadow-custom-orange"
                >
                  <div>
                    📜🗺️{"  "}
                    <strong>{attraction.name}</strong> -{" "}
                    {attraction.distance.toFixed(2)} km away
                  </div>
                  <a
                    href={attraction.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bg-highlight_dark hover:bg-highlight p-2 rounded-full transition-transform hover:scale-125 duration-700 transform-cpu"
                  >
                    <FaMapMarkerAlt className=" w-5 h-5 text-dark_primary_text " />
                  </a>
                  <TranslationButton text={attraction.name} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NearestAttractions;
