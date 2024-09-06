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
        navigate(
          "/explore-diversity/create-trip/own-trip/view-trip/" + response.data
        );
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
    <div className="px-5 mt-12 sm:px-10 md:px-32 lg:px-56 xl:px-72">
      <div>
        <h2 className="font-bold text-3xl">
          Tell us your travel preferences 🌍✈️🌴
        </h2>
        <p className="mt-3 text-gray-600 text-xl">
          Just provide some basic information, and our trip planner will
          generate a customized itinerary based on your preferences.
        </p>
      </div>

      <div className="mt-20 flex flex-col gap-10">
        <div className="mb-5">
          <label className="text-xl mb-3 font-medium">
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
          />
        </div>

        <div>
          <label className="text-xl my-3 font-medium">
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
                  formData?.budget === item.title && "shadow-lg border-cyan-500"
                }`}
              >
                <h2 className="text-3xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
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
                  "shadow-lg border-cyan-500"
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
      <div className="my-10 flex justify-end">
        <Button onClick={OnGenerateTrip} disabled={loading}>
          {loading ? (
            <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
          ) : (
            "Generate Trip"
          )}
        </Button>
      </div>
    </div>
  );
}

export default CreateTrip;
