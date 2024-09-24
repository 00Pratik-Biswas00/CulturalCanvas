import React from "react";
import AddNewModal from "../AddNewModal";

const AddFestivalModal = ({ setFestivalModal, handleApplyFestivalModal }) => {
  return (
    <div>
      <AddNewModal
        setModalOpen={setFestivalModal}
        handleApply={handleApplyFestivalModal}
      >
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          Add New Festivals
        </h2>
      </AddNewModal>
    </div>
  );
};

export default AddFestivalModal;
