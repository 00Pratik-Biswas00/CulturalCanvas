import React from "react";
import AddNewModal from "../AddNewModal";

const AddGreetingModal = ({ setGreetingModal, handleApplyGreetingModal }) => {
  return (
    <div>
      <AddNewModal
        setModalOpen={setGreetingModal}
        handleApply={handleApplyGreetingModal}
      >
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          Add New Greetings
        </h2>
      </AddNewModal>
    </div>
  );
};

export default AddGreetingModal;
