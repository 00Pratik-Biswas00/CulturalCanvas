import React, { useState } from "react";
import LayoutCulture from "../../admin-components/LayoutCulture/LayoutCulture";
import AddCourses from "../../admin-components/AdminModals/AddCourses/AddCourses";

const AdminCourses = () => {
  const [languageCourseModal, setCourseModal] = useState(false);
  const [cuisineCourseModal, setCuisineModal] = useState(false);
  const [clothingModal, setClothingModal] = useState(false);
  const [artCraftModal, setArtCraftModal] = useState(false);

  const handleApplyCourseModal = () => {
    setCourseModal(false);
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
            Manage Your Courses
          </h1>
        </div>

        <LayoutCulture
          cultureName="Language Course"
          setModalOpen={setCourseModal}
        />
        <LayoutCulture
          cultureName="Cuisine Course"
          setModalOpen={setCourseModal}
        />
        <LayoutCulture
          cultureName="Clothing Course"
          setModalOpen={setCourseModal}
        />
        <LayoutCulture
          cultureName="Art & Craft Course"
          setModalOpen={setCourseModal}
        />
      </div>

      {languageCourseModal && (
        <AddCourses
          setCourseModal={setCourseModal}
          handleApplyCourseModal={handleApplyCourseModal}
        />
      )}

      {cuisineCourseModal && (
        <AddCourses
          setCourseModal={setCourseModal}
          handleApplyCourseModal={handleApplyCourseModal}
        />
      )}
    </section>
  );
};

export default AdminCourses;
