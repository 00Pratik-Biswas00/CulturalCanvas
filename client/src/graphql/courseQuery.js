import { gql } from "@apollo/client";

export const GET_ALL_COURSES = gql`
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

export const GET_COURSE = gql`
  query GetCourse {
    getCourse(id: "66d6f16c17e79824224432ba") {
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
