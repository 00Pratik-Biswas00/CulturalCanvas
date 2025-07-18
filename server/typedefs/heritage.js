import { gql } from "apollo-server-express";

const heritageTypeDefs = gql`
  enum HeritageType {
    unesco_listed
    unesco_unlisted
    local_heritage
  }

  enum HeritageTag {
    cultural
    natural
    tangible
    intangible
  }

  type Image {
    url: String
    public_id: String
  }

  type Video {
    ETag: String
    ServerSideEncryption: String
    Location: String
    Key: String
    Bucket: String
  }

  type Description {
    heading: String
    description: String
  }

  type NearestAttraction {
    _id: ID!
    distance: Float
    entry_fee: Float
  }

  type Heritage {
    _id: ID!
    name: String
    slug: String
    image: Image
    introduction: String
    endlessDigitalArt: Video
    animatedVideo: Video
    vlogVideo: Video
    part1: [Description]
    type_of_heritage: HeritageType
    tag: HeritageTag
    state_culture_name: String
    nearest_attractions: [NearestAttraction]
    coordinates: Coordinates
    createdAt: String
    updatedAt: String
  }

  input ImageInput {
    url: String
    public_id: String
  }

  input VideoInput {
    ETag: String
    ServerSideEncryption: String
    Location: String
    Key: String
    Bucket: String
  }

  input DescriptionInput {
    heading: String
    description: String
  }

  input NearestAttractionInput {
    heritage: ID
    distance: Float
    entry_fee: Float
  }

  type HeritageResponse {
    id: ID!
    name: String
    slug: String
    image: Image
    introduction: String
    endlessDigitalArt: Video
    animatedVideo: Video
    vlogVideo: Video
    part1: [Description]
    type_of_heritage: HeritageType
    tag: HeritageTag
    state_culture_name: String
    nearest_attractions: [NearestAttraction]
    createdAt: String
    updatedAt: String
  }

  type Query {
    getHeritage(slug: String!): Heritage
    getHeritages: [Heritage]
  }

  type Mutation {
    createHeritage(
      name: String
      image: ImageInput
      introduction: String
      endlessDigitalArt: VideoInput
      animatedVideo: VideoInput
      vlogVideo: VideoInput
      part1: [DescriptionInput]
      type_of_heritage: HeritageType
      tag: HeritageTag
      state_culture_name: String
      nearest_attractions: [NearestAttractionInput]
    ): HeritageResponse

    updateHeritage(
      id: ID!
      name: String
      introduction: String
      part1: [DescriptionInput]
      type_of_heritage: HeritageType
      tag: HeritageTag
      endlessDigitalArt: VideoInput
      animatedVideo: VideoInput
      vlogVideo: VideoInput
      state_culture_name: String
      nearest_attractions: [NearestAttractionInput]
      police_helpline: String
      women_helpline: String
      child_helpline: String
      fire_emergency: String
      medical_emergency: String
      entry_fee: Float
    ): Boolean!

    deleteHeritage(id: ID!): Boolean!
  }

  input LocationInput {
    latitude: Float!
    longitude: Float!
  }

  type HeritageWithDistance {
    _id: ID!
    slug: String
    name: String
    image: Image
    state_culture_name: String
    distance: Float
    introduction: String
  }

  type Coordinates {
    longitude: Float
    latitude: Float
  }

  extend type Query {
    getHeritagesWithDistance(
      currentLocation: LocationInput!
      state: String
    ): [HeritageWithDistance]
  }
`;

export default heritageTypeDefs;
