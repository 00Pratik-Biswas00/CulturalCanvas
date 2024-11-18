import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Input } from "../../components/ExplorePlacesComponents/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelList,
} from "../../components/ExplorePlacesComponents/constants/options";
import { toast } from "sonner";
import { chatSession } from "../../components/ExplorePlacesComponents/service/AIModel";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import api from "../../config/axios";
import { CiBoxList } from "react-icons/ci";
import MyButton4 from "../../components/Buttons/MyButton4";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const openSavedTrips = () => {
    navigate(`/explore-diversity/saved-trips`);
  };

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
      toast.error("Please fill all details!");
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
    <div className="relative px-5  sm:px-10 md:px-32 lg:px-32 duration-300 bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-6 flex flex-col gap-10">
      <div onClick={openSavedTrips} className="absolute right-[4.3rem] group">
        <CiBoxList className="w-10 h-10 cursor-pointer" />

        <div className="absolute -right-7 top-12 hidden group-hover:flex ">
          <div className="shadow-custom-orange px-4 py-1 bg-highlight rounded-lg">
            <div className="relative flex flex-col items-center text-xs text-dark_primary_text">
              <div className="font-medium  whitespace-nowrap">Saved Trips</div>
              {/* Arrow pointing to the image */}
              <div className="border-solid border-b-highlight border-b-8 border-x-transparent border-x-[8px] absolute -top-3"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-3">
        <h2 className="font-montserrat text-5xl">
          Plan Your Perfect Trip ✈️🌴{" "}
        </h2>
        <p className=" opacity-70 text-lg">
          Share your travel preferences, and our trip planner will create a
          tailored itinerary just for you!
        </p>
      </div>

      <div className=" z-10 flex flex-col gap-10">
        <div className=" flex flex-col gap-2">
          <label className="text-xl font-medium ">
            Enter Your Destination of Choice!
          </label>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                console.log("Selected Place:", v);

                setPlace(v);
                handleInputChange("location", v?.label || ""); // Safeguard against undefined values
              },
              styles: {
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "#f5f5f5",
                  borderRadius: "0.5rem",
                  padding: "0.1rem",
                  borderColor: "#ccc",
                  boxShadow: "none",
                  "&:hover": {
                    borderColor: "#888",
                  },
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isFocused ? "#eee" : "#fff",
                  color: state.isFocused ? "#333" : "#000",
                  padding: "10px",
                }),
                menu: (provided) => ({
                  ...provided,
                  backgroundColor: "#fff",
                  borderRadius: "0.5rem",
                  zIndex: 999,
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "#999",
                }),
              },
            }}
          />
        </div>

        <div className="">
          <label className="text-xl font-medium">
            How Long is Your Trip Planned For?
          </label>
          <Input
            placeholder={"ex. 3"}
            type="number"
            min="1"
            onChange={(v) => handleInputChange("totalDays", v.target.value)}
            className="text-primary_text border border-[#ccc] hover:border-[#999] focus:outline-none focus:ring-1 focus:ring-[#999]"
          />
        </div>

        <div className="flex w-full  justify-between px-16">
          <div className="flex flex-col items-center justify-center gap-2">
            <label className="text-xl font-medium">
              What is your estimated <b>BUDGET</b>?
            </label>
            <p>
              This budget will be used solely for activities and dining
              experiences.
            </p>
            <div className="grid grid-cols-3 gap-5 my-5 bg-background1 dark:bg-dark_background1">
              {SelectBudgetOptions.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleInputChange("budget", item.title)}
                  className={`cursor-pointer flex flex-col items-center justify-center  p-5 border rounded-full hover:shadow-lg shadow-dark_background1 dark:shadow-background1 ${
                    formData?.budget === item.title &&
                    "shadow-md border-highlight_hover"
                  }`}
                >
                  <h2 className="text-3xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <label className="text-xl font-medium">
              Who will <b>ACCOMPANY</b> you on your journey?
            </label>
            <p>Choose your travel companions for this adventure.</p>
            <div className="grid grid-cols-4 gap-5 my-5 bg-background1 dark:bg-dark_background1">
              {SelectTravelList.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleInputChange("traveler", item.people)}
                  className={`cursor-pointer flex flex-col items-center justify-center  p-5 border rounded-full hover:shadow-lg shadow-dark_background1 dark:shadow-background1 ${
                    formData?.traveler === item.people &&
                    "shadow-md border-highlight"
                  }`}
                >
                  <h2 className="text-3xl">{item.icon}</h2>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  {/* <h2 className="text-sm text-gray-500">{item.desc}</h2> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" z-10 flex justify-end">
        {loading ? (
          <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
        ) : (
          <MyButton4
            classDesign={
              "bg-highlight_dark before:bg-highlight  text-dark_primary_text "
            }
            buttonName={"Generate Trip"}
            onClick={OnGenerateTrip}
          />
        )}
      </div>
    </div>
  );
}

export default CreateTrip;
