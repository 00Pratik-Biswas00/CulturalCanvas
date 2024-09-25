import React, { useState } from "react";
import LayoutCulture from "../../admin-components/LayoutCulture/LayoutCulture";

const AdminCourses = () => {
  const [religionModal, setReligionModal] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);
  const [cuisineModal, setCuisineModal] = useState(false);
  const [clothingModal, setClothingModal] = useState(false);
  const [artCraftModal, setArtCraftModal] = useState(false);

  const handleApplyReligionModal = () => {
    setReligionModal(false);
  };

  const handleApplyLanguageModal = () => {
    setLanguageModal(false);
  };

  const handleApplyCuisineModal = () => {
    setCuisineModal(false);
  };

  const handleApplyFestivalModal = () => {
    setClothingModal(false);
  };

  const handleApplyGreetingModal = () => {
    setArtCraftModal(false);
  };

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-6 px-4 duration-300 min-h-screen">
      <div className="flex flex-col gap-5 sm:gap-10">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-y-3 ">
          <h1 className="text-4xl font-semibold text-center tracking-tighter font-playfair">
            Manage Your Cultures
          </h1>
        </div>

        {/* Pass the correct props */}
        <LayoutCulture cultureName="Language" setModalOpen={setLanguageModal} />
        <LayoutCulture cultureName="Cuisine" setModalOpen={setCuisineModal} />
        <LayoutCulture cultureName="Clothing" setModalOpen={setClothingModal} />
        <LayoutCulture
          cultureName="Art & Craft"
          setModalOpen={setArtCraftModal}
        />
      </div>

      {/* {languageModal && (
        <AddLanguageModal
          setLanguageModal={setLanguageModal}
          handleApplyLanguageModal={handleApplyLanguageModal}
        />
      )}

      {cuisineModal && (
        <AddCuisineModal
          setCuisineModal={setCuisineModal}
          handleApplyCuisineModal={handleApplyCuisineModal}
        />
      )}

      {clothingModal && (
        <AddFestivalModal
          setClothingModal={setClothingModal}
          handleApplyFestivalModal={handleApplyFestivalModal}
        />
      )}

      {artCraftModal && (
        <AddGreetingModal
          setArtCraftModal={setArtCraftModal}
          handleApplyGreetingModal={handleApplyGreetingModal}
        />
      )} */}
    </section>
  );
};

export default AdminCourses;
