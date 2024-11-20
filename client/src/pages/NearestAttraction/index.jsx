import React, { useState } from "react";
import axios from "axios";

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
    <div className="min-h-screen bg-orange-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-red-700 mb-6">
        Nearest Attraction Finder
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="place"
            className="block text-lg font-medium text-brown-600"
          >
            Enter a Place:
          </label>
          <input
            type="text"
            id="place"
            className="w-full border border-orange-400 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300"
            placeholder="E.g., Taj Mahal"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
          />
          {place === "" && (
            <span className="text-red-600 text-sm">Please enter a place</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="attraction"
            className="block text-lg font-medium text-brown-600"
          >
            Select Attraction Type:
          </label>
          <select
            id="attraction"
            className="w-full border border-orange-400 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-300"
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
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-200"
        >
          {loading ? "Finding..." : "Find Nearest Attractions"}
        </button>
      </form>

      {error && (
        <div className="mt-6 bg-red-100 text-red-800 border border-red-300 rounded-lg p-4 w-full max-w-md">
          {error}
        </div>
      )}

      {results && (
        <div className="mt-6 w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">
            Results for "{results.place_name}" - {results.attraction_type}
          </h3>
          <ul className="space-y-4">
            {results.attractions.map((attraction, index) => (
              <li
                key={index}
                className="bg-orange-50 border border-orange-200 rounded-lg p-4"
              >
                <strong>{attraction.name}</strong> -{" "}
                {attraction.distance.toFixed(2)} km away
                <br />
                <a
                  href={attraction.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  View on Google Maps
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NearestAttractions;
