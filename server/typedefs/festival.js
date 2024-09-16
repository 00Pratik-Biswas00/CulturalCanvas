import { gql } from "apollo-server-express";

export const festivalTypeDefs = gql`
  type Festival {
    id: ID!
    name: String!
    slug: String!
    date: String!
    image: Image!
    location: Location
    detail: [Detail]
  }

  type Image {
    url: String!
    public_id: String!
  }

  type Location {
    city: String
    state: String
    lat: Float
    lng: Float
  }

  type Detail {
    heading: String
    description: String
  }

  type SuccessResponse {
    ok: Boolean
    error: String
  }

  type Query {
    getFestivals: [Festival]
    getFestivalBySlug(slug: String!): Festival
    getFestivalsByDate(date: String!): [Festival]
  }

  type Mutation {
    createFestival(
      name: String!
      date: String!
      image: ImageInput
      city: String
      state: String
      lat: Float
      lng: Float
      detail: [DetailInput]
    ): Festival

    updateFestival(
      id: ID!
      name: String
      date: String
      image: ImageInput
      city: String
      state: String
      lat: Float
      lng: Float
      detail: [DetailInput]
    ): Festival
    
    deleteFestival(id: ID!): SuccessResponse
  }

  input ImageInput {
    url: String!
    public_id: String!
  }

  input DetailInput {
    heading: String
    description: String
  }
`;
