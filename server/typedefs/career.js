import { gql } from "apollo-server-express";

const careertypeDefs = gql`
  type Admin {
    id: ID!
    fullName: String!
    email: String!
    phone: String!
    gender: String!
    dob: String!
    address: String!
    education: String!
    workExperience: String!
    skills: [String!]!
    languages: String!
    portfolio: Image
  }

  type Teacher {
    id: ID!
    fullName: String!
    email: String!
    phone: String!
    dob: String!
    address: String!
    education: String!
    workExperience: String!
    skills: [String!]!
    domainOfTeaching: String!
    portfolio: Image
  }

  type Query {
    admins: [Admin!]!
    teachers: [Teacher!]!
    admin(id: ID!): Admin
    teacher(id: ID!): Teacher
  }

  input AdminInput {
    fullName: String!
    email: String!
    phone: String!
    gender: String!
    dob: String!
    address: String!
    education: String!
    workExperience: String!
    skills: [String!]!
    languages: String!
    portfolio: ImageInput
  }

  input TeacherInput {
    fullName: String!
    email: String!
    phone: String!
    dob: String!
    address: String!
    education: String!
    workExperience: String!
    skills: [String!]!
    domainOfTeaching: String!
    portfolio: ImageInput
  }

  type Mutation {
    createAdmin(input: AdminInput!): Boolean!
    createTeacher(input: TeacherInput!): Boolean!
  }
`;

export default careertypeDefs;

