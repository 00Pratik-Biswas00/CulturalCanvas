import React from "react";
import "react-quill/dist/quill.snow.css";
import InputComponent from "../../components/Input/InputComponent";
import blogBG from "../../assets/blogs/ab.png";
import InputImageVideo from "../../components/Input/InputImageVideo";
import Editor from "../../components/Editor/Editor";
import MyButton4 from "../../components/Buttons/MyButton4";
const UploadBlogVlog = () => {
  return (
    <section
      style={{ backgroundImage: `url(${blogBG})` }}
      className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-10 pb-14 px-16 duration-300 min-h-screen relative w-full bg-contain bg-fixed  bg-no-repeat bg-center
      flex flex-col items-center
      "
    >
      <div className="flex flex-col p-5 w-[90%]   rounded-xl  shadow-custom-black  dark:shadow-custom-white   blogCards">
        <div className="flex items-center tracking-wide justify-center pb-4 text-[3rem] font-extrabold font-gallient">
          Upload Your Blog📝 / Vlog🎬
        </div>

        <InputComponent
          iType={"text"}
          iName={"Name of Your Content"}
          required={true}
        />

        <div className="flex  gap-24">
          <InputComponent
            iType={"text"}
            iName={"Heritage's / Culture's Origin State"}
            required={true}
          />
          <InputComponent
            iType={"text"}
            iName={"Heritage's / Culture's Origin City"}
          />
        </div>

        <InputComponent
          iType={"text"}
          iName={"Heritage's / Culture's Origin GMap Location"}
          required={true}
        />
        <div className="w-full flex items-center  my-3 gap-5">
          <div className="font-bold font-pangaia text-xl">
            Choose Your Content Type:
          </div>
          <div className="flex  justify-center gap-5 items-center my-3 font-playfair">
            <button
              className={`hollowBorder blogCards font-searchBars  text-lg px-6 py-1 rounded bg-transparent text-primary_text dark:text-dark_primary_text `}
            >
              Blog
            </button>
            <button
              className={`hollowBorder blogCards font-searchBars  text-lg px-6 py-1 rounded bg-transparent text-primary_text dark:text-dark_primary_text`}
            >
              Vlog
            </button>
          </div>
        </div>

        <div className="flex justify-between ">
          <InputImageVideo
            required={true}
            fileType={"image"}
            imageName={"Upload Your Blog's Poster:"}
          />
          <InputImageVideo
            fileType={"video"}
            imageName={"Upload Your Blog's Video:"}
          />
        </div>

        <div className="flex flex-col my-3">
          <div className="font-bold font-pangaia text-xl">
            Write Your Blog Content / Vlog Caption:
          </div>
          <Editor
            className="mt-3 dark:border-secondary-40 border-dark_background2 dark:border-background2 rounded-md text-primary_text dark:text-dark_primary_text  "
            placeholder={"Write something here..."}
          />
        </div>

        <div className="flex items-center justify-center gap-5">
          <MyButton4
            classDesign={
              "bg-highlight_hover before:bg-highlight_hover_dark  text-dark_primary_text py-1 mt-4"
            }
            buttonName={"Verify"}
          />
          <MyButton4
            classDesign={
              "bg-highlight before:bg-highlight_dark  text-dark_primary_text py-1 mt-4"
            }
            buttonName={"Submit"}
          />
        </div>
      </div>
    </section>
  );
};

export default UploadBlogVlog;
