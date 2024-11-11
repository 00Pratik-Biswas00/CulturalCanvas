import React from "react";
import { FaTimes } from "react-icons/fa";

const AddNewModal = ({ setModalOpen, handleApply, children }) => {
  return (
    <div className="fixed inset-0 bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text bg-opacity-50 dark:bg-opacity-70 flex items-center justify-end pr-14 overflow-auto">
      <div className="bg-background2 dark:bg-shadow sm:w-[81%] max-h-[85vh] overflow-y-auto my-5 px-4 py-2 rounded-lg relative">
        <FaTimes
          className="absolute top-2 right-3 text-red-600 hover:text-red-800 text-xl cursor-pointer"
          onClick={() => setModalOpen(false)}
        />
        {/* Modal content */}
        {children}

        {/* Button Section */}
        <div className="flex justify-end gap-x-4">
          <button
            className="bg-highlight hover:bg-highlight_dark text-dark_primary_text font-medium py-1 px-3 rounded-lg"
            onClick={handleApply}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewModal;
