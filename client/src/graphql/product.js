import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      _id
      name
      description
      uniqueFeature
      image {
        url
        public_id
      }
      video {
        ETag
        ServerSideEncryption
        Location
        Key
        Bucket
      }
      quantity
      category
      price
      seller {
        name
        image {
          url
        }
      }
      materialDetails {
        name
        description
      }
      certification {
        url
        public_id
      }
      createdAt
    }
  }
`;
