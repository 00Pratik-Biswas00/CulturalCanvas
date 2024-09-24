import React from "react";
import AddNewModal from "../AddNewModal";

const AddCuisineModal = ({ setCuisineModal, handleApplyCuisineModal }) => {
  return (
    <div>
      <AddNewModal
        setModalOpen={setCuisineModal}
        handleApply={handleApplyCuisineModal}
      >
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          Add New Cuisines
        </h2>
      </AddNewModal>
    </div>
  );
};

export default AddCuisineModal;
