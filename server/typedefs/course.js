import { gql } from "apollo-server-express";

const courseTypeDefs = gql`
  # Regular object types for queries
  type Image {
    url: String!
    public_id: String!
  }

  type Module {
    name: String!
    description: String!
    image: Image!
    video: String!
  }

  type CourseCategory {
    language: String!
    cuisine: String!
    arts: String!
    sports: String!
  }

  type Course {
    id: ID!
    name: String!
    slug: String!
    image: Image!
    courseCategory: CourseCategory!
    courseHistory: String!
    courseIntro: String!
    instructorName: String!
    instructorEmail: String!
    instructorImage: Image!
    modules: [Module]
    averageRatings: Float!
    totalRatings: Int!
  }

  # Input types for mutations
  input ImageInput {
    url: String!
    public_id: String!
  }

  input ModuleInput {
    name: String!
    description: String!
    image: ImageInput!
    video: String!
  }

  input CourseCategoryInput {
    language: String!
    cuisine: String!
    arts: String!
    sports: String!
  }

  # Output types for mutations
  type CourseMutationResponse {
    ok: Boolean
    error: String
  }

  # Queries and Mutations
  type Query {
    getCourses: [Course]
    getCourse(slug: String!): Course
  }

  type Mutation {
    createCourse(
      name: String!
      image: ImageInput!
      courseCategory: CourseCategoryInput!
      courseHistory: String!
      courseIntro: String!
      instructorName: String!
      instructorEmail: String!
      instructorImage: ImageInput!
      modules: [ModuleInput]
    ): CourseMutationResponse!

    updateCourse(
      id: ID!
      image: ImageInput
      name: String
      courseCategory: CourseCategoryInput
      courseHistory: String
      courseIntro: String
      instructorName: String
      instructorEmail: String
      instructorImage: ImageInput
      modules: [ModuleInput]
    ): CourseMutationResponse!

    rateCourse(
      newRating: Float!
    ): CourseMutationResponse!

    #addCourseModule(id: ID!, module: ModuleInput!): Module

    #removeCourseModule(courseId: ID!, moduleId: ID!): Module

    deleteCourse(id: ID!): CourseMutationResponse!
  }
`;

export default courseTypeDefs;
