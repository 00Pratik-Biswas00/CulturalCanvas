import React, { useEffect, useState } from "react";
import AddNewModal from "../AddNewModal";
import InputComponent from "../../../components/Input/InputComponent";
import TextareaComponent from "../../../components/Textarea/TextareaComponent";
import InputImageVideo from "../../../components/Input/InputImageVideo";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_COURSE_MUTATION,
  UPDATE_COURSE_MUTATION,
} from "../../../graphql/courseMutation";
import { toast } from "sonner";
import api from "../../../config/axios";
import { GET_COURSE_QUERY } from "../../../graphql/courseQuery";

const AddCourses = ({
  setCourseModal,
  handleApplyCourseModal,
  courseTopic,
  isEditing,
  initialCategory = null,
  editCourseSlug = null,
}) => {
  const RESTAPI_BASE_URL = import.meta.env.VITE_API_KEY_RESTAPI;

  const { loading, error, data } = useQuery(GET_COURSE_QUERY, {
    variables: { slug: editCourseSlug },
  });

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    image: {},
    courseCategory: {
      language: "None",
      cuisine: "None",
      arts: "None",
      sports: "None",
    },
    courseHistory: "",
    courseIntro: "",
    instructorName: "",
    instructorEmail: "",
    instructorImage: {},
    modules: [
      {
        name: "",
        image: {},
        description: "",
        video: "",
      },
    ],
  });

  useEffect(() => {
    if (isEditing && editCourseSlug && data) {
      setFormData(data.getCourse);
      console.log(data.getCourse);
    } else if (initialCategory) {
      setFormData((prev) => ({
        ...prev,
        courseCategory: {
          ...prev.courseCategory,
          [initialCategory]: "",
        },
      }));
    }
  }, [isEditing, editCourseSlug, initialCategory, data]);

  const categoryOptions = {
    language: [
      "English",
      "Assamese",
      "Bengali",
      "Bodo",
      "Dogri",
      "Gujarati",
      "Hindi",
      "Kashmiri",
      "Kannada",
      "Konkani",
      "Maithili",
      "Malayalam",
      "Manipuri",
      "Marathi",
      "Nepali",
      "Odia",
      "Punjabi",
      "Sanskrit",
      "Santali",
      "Sindhi",
      "Tamil",
      "Telugu",
      "Urdu",
    ],
    cuisine: [
      "Bengali",
      "Punjabi",
      "Kashmiri",
      "Rajasthani",
      "Gujarati",
      "Maharashtrian",
      "Goan",
      "Tamil Nadu",
      "Kerala",
      "Andhra Pradesh",
      "Telangana",
      "Karnataka",
      "Uttar Pradesh",
      "Assamese",
      "Odia",
      "Manipuri",
      "Naga",
      "Mizo",
      "Meghalayan",
      "Sikkimese",
      "Tripuri",
      "Himachali",
      "Haryanvi",
      "Madhya Pradesh",
      "Chhattisgarhi",
      "Bihari",
      "Jharkhand",
      "Ladakhi",
      "Uttarakhand",
      "Pahari",
      "Sindhi",
      "Parsi",
      "Anglo-Indian",
    ],
    arts: ["Dance", "Music", "Theatre", "Puppetry"],
    sports: ["Cricket", "Hockey", "Football", "Kabaddi", "Kabaddi", "Kho Kho"],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCourseModuleChange = (index, field, value) => {
    const updatedModules = formData.modules.map((module, i) =>
      i === index ? { ...module, [field]: value } : module
    );
    setFormData((prev) => ({ ...prev, modules: updatedModules }));
  };

  const handleAddCourseModule = () => {
    setFormData((prev) => ({
      ...prev,
      modules: [
        ...prev.modules,
        {
          name: "",
          image: {},
          description: "",
          video: "",
        },
      ],
    }));
  };

  const handleRemoveCourseModule = (index) => {
    const updatedModules = formData.modules.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, modules: updatedModules }));
  };

  const handleUploadingImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    try {
      const { data } = await api.post(
        `${RESTAPI_BASE_URL}/upload-image`,
        formData
      );
      return data;
    } catch (e) {
      console.error("Error uploading image:", e);
    }
  };

  const handleImageInput = async (file, field, index = null) => {
    try {
      const uploadedImageData = await handleUploadingImage(file);
      if (index !== null) {
        handleCourseModuleChange(index, field, uploadedImageData);
      } else {
        setFormData((prev) => ({
          ...prev,
          [field]: {},
        }));
      }
    } catch (e) {
      console.error("Error uploading image:", e);
      toast.error("Image upload failed!");
    }
  };

  const [createCourse, { createLoading, createError, createData }] =
    useMutation(CREATE_COURSE_MUTATION, {
      onCompleted: () => {
        toast.success("Course Created Successfully!");
      },
      onError: (error) => {
        console.error("Error creating course:", error);
        toast.error("Error creating course:");
      },
    });

  const [updateCourse, { updateLoading, updateError, updateData }] =
    useMutation(UPDATE_COURSE_MUTATION, {
      onCompleted: () => {
        toast.success("Course Updated Successfully!");
      },
      onError: (error) => {
        console.error("Error updating course!", error);
        toast.error("Error updating course!");
      },
    });

  const handleSaveCourse = async () => {
    try {
      const response = await createCourse({
        variables: {
          name: formData.courseName,
          image: formData.courseImage,
          courseCategory: {
            language:
              formData.mainCategory === "language"
                ? formData.subCategory
                : "None",
            cuisine:
              formData.mainCategory === "cuisine"
                ? formData.subCategory
                : "None",
            arts:
              formData.mainCategory === "arts" ? formData.subCategory : "None",
            sports:
              formData.mainCategory === "sports"
                ? formData.subCategory
                : "None",
          },
          courseIntro: formData.courseIntro,
          courseHistory: formData.courseHistory,
          instructorName: formData.instructorName,
          instructorEmail: formData.instructorEmail,
          instructorImage: formData.instructorImage,
          modules: formData.courseModule.map((module) => ({
            name: module.moduleName,
            description: module.moduleIntro,
            image: module.moduleThumbnail,
            video: module.moduleVideo,
          })),
        },
      });
      console.log("Course created successfully:", response.data);
      handleApplyCourseModal();
    } catch (e) {
      console.error("Error creating course:", e);
    }
  };

  return (
    <div>
      <AddNewModal setModalOpen={setCourseModal} handleApply={handleSaveCourse}>
        <h2 className="text-2xl lg:text-3xl font-bold mb-2">
          Add a New {courseTopic} Course
        </h2>

        <div className="flex flex-col gap-2 py-2">
          <div className="flex items-start w-full justify-between gap-5">
            <div className="w-full">
              <InputComponent
                iName={`${courseTopic} Name`}
                iType="text"
                value={formData.name}
                onChange={(e) => handleInputChange(e)}
                name="name"
              />
            </div>

            <InputImageVideo
              imageName={`${courseTopic} Image:`}
              fileType="image"
              onChange={(e) => handleImageInput(e.target.files[0], "image")}
            />
          </div>

          <div className="flex items-start w-full justify-between gap-5">
            <div className="w-full">
              <label className="block font-bold">Choose Course Category</label>
              <select
                value={initialCategory}
                disabled
                name="initialCategory"
                className="block w-full px-3 py-2 border rounded">
                <option>{initialCategory}</option>
              </select>
            </div>

            {initialCategory && (
              <div className="w-full">
                <label className="block font-bold">Choose Subcategory</label>
                <select
                  value={formData.courseCategory[initialCategory]}
                  onChange={(e) => handleInputChange(e)}
                  name="subCategory"
                  className="block w-full px-3 py-2 border rounded">
                  <option value="">Select Subcategory</option>
                  {categoryOptions[initialCategory].map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div className="flex items-start w-full justify-between gap-5">
            <div className="w-full">
              <label className="block font-bold ">{courseTopic} History</label>
              <TextareaComponent
                value={formData.courseHistory}
                onChange={(e) => handleInputChange(e)}
                name="courseHistory"
              />
            </div>

            <div className="w-full">
              <label className="block font-bold">Course Introduction</label>
              <TextareaComponent
                value={formData.courseIntro}
                onChange={(e) => handleInputChange(e)}
                name="courseIntro"
              />
            </div>
          </div>

          <div className="flex items-start w-full justify-between gap-5">
            <div className="w-full">
              <InputComponent
                iName="Teacher's Name"
                iType="text"
                value={formData.instructorName}
                onChange={(e) => handleInputChange(e)}
                name="instructorName"
              />
            </div>

            <div className="w-full">
              <InputComponent
                iName="Teacher's Email"
                iType="email"
                value={formData.instructorEmail}
                onChange={(e) => handleInputChange(e)}
                name="instructorEmail"
              />
            </div>
          </div>

          <InputImageVideo
            imageName="Teacher's Image:"
            fileType="image"
            onChange={(e) =>
              handleImageInput(e.target.files[0], "instructorImage")
            }
          />

          <div className="mb-4 overflow-auto">
            <label className="block text-xl font-bold">Course Details:</label>
            {formData?.modules.map((module, index) => (
              <div
                key={index}
                className="flex flex-col w-full justify-between gap-1 mb-2 border-2 border-t-0 rounded-xl rounded-t-none px-4 pb-2 mt-3">
                <div className="w-full">
                  <div className="flex items-center w-full justify-between gap-5 pt-2 text-sm">
                    <div className="w-full">
                      <InputComponent
                        iName="Module Name"
                        iType="text"
                        value={module.name}
                        onChange={(e) =>
                          handleCourseModuleChange(
                            index,
                            "name",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="w-full">
                      <InputComponent
                        iName="Module Video Link"
                        iType="text"
                        value={module.video}
                        onChange={(e) =>
                          handleCourseModuleChange(
                            index,
                            "video",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>

                  <InputImageVideo
                    imageName="Video Thumbnail:"
                    fileType="video"
                    value={module.image}
                    onChange={(e) =>
                      handleImageInput(e.target.files[0], "image", index)
                    }
                  />

                  <div className="w-full">
                    <label className="block text-xl">Module Introduction</label>
                    <TextareaComponent
                      value={module.description}
                      onChange={(e) =>
                        handleCourseModuleChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
                <div className="flex justify-end w-full">
                  <button
                    type="button"
                    onClick={() => handleRemoveCourseModule(index)}
                    className="px-4 py-1 bg-red-500 hover:bg-red-800 rounded text-white">
                    Delete Module
                  </button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between w-full mt-2">
              <button
                type="button"
                onClick={handleAddCourseModule}
                className="bg-highlight hover:bg-highlight_hover text-primary_text px-4 py-1 rounded font-medium transition-all duration-300 w-fit uppercase">
                Add Module
              </button>
            </div>
          </div>
        </div>
      </AddNewModal>
    </div>
  );
};

export default AddCourses;
