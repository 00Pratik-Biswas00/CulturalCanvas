import React, { useState } from "react";
import LayoutCulture from "../../admin-components/LayoutCulture/LayoutCulture";
import AddReligionModal from "../../admin-components/AdminModals/AddReligionModal/AddReligionModal";
import AddLanguageModal from "../../admin-components/AdminModals/AddLanguageModal/AddLanguageModal";
import AddCuisineModal from "../../admin-components/AdminModals/AddCuisineModal/AddCuisineModal";
import AddFestivalModal from "../../admin-components/AdminModals/AddFestivalModal/AddFestivalModal";
import AddGreetingModal from "../../admin-components/AdminModals/AddGreetingModal/AddGreetingModal";
import AddFamilyWeddingModal from "../../admin-components/AdminModals/AddFamilyWeddingModal/AddFamilyWeddingModal";

const AdminCulture = () => {
  const [religionModal, setReligionModal] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);
  const [cuisineModal, setCuisineModal] = useState(false);
  const [festivalModal, setFestivalModal] = useState(false);
  const [greetingModal, setGreetingModal] = useState(false);
  const [familyWeddingModal, setFamilyWeddingModal] = useState(false);

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
    setFestivalModal(false);
  };

  const handleApplyGreetingModal = () => {
    setGreetingModal(false);
  };

  const handleApplyFamilyWeddingModal = () => {
    setFamilyWeddingModal(false);
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
        <LayoutCulture cultureName="Religion" setModalOpen={setReligionModal} />
        <LayoutCulture cultureName="Language" setModalOpen={setLanguageModal} />
        <LayoutCulture cultureName="Cuisine" setModalOpen={setCuisineModal} />
        <LayoutCulture cultureName="Festival" setModalOpen={setFestivalModal} />
        <LayoutCulture cultureName="Greeting" setModalOpen={setGreetingModal} />
        <LayoutCulture
          cultureName="Family Wedding"
          setModalOpen={setFamilyWeddingModal}
        />
      </div>

      {religionModal && (
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
      )}

      {cuisineModal && (
        <AddCuisineModal
          setCuisineModal={setCuisineModal}
          handleApplyCuisineModal={handleApplyCuisineModal}
        />
      )}

      {festivalModal && (
        <AddFestivalModal
          setFestivalModal={setFestivalModal}
          handleApplyFestivalModal={handleApplyFestivalModal}
        />
      )}

      {greetingModal && (
        <AddGreetingModal
          setGreetingModal={setGreetingModal}
          handleApplyGreetingModal={handleApplyGreetingModal}
        />
      )}

      {familyWeddingModal && (
        <AddFamilyWeddingModal
          setFamilyWeddingModal={setFamilyWeddingModal}
          handleApplyFamilyWeddingModal={handleApplyFamilyWeddingModal}
        />
      )}
    </section>
  );
};

export default AdminCulture;
