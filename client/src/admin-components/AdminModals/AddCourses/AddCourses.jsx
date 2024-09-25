import React from "react";
import AddNewModal from "../AddNewModal";
import InputComponent from "../../../components/Input/InputComponent";
import TextareaComponent from "../../../components/Textarea/TextareaComponent";
import InputImageVideo from "../../../components/Input/InputImageVideo";

const AddCourses = ({
  setCourseModal,
  handleApplyCourseModal,
  courseTopic,
}) => {
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
              <label className="block font-bold ">{courseTopic} Name</label>
              <InputComponent iName="name" iType="text" />
            </div>

            <InputImageVideo
              imageName={`${courseTopic} Image`}
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
              <label className="block font-bold ">Teacher's Name</label>
              <InputComponent iName="teacher_name" iType="text" />
            </div>

            <div className=" w-full">
              <label className="block font-bold ">Teacher's Email</label>
              <InputComponent iName="teacher_name" iType="email" />
            </div>

            <InputImageVideo imageName="Teachers's Image" fileType="image" />
          </div>

          <div className="mb-4">
            <label className="block  font-bold">Course Details:</label>

            <div className="flex items-center w-full justify-between gap-5 mb-2">
              <div className=" w-full">
                <div className="flex items-center w-full justify-between gap-5 pt-2 text-sm ">
                  <div className=" w-full">
                    <label className="block  ">Module Name</label>
                    <InputComponent iName="module_name" iType="text" />
                  </div>
                  <div className=" w-full">
                    <label className="block  ">Module Video Link</label>
                    <InputComponent iName="module_video" iType="text" />
                  </div>

                  <InputImageVideo
                    imageName="Video Thumbnail"
                    fileType="image"
                  />
                </div>

                <div className=" w-full">
                  <label className="block text-sm ">Module Introduction</label>
                  <TextareaComponent />
                </div>
              </div>
              <button
                type="button"
                // onClick={removeArrayItem(index, casts, setCasts)}
                className=" p-1 bg-red-500 hover:bg-red-800 rounded"
              >
                🗑
              </button>
            </div>

            <button
              type="button"
              // onClick={addArrayItem(setCasts, casts)}
              className="bg-highlight hover:bg-highlight_hover text-primary_text px-4 py-1 rounded font-medium transition-all duration-300 w-fit uppercase"
            >
              Add Module
            </button>
          </div>
        </div>
      </AddNewModal>
    </div>
  );
};

export default AddCourses;
