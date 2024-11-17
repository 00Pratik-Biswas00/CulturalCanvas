import React, { useState } from "react";
import AddNewModal from "../AddNewModal";
import InputComponent from "../../../components/Input/InputComponent";
import TextareaComponent from "../../../components/Textarea/TextareaComponent";
import InputImageVideo from "../../../components/Input/InputImageVideo";
import { gql, useMutation } from '@apollo/client';
import { CREATE_COURSE_MUTATION } from "../../../graphql/courseMutation";

const AddCourses = ({
  setCourseModal,
  handleApplyCourseModal,
  courseTopic,
}) => {
  const [courseName, setCourseName] = useState("");
  const [courseImage, setCourseImage] = useState("");
  const [courseHistory, setCourseHistory] = useState("");
  const [courseIntro, setCourseIntro] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [teacherImage, setTeacherImage] = useState("");

  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const categoryOptions = {
    language: ["English", "Spanish", "French", "German"],
    cuisine: ["Italian", "Chinese", "Mexican", "Indian"],
    arts: ["Music", "Painting", "Theatre", "Dance"],
    sports: ["Football", "Basketball", "Tennis", "Swimming"],
  };
  
  const [courseModule, setCourseModule] = useState([
    { moduleName: "", moduleIntro: "", moduleVideo: "", moduleThumbnail: "" },
  ]);

  const handleAddCourseModule = () => {
    setCourseModule([
      ...courseModule,
      { moduleName: "", moduleIntro: "", moduleVideo: "", moduleThumbnail: "" },
    ]);
  };

  const handleRemoveCourseModule = (index) => {
    const updatedModules = courseModule.filter((_, i) => i !== index);
    setCourseModule(updatedModules);
  };

  const handleCourseModuleChange = (index, field, value) => {
    const updatedModules = courseModule.map((module, i) =>
      i === index ? { ...module, [field]: value } : module
    );
    setCourseModule(updatedModules);
  };

  const [createCourse, { loading, error, data }] = useMutation(CREATE_COURSE_MUTATION);

  const handleSaveCourse = async () => {
    try {
      const response = await createCourse({
        variables: {
          image: {
            url: courseImage,
            public_id: "some-public-id", // Replace or manage this as needed
          },
          name: courseName,
          courseCategory: {
            language: mainCategory === "language" ? subCategory : "None",
            cuisine: mainCategory === "cuisine" ? subCategory : "None",
            arts: mainCategory === "arts" ? subCategory : "None",
            sports: mainCategory === "sports" ? subCategory : "None",
          },
          courseHistory: courseHistory,
          courseIntro: courseIntro,
          modules: courseModule.map((module) => ({
            name: module.moduleName,
            description: module.moduleIntro,
            image: {},
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

        <div className="flex flex-col gap-2  py-2">
          <div className="flex items-start w-full justify-between gap-5">
            <div className="w-full">
              <InputComponent
                iName={`${courseTopic} Name`}
                iType="text"
                onChange={(e) => setCourseName(e.target.value)}
              />
            </div>

            <InputImageVideo
              imageName={`${courseTopic} Image:`}
              fileType="image"
              onChange={(e) => setCourseImage(e.target.files[0])}
            />
          </div>

          {/* Main Category Selection */}
          <div className="flex items-start w-full justify-between gap-5">
            <div className="w-full">
              <label className="block font-bold">Choose Course Category</label>
              <select
                value={mainCategory}
                onChange={(e) => {
                  setMainCategory(e.target.value);
                  setSubCategory(""); // Reset subcategory when main changes
                }}
                className="block w-full px-3 py-2 border rounded">
                <option value="">Select Main Category</option>
                {Object.keys(categoryOptions).map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Subcategory Selection */}
            {mainCategory && (
              <div className="w-full">
                <label className="block font-bold">Choose Subcategory</label>
                <select
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  className="block w-full px-3 py-2 border rounded">
                  <option value="">Select Subcategory</option>
                  {categoryOptions[mainCategory].map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div className="flex items-start w-full justify-between gap-5">
            <div className=" w-full">
              <label className="block font-bold ">{courseTopic} History</label>
              <TextareaComponent
                value={courseHistory}
                onChange={(e) => setCourseHistory(e.target.value)}
              />
            </div>

            <div className=" w-full">
              <label className="block font-bold ">Course Introduction</label>
              <TextareaComponent
                value={courseIntro}
                onChange={(e) => setCourseIntro(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-start w-full justify-between gap-5">
            <div className=" w-full">
              <InputComponent
                iName="Teacher's Name"
                iType="text"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
              />
            </div>

            <div className=" w-full">
              <InputComponent
                iName="Teacher's Email"
                iType="email"
                value={teacherEmail}
                onChange={(e) => setTeacherEmail(e.target.value)}
              />
            </div>
          </div>

          <InputImageVideo
            imageName="Teachers's Image:"
            fileType="image"
            value={teacherImage}
            onChange={(e) => setTeacherImage(e.target.files[0])}
          />

          <div className="mb-4 overflow-auto">
            <label className="block text-xl font-bold">Course Details:</label>

            {courseModule.map((module, index) => (
              <div
                key={index}
                className="flex flex-col w-full justify-between gap-1 mb-2 border-2 border-t-0 rounded-xl rounded-t-none px-4 pb-2 mt-3">
                <div className="w-full">
                  <div className="flex items-center w-full justify-between gap-5 pt-2 text-sm ">
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
                      handleCourseModuleChange(
                        index,
                        "moduleThumbnail",
                        e.target.value
                      )
                    }
                  />

                  <div className="w-full">
                    <label className="block text-xl ">
                      Module Introduction
                    </label>
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
                <div className="flex justify-end w-full ">
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
