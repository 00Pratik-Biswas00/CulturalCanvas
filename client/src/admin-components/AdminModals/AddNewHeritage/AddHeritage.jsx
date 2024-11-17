import React, { useState } from "react";
import AddNewModal from "../AddNewModal";
import InputComponent from "../../../components/Input/InputComponent";
import TextareaComponent from "../../../components/Textarea/TextareaComponent";
import InputImageVideo from "../../../components/Input/InputImageVideo";

const AddHeritage = ({ setHeritageModal, handleApplyHeritageModal }) => {
  const [heritageDetails, setHeritageDetails] = useState({
    name: "",
    image: "",
    introduction: "",
    endlessDigitalArt: "",
    animatedVideo: "",
    vlogVideo: "",
    part1: [{ heading: "", description: "" }],
    type_of_heritage: "unesco_listed",
    tag: "cultural",
    helpline_numbers: {
      police_helpline: "",
      women_helpline: "",
      child_helpline: "",
      ambulance_helpline: "",
      hospital_helpline: "",
      fire_brigade: "",
    },
    state_culture_name: { name: "", image: "" },
    entry_fee: 0,
    distance: "",
  });

  const handleChange = (field, value) => {
    setHeritageDetails({ ...heritageDetails, [field]: value });
  };

  const handleHelplineChange = (field, value) => {
    setHeritageDetails({
      ...heritageDetails,
      helpline_numbers: {
        ...heritageDetails.helpline_numbers,
        [field]: value,
      },
    });
  };

  const handlePart1Change = (index, field, value) => {
    const updatedPart1 = heritageDetails.part1.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setHeritageDetails({ ...heritageDetails, part1: updatedPart1 });
  };

  const handleAddPart1 = () => {
    setHeritageDetails({
      ...heritageDetails,
      part1: [...heritageDetails.part1, { heading: "", description: "" }],
    });
  };

  const handleRemovePart1 = (index) => {
    const updatedPart1 = heritageDetails.part1.filter((_, i) => i !== index);
    setHeritageDetails({ ...heritageDetails, part1: updatedPart1 });
  };

  return (
    <div>
      <AddNewModal
        setModalOpen={setHeritageModal}
        handleApply={() => handleApplyHeritageModal(heritageDetails)}
      >
        <h2 className="text-2xl font-bold mb-2">Add New Heritage</h2>
        <div className="flex flex-col gap-4 py-2">
          {/* Heritage Name and Image */}
          <div className="flex items-start w-full justify-between gap-5">
            <div className="w-full">
              <InputComponent
                iName="Heritage Name"
                iType="text"
                value={heritageDetails.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <InputImageVideo
              imageName="Heritage Image"
              fileType="image"
              value={heritageDetails.image}
              onChange={(e) => handleChange("image", e.target.value)}
            />
          </div>

          {/* Introduction */}
          <div className="flex items-start w-full justify-between gap-5">
            <div className="w-full">
              <label className="block font-bold">Introduction</label>
              <TextareaComponent
                value={heritageDetails.introduction}
                onChange={(e) => handleChange("introduction", e.target.value)}
              />
            </div>
          </div>

          {/* Video Uploads */}
          <div className="flex items-start w-full justify-between gap-5">
            <InputImageVideo
              imageName="Endless Digital Art Video"
              fileType="video"
              value={heritageDetails.endlessDigitalArt}
              onChange={(e) =>
                handleChange("endlessDigitalArt", e.target.value)
              }
            />
            <InputImageVideo
              imageName="Animated Video"
              fileType="video"
              value={heritageDetails.animatedVideo}
              onChange={(e) => handleChange("animatedVideo", e.target.value)}
            />
            <InputImageVideo
              imageName="Vlog Video"
              fileType="video"
              value={heritageDetails.vlogVideo}
              onChange={(e) => handleChange("vlogVideo", e.target.value)}
            />
          </div>

          {/* Part 1 Sections */}
          <div>
            <h3 className="font-bold text-lg py-4">
              Add heading and descriptions
            </h3>
            {heritageDetails.part1.map((section, index) => (
              <div key={index} className="flex items-center gap-4 mb-3">
                <InputComponent
                  iName={`Heading ${index + 1}`}
                  iType="text"
                  value={section.heading}
                  onChange={(e) =>
                    handlePart1Change(index, "heading", e.target.value)
                  }
                />
                <TextareaComponent
                  value={section.description}
                  placeholder={`Description ${index + 1}`}
                  onChange={(e) =>
                    handlePart1Change(index, "description", e.target.value)
                  }
                />
                <button
                  onClick={() => handleRemovePart1(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={handleAddPart1}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Add Section
            </button>
          </div>

          {/* Helpline Numbers */}
          <div>
            <h3 className="font-bold text-lg py-4">Helpline Numbers</h3>
            <div className="grid grid-cols-2 gap-4">
              <InputComponent
                iName="Police Helpline"
                iType="text"
                value={heritageDetails.helpline_numbers.police_helpline}
                onChange={(e) =>
                  handleHelplineChange("police_helpline", e.target.value)
                }
              />
              <InputComponent
                iName="Women Helpline"
                iType="text"
                value={heritageDetails.helpline_numbers.women_helpline}
                onChange={(e) =>
                  handleHelplineChange("women_helpline", e.target.value)
                }
              />
              <InputComponent
                iName="Child Helpline"
                iType="text"
                value={heritageDetails.helpline_numbers.child_helpline}
                onChange={(e) =>
                  handleHelplineChange("child_helpline", e.target.value)
                }
              />
              <InputComponent
                iName="Ambulance Helpline"
                iType="text"
                value={heritageDetails.helpline_numbers.ambulance_helpline}
                onChange={(e) =>
                  handleHelplineChange("ambulance_helpline", e.target.value)
                }
              />
              <InputComponent
                iName="Hospital Helpline"
                iType="text"
                value={heritageDetails.helpline_numbers.hospital_helpline}
                onChange={(e) =>
                  handleHelplineChange("hospital_helpline", e.target.value)
                }
              />
              <InputComponent
                iName="Fire Brigade"
                iType="text"
                value={heritageDetails.helpline_numbers.fire_brigade}
                onChange={(e) =>
                  handleHelplineChange("fire_brigade", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </AddNewModal>
    </div>
  );
};

export default AddHeritage;
