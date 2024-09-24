import React from "react";
import AddNewModal from "../AddNewModal";

const AddFamilyWeddingModal = ({
  setFamilyWeddingModal,
  handleApplyFamilyWeddingModal,
}) => {
  return (
    <div>
      <AddNewModal
        setModalOpen={setFamilyWeddingModal}
        handleApply={handleApplyFamilyWeddingModal}
      >
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          Add New Family Weddings
        </h2>
      </AddNewModal>
    </div>
  );
};

export default AddFamilyWeddingModal;
