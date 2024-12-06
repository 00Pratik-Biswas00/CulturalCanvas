import React, { useEffect, useState } from "react";
import LayoutIndividualCourse from "../../components/IndividualCoursePageLayout/LayoutIndividualCourse";
import { useQuery } from "@apollo/client";
import { GET_ALL_COURSES_QUERY } from "../../graphql/courseQuery";
import { useNavigate } from "react-router-dom";

const BengaliCuisine = () => {
  const [courses, setCourses] = useState([]);
  const { loading, error, data } = useQuery(GET_ALL_COURSES_QUERY);
  const navigate = useNavigate();

  useEffect(() => {
    if (data && data.getCourses) {
      // Filter courses by cuisine "Bengali"
      const bengaliCuisines = data.getCourses.filter(
        (course) => course.courseCategory.cuisine === "Bengali"
      );
      setCourses(bengaliCuisines);
      console.log(bengaliCuisines);
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
      <LayoutIndividualCourse course="Bengali" courseDetails={courses} />
    </div>
  );
};

export default BengaliCuisine;
