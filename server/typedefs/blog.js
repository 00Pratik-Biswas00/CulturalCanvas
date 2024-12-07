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
    likes: [ID]
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
    getTHCrossedBlogs: [Blog!]!
  }

  type Mutation {
    createBlog(input: BlogInput!): Boolean!
    verifyBlog(id: ID!): Boolean!
    deleteBlog(id: ID!): Boolean!
  }

  type Comment {
    author: User
    content: String
    createdAt: String
  }

  extend type Blog {
    comments: [Comment]
  }

  input CommentInput {
    blogId: ID!
    content: String!
  }

  extend type Mutation {
    postComment(input: CommentInput!): Comment
  }

  extend type Mutation {
    likeBlog(id: ID!): Int
  }
`;

export default blogTypeDefs;
