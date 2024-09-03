import { gql } from "apollo-server-express";

const authTypeDefs = gql`
  type Query {
    currentUser: User!
  }

  type Mutation {
    register(
      name: String!
      email: String!
      password: String!
      gender: String!
      phone: String!
    ): AuthResponse!
    login(email: String!, password: String!): LoginResponse!
    forgotPassword(email: String!): AuthResponse!
    resetPassword(otp: String!, password: String!): AuthResponse!
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

  type Photo {
    url: String
    public_id: String
  }

  type AuthResponse {
    ok: Boolean
    error: String
  }

  type LoginResponse {
    token: String
    user: User
    error: String
  }
`;

export default authTypeDefs;
