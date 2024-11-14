import React, { useState } from "react";
import AddNewModal from "../AddNewModal";
import InputComponent from "../../../components/Input/InputComponent";
import TextareaComponent from "../../../components/Textarea/TextareaComponent";
import InputImageVideo from "../../../components/Input/InputImageVideo";

const AddCourses = ({
  setCourseModal,
  handleApplyCourseModal,
  courseTopic,
}) => {
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

  return (
    <div>
      <AddNewModal
        setModalOpen={setCourseModal}
        handleApply={handleApplyCourseModal}
      >
        <h2 className="text-2xl lg:text-3xl font-bold mb-2">
          Add a New {courseTopic} Course
        </h2>

        <div className="flex flex-col gap-2  py-2">
          <div className="flex items-start w-full justify-between gap-5">
            <div className="w-full">
              <InputComponent iName={`${courseTopic} Name`} iType="text" />
            </div>

            <InputImageVideo
              imageName={`${courseTopic} Image:`}
              fileType="image"
            />
          </div>

          <div className="flex items-start w-full justify-between gap-5">
            <div className=" w-full">
              <label className="block font-bold ">{courseTopic} History</label>
              <TextareaComponent />
            </div>

            <div className=" w-full">
              <label className="block font-bold ">Course Introduction</label>
              <TextareaComponent />
            </div>
          </div>

          <div className="flex items-start w-full justify-between gap-5">
            <div className=" w-full">
              <InputComponent iName="Teacher's Name" iType="text" />
            </div>

            <div className=" w-full">
              <InputComponent iName="Teacher's Email" iType="email" />
            </div>
          </div>

          <InputImageVideo imageName="Teachers's Image:" fileType="image" />

          <div className="mb-4 overflow-auto">
            <label className="block text-xl font-bold">Course Details:</label>

            {courseModule.map((module, index) => (
              <div
                key={index}
                className="flex flex-col w-full justify-between gap-1 mb-2 border-2 border-t-0 rounded-xl rounded-t-none px-4 pb-2 mt-3"
              >
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
                    className="px-4 py-1 bg-red-500 hover:bg-red-800 rounded text-white"
                  >
                    Delete Module
                  </button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between w-full mt-2">
              <button
                type="button"
                onClick={handleAddCourseModule}
                className="bg-highlight hover:bg-highlight_hover text-primary_text px-4 py-1 rounded font-medium transition-all duration-300 w-fit uppercase"
              >
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
