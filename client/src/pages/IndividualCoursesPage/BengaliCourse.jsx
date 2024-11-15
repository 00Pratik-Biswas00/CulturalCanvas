import React from "react";
import LayoutIndividualCourse from "../../components/IndividualCoursePageLayout/LayoutIndividualCourse";
import money from "../../assets/explorePlaces/predictPoster.png";

const BengaliCourses = [
  {
    courseImg: money,
    courseName: "Bengali Grammar (Zero to Hero)",
    teacherName: "Dr. Pratik Biswas",
    totalStars: "⭐⭐⭐⭐⭐ (2.9k students)",
  },

  {
    courseImg: money,
    courseName: "Rabindranath's Poems (All in One)",
    teacherName: "Dr. Pratik Biswas",
    totalStars: "⭐⭐⭐⭐⭐ (2.9k students)",
  },
];

const BengaliCourse = () => {
  return (
    <div>
      <LayoutIndividualCourse
        course={"Bengali"}
        courseDetails={BengaliCourses}
      />
    </div>
  );
};

export default BengaliCourse;
