import React, { useState } from "react";
import AddNewModal from "../AddNewModal";
import InputComponent from "../../../components/Input/InputComponent";
import TextareaComponent from "../../../components/Textarea/TextareaComponent";
import InputImageVideo from "../../../components/Input/InputImageVideo";

const AddReligionModal = ({ setReligionModal, handleApplyReligionModal }) => {
  const [beliefs, setBeliefs] = useState([{ heading: "", description: "" }]);

  const handleAddBelief = () => {
    setBeliefs([...beliefs, { heading: "", description: "" }]);
  };

  const handleRemoveBelief = (index) => {
    const updatedBeliefs = beliefs.filter((_, i) => i !== index);
    setBeliefs(updatedBeliefs);
  };

  const handleBeliefChange = (index, field, value) => {
    const updatedBeliefs = beliefs.map((belief, i) =>
      i === index ? { ...belief, [field]: value } : belief
    );
    setBeliefs(updatedBeliefs);
  };

  return (
    <div>
      <AddNewModal
        setModalOpen={setReligionModal}
        handleApply={handleApplyReligionModal}
      >
        <h2 className="text-2xl lg:text-3xl font-bold mb-2">
          Add New Religions
        </h2>

        <div className="flex flex-col gap-2  py-2 ">
          <div className="flex items-start w-full justify-between gap-5">
            <div className="w-full">
              <InputComponent
                pText="Add Religion Name ..."
                iName="Name"
                iType="text"
                required={true}
              />
            </div>
            <InputImageVideo
              required={true}
              imageName="Image:"
              fileType="image"
            />
          </div>

          <div className="flex items-start w-full justify-between gap-5">
            <div className=" w-full">
              <label className="block font-bold text-xl">Introduction</label>
              <TextareaComponent
                required={true}
                pText="Add Introduction of the Religion ..."
              />
            </div>

            <div className=" w-full ">
              <label className="block font-bold text-xl">Description</label>
              <TextareaComponent
                required={true}
                pText="Baki Gulo Add koro Bondhu ..."
              />
            </div>

            <div className=" w-full">
              <label className="block font-bold text-xl">Overview</label>
              <TextareaComponent required={true} />
            </div>
          </div>

          <div className="flex items-start w-full justify-between gap-5">
            <div className=" w-full">
              <label className="block font-bold text-xl">History</label>
              <TextareaComponent required={true} />
            </div>

            <div className=" w-full">
              <label className="block font-bold text-xl">Regions</label>
              <TextareaComponent required={true} />
            </div>

            <div className=" w-full">
              <label className="block font-bold text-xl">Practices</label>
              <TextareaComponent required={true} />
            </div>
          </div>

          <div className="mb-4 overflow-auto">
            <label className="block font-bold text-xl">Core Beliefs:</label>

            {beliefs.map((belief, index) => (
              <div
                key={index}
                className="flex items-center w-full justify-between gap-2 my-2"
              >
                <InputComponent
                  required={true}
                  pText="Add Core Beliefs Heading ..."
                  iName="Beliefs Heading"
                  iType="text"
                  value={belief.heading}
                  onChange={(e) =>
                    handleBeliefChange(index, "heading", e.target.value)
                  }
                />
                <InputComponent
                  required={true}
                  pText="Add Core Beliefs Description ..."
                  iName="Beliefs Description"
                  iType="text"
                  value={belief.description}
                  onChange={(e) =>
                    handleBeliefChange(index, "description", e.target.value)
                  }
                />
                <button
                  type="button"
                  onClick={() => handleRemoveBelief(index)}
                  className="p-1 bg-red-500 hover:bg-red-800 rounded text-white"
                >
                  🗑️
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddBelief}
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
