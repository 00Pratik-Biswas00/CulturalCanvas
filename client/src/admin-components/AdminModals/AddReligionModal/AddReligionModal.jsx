import React from "react";
import AddNewModal from "../AddNewModal";

const AddReligionModal = ({ setReligionModal, handleApplyReligionModal }) => {
  return (
    <div>
      <AddNewModal
        setModalOpen={setReligionModal}
        handleApply={handleApplyReligionModal}
      >
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          Add New Religions
        </h2>
      </AddNewModal>
    </div>
  );
};

export default AddReligionModal;
