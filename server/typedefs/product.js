import { gql } from "apollo-server-express";

const productTypeDefs = gql`
  type Product {
    _id: ID!
    name: String!
    description: String!
    uniqueFeature: String!
    image: Image
    video: Video
    quantity: Int!
    category: String!
    price: Float!
    seller: Seller!
    materialDetails: [MaterialDetail]
    reviews: [Review]
    certification: Image
    createdAt: String!
  }

  type Review {
    reviewer: User!
    review: String!
    rating: Int!
    createdAt: String!
  }

  type MaterialDetail {
    name: String!
    description: String!
  }

  type Query {
    getProducts: [Product!]!
    getProduct(id: ID!): Product
  }

  input ProductInput {
    name: String!
    description: String!
    uniqueFeature: String!
    image: Image
    video: Video
    quantity: Int!
    category: String!
    price: Float!
    seller: ID!
    materialDetails: [MaterialDetailInput]
    certification: Image
  }

  input UpdateProductInput {
    id: ID!
    name: String
    description: String
    uniqueFeature: String
    quantity: Int
    price: Float
  }

  type Mutation {
    createProduct(input: ProductInput): Boolean!
    updateProduct(input: UpdateProductInput): Boolean!
    deleteProduct(id: ID!): Boolean!
    addReview(id: ID!, review: String!, rating: Int!): Boolean!
  }
`;

export default productTypeDefs;
