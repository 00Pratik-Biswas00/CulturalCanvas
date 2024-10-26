import React, { useState } from "react";
import axios from "axios";
import { destinations, sources } from "../../utils/budget-prediction-options";
import MyButton4 from "../../components/Buttons/MyButton4";

const BudgetPredictor = () => {
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    duration: "",
    travel_preference: "Train",
  });

  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const ML_API_URL = import.meta.env.VITE_API_KEY_FLASKAPI;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData) {
      const predicted_budget = await axios.post(
        `${ML_API_URL}/predict-budget`,
        formData
      );
      setPrediction(predicted_budget.data.budget);
    }
    return;
  };

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300 flex flex-col items-center ">
      {" "}
      <div className="flex items-start justify-center gap-20 p-8 my-8 shadow-custom-green  ">
        <div>
          <h1 className="text-4xl font-bold mb-6 text-center">
            ₹🇮🇳 Travel Budget Prediction 🌍✈️
          </h1>
          <form onSubmit={handleSubmit} method="POST" className="space-y-4">
            {/* Source Dropdown */}
            <div className="flex flex-col gap-2">
              <label htmlFor="source" className="block text-sm font-medium ">
                Source (City):
              </label>
              <select
                id="source"
                name="source"
                value={formData.source}
                onChange={handleInputChange}
                required
                className="px-4 gap-x-3 w-full py-2 border  border-primary_text dark:border-dark_primary_text  dark:bg-shadow bg-dark_primary_text rounded-lg  focus:outline-none focus:border focus:border-highlight "
              >
                <option value="">Select Source</option>
                {sources.map((src) => (
                  <option key={src} value={src}>
                    {src}
                  </option>
                ))}
              </select>
            </div>

            {/* Destination Dropdown */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="destination"
                className="block text-sm font-medium "
              >
                Destination (Heritage Site):
              </label>
              <select
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                required
                className="px-4 gap-x-3 w-full py-2 border  border-primary_text dark:border-dark_primary_text  dark:bg-shadow bg-dark_primary_text rounded-lg  focus:outline-none focus:border focus:border-highlight"
              >
                <option value="">Select Destination</option>
                {destinations.map((dest) => (
                  <option key={dest} value={dest}>
                    {dest}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="duration" className="block text-sm font-medium ">
                Duration (days):
              </label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                min="1"
                required
                className="px-4 gap-x-3 w-full py-2 border  border-primary_text dark:border-dark_primary_text  dark:bg-shadow bg-dark_primary_text rounded-lg  focus:outline-none focus:border focus:border-highlight"
              />
            </div>

            {/* Travel Preference Dropdown */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="travel_preference"
                className="block text-sm font-medium"
              >
                Travel Preference:
              </label>
              <select
                id="travel_preference"
                name="travel_preference"
                value={formData.travel_preference}
                onChange={handleInputChange}
                required
                className="px-4 gap-x-3 w-full py-2 border  border-primary_text dark:border-dark_primary_text  dark:bg-shadow bg-dark_primary_text rounded-lg  focus:outline-none focus:border focus:border-highlight"
              >
                <option value="Train">Train</option>
                <option value="Flight">Flight</option>
                <option value="Either">Either</option>
              </select>
            </div>

            {/* Submit Button */}
            {/* <button
              type="submit"
              className="w-full bg-highlight text-dark_primary_text font-bold py-2 px-4 rounded-md hover:bg-highlight_hover duration-500"
            >
              Predict
            </button> */}
            <MyButton4
              classDesign={
                "bg-highlight_dark before:bg-highlight  text-dark_primary_text "
              }
              buttonName={"Predict"}
              bType="submit"
            />
          </form>
        </div>

        {/* Prediction Result */}
        {prediction !== null && (
          <div className=" flex flex-col gap-5 p-4 rounded-md shadow-sm">
            <h2 className="text-4xl text-center font-bold mb-2">
              Estimated Budget For Your Journey:
            </h2>
            <div className="flex flex-col gap-1 text-lg">
              <p>
                <strong>Source:</strong> {formData.source}
              </p>
              <p>
                <strong>Destination:</strong> {formData.destination}
              </p>
              <p>
                <strong>Duration:</strong> {formData.duration} days
              </p>
              <p>
                <strong>Travel Preference:</strong> {formData.travel_preference}
              </p>
            </div>
            <p className="text-2xl font-bold ">
              Predicted Budget: {prediction} INR
            </p>
            <p className=" text-secondary_text dark:text-background2">
              The Predicted Budget Includes Travel From Source to Destination
              Cost, Food Cost, Local Travel Cost, and Hotel Stay Cost.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BudgetPredictor;
