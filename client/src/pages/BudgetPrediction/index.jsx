import React, { useState } from "react";
import axios from "axios";
import { destinations, sources } from "../../utils/budget-prediction-options";

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Travel Budget Prediction
        </h1>
        <form onSubmit={handleSubmit} method="POST" className="space-y-4">
          {/* Source Dropdown */}
          <div>
            <label
              htmlFor="source"
              className="block text-sm font-medium text-gray-700">
              Source (City):
            </label>
            <select
              id="source"
              name="source"
              value={formData.source}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
              <option value="">Select Source</option>
              {sources.map((src) => (
                <option key={src} value={src}>
                  {src}
                </option>
              ))}
            </select>
          </div>

          {/* Destination Dropdown */}
          <div>
            <label
              htmlFor="destination"
              className="block text-sm font-medium text-gray-700">
              Destination (Heritage Site):
            </label>
            <select
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
              <option value="">Select Destination</option>
              {destinations.map((dest) => (
                <option key={dest} value={dest}>
                  {dest}
                </option>
              ))}
            </select>
          </div>

          {/* Duration Input */}
          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-700">
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
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Travel Preference Dropdown */}
          <div>
            <label
              htmlFor="travel_preference"
              className="block text-sm font-medium text-gray-700">
              Travel Preference:
            </label>
            <select
              id="travel_preference"
              name="travel_preference"
              value={formData.travel_preference}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
              <option value="Train">Train</option>
              <option value="Flight">Flight</option>
              <option value="Either">Either</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600">
            Predict
          </button>
        </form>

        {/* Prediction Result */}
        {prediction !== null && (
          <div className="mt-6 bg-gray-100 p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              Estimated Budget For Your Journey:
            </h2>
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
            <p className="text-lg font-bold mt-4">
              Predicted Budget: {prediction} INR
            </p>
            <p className="mt-2 text-sm text-gray-600">
              The Predicted Budget Includes Travel From Source to Destination
              Cost, Food Cost, Local Travel Cost, and Hotel Stay Cost.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetPredictor;
