import { gql } from "apollo-server-express";

const roleTypeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    gender: String!
    phone: String
    photo: Photo
  }

  type Query {
    getAdmins: [User]!

    getUsers: [User]!
  }

  type Mutation {
    deleteUser(id: ID!): Boolean!
    addAdmin(
      name: String!
      email: String!
      gender: String!
      phone: String
      newEmail: String!
    ): Boolean!
  }
`;

export default roleTypeDefs;
