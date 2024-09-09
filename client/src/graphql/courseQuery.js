import { gql } from "@apollo/client";

export const GET_ALL_COURSES_QUERY = gql`
  query GetCourses {
    getCourses {
      id
      name
      slug
      courseCategory
      courseHistory
      courseIntro
      image {
        url
        public_id
      }
      modules {
        name
        description
        video {
          ETag
          ServerSideEncryption
          Location
          Key
          Bucket
        }
        image {
          url
          public_id
        }
      }
      instructor {
        name
        email
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
      courseCategory
      courseHistory
      courseIntro
      image {
        url
        public_id
      }
      modules {
        name
        image {
          url
          public_id
        }
        description
        video {
          ETag
          ServerSideEncryption
          Location
          Key
          Bucket
        }
      }
      instructor {
        _id
        name
        email
        gender
        role
        phone
        rewards
        vlogs
        blogs
        photo {
          url
          public_id
        }
      }
    }
  }
`;
