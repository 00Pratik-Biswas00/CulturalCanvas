import { gql } from "apollo-server-express";

const courseTypeDefs = gql`
  # Regular object types for queries
  type Image {
    url: String!
    public_id: String!
  }

  type Video {
    ETag: String
    ServerSideEncryption: String
    Location: String
    Key: String
    Bucket: String
  }

  type Module {
    name: String!
    description: String!
    image: Image!
    video: Video!
  }

  type Course {
    id: ID!
    name: String!
    slug: String!
    image: Image!
    courseCategory: String!
    courseHistory: String!
    courseIntro: String!
    modules: [Module]
    instructor: User!
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    photo: Photo
    gender: String!
    role: String!
    phone: String!
    rewards: [ID]
    vlogs: [ID]
    blogs: [ID]
  }

  # Input types for mutations
  input ImageInput {
    url: String!
    public_id: String!
  }

  input CourseVideoInput {
    ETag: String
    ServerSideEncryption: String
    Location: String
    Key: String
    Bucket: String
  }

  input ModuleInput {
    name: String!
    description: String!
    image: ImageInput!
    video: CourseVideoInput!
  }

  # Output types for mutations
  type CourseMutationResponse {
    id: ID!
    name: String!
    slug: String!
    image: Image!
    courseCategory: String!
    courseHistory: String!
    courseIntro: String!
    modules: [Module]
    instructor: ID!
  }

  # Queries and Mutations
  type Query {
    getCourses: [Course]
    getCourse(id: ID!): Course
  }

  type Mutation {
    createCourse(
      name: String!
      image: ImageInput!
      courseCategory: String!
      courseHistory: String!
      courseIntro: String!
      modules: [ModuleInput]
      instructor: ID!
    ): CourseMutationResponse

    updateCourse(
      id: ID!
      image: ImageInput
      name: String
      courseCategory: String
      courseHistory: String
      courseIntro: String
    ): CourseMutationResponse

    addCourseModule(id: ID!, module: ModuleInput!): Module

    removeCourseModule(courseId: ID!, moduleId: ID!): Module

    deleteCourse(id: ID!): String!
  }
`;

export default courseTypeDefs;
