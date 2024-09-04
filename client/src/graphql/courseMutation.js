import { gql } from "@apollo/client";

export const CREATE_COURSE_MUTATION = gql`
  mutation CreateCourse(
    $name: String!
    $image: ImageInput!
    $courseCategory: String!
    $courseHistory: String!
    $courseIntro: String!
    $modules: [ModuleInput]
    $instructor: ID!
  ) {
    createCourse(
      name: $name
      image: $image
      courseCategory: $courseCategory
      courseHistory: $courseHistory
      courseIntro: $courseIntro
      modules: $modules
      instructor: $instructor
    ) {
      id
      name
      slug
      image {
        url
        public_id
      }
      courseHistory
      courseIntro
      modules {
        name
        description
        image {
          url
          public_id
        }
        video {
          ETag
          ServerSideEncryption
          Location
          Key
          Bucket
        }
      }
      instructor
    }
  }
`;

export const UPDATE_COURSE_MUTATION = gql`
  mutation UpdateCourse(
    $id: ID!
    $image: ImageInput
    $name: String
    $courseCategory: String
    $courseHistory: String
    $courseIntro: String
  ) {
    updateCourse(
      id: $id
      image: $image
      name: $name
      courseCategory: $courseCategory
      courseHistory: $courseHistory
      courseIntro: $courseIntro
    ) {
      name
      image {
        public_id
        url
      }
      courseCategory
      courseIntro
      courseHistory
    }
  }
`;

export const ADD_COURSE_MODULE = gql`
  mutation AddCourseModule($id: ID!, $module: ModuleInput!) {
    addCourseModule(id: $id, module: $module) {
      name
      description
      image {
        url
        public_id
      }
      video {
        ETag
        ServerSideEncryption
        Location
        Key
        Bucket
      }
    }
  }
`;

export const REMOVE_COURSE_MODULE = gql`
  mutation RemoveCourseModule($courseId: ID!, $moduleId: ID!) {
    removeCourseModule(courseId: $courseId, moduleId: $moduleId) {
      name
      description
      image {
        url
        public_id
      }
      video {
        ETag
        ServerSideEncryption
        Location
        Key
        Bucket
      }
    }
  }
`;

export const DELETE_COURSE = gql`
  mutation deleteCourse($id: ID!) {
    deleteCourse(id: $id)
  }
`;
