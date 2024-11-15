import React from "react";
import LayoutIndividualCourse from "../../components/IndividualCoursePageLayout/LayoutIndividualCourse";
import money from "../../assets/explorePlaces/predictPoster.png";
const HindiCourses = [
  {
    courseImg: money,
    courseName: "Hindi Grammar (Zero to Hero)",
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
const HindiCourse = () => {
  return (
    <div>
      <LayoutIndividualCourse course={"Hindi"} courseDetails={HindiCourses} />
    </div>
  );
};

export default HindiCourse;
