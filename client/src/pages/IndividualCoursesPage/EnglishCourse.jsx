import React from "react";
import LayoutIndividualCourse from "../../components/IndividualCoursePageLayout/LayoutIndividualCourse";
import money from "../../assets/explorePlaces/predictPoster.png";
const EnglishCourses = [
  {
    courseImg: money,
    courseName: "English Grammar (Zero to Hero)",
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
const EnglishCourse = () => {
  return (
    <div>
      <LayoutIndividualCourse
        course={"English"}
        courseDetails={EnglishCourses}
      />
    </div>
  );
};

export default EnglishCourse;
