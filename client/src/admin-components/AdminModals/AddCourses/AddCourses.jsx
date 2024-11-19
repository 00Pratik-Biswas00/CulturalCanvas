import React, { useEffect, useState } from "react";
import AddNewModal from "../AddNewModal";
import InputComponent from "../../../components/Input/InputComponent";
import TextareaComponent from "../../../components/Textarea/TextareaComponent";
import InputImageVideo from "../../../components/Input/InputImageVideo";
import { useMutation } from "@apollo/client";
import { CREATE_COURSE_MUTATION, UPDATE_COURSE_MUTATION } from "../../../graphql/courseMutation";
import { toast } from "sonner";
import api from "../../../config/axios";

const AddCourses = ({
  setCourseModal,
  handleApplyCourseModal,
  courseTopic,
  mainCategory, // Assume this prop contains the main category
  isEditing,
  editCourseData = null,
}) => {
  useEffect(() => {
    if (isEditing && editCourseData) {
      setFormData(editCourseData);
    }
  }, [isEditing, editCourseData]);

  const RESTAPI_BASE_URL = import.meta.env.VITE_API_KEY_RESTAPI;

  const [formData, setFormData] = useState({
    courseName: "",
    courseImage: "",
    mainCategory: "",
    subCategory: "",
    courseIntro: "",
    courseHistory: "",
    instructorName: "",
    instructorEmail: "",
    instructorImage: "",
    courseModule: [
      { moduleName: "", moduleIntro: "", moduleVideo: "", moduleThumbnail: "" },
    ],
  });

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
    const updatedModules = formData.courseModule.map((module, i) =>
      i === index ? { ...module, [field]: value } : module
    );
    setFormData((prev) => ({ ...prev, courseModule: updatedModules }));
  };

  const handleAddCourseModule = () => {
    setFormData((prev) => ({
      ...prev,
      courseModule: [
        ...prev.courseModule,
        {
          moduleName: "",
          moduleIntro: "",
          moduleVideo: "",
          moduleThumbnail: "",
        },
      ],
    }));
  };

  const handleRemoveCourseModule = (index) => {
    const updatedModules = formData.courseModule.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, courseModule: updatedModules }));
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
      console.error(e);
      toast.error("Image upload failed!");
    }
  };

  const handleImageInput1 = async (file, fieldName) => {
    try {
      const data = await handleUploadingImage(file);
      //console.log(data);
      setFormData((prev) => ({ ...prev, [fieldName]: data }));
    } catch (e) {
      console.error("Error uploading image:", e);
      toast.error("Image upload failed!");
    }
  };

  const handleImageInput2 = async (file, index) => {
    try {
      const data = await handleUploadingImage(file);
      //console.log(data);
      handleCourseModuleChange(index, "moduleThumbnail", data);
    } catch (e) {
      console.error("Error uploading module image:", e);
      toast.error("Module image upload failed!");
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
                value={formData.courseName}
                onChange={(e) => handleInputChange(e)}
                name="courseName"
              />
            </div>

            <InputImageVideo
              imageName={`${courseTopic} Image:`}
              fileType="image"
              onChange={(e) =>
                handleImageInput1(e.target.files[0], "courseImage")
              }
            />
          </div>

          <div className="flex items-start w-full justify-between gap-5">
            <div className="w-full">
              <label className="block font-bold">Choose Course Category</label>
              <select
                value={formData.mainCategory}
                onChange={(e) => handleInputChange(e)}
                name="mainCategory"
                className="block w-full px-3 py-2 border rounded">
                <option value="">Select Main Category</option>
                {Object.keys(categoryOptions).map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {formData.mainCategory && (
              <div className="w-full">
                <label className="block font-bold">Choose Subcategory</label>
                <select
                  value={formData.subCategory}
                  onChange={(e) => handleInputChange(e)}
                  name="subCategory"
                  className="block w-full px-3 py-2 border rounded">
                  <option value="">Select Subcategory</option>
                  {categoryOptions[formData.mainCategory].map((sub) => (
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
                value={formData.teacherName}
                onChange={(e) => handleInputChange(e)}
                name="instructorName"
              />
            </div>

            <div className="w-full">
              <InputComponent
                iName="Teacher's Email"
                iType="email"
                value={formData.teacherEmail}
                onChange={(e) => handleInputChange(e)}
                name="instructorEmail"
              />
            </div>
          </div>

          <InputImageVideo
            imageName="Teacher's Image:"
            fileType="image"
            onChange={(e) =>
              handleImageInput1(e.target.files[0], "instructorImage")
            }
          />

          <div className="mb-4 overflow-auto">
            <label className="block text-xl font-bold">Course Details:</label>
            {formData?.courseModule.map((module, index) => (
              <div
                key={index}
                className="flex flex-col w-full justify-between gap-1 mb-2 border-2 border-t-0 rounded-xl rounded-t-none px-4 pb-2 mt-3">
                <div className="w-full">
                  <div className="flex items-center w-full justify-between gap-5 pt-2 text-sm">
                    <div className="w-full">
                      <InputComponent
                        iName="Module Name"
                        iType="text"
                        value={module.moduleName}
                        onChange={(e) =>
                          handleCourseModuleChange(
                            index,
                            "moduleName",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="w-full">
                      <InputComponent
                        iName="Module Video Link"
                        iType="text"
                        value={module.moduleVideo}
                        onChange={(e) =>
                          handleCourseModuleChange(
                            index,
                            "moduleVideo",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>

                  <InputImageVideo
                    imageName="Video Thumbnail:"
                    fileType="video"
                    value={module.moduleThumbnail}
                    onChange={(e) =>
                      handleImageInput2(e.target.files[0], index)
                    }
                  />

                  <div className="w-full">
                    <label className="block text-xl">Module Introduction</label>
                    <TextareaComponent
                      value={module.moduleIntro}
                      onChange={(e) =>
                        handleCourseModuleChange(
                          index,
                          "moduleIntro",
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
