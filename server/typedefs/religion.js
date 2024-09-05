import { gql } from "apollo-server-express";

const religionTypeDefs = gql`
  type Image {
    url: String!
    public_id: String!
  }

  type Content {
    title: String!
    description: String!
  }

  #output types for queries
  type Religion {
    _id: ID!
    name: String!
    image: Image
    slug: String!
    introduction: String!
    description: String!
    overview: String!
    history: String!
    regions: String!
    practices: String!
    core_beliefs: [Content]
  }

  # Input types for mutation
  input ImageInput {
    url: String!
    public_id: String!
  }

  input ContentInput {
    title: String!
    description: String!
  }

  # Output types for mutations
  type ReligionResponse {
    id: ID!
    name: String!
    image: Image
    slug: String!
    introduction: String!
    description: String!
    overview: String!
    history: String!
    regions: String!
    practices: String!
    core_beliefs: [Content]
    createdAt: String
    updatedAt: String
  }

  # Queries and Mutations
  type Query {
    getReligion(slug: String!): Religion
    getReligion: [Religion]
  }

  type Mutation {
    createReligion(
      name: String!
      image: ImageInput!
      introduction: String!
      description: String!
      overview: String!
      history: String!
      regions: String!
      practices: String!
      core_beliefs: [ContentInput]
    ): ReligionResponse

    updateReligion(
      id: ID!
      name: String
      image: ImageInput
      description: String!
      overview: String!
      history: String!
      regions: String!
      practices: String!
      core_beliefs: [ContentInput]
    ): ReligionResponse

    deleteReligion(id: ID!): String!
  }
`;

export default heritageTypeDefs;
