import React, { useState } from "react";
import AddNewModal from "../AddNewModal";
import InputComponent from "../../../components/Input/InputComponent";
import TextareaComponent from "../../../components/Textarea/TextareaComponent";
import InputImageVideo from "../../../components/Input/InputImageVideo";

const AddLanguageModal = ({ setLanguageModal, handleApplyLanguageModal }) => {
  const [languages, setLanguages] = useState([
    { heading: "", description: "" },
  ]);

  const handleAddLanguage = () => {
    setLanguages([...languages, { heading: "", description: "" }]);
  };

  const handleRemoveLanguage = (index) => {
    const updatedLanguage = languages.filter((_, i) => i !== index);
    setLanguages(updatedLanguage);
  };

  const handleLanguageChange = (index, field, value) => {
    const updatedLanguage = languages.map((language, i) =>
      i === index ? { ...language, [field]: value } : language
    );
    setLanguages(updatedLanguage);
  };

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
              <InputComponent
                // pText="Add Language Name ..."
                iName="Add Language Name"
                iType="text"
              />
            </div>
            <InputImageVideo imageName="Image:" fileType="image" />
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

          <div className="mb-4 overflow-auto">
            <label className="block font-bold text-xl">Learning Aspects:</label>

            {languages.map((language, index) => (
              <div
                key={index}
                className="flex items-center w-full justify-between gap-2 my-2"
              >
                <InputComponent
                  required={true}
                  pText="Add Core languages Heading ..."
                  iName="Learning Aspect Heading"
                  iType="text"
                  value={language.heading}
                  onChange={(e) =>
                    handleLanguageChange(index, "heading", e.target.value)
                  }
                />
                <InputComponent
                  required={true}
                  pText="Add Core languages Description ..."
                  iName="Learning Aspect Description"
                  iType="text"
                  value={language.description}
                  onChange={(e) =>
                    handleLanguageChange(index, "description", e.target.value)
                  }
                />
                <button
                  type="button"
                  onClick={() => handleRemoveLanguage(index)}
                  className="p-1 bg-red-500 hover:bg-red-800 rounded text-white"
                >
                  🗑️
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddLanguage}
              className="bg-highlight hover:bg-highlight_hover text-primary_text px-4 py-1 rounded font-bold transition-all duration-300"
            >
              Add More Learning Aspects
            </button>
          </div>
        </div>
      </AddNewModal>
    </div>
  );
};

export default AddLanguageModal;
