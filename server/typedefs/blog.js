import { gql } from "apollo-server-express";

const blogTypeDefs = gql`
  type Video {
    ETag: String
    ServerSideEncryption: String
    Location: String
    Key: String
    Bucket: String
  }

  type Image {
    url: String
    public_id: String
  }

  type Blog {
    id: ID!
    title: String!
    content: String!
    author: User!
    verified: Boolean!
    image: Image
    video: Video
    state: String!
    city: String!
    originLocation: String!
    contentType: String!
    tags: [String]
    createdAt: String!
    updatedAt: String!
  }

  input VideoInput {
    ETag: String
    ServerSideEncryption: String
    Location: String
    Key: String
    Bucket: String
  }

  input ImageInput {
    url: String
    public_id: String
  }

  input BlogInput {
    title: String!
    content: String!
    image: ImageInput
    video: VideoInput
    state: String!
    city: String!
    originLocation: String!
    contentType: String!
  }

  type Query {
    getBlogs: [Blog!]!
    getBlog(id: ID!): Blog
    getUnverifiedBlogs: [Blog!]!
  }

  type Mutation {
    createBlog(input: BlogInput!): Boolean!
    verifyBlog(id: ID!): Boolean!
    deleteBlog(id: ID!): Boolean!
  }
`;

export default blogTypeDefs;
