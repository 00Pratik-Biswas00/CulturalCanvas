import React from "react";
import LayoutIndividualCourse from "../../components/IndividualCoursePageLayout/LayoutIndividualCourse";
import money from "../../assets/explorePlaces/predictPoster.png";
const GujaratiCourses = [
  {
    courseImg: money,
    courseName: "Gujarati Grammar (Zero to Hero)",
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
const GujaratiCourse = () => {
  return (
    <div>
      <LayoutIndividualCourse
        course={"Gujarati"}
        courseDetails={GujaratiCourses}
      />
    </div>
  );
};

export default GujaratiCourse;
