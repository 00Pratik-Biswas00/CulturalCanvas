import React from "react";
import LayoutIndividualCourse from "../../components/IndividualCoursePageLayout/LayoutIndividualCourse";
import money from "../../assets/explorePlaces/predictPoster.png";
const UrduCourses = [
  {
    courseImg: money,
    courseName: "Urdu Original (Zero to Hero)",
    teacherName: "Dr. Ayaan Biswas",
    totalStars: "⭐⭐⭐⭐⭐ (2.9k students)",
  },

  {
    courseImg: money,
    courseName: "Maulana's Poems (All in One)",
    teacherName: "Dr. Rupal Biswas",
    totalStars: "⭐⭐⭐⭐⭐ (2.9k students)",
  },
];
const UrduCourse = () => {
  return (
    <div>
      <LayoutIndividualCourse course={"Urdu"} courseDetails={UrduCourses} />
    </div>
  );
};

export default UrduCourse;
