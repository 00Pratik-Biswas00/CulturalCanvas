import { gql } from "apollo-server-express";

const heritageTypeDefs = gql`
  type Query {
    getHeritage(id: ID!): Heritage
    getHeritages: [Heritage]
  }

  type Mutation {
    createHeritage(input: HeritageInput!): Heritage!
    updateHeritage(id: ID!, input: HeritageInput!): Heritage!
    deleteHeritage(id: ID!): AuthResponse!
  }

  type Heritage {
    _id: ID!
    name: String!
    image: Photo
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
    state_culture_name: State
    state_culture_link: [ID]
    entry_fee: Float
    nearest_attraction: [ID]
    createdAt: String
    updatedAt: String
  }

  type Description {
    heading: String!
    description: String!
  }

  type HeritageType {
    type: String!
    image: Photo!
  }

  type State {
    name: String!
    image: Photo!
  }

  type Video {
    ETag: String
    ServerSideEncryption: String
    Location: String
    Key: String
    key: String
    Bucket: String
  }

  input HeritageInput {
    name: String!
    image: PhotoOutput
    introduction: String!
    endlessDigitalArt: VideoInput
    animatedVideo: VideoInput
    vlogVideo: VideoInput
    part1: [DescriptionInput]
    part2: [DescriptionInput]
    type_of_heritage: HeritageTypeInput
    tag: String
    police_helpline: String!
    women_helpline: String!
    child_helpline: String!
    fire_emergency: String!
    medical_emergency: String!
    state_culture_name: StateInput
    state_culture_link: [ID]
    entry_fee: Float
    nearest_attraction: [ID]
  }

  input DescriptionInput {
    heading: String!
    description: String!
  }

  input HeritageTypeInput {
    type: String!
    image: PhotoOutput!
  }

  input StateInput {
    name: String!
    image: PhotoOutput!
  }

  input PhotoOutput {
    url: String
    public_id: String
  }
  input VideoInput {
    ETag: String
    ServerSideEncryption: String
    Location: String
    Key: String
    key: String
    Bucket: String
  }
`;

export default heritageTypeDefs;
