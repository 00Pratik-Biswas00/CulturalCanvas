import React from "react";
import AddNewModal from "../AddNewModal";
import InputComponent from "../../../components/Input/InputComponent";
import TextareaComponent from "../../../components/Textarea/TextareaComponent";

const AddReligionModal = ({ setReligionModal, handleApplyReligionModal }) => {
  return (
    <div>
      <AddNewModal
        setModalOpen={setReligionModal}
        handleApply={handleApplyReligionModal}
      >
        <h2 className="text-2xl lg:text-3xl font-bold mb-2">
          Add New Religions
        </h2>

        <div className="flex flex-col  py-2">
          <div className="flex items-start w-full justify-between gap-5">
            <div className="w-full">
              <label className="block "> Name</label>
              <InputComponent iName="name" iType="text" />
            </div>
            <div className="w-full">
              <label className="block "> Image</label>
              <InputComponent iName="image" iType="file" />
            </div>
          </div>

          <div className="flex items-start w-full justify-between gap-5">
            <div className=" w-full">
              <label className="block ">Introduction</label>
              <textarea className="w-full px-4 py-2 border rounded-lg bg-background1 dark:bg-dark_background1 focus:outline-none focus:ring-2 focus:ring-highlight" />
            </div>

            <div className=" w-full">
              <label className="block ">Description</label>
              <textarea className="w-full px-4 py-2 border rounded-lg bg-background1 dark:bg-dark_background1 focus:outline-none focus:ring-2 focus:ring-highlight" />
            </div>

            <div className=" w-full">
              <label className="block ">Overview</label>
              <TextareaComponent />
            </div>
          </div>

          <div className="flex items-start w-full justify-between gap-5">
            <div className=" w-full">
              <label className="block ">History</label>
              <TextareaComponent />
            </div>

            <div className=" w-full">
              <label className="block ">Regions</label>
              <TextareaComponent />
            </div>

            <div className=" w-full">
              <label className="block ">Practices</label>
              <TextareaComponent />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xl font-lato">Core Beliefs</label>

            <div className="flex items-center w-full justify-between gap-2 mb-2">
              <InputComponent iName="beliefsHeading" iType="text" />

              <InputComponent iName="beliefsDescription" iType="text" />

              <button
                type="button"
                // onClick={removeArrayItem(index, casts, setCasts)}
                className=" px-4 py-1 bg-red-500 hover:bg-red-800 rounded"
              >
                -
              </button>
            </div>

            <button
              type="button"
              // onClick={addArrayItem(setCasts, casts)}
              className="bg-highlight hover:bg-highlight_hover text-primary_text px-4 py-1 rounded font-bold transition-all duration-300"
            >
              Add Beliefs
            </button>
          </div>
        </div>
      </AddNewModal>
    </div>
  );
};

export default AddReligionModal;
