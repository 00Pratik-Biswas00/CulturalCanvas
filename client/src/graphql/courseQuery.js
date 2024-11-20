import { gql } from "@apollo/client";

export const GET_ALL_COURSES_QUERY = gql`
  query GetCourses {
    getCourses {
      id
      name
      slug
      image {
        url
        public_id
      }
      courseCategory {
        language
        cuisine
        arts
        sports
      }
      instructorName
      averageRatings
      totalRatings
    }
  }
`;

export const GET_ALL_COURSES_ADMIN_QUERY = gql`
  query GetCourses {
    getCourses {
      id
      name
      slug
      image {
        url
        public_id
      }
      courseCategory {
        language
        cuisine
        arts
        sports
      }
    }
  }
`;

export const GET_COURSE_QUERY = gql`
  query GetCourse($slug: String!) {
    getCourse(slug: $slug) {
      id
      name
      slug
      image {
        url
        public_id
      }
      courseHistory
      courseIntro
      instructorName
      instructorEmail
      instructorImage {
        url
        public_id
      }
      modules {
        name
        description
        image {
          url
          public_id
        }
        video
      }
      averageRatings
      totalRatings
      courseCategory {
        language
        cuisine
        arts
        sports
      }
    }
  }
`;
