import React, { useState } from "react";
import bgImg from "../../assets/explorePlaces/bgImg.png";
import InputImageVideo from "../../components/Input/InputImageVideo";
import MyButton4 from "../../components/Buttons/MyButton4";
import { TfiReload } from "react-icons/tfi";

const StoryTelling = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showText, setShowText] = useState(false);
  const [storyData, setStoryData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(file);
    }
  };
  const ML_API_URL = import.meta.env.VITE_API_KEY_FLASKAPI;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!uploadedImage) {
      setErrorMessage("Please upload an image before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("file", uploadedImage);

    try {
      const response = await fetch(`${ML_API_URL}/image-to-story`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data from the server.");
      }

      const data = await response.json();
      console.log(data);
      setStoryData(data);
      setShowText(true);
      setErrorMessage("");
    } catch (error) {
      console.log(error);
      setErrorMessage("Error: Unable to process the request.");
    }
  };
  const handleGenerateAudio = async () => {
    if (!storyData || !storyData.story) {
      setErrorMessage("No story data available to convert to audio.");
      return;
    }

    const textToConvert = storyData.story;

    try {
      const response = await fetch(`${ML_API_URL}/audio`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: textToConvert }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate audio.");
      }

      const blob = await response.blob();
      const audioFileUrl = URL.createObjectURL(blob);
      setAudioUrl(audioFileUrl);
      setErrorMessage("");
    } catch (error) {
      console.log(error);
      setErrorMessage("Error: Unable to generate audio.");
    }
  };

  return (
    <section
      style={{ backgroundImage: `url(${bgImg}) ` }}
      className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300 flex flex-col items-center bg-contain bg-no-repeat bg-center "
    >
      <div className="flex items-start justify-center gap-10 p-8 my-8 rounded-xl shadow-custom-black dark:shadow-custom-white blogCards">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-4xl font-extrabold text-center">
            Cultural Image To Story
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            quae eos quod similique earum commodi, expedita ab quas nulla atque
            molestias, architecto aliquid quia, odit voluptates fugit neque
            sapiente debitis? architecto aliquid quia, odit voluptates fugit
            neque sapiente debitis?
          </p>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 font-pangaia flex flex-col items-center justify-center"
          >
            <div className="relative w-[720px] h-[405px] flex flex-col items-center justify-center border border-gray-500 rounded-3xl">
              <a
                href="/explore-diversity/story-telling"
                className=" text-xl absolute top-0 -left-8"
              >
                <TfiReload />
              </a>
              {uploadedImage ? (
                <img
                  src={URL.createObjectURL(uploadedImage)}
                  alt="Uploaded"
                  className="w-full h-full object-contain rounded-3xl"
                />
              ) : (
                <div>
                  <InputImageVideo
                    required
                    fileType="image"
                    onChange={handleImageUpload}
                  />
                </div>
              )}
            </div>

            <MyButton4
              classDesign={
                "bg-highlight_dark before:bg-highlight  text-dark_primary_text "
              }
              buttonName={"SUBMIT"}
              bType="submit"
            />
          </form>

          {errorMessage && (
            <p className="text-red-500 text-center mt-3">{errorMessage}</p>
          )}

          {showText && storyData && (
            <div className="flex flex-col  gap-3">
              <div className=" flex items-center gap-2">
                <h2 className="text-2xl font-bold">
                  Description of the Uploaded Image:
                </h2>
                <p className="text-center text-xl capitalize">
                  {storyData.description}
                </p>
              </div>

              <div className=" flex flex-col  gap-2">
                <h2 className="text-2xl font-bold">Introduction:</h2>
                <p className="">{storyData.introduction}</p>
              </div>

              <div className=" flex flex-col  gap-2">
                <h2 className="text-2xl font-bold">Story:</h2>
                <p className="">{storyData.story}</p>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <MyButton4
                  classDesign={
                    "bg-highlight_dark before:bg-highlight text-dark_primary_text mt-5"
                  }
                  buttonName={"Generate Audio"}
                  bType="button"
                  onClick={handleGenerateAudio}
                />
              </div>

              {audioUrl && (
                <div className="flex gap-3 items-center mt-5">
                  <h1 className="text-2xl font-bold">
                    {" "}
                    Your Audio File is here:{" "}
                  </h1>
                  <audio controls src={audioUrl}>
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StoryTelling;
