import React, { useState } from "react";
import bgImg from "../../assets/explorePlaces/bgImg.png";
import InputImageVideo from "../../components/Input/InputImageVideo";
import MyButton4 from "../../components/Buttons/MyButton4";

const StoryTelling = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showText, setShowText] = useState(false);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowText(true); // Show the lorem ipsum text
  };

  return (
    <section
      style={{ backgroundImage: `url(${bgImg})` }}
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
            <div className="w-[720px] h-[405px] flex flex-col items-center justify-center border border-gray-500 rounded-3xl">
              {uploadedImage ? (
                <img
                  src={uploadedImage}
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

          {showText && (
            <div>
              <p className="text-center mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                quae eos quod similique earum commodi.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StoryTelling;
