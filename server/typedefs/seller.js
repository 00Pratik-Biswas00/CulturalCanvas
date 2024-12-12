import { gql } from "apollo-server-express";

const sellerTypeDefs = gql`
  type Seller {
    name: String!
    phone: String!
    gender: String!
    verified: Boolean!
    image: Image
    address: String!
    shopAddress: String!
    biography: String!
    itCertificate: Image
    idProof: Image
    category: String!
  }

  input SellerInput {
    name: String!
    phone: String!
    gender: String!
    verified: Boolean!
    image: ImageInput
    address: String!
    shopAddress: String!
    biography: String!
    itCertificate: ImageInput
    idProof: ImageInput
    category: String!
  }
  type Mutation {
    addSeller(input: SellerInput): Seller!

    verifySeller(id: ID!): Boolean!

    deleteSeller(id: ID!): Boolean!
  }

  type Query {
    getSellers: [Seller!]!
    getSeller(id: ID!): Seller!
    getUnverifiedSellers: [Seller!]
  }
`;

export default sellerTypeDefs;
