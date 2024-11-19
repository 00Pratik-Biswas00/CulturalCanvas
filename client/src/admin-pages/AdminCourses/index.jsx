import React, { useState } from "react";
import LayoutCulture from "../../admin-components/LayoutCulture/LayoutCulture";
import AddCourses from "../../admin-components/AdminModals/AddCourses/AddCourses";

const AdminCourses = () => {
  const [languageCourseModal, setLanguageCourseModal] = useState(false);
  const [cuisineCourseModal, setCuisineCourseModal] = useState(false);
  const [sportsCourseModal, setSportsCourseModal] = useState(false);
  const [artCraftCourseModal, setArtCraftCourseModal] = useState(false);

  const [editCourseData, setEditCourseData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleApplyLanguageCourseModal = () => {
    setLanguageCourseModal(false);
  };

  const handleApplyCuisineCourseModal = () => {
    setCuisineCourseModal(false);
  };

  const handleApplyArtCraftCourseModal = () => {
    setArtCraftCourseModal(false);
  };

  const handleApplySportsCourseModal = () => {
    setSportsCourseModal(false);
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
          cultureName="Art & Craft Course"
          setModalOpen={setArtCraftCourseModal}
        />

        <LayoutCulture
          cultureName="Sports Course"
          setModalOpen={setSportsCourseModal}
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

      {artCraftCourseModal && (
        <AddCourses
          setCourseModal={setArtCraftCourseModal}
          handleApplyCourseModal={handleApplyArtCraftCourseModal}
          courseTopic="Art & Craft"
        />
      )}

      {sportsCourseModal && (
        <AddCourses
          setCourseModal={setSportsCourseModal}
          handleApplyCourseModal={handleApplySportsCourseModal}
          courseTopic="Sports"
        />
      )}
    </section>
  );
};

export default AdminCourses;
