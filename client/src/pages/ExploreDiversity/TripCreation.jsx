import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Input } from "../../components/ExplorePlacesComponents/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelList,
} from "../../components/ExplorePlacesComponents/constants/options";
import { Button } from "../../components/ExplorePlacesComponents/ui/button";
import { toast } from "sonner";
import { chatSession } from "../../components/ExplorePlacesComponents/service/AIModel";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import api from "../../config/axios";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const OnGenerateTrip = async () => {
    if (
      !formData?.totalDays ||
      !formData?.location ||
      !formData?.budget ||
      !formData?.traveler
    ) {
      toast.dismiss("Please fill all details!");
      return;
    }
    toast.success("Form generated.");
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace("{location}", formData?.location)
      .replace("{totalDays}", formData?.totalDays)
      .replace("{traveler}", formData?.traveler)
      .replace("{budget}", formData?.budget);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    setLoading(true);
    const plan = JSON.parse(result?.response.text());
    SaveAiTrip(plan);
  };

  const SaveAiTrip = async (TripData) => {
    try {
      const response = await api.post("/create", {
        location: formData.location,
        totalDays: formData.totalDays,
        budget: formData.budget,
        traveler: formData.traveler,
        plan: TripData,
      });

      if (response.status === 201) {
        toast.success("Trip created successfully!");
        navigate("/explore-diversity/create-trip/view-trip/" + response.data);
      } else {
        toast.error("Error creating trip!");
      }
    } catch (error) {
      toast.error("Error creating trip: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-5 sm:px-10 md:px-32 lg:px-56 xl:px-72 duration-300 bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-6 flex flex-col gap-10">
      <div>
        <h2 className="font-bold text-3xl">
          Tell us your travel preferences 🌍✈️🌴
        </h2>
        <p className="mt-3 text-secondary_text  dark:text-background2 text-xl">
          Just provide some basic information, and our trip planner will
          generate a customized itinerary based on your preferences.
        </p>
      </div>

      <div className=" flex flex-col gap-5">
        <div className="mb-5 flex flex-col gap-2">
          <label className="text-xl font-medium">
            What is your destination of choice?
          </label>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v.label);
              },
              styles: {
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "#f5f5f5", // Background color of the input field
                  borderRadius: "0.5rem", // Rounded corners
                  padding: "0.1rem", // Padding inside the input
                  borderColor: "#ccc", // Border color
                  boxShadow: "none", // Remove default box-shadow
                  "&:hover": {
                    borderColor: "#888", // Border color on hover
                  },
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isFocused ? "#eee" : "#fff", // Background color of the options
                  color: state.isFocused ? "#333" : "#000", // Text color when option is focused
                  padding: "10px", // Padding inside the dropdown options
                }),
                menu: (provided) => ({
                  ...provided,
                  backgroundColor: "#fff", // Dropdown menu background color
                  borderRadius: "0.5rem", // Rounded corners for the dropdown
                  zIndex: 999, // Ensures the dropdown is above other elements
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "#999", // Placeholder text color
                }),
              },
            }}
          />
        </div>

        <div className="mb-5">
          <label className="text-xl font-medium">
            How many days are you planning your trip?
          </label>
          <Input
            placeholder={"ex. 3"}
            type="number"
            min="1"
            onChange={(v) => handleInputChange("totalDays", v.target.value)}
            className="text-primary_text border border-[#ccc] hover:border-[#999] focus:outline-none focus:ring-1 focus:ring-[#999]"
          />
        </div>

        <div>
          <label className="text-xl mb-5 font-medium">
            What is Your Budget?
          </label>
          <p>
            The budget is exclusively allocated for activities and dining
            purposes.
          </p>
          <div className="grid grid-cols-3 gap-5 mt-5 mb-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("budget", item.title)}
                className={`cursor-pointer p-4 border rounded-lg hover:shadow-lg ${
                  formData?.budget === item.title &&
                  "shadow-lg border-highlight_hover"
                }`}
              >
                <h2 className="text-3xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-secondary_text dark:text-background2">
                  {item.desc}
                </h2>
              </div>
            ))}
          </div>

          <label className="text-xl font-medium my-3">
            Who do you plan on traveling with on your next adventure?
          </label>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelList.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("traveler", item.people)}
                className={`cursor-pointer p-4 border rounded-lg hover:shadow-lg ${
                  formData?.traveler === item.people &&
                  "shadow-lg border-highlight"
                }`}
              >
                <h2 className="text-3xl">{item.icon}</h2>
                <h2 className="text-lg font-bold">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex justify-end">
        <button
          className="border border-highlight hover:bg-highlight text-primary_text dark:text-dark_primary_text hover:text-dark_primary_text px-4 py-1 rounded-xl font-semibold text-lg transition-all duration-300"
          onClick={OnGenerateTrip}
          disabled={loading}
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
          ) : (
            "Generate Trip 🤖"
          )}
        </button>
      </div>
    </div>
  );
}

export default CreateTrip;
