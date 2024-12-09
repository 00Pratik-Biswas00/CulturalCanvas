import React, { useState } from "react";
import AddHeritageModal from "../../admin-components/AdminModals/AddNewHeritage/AddHeritage.jsx"; // Import the modal component

const AdminHeritagePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="admin-heritage-page">
      <h1>Manage Heritage Data</h1>

      {/* Add Heritage Button */}
      <button onClick={handleOpenModal} className="add-heritage-btn">
        Add New Heritage
      </button>

      {/* Render Modal */}
      <AddHeritageModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* List of Existing Heritage Data */}
      <div className="heritage-list">
        {/* Replace this with dynamic data */}
        <h2>Existing Heritage Records</h2>
        <ul>
          <li>Heritage 1</li>
          <li>Heritage 2</li>
          <li>Heritage 3</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminHeritagePage;
