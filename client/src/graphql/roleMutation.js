import { gql } from "@apollo/client";

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;

export const ADD_ADMIN = gql`
  mutation AddAdmin(
    $name: String!
    $email: String!
    $gender: String!
    $phone: String
    $newEmail: String!
  ) {
    addAdmin(
      name: $name
      email: $email
      gender: $gender
      phone: $phone
      newEmail: $newEmail
    )
  }
`;
