import { gql } from "@apollo/client";

export const GET_ALL_HERITAGES_QUERY = gql`
  query GetHeritages {
    getHeritages {
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
      helpline_numbers {
        women_helpline
        child_helpline
        fire_brigade
        police_helpline
        ambulance_helpline
        hospital_helpline
      }
      state_culture_name {
        image {
          public_id
          url
        }
        name
      }
      entry_fee
      distance
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
      helpline_numbers {
        women_helpline
        child_helpline
        fire_brigade
        police_helpline
        ambulance_helpline
        hospital_helpline
      }
      state_culture_name {
        image {
          public_id
          url
        }
        name
      }
      entry_fee
      distance
    }
  }
`;
