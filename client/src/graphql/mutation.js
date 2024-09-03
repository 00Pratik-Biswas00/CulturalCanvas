import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
  mutation Register(
    $name: String!
    $email: String!
    $password: String!
    $gender: String!
    $phone: String!
  ) {
    register(
      name: $name
      email: $email
      password: $password
      gender: $gender
      phone: $phone
    ) {
      ok
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      error
      token
      user {
        _id
        name
        email
        gender
        phone
        role
        photo {
          url
        }
      }
    }
  }
`;

export const FORGOT_PASSWORD_MUTATION = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email) {
      ok
      error
    }
  }
`;

export const RESET_PASSWORD_MUTATION = gql`
  mutation ResetPassword($otp: String!, $password: String!) {
    resetPassword(otp: $otp, password: $password) {
      ok
      error
    }
  }
`;
