import { gql } from "apollo-server-express";

const sellerTypeDefs = gql`
  type Seller {
    name: String!
    phone: Number!
    gender: String!
    verified: Boolean!
    image: ImageInput
    address: String!
    shopAddress: String!
    biography: String!
    background: VideoInput
    itCertificate: ImageInput
    idProof: ImageInput
    category: String!
  }

  type SellerInput {
    name: String!
    phone: Number!
    gender: String!
    verified: Boolean!
    image: ImageInput
    address: String!
    shopAddress: String!
    biography: String!
    background: VideoInput
    itCertificate: ImageInput
    idProof: ImageInput
    category: String!
  }
  type Mutation {
    addSeller(input: SellerInput): Boolean!

    verifySeller(id: ID!): Boolean!

    deleteSeller(id: ID!): Boolean!
  }

  type Query {
    getSellers: [Seller!]!
    getSeller(id: ID!): Seller!
  }
`;

export default sellerTypeDefs;
