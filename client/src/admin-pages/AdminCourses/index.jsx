import React, { useEffect, useState } from "react";
import AddCourses from "../../admin-components/AdminModals/AddCourses/AddCourses";
import LayoutCourses from "../../admin-components/LayoutCourses/LayoutCourses";
import { useQuery } from "@apollo/client";
import { GET_ALL_COURSES_ADMIN_QUERY } from "../../graphql/courseQuery";

const AdminCourses = () => {
  const [languageCourses, setLanguageCourses] = useState([]);
  const [cuisineCourses, setCuisineCourses] = useState([]);
  const [sportsCourses, setSportsCourses] = useState([]);
  const [artCraftCourses, setArtCraftCourses] = useState([]);

  const [languageCourseModal, setLanguageCourseModal] = useState(false);
  const [cuisineCourseModal, setCuisineCourseModal] = useState(false);
  const [sportsCourseModal, setSportsCourseModal] = useState(false);
  const [artCraftCourseModal, setArtCraftCourseModal] = useState(false);

  const [editCourseSlug, setEditCourseSlug] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const { loading, error, data } = useQuery(GET_ALL_COURSES_ADMIN_QUERY);

  useEffect(() => {
    if (data && data.getCourses) {
      // Group courses into categories
      const language = data.getCourses.filter(
        (course) => course.courseCategory.language !== "None"
      );
      const cuisine = data.getCourses.filter(
        (course) => course.courseCategory.cuisine !== "None"
      );
      const sports = data.getCourses.filter(
        (course) => course.courseCategory.sports !== "None"
      );
      const artCraft = data.getCourses.filter(
        (course) => course.courseCategory.arts !== "None"
      );

      setLanguageCourses(language);
      setCuisineCourses(cuisine);
      setSportsCourses(sports);
      setArtCraftCourses(artCraft);
    }
  }, [data]);

  const handleEditCourse = (course) => {
    setEditCourseSlug(course.slug);
    setIsEditing(true);

    // Open the modal based on course category
    if (course.courseCategory.language !== "None") {
      setLanguageCourseModal(true);
    }
    if (course.courseCategory.cuisine !== "None") {
      setCuisineCourseModal(true);
    }
    if (course.courseCategory.sports !== "None") {
      setSportsCourseModal(true);
    }
    if (course.courseCategory.arts !== "None") {
      setArtCraftCourseModal(true);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-6 px-4 duration-300 min-h-screen">
      <div className="flex flex-col gap-5 sm:gap-10">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-y-3 ">
          <h1 className="text-4xl font-semibold text-center tracking-tighter font-playfair">
            Manage Your Courses
          </h1>
        </div>

        {/* Pass grouped data to LayoutCourses */}
        <LayoutCourses
          cultureName="Language Course"
          setModalOpen={setLanguageCourseModal}
          courses={languageCourses}
          onEditCourse={handleEditCourse}
        />
        <LayoutCourses
          cultureName="Cuisine Course"
          setModalOpen={setCuisineCourseModal}
          courses={cuisineCourses}
          onEditCourse={handleEditCourse}
        />
        <LayoutCourses
          cultureName="Art & Craft Course"
          setModalOpen={setArtCraftCourseModal}
          courses={artCraftCourses}
          onEditCourse={handleEditCourse}
        />
        <LayoutCourses
          cultureName="Sports Course"
          setModalOpen={setSportsCourseModal}
          courses={sportsCourses}
          onEditCourse={handleEditCourse}
        />
      </div>

      {/* AddCourses Modals */}
      {languageCourseModal && (
        <AddCourses
          setCourseModal={setLanguageCourseModal}
          handleApplyCourseModal={() => {
            setLanguageCourseModal(false);
            setIsEditing(false);
          }}
          courseTopic="Language"
          isEditing={isEditing}
          editCourseSlug={editCourseSlug}
          initialCategory={"language"}
        />
      )}

      {cuisineCourseModal && (
        <AddCourses
          setCourseModal={setCuisineCourseModal}
          handleApplyCourseModal={() => {
            setCuisineCourseModal(false);
            setIsEditing(false);
          }}
          courseTopic="Cuisine"
          isEditing={isEditing}
          editCourseSlug={editCourseSlug}
        />
      )}

      {artCraftCourseModal && (
        <AddCourses
          setCourseModal={setArtCraftCourseModal}
          handleApplyCourseModal={() => {
            setArtCraftCourseModal(false);
            setIsEditing(false);
          }}
          courseTopic="Art & Craft"
          isEditing={isEditing}
          editCourseSlug={editCourseSlug}
        />
      )}

      {sportsCourseModal && (
        <AddCourses
          setCourseModal={setSportsCourseModal}
          handleApplyCourseModal={() => {
            setSportsCourseModal(false);
            setIsEditing(false);
          }}
          courseTopic="Sports"
          isEditing={isEditing}
          editCourseSlug={editCourseSlug}
        />
      )}
    </section>
  );
};

export default AdminCourses;
