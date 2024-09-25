import { gql } from "@apollo/client";

export const GET_ADMINS = gql`
  query GetAdmins {
    getAdmins {
      id
      name
      email
      gender
      phone
      photo {
        url
      }
    }
  }
`;

export const GET_SELLERS = gql`
  query GetSellers {
    getSellers {
      id
      name
      email
      gender
      phone
      photo {
        url
      }
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      name
      email
      gender
      phone
      photo {
        url
      }
    }
  }
`;
