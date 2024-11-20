import React, { useEffect, useState } from "react";
import LayoutIndividualCourse from "../../components/IndividualCoursePageLayout/LayoutIndividualCourse";
import { useQuery } from "@apollo/client";
import { GET_ALL_COURSES_QUERY } from "../../graphql/courseQuery";
import { useNavigate } from "react-router-dom";

const HindiCourse = () => {
  const [courses, setCourses] = useState([]);
  const { loading, error, data } = useQuery(GET_ALL_COURSES_QUERY);
  const navigate = useNavigate();

  useEffect(() => {
    if (data && data.getCourses) {
      // Filter courses by language "Bengali"
      const hindiCourses = data.getCourses.filter(
        (course) => course.courseCategory.language === "Hindi"
      );
      setCourses(hindiCourses);
      console.log(hindiCourses);
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
      <LayoutIndividualCourse course={"Hindi"} courseDetails={courses} />
    </div>
  );
};

export default HindiCourse;
