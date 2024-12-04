import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-1/3">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-500"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
