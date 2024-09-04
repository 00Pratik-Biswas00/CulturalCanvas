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

  type Description {
    heading: String!
    description: String!
  }

  type State {
    name: String!
    image: Image!
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
    part2: [Description]
    type_of_heritage: HeritageType
    tag: String
    police_helpline: String!
    women_helpline: String!
    child_helpline: String!
    fire_emergency: String!
    medical_emergency: String!
    state_culture_link: ID!
    entry_fee: Float
    nearest_attraction: [ID]
    createdAt: String
    updatedAt: String
  }

  # Input types for mutation
  input ImageInput {
    url: String!
    public_id: String!
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
    part2: [Description]
    type_of_heritage: HeritageType
    tag: String
    police_helpline: String!
    women_helpline: String!
    child_helpline: String!
    fire_emergency: String!
    medical_emergency: String!
    state_culture_name: State!
    state_culture_link: [ID]
    entry_fee: Float
    nearest_attraction: [ID]
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
      part2: [DescriptionInput]
      type_of_heritage: HeritageTypeInput!
      tag: String!
      police_helpline: String!
      women_helpline: String!
      child_helpline: String!
      fire_emergency: String!
      medical_emergency: String!
      state_culture_name: StateInput!
      entry_fee: Float!
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
      part2: [DescriptionInput]
      type_of_heritage: HeritageTypeInput
      tag: String
      police_helpline: String
      women_helpline: String
      child_helpline: String
      fire_emergency: String
      medical_emergency: String
      state_culture_name: StateInput
      entry_fee: Float
    ): HeritageResponse

    addState(id: ID!, state_culture_name: StateInput!): State

    removeState(stateId: ID!, heritageId: ID!): HeritageResponse

    deleteHeritage(id: ID!): String!
  }
`;

export default heritageTypeDefs;
