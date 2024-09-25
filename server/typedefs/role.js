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
    getSellers: [User]!
    getUsers: [User]!
  }

  type Mutation {
    deleteUser(id: ID!): Boolean!
  }
`;

export default roleTypeDefs;
