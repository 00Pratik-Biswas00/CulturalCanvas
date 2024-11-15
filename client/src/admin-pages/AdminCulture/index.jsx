import React, { useState } from "react";
import LayoutCulture from "../../admin-components/LayoutCulture/LayoutCulture";
import AddReligionModal from "../../admin-components/AdminModals/AddReligionModal/AddReligionModal";
import AddLanguageModal from "../../admin-components/AdminModals/AddLanguageModal/AddLanguageModal";
import AddCuisineModal from "../../admin-components/AdminModals/AddCuisineModal/AddCuisineModal";
import AddFestivalModal from "../../admin-components/AdminModals/AddFestivalModal/AddFestivalModal";

const AdminCulture = () => {
  // const [religionModal, setReligionModal] = useState(false);
  // const [languageModal, setLanguageModal] = useState(false);

  // const handleApplyReligionModal = () => {
  //   setReligionModal(false);
  // };

  // const handleApplyLanguageModal = () => {
  //   setLanguageModal(false);
  // };

  const [cuisineModal, setCuisineModal] = useState(false);
  const [artModal, setArtModal] = useState(false);

  const handleApplyCuisineModal = () => {
    setCuisineModal(false);
  };

  const handleApplyArtModal = () => {
    setArtModal(false);
  };

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-6 px-4 duration-300 min-h-screen">
      <div className="flex flex-col gap-5 sm:gap-10">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-y-3 ">
          <h1 className="text-4xl font-semibold text-center tracking-tighter font-playfair">
            Manage Your Cultures
          </h1>
        </div>

        {/* <LayoutCulture cultureName="Religion" setModalOpen={setReligionModal} />
        <LayoutCulture cultureName="Language" setModalOpen={setLanguageModal} />*/}
        <LayoutCulture cultureName="Cuisine" setModalOpen={setCuisineModal} />
        <LayoutCulture cultureName="Art" setModalOpen={setArtModal} />
      </div>

      {/* {religionModal && (
        <AddReligionModal
          setReligionModal={setReligionModal}
          handleApplyReligionModal={handleApplyReligionModal}
        />
      )}

      {languageModal && (
        <AddLanguageModal
          setLanguageModal={setLanguageModal}
          handleApplyLanguageModal={handleApplyLanguageModal}
        />
      )} */}

      {cuisineModal && (
        <AddCuisineModal
          setCuisineModal={setCuisineModal}
          handleApplyCuisineModal={handleApplyCuisineModal}
        />
      )}

      {artModal && (
        <AddFestivalModal
          setArtModal={setArtModal}
          handleApplyArtModal={handleApplyArtModal}
        />
      )}
    </section>
  );
};

export default AdminCulture;
