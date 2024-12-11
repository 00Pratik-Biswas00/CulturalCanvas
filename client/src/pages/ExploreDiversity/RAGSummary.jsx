import React from "react";
import bgImg from "../../assets/explorePlaces/bgImg.png";
import MyButton4 from "../../components/Buttons/MyButton4";
import InputImageVideo from "../../components/Input/InputImageVideo";
import { IoCloudUploadOutline } from "react-icons/io5";
import InputComponent from "../../components/Input/InputComponent";

const RAGSummary = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgImg}) ` }}
      className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300 flex flex-col items-center bg-contain bg-no-repeat bg-center "
    >
      <div className="flex items-start justify-center gap-10 p-8 my-8 rounded-xl shadow-custom-black dark:shadow-custom-white blogCards">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-extrabold text-center">
            Upload Your Manual and Ask Your Doubts
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            quae eos quod similique earum commodi, expedita ab quas nulla atque
            molestias, architecto aliquid quia, odit voluptates fugit neque
            sapiente debitis? architecto aliquid quia, odit voluptates fugit
            neque sapiente debitis?
          </p>
          <form
            // onSubmit={handleSubmit}
            className="space-y-4 font-pangaia flex flex-col  "
          >
            <InputImageVideo
              required
              fileType="pdf"
              // onChange={handleImageUpload}
            />

            <InputComponent
              iType={"text"}
              iName={"Ask your doubt here"}
              required={true}
            />

            <div className=" flex flex-col items-center justify-center">
              <MyButton4
                classDesign={
                  "bg-highlight_dark before:bg-highlight  text-dark_primary_text "
                }
                buttonName={"SUBMIT"}
                bType="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RAGSummary;
