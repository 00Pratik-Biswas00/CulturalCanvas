import React from "react";
import AddNewModal from "../AddNewModal";
import InputComponent from "../../../components/Input/InputComponent";
import TextareaComponent from "../../../components/Textarea/TextareaComponent";
import InputImageVideo from "../../../components/Input/InputImageVideo";

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

        <div className="flex flex-col gap-2  py-2">
          <div className="flex items-start w-full justify-between gap-5">
            <div className="w-full">
              <label className="block font-bold "> Name</label>
              <InputComponent
                pText="Add Religion Name ..."
                iName="name"
                iType="text"
              />
            </div>
            <InputImageVideo imageName="Image" fileType="image" />
          </div>

          <div className="flex items-start w-full justify-between gap-5">
            <div className=" w-full">
              <label className="block font-bold">Introduction</label>
              <TextareaComponent pText="Add Introduction of the Religion ..." />
            </div>

            <div className=" w-full ">
              <label className="block font-bold">Description</label>
              <TextareaComponent pText="Baki Gulo Add koro Bondhu ..." />
            </div>

            <div className=" w-full">
              <label className="block font-bold">Overview</label>
              <TextareaComponent />
            </div>
          </div>

          <div className="flex items-start w-full justify-between gap-5">
            <div className=" w-full">
              <label className="block font-bold">History</label>
              <TextareaComponent />
            </div>

            <div className=" w-full">
              <label className="block font-bold">Regions</label>
              <TextareaComponent />
            </div>

            <div className=" w-full">
              <label className="block font-bold">Practices</label>
              <TextareaComponent />
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-bold">Core Beliefs:</label>

            <div className="flex items-center w-full justify-between gap-2 mb-2">
              <InputComponent
                pText="Add Core Beliefs Heading ..."
                iName="beliefsHeading"
                iType="text"
              />

              <InputComponent
                pText="Add Core Beliefs Description ..."
                iName="beliefsDescription"
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
              Add Beliefs
            </button>
          </div>
        </div>
      </AddNewModal>
    </div>
  );
};

export default AddReligionModal;
