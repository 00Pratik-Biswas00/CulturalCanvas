import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import InputComponent from "../../components/Input/InputComponent";
import blogBG from "../../assets/blogs/ab.png";
import InputImageVideo from "../../components/Input/InputImageVideo";
import Editor from "../../components/Editor/Editor";
import MyButton4 from "../../components/Buttons/MyButton4";
import api from "../../config/axios";
import { CREATE_BLOG, GET_BLOG, UPDATE_BLOG } from "../../graphql/blog";
import { useMutation, useQuery } from "@apollo/client";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UploadBlogVlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;
  const [formData, setFormData] = useState({
    contentName: "",
    originState: "",
    originCity: "",
    gMapLocation: "",
    contentType: "Blog",
    contentCategory: "",
    blogPoster: null,
    blogVideo: null,
    blogContent: "",
  });
  const [uploading, setUploading] = useState(false); // To manage the uploading state

  const { data: fetchedBlog, loading: fetchingBlog } = useQuery(GET_BLOG, {
    variables: { id },
    skip: !isEditMode,
    onCompleted: (data) => {
      if (data?.getBlog) {
        setFormData({
          contentName: data.getBlog.title,
          originState: data.getBlog.state,
          originCity: data.getBlog.city,
          gMapLocation: "",
          contentType: data.getBlog.contentType,
          blogPoster: data.getBlog.image,
          blogVideo: data.getBlog.video,
          blogContent: "",
        });
      }
    },
  });
  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const { data } = await api.post(
        `${import.meta.env.VITE_API_KEY_RESTAPI}/upload-image`,
        formData
      );
      setFormData((prev) => ({ ...prev, blogPoster: data }));
    } catch (e) {
      console.error(e);
      toast.error("Image upload failed!");
    }
  };

  const handleVideoUpload = async (file) => {
    try {
      const videoData = new FormData();
      videoData.append("video", file);
      const { data } = await api.post(
        `${import.meta.env.VITE_API_KEY_RESTAPI}/video-upload`,
        videoData
      );

      setFormData((prev) => ({ ...prev, blogVideo: data }));
    } catch (err) {
      console.log(err);
      toast.error("Video upload failed!");
    }
  };

  const [createBlog] = useMutation(CREATE_BLOG, {
    onCompleted: () => {
      toast.success("Blog Created Successfully!");
    },
    onError: (error) => {
      console.error("Error creating blog:", error);
      toast.error("Failed to create the blog.");
    },
  });
  const [updateBlog] = useMutation(UPDATE_BLOG, {
    onCompleted: () => {
      toast.success("Blog Updated Successfully!");
      // navigate(`/blogs-vlogs/${id}`);
    },
    onError: (error) => {
      console.error("Error updating blog:", error);
      toast.error("Failed to update the blog.");
    },
  });

  const handleFileChange = async (e, fileType) => {
    const file = e.currentTarget.files[0];

    // Proceed to upload if verification is successful
    if (fileType === "image") {
      // First, check the content for explicit material
      const isVerified = await handleExplicitContentCheck(file, "image");
      console.log(isVerified);
      if (!isVerified) {
        return;
      }

      await handleImageUpload(file);
    } else if (fileType === "video") {
      // First, check the content for explicit material
      const isVerified = await handleExplicitContentCheck(file, "video");

      if (!isVerified) {
        return; // Do not proceed if the file has explicit content
      }
      await handleVideoUpload(file);
    }
  };

  const handleExplicitContentCheck = async (file, type) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        `${import.meta.env.VITE_API_KEY_FLASKAPI}/detect-nudity/${type}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      const isNudityDetected = response.data.nudity_detected;

      if (isNudityDetected) {
        toast.error(
          "Explicit content detected! Please upload a different file."
        );
        return false;
      } else {
        toast.success("Verification successful!");
        return true;
      }
    } catch (error) {
      console.error("Error checking for explicit content:", error);
      toast.error("Error verifying content.");
      return false;
    }
  };
  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      if (isEditMode) {
        await updateBlog({
          variables: {
            id,
            input: {
              content: formData.blogContent,
              originLocation: formData.gMapLocation,
            },
          },
        });
      } else {
        await createBlog({
          variables: {
            input: {
              title: formData.contentName,
              content: formData.blogContent,
              image: formData.blogPoster,
              video: formData.blogVideo || null,
              state: formData.originState,
              city: formData.originCity,
              originLocation: formData.gMapLocation,
              contentType: formData.contentType,
            },
          },
        });
      }
    } catch (err) {
      console.error("Error submitting blog:", err);
      toast.error("Failed to submit the blog.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <section
      style={{ backgroundImage: `url(${blogBG})` }}
      className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-10 pb-14 px-16 duration-300 min-h-screen relative w-full bg-contain bg-fixed  bg-no-repeat bg-center
      flex flex-col items-center
      ">
      <div className="flex flex-col p-5 w-[90%]   rounded-xl  shadow-custom-black  dark:shadow-custom-white   blogCards">
        <div className="flex items-center tracking-wide justify-center pb-4 text-[3rem] font-extrabold font-gallient">
          {isEditMode ? "Edit Your Blog" : "Upload Your Blog 📝 / Vlog 🎬"}{" "}
        </div>

        <InputComponent
          iType={"text"}
          iName={"Name of Your Content"}
          value={formData.contentName}
          required={true}
          onChange={(e) => handleInputChange("contentName", e.target.value)}
          disabled={isEditMode}
        />

        <div className="flex  gap-24">
          <InputComponent
            iType={"text"}
            iName={"Heritage's / Culture's Origin State"}
            value={formData.originState}
            required={true}
            onChange={(e) => handleInputChange("originState", e.target.value)}
            disabled={isEditMode}
          />
          <InputComponent
            iType={"text"}
            iName={"Heritage's / Culture's Origin City"}
            value={formData.originCity}
            onChange={(e) => handleInputChange("originCity", e.target.value)}
            disabled={isEditMode}
          />
        </div>

        <InputComponent
          iType={"text"}
          iName={"Heritage's / Culture's Origin GMap Location"}
          value={formData.gMapLocation}
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
        <div className="w-full flex items-center  my-3 gap-5">
          <div className="font-bold font-pangaia text-xl">
            Choose Your Content Type:
          </div>
          <div className="flex  justify-center gap-5 items-center my-3 font-playfair">
            <button
              className={`hollowBorder blogCards font-searchBars  text-lg px-6 py-1 rounded bg-transparent text-primary_text dark:text-dark_primary_text `}
              onClick={() => handleInputChange("contentCategory", "Heritage")}
              disabled={isEditMode}>
              Heritage
            </button>
            <button
              className={`hollowBorder blogCards font-searchBars  text-lg px-6 py-1 rounded bg-transparent text-primary_text dark:text-dark_primary_text`}
              onClick={() => handleInputChange("contentCategory", "Culture")}
              disabled={isEditMode}>
              Culture
            </button>
          </div>
        </div>

        <div className="flex justify-between ">
          <InputImageVideo
            required={true}
            fileType={"image"}
            imageName={"Upload Your Blog's Poster:"}
            onChange={(e) => handleFileChange(e, "image")}
            disabled={isEditMode}
          />
          <InputImageVideo
            fileType={"video"}
            imageName={"Upload Your Blog's Video:"}
            onChange={(e) => handleFileChange(e, "video")}
            disabled={isEditMode}
          />
        </div>

        <div className="flex flex-col my-3">
          <div className="font-bold font-pangaia text-xl">
            Write Your Blog Content / Vlog Caption:
          </div>
          <Editor
            value={formData.blogContent}
            className="mt-3 dark:border-secondary-40 border-dark_background2 dark:border-background2 rounded-md text-primary_text dark:text-dark_primary_text  "
            placeholder={"Write something here..."}
            onChange={(value) => handleInputChange("blogContent", value)}
          />
        </div>

        <div className="flex items-center justify-center gap-5">
          <MyButton4
            classDesign={
              "bg-highlight before:bg-highlight_dark text-dark_primary_text py-1 mt-4"
            }
            buttonName={isEditMode ? "Update" : "Submit"}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default UploadBlogVlog;
