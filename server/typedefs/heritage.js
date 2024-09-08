import { gql } from "apollo-server-express";

const heritageTypeDefs = gql`
  type Image {
    url: String!
    public_id: String!
  }

  type Video {
    ETag: String
    ServerSideEncryption: String
    Location: String
    Key: String
    Bucket: String
  }

  type HeritageType {
    type: String!
    image: Image!
  }

  type helpLine {
    police_helpline: String!
    women_helpline: String!
    child_helpline: String!
    ambulance_helpline: String!
    hospital_helpline: String!
    fire_brigade: String!
  }

  type Description {
    heading: String!
    description: String!
  }

  type State {
    name: String!
    image: Image!
  }

  # New type for nearest attractions
  type NearestAttraction {
    _id: ID!
    name: String!
    image: Image
    distance: String!
    entry_fee: Float!
    slug: String! # Slug for linking to the single heritage page
  }

  # Output types for queries
  type Heritage {
    _id: ID!
    name: String!
    slug: String!
    image: Image
    introduction: String!
    endlessDigitalArt: Video
    animatedVideo: Video
    vlogVideo: Video
    part1: [Description]
    type_of_heritage: HeritageType
    tag: String
    helpline_numbers: [helpLine]
    state_culture_link: ID!
    state_culture_name: State!
    entry_fee: Float
    #nearest_attractions: [NearestAttraction] # Changed to return full details
    distance: String!
    createdAt: String
    updatedAt: String
  }

  # Input types for mutation
  input ImageInput {
    url: String!
    public_id: String!
  }

  input helpLineInput {
    police_helpline: String!
    women_helpline: String!
    child_helpline: String!
    ambulance_helpline: String!
    hospital_helpline: String!
    fire_brigade: String!
  }

  input VideoInput {
    ETag: String
    ServerSideEncryption: String
    Location: String
    Key: String
    Bucket: String
  }

  input DescriptionInput {
    heading: String!
    description: String!
  }

  input HeritageTypeInput {
    type: String!
    image: ImageInput!
  }

  input StateInput {
    name: String!
    image: ImageInput!
  }

  # Output types for mutations
  type HeritageResponse {
    id: ID!
    name: String!
    slug: String!
    image: Image
    introduction: String!
    endlessDigitalArt: Video
    animatedVideo: Video
    vlogVideo: Video
    part1: [Description]
    type_of_heritage: HeritageType
    tag: String
    helpline_numbers: [helpLine]
    state_culture_name: State!
    state_culture_link: [ID]
    entry_fee: Float
    nearest_attractions: [NearestAttraction] # Return full nearest attraction details
    distance: String!
    createdAt: String
    updatedAt: String
  }

  # Queries and Mutations
  type Query {
    getHeritage(slug: String!): Heritage
    getHeritages: [Heritage]
  }

  type Mutation {
    createHeritage(
      name: String!
      image: ImageInput!
      introduction: String!
      endlessDigitalArt: VideoInput
      animatedVideo: VideoInput
      vlogVideo: VideoInput
      part1: [DescriptionInput]
      type_of_heritage: HeritageTypeInput!
      tag: String!
      helpline_numbers: [helpLineInput]
      state_culture_name: StateInput!
      entry_fee: Float!
      distance: String!
      nearest_attractions: [ID] # Input is still an array of IDs
    ): HeritageResponse

    updateHeritage(
      id: ID!
      name: String
      image: ImageInput
      introduction: String
      endlessDigitalArt: VideoInput
      animatedVideo: VideoInput
      vlogVideo: VideoInput
      part1: [DescriptionInput]
      type_of_heritage: HeritageTypeInput
      tag: String
      helpline_numbers: [helpLineInput]
      state_culture_name: StateInput
      entry_fee: Float
      distance: String
      nearest_attractions: [ID] # Still an array of IDs for input
    ): HeritageResponse

    deleteHeritage(id: ID!): String!
  }
`;

export default heritageTypeDefs;
