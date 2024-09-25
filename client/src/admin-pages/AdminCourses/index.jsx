import React, { useState } from "react";
import LayoutCulture from "../../admin-components/LayoutCulture/LayoutCulture";
import AddCourses from "../../admin-components/AdminModals/AddCourses/AddCourses";

const AdminCourses = () => {
  const [languageCourseModal, setLanguageCourseModal] = useState(false);
  const [cuisineCourseModal, setCuisineCourseModal] = useState(false);
  const [clothingCourseModal, setClothingCourseModal] = useState(false);
  const [artCraftCourseModal, setArtCraftCourseModal] = useState(false);

  const handleApplyLanguageCourseModal = () => {
    setLanguageCourseModal(false);
  };

  const handleApplyCuisineCourseModal = () => {
    setCuisineCourseModal(false);
  };

  const handleApplyClothingCourseModal = () => {
    setClothingCourseModal(false);
  };

  const handleApplyArtCraftCourseModal = () => {
    setArtCraftCourseModal(false);
  };

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-6 px-4 duration-300 min-h-screen">
      <div className="flex flex-col gap-5 sm:gap-10">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-y-3 ">
          <h1 className="text-4xl font-semibold text-center tracking-tighter font-playfair">
            Manage Your Courses
          </h1>
        </div>

        <LayoutCulture
          cultureName="Language Course"
          setModalOpen={setLanguageCourseModal}
        />
        <LayoutCulture
          cultureName="Cuisine Course"
          setModalOpen={setCuisineCourseModal}
        />
        <LayoutCulture
          cultureName="Clothing Course"
          setModalOpen={setClothingCourseModal}
        />
        <LayoutCulture
          cultureName="Art & Craft Course"
          setModalOpen={setArtCraftCourseModal}
        />
      </div>

      {languageCourseModal && (
        <AddCourses
          setCourseModal={setLanguageCourseModal}
          handleApplyCourseModal={handleApplyLanguageCourseModal}
          courseTopic="Language"
        />
      )}

      {cuisineCourseModal && (
        <AddCourses
          setCourseModal={setCuisineCourseModal}
          handleApplyCourseModal={handleApplyCuisineCourseModal}
          courseTopic="Cuisine"
        />
      )}

      {clothingCourseModal && (
        <AddCourses
          setCourseModal={setClothingCourseModal}
          handleApplyCourseModal={handleApplyClothingCourseModal}
          courseTopic="Clothing"
        />
      )}

      {artCraftCourseModal && (
        <AddCourses
          setCourseModal={setArtCraftCourseModal}
          handleApplyCourseModal={handleApplyArtCraftCourseModal}
          courseTopic="Art & Craft"
        />
      )}
    </section>
  );
};

export default AdminCourses;
