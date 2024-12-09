import { gql } from "@apollo/client";

export const GET_ALL_HERITAGES_QUERY = gql`
  query GetHeritages {
    getHeritages {
      _id
      name
      slug
      introduction
      part1 {
        heading
        description
      }
      image {
        url
        public_id
      }
      type_of_heritage
      tag
      state_culture_name
    }
  }
`;

export const GET_HERITAGE_QUERY = gql`
  query GetHeritage($slug: String!) {
    getHeritage(slug: $slug) {
      _id
      name
      slug
      image {
        public_id
        url
      }
      introduction
      endlessDigitalArt {
        ETag
        Bucket
        ServerSideEncryption
        Location
        Key
      }
      vlogVideo {
        ETag
        Bucket
        ServerSideEncryption
        Location
        Key
      }
      animatedVideo {
        ETag
        Bucket
        ServerSideEncryption
        Location
        Key
      }
      part1 {
        heading
        description
      }
      type_of_heritage
      tag
      state_culture_name
    }
  }
`;
