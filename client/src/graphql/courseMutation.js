import { gql } from "@apollo/client";

export const CREATE_COURSE_MUTATION = gql`
  mutation CreateCourse(
    $name: String!
    $image: ImageInput!
    $courseCategory: CourseCategoryInput!
    $courseHistory: String!
    $courseIntro: String!
    $instructorName: String!
    $instructorEmail: String!
    $instructorImage: ImageInput!
    $modules: [ModuleInput]
  ) {
    createCourse(
      name: $name
      image: $image
      courseCategory: $courseCategory
      courseHistory: $courseHistory
      courseIntro: $courseIntro
      instructorName: $instructorName
      instructorEmail: $instructorEmail
      instructorImage: $instructorImage
      modules: $modules
    ) {
      ok
      error
    }
  }
`;

export const UPDATE_COURSE_MUTATION = gql`
  mutation UpdateCourse(
    $id: ID!
    $name: String
    $image: ImageInput
    $courseCategory: CourseCategoryInput
    $courseHistory: String
    $courseIntro: String
    $instructorName: String
    $instructorEmail: String
    $instructorImage: ImageInput
    $modules: [ModuleInput]
  ) {
    updateCourse(
      id: $id
      name: $name
      image: $image
      courseCategory: $courseCategory
      courseHistory: $courseHistory
      courseIntro: $courseIntro
      instructorName: $instructorName
      instructorEmail: $instructorEmail
      instructorImage: $instructorImage
      modules: $modules
    ) {
      ok
      error
    }
  }
`;

export const RATE_COURSE_MUTATION = gql`
  mutation RateCourse($id: ID!, $newRating: Float!) {
    rateCourse(id: $id, newRating: $newRating) {
      ok
      error
    }
  }
`;

export const DELETE_COURSE_MUTATION = gql`
  mutation deleteCourse($id: ID!) {
    deleteCourse(id: $id)
  }
`;
