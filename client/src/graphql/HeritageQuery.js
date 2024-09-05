import { gql } from "@apollo/client";

export const GET_ALL_HERITAGES_QUERY = gql`
  query {
    getHeritages {
      _id
      name
      slug
      introduction
      image {
        public_id
        url
      }
      type_of_heritage {
        image {
          public_id
          url
        }
        type
      }
      tag
      part1 {
        heading
        description
      }
      part2 {
        heading
        description
      }
      vlogVideo {
        ETag
        ServerSideEncryption
        Location
        Key
        Bucket
      }
      animatedVideo {
        ETag
        ServerSideEncryption
        Location
        Key
        Bucket
      }
      endlessDigitalArt {
        ETag
        ServerSideEncryption
        Location
        Key
        Bucket
      }

      police_helpline
      women_helpline
      child_helpline
      fire_emergency
      medical_emergency
      entry_fee
    }
  }
`;

export const GET_HERITAGE_QUERY = gql`
  query GetHeritage($slug: String!) {
    getHeritage(slug: $slug) {
      _id
      name
      slug
      introduction
      image {
        public_id
        url
      }
      type_of_heritage {
        image {
          public_id
          url
        }
        type
      }
      tag
      part1 {
        heading
        description
      }
      part2 {
        heading
        description
      }
      vlogVideo {
        ETag
        ServerSideEncryption
        Location
        Key
        Bucket
      }
      animatedVideo {
        ETag
        ServerSideEncryption
        Location
        Key
        Bucket
      }
      endlessDigitalArt {
        ETag
        ServerSideEncryption
        Location
        Key
        Bucket
      }
      police_helpline
      women_helpline
      child_helpline
      fire_emergency
      medical_emergency
      entry_fee
    }
  }
`;
