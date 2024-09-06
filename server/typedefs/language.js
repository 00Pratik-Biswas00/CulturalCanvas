import { gql } from "apollo-server-express";

const languageTypeDefs = gql`
  type Image {
    url: String!
    public_id: String!
  }

  type Content {
    title: String!
    description: String!
  }

  #output types for queries
  type Language {
    _id: ID!
    name: String!
    image: Image
    slug: String!
    description: String!
    content: [Content]
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

  type LanguageResponse {
    id: ID!
    name: String!
    image: Image
    slug: String!
    description: String!
    content: [Content]
    createdAt: String
    updatedAt: String
  }

  # Queries and Mutations
  type Query {
    getLanguage(slug: String!): Language
    getLanguages: [Language]
  }

  type Mutation {
    createLanguage(
      name: String!
      image: ImageInput!
      description: String!
      content: [ContentInput]!
    ): LanguageResponse

    updateLanguage(
      id: ID!
      name: String
      image: ImageInput
      description: String
      content: [ContentInput]
    ): LanguageResponse

    deleteLanguage(id: ID!): String!
  }
`;
export default languageTypeDefs;
