import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import InputComponent from "../../components/Input/InputComponent";
import blogBG from "../../assets/blogs/ab.png";
import InputImageVideo from "../../components/Input/InputImageVideo";
import Editor from "../../components/Editor/Editor";
import MyButton4 from "../../components/Buttons/MyButton4";

const UploadBlogVlog = () => {
  const [formData, setFormData] = useState({
    contentName: "",
    originState: "",
    originCity: "",
    gMapLocation: "",
    contentType: "Blog",
    blogPoster: null,
    blogVideo: null,
    blogContent: "",
  });

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (name, file) => {
    setFormData((prev) => ({ ...prev, [name]: file }));
  };

  const handleSubmit = async () => {
    const form = new FormData();
    
    form.append("contentName", formData.contentName);
    form.append("originState", formData.originState);
    form.append("originCity", formData.originCity);
    form.append("gMapLocation", formData.gMapLocation);
    form.append("contentType", formData.contentType);
    form.append("blogPoster", formData.blogPoster);
    if (formData.blogVideo) {
      form.append("blogVideo", formData.blogVideo);
    }
    form.append("blogContent", formData.blogContent);

    // TODO: Sending to backend
  };

  return (
    <section
      style={{ backgroundImage: `url(${blogBG})` }}
      className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-10 pb-14 px-16 duration-300 min-h-screen relative w-full bg-contain bg-fixed  bg-no-repeat bg-center
      flex flex-col items-center
      ">
      <div className="flex flex-col p-5 w-[90%]   rounded-xl  shadow-custom-black  dark:shadow-custom-white   blogCards">
        <div className="flex items-center tracking-wide justify-center pb-4 text-[3rem] font-extrabold font-gallient">
          Upload Your Blog📝 / Vlog🎬
        </div>

        <InputComponent
          iType={"text"}
          iName={"Name of Your Content"}
          required={true}
          onChange={(e) => handleInputChange("contentName", e.target.value)}
        />

        <div className="flex  gap-24">
          <InputComponent
            iType={"text"}
            iName={"Heritage's / Culture's Origin State"}
            required={true}
            onChange={(e) => handleInputChange("originState", e.target.value)}
          />
          <InputComponent
            iType={"text"}
            iName={"Heritage's / Culture's Origin City"}
            onChange={(e) => handleInputChange("originCity", e.target.value)}
          />
        </div>

        <InputComponent
          iType={"text"}
          iName={"Heritage's / Culture's Origin GMap Location"}
          required={true}
          onChange={(e) => handleInputChange("gMapLocation", e.target.value)}
        />
        <div className="w-full flex items-center  my-3 gap-5">
          <div className="font-bold font-pangaia text-xl">
            Choose Your Content Type:
          </div>
          <div className="flex  justify-center gap-5 items-center my-3 font-playfair">
            <button
              className={`hollowBorder blogCards font-searchBars  text-lg px-6 py-1 rounded bg-transparent text-primary_text dark:text-dark_primary_text `}
              onClick={() => handleInputChange("contentType", "Blog")}>
              Blog
            </button>
            <button
              className={`hollowBorder blogCards font-searchBars  text-lg px-6 py-1 rounded bg-transparent text-primary_text dark:text-dark_primary_text`}
              onClick={() => handleInputChange("contentType", "Vlog")}>
              Vlog
            </button>
          </div>
        </div>

        <div className="flex justify-between ">
          <InputImageVideo
            required={true}
            fileType={"image"}
            imageName={"Upload Your Blog's Poster:"}
            onChange={(e) => handleFileChange("blogPoster", e.target.files[0])}
          />
          <InputImageVideo
            fileType={"video"}
            imageName={"Upload Your Blog's Video:"}
            onChange={(e) => handleFileChange("blogVideo", e.target.files[0])}
          />
        </div>

        <div className="flex flex-col my-3">
          <div className="font-bold font-pangaia text-xl">
            Write Your Blog Content / Vlog Caption:
          </div>
          <Editor
            className="mt-3 dark:border-secondary-40 border-dark_background2 dark:border-background2 rounded-md text-primary_text dark:text-dark_primary_text  "
            placeholder={"Write something here..."}
            onChange={(value) => handleInputChange("blogContent", value)}
          />
        </div>

        <div className="flex items-center justify-center gap-5">
          <MyButton4
            classDesign={
              "bg-highlight_hover before:bg-highlight_hover_dark  text-dark_primary_text py-1 mt-4"
            }
            buttonName={"Verify"}
            onClick={() => {
              // TODO:
            }}
          />
          <MyButton4
            classDesign={
              "bg-highlight before:bg-highlight_dark  text-dark_primary_text py-1 mt-4"
            }
            buttonName={"Submit"}
            onClick={() => {
              // TODO:
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default UploadBlogVlog;
