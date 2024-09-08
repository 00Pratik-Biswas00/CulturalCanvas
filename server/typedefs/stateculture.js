import { gql } from "apollo-server-express";

const stateCultureTypeDefs = gql`
  type Image {
    url: String!
    public_id: String!
  }
  # Input types for mutation
  input ImageInput {
    url: String!
    public_id: String!
  }

  #output types for queries
  type StateCulture {
    _id: ID!
    name: String!
    image: Image
    slug: String!
  }

  # Output types for mutations
  type StateCultureResponse {
    id: ID!
    name: String!
    image: Image
    slug: String!
    createdAt: String
    updatedAt: String
  }

  # Queries and Mutations
  type Query {
    getStateCultures: [StateCulture]
  }

  type Mutation {
    createStateCulture(name: String!, image: ImageInput!): StateCultureResponse

    updateStateCulture(
      id: ID!
      name: String
      image: ImageInput
    ): StateCultureResponse

    deleteStateCulture(id: ID!): String!
  }
`;

export default stateCultureTypeDefs;
