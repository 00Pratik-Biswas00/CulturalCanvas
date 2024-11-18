import React, { useState } from "react";
import LayoutCulture from "../../admin-components/LayoutCulture/LayoutCulture";
import AddHeritage from "../../admin-components/AdminModals/AddNewHeritage/AddHeritage.jsx";

const AdminHeritage = () => {
  const [heritageModal, setHeritageModal] = useState(false);

  const handleApplyHeritageModal = (heritageData) => {
    console.log("Heritage Data Submitted: ", heritageData);
    setHeritageModal(false);
  };

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-6 px-4 duration-300 min-h-screen">
      <div className="flex flex-col gap-5 sm:gap-10">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-y-3 ">
          <h1 className="text-4xl font-semibold text-center tracking-tighter font-playfair">
            Manage Heritage Data
          </h1>
        </div>

        {/* Layout for Heritage Management */}
        <LayoutCulture
          cultureName="Heritage Data"
          setModalOpen={setHeritageModal}
        />
      </div>

      {heritageModal && (
        <AddHeritage
          setHeritageModal={setHeritageModal}
          handleApplyHeritageModal={handleApplyHeritageModal}
        />
      )}
    </section>
  );
};

export default AdminHeritage;
