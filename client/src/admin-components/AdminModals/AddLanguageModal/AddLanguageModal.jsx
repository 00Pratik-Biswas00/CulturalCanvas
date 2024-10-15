import React from "react";
import AddNewModal from "../AddNewModal";
import InputComponent from "../../../components/Input/InputComponent";
import TextareaComponent from "../../../components/Textarea/TextareaComponent";
import InputImageVideo from "../../../components/Input/InputImageVideo";

const AddLanguageModal = ({ setLanguageModal, handleApplyLanguageModal }) => {
  return (
    <div>
      <AddNewModal
        setModalOpen={setLanguageModal}
        handleApply={handleApplyLanguageModal}
      >
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          Add New Languages
        </h2>
        <div className="flex flex-col gap-2  py-2">
          <div className="flex items-start w-full justify-between gap-5">
            <div className="w-full">
              <label className="block font-bold "> Name</label>
              <InputComponent
                pText="Add Language Name ..."
                iName="name"
                iType="text"
              />
            </div>
            <InputImageVideo imageName="Image" fileType="image" />
          </div>

          <div className="flex items-start w-full justify-between gap-5">
            <div className=" w-full">
              <label className="block font-bold">Historical Overview</label>
              <TextareaComponent pText="Add the historical overview of the language ..." />
            </div>
          </div>

          <div className="flex items-start w-full justify-between gap-5">
            <div className=" w-full">
              <label className="block font-bold">Add Course</label>
              <TextareaComponent pText="CHANDRIMA - DROPDOWN ADD KORE DIS MOVIES R CAST E JEMON CHILO" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-bold">Learning Aspects:</label>

            <div className="flex items-center w-full justify-between gap-2 mb-2">
              <InputComponent
                pText="Add Title ..."
                iName="learningHeading"
                iType="text"
              />

              <InputComponent
                pText="Add Description ..."
                iName="learningDescription"
                iType="text"
              />

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
              className="bg-highlight hover:bg-highlight_hover text-primary_text px-4 py-1 rounded font-bold transition-all duration-300"
            >
              Add New Learning Aspect
            </button>
          </div>
        </div>
      </AddNewModal>
    </div>
  );
};

export default AddLanguageModal;
