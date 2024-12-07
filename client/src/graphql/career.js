import { gql } from "@apollo/client";

export const GET_ADMINS = gql`
  query GetAdmins {
    admins {
      id
      fullName
      email
      phone
    }
  }
`;

export const GET_ADMIN = gql`
  query GetAdmin($id: ID!) {
    admin(id: $id) {
      id
      fullName
      email
      phone
      gender
      dob
      address
      education
      workExperience
      skills
      languages
      portfolio {
        url
      }
    }
  }
`;

export const GET_TEACHERS = gql`
  query GetTeachers {
    teachers {
      id
      fullName
      email
      phone
    }
  }
`;

export const GET_TEACHER = gql`
  query GetTeacher($id: ID!) {
    teacher(id: $id) {
      id
      fullName
      email
      phone
      dob
      address
      education
      workExperience
      skills
      domainOfTeaching
      portfolio {
        url
      }
    }
  }
`;

export const CREATE_ADMIN = gql`
  mutation CreateAdmin($input: AdminInput!) {
    createAdmin(input: $input)
  }
`;

export const CREATE_TEACHER = gql`
  mutation CreateTeacher($input: TeacherInput!) {
    createTeacher(input: $input)
  }
`;
