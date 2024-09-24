import React from "react";
import AddNewModal from "../AddNewModal";

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
      </AddNewModal>
    </div>
  );
};

export default AddLanguageModal;
