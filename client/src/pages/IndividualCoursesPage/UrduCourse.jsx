import React, { useEffect, useState } from "react";
import LayoutIndividualCourse from "../../components/IndividualCoursePageLayout/LayoutIndividualCourse";
import { useQuery } from "@apollo/client";
import { GET_ALL_COURSES_QUERY } from "../../graphql/courseQuery";
import { useNavigate } from "react-router-dom";

const UrduCourse = () => {
  const [courses, setCourses] = useState([]);
  const { loading, error, data } = useQuery(GET_ALL_COURSES_QUERY);
  const navigate = useNavigate();

  useEffect(() => {
    if (data && data.getCourses) {
      // Filter courses by language "Bengali"
      const urduCourses = data.getCourses.filter(
        (course) => course.courseCategory.language === "Hindi"
      );
      setCourses(urduCourses);
      console.log(urduCourses);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <LayoutIndividualCourse course={"Urdu"} courseDetails={courses} />
    </div>
  );
};

export default UrduCourse;
