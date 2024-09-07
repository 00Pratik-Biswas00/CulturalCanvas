import { gql } from "@apollo/client";

export const CREATE_HERITAGE_MUTATION = gql`
  mutation CreateHeritage(
    $name: String!
    $image: ImageInput!
    $introduction: String!
    $part1: [DescriptionInput]
    $animatedVideo: VideoInput
    $endlessDigitalArt: VideoInput
    $vlogVideo: VideoInput
    $type_of_heritage: HeritageTypeInput!
    $tag: String!
    $police_helpline: String!
    $state_culture_name: StateInput!
    $women_helpline: String!
    $child_helpline: String!
    $fire_emergency: String!
    $medical_emergency: String!
    $entry_fee: Float!
  ) {
    createHeritage(
      name: $name
      image: $image
      introduction: $introduction
      police_helpline: $police_helpline
      women_helpline: $women_helpline
      child_helpline: $child_helpline
      fire_emergency: $fire_emergency
      tag: $tag
      state_culture_name: $state_culture_name
      medical_emergency: $medical_emergency
      endlessDigitalArt: $endlessDigitalArt
      vlogVideo: $vlogVideo
      animatedVideo: $animatedVideo
      type_of_heritage: $type_of_heritage
      part1: $part1
      part2: $part2
      entry_fee: $entry_fee
    ) {
      id
      name
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
      type_of_heritage {
        image {
          public_id
          url
        }
        type
      }
      tag
      police_helpline
      women_helpline
      fire_emergency
      medical_emergency
      child_helpline
      state_culture_name {
        image {
          public_id
          url
        }
        name
      }
      entry_fee
      nearest_attraction
      state_culture_link
    }
  }
`;

export const UPDATE_HERITAGE_MUTATION = gql`
  mutation updateHeritage(
    $id: ID!
    $name: String!
    $image: ImageInput!
    $introduction: String!
    $part1: [DescriptionInput]
    $animatedVideo: VideoInput
    $endlessDigitalArt: VideoInput
    $vlogVideo: VideoInput
    $type_of_heritage: HeritageTypeInput!
    $tag: String!
    $police_helpline: String!
    $state_culture_name: StateInput!
    $women_helpline: String!
    $child_helpline: String!
    $fire_emergency: String!
    $medical_emergency: String!
    $entry_fee: Float!
  ) {
    updateHeritage(
      id: $id
      name: $name
      image: $image
      introduction: $introduction
      police_helpline: $police_helpline
      women_helpline: $women_helpline
      child_helpline: $child_helpline
      fire_emergency: $fire_emergency
      tag: $tag
      state_culture_name: $state_culture_name
      medical_emergency: $medical_emergency
      endlessDigitalArt: $endlessDigitalArt
      vlogVideo: $vlogVideo
      animatedVideo: $animatedVideo
      type_of_heritage: $type_of_heritage
      part1: $part1
      entry_fee: $entry_fee
    ) {
      id
      name
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
      type_of_heritage {
        image {
          public_id
          url
        }
        type
      }
      tag
      police_helpline
      women_helpline
      fire_emergency
      medical_emergency
      child_helpline
      state_culture_name {
        image {
          public_id
          url
        }
        name
      }
      entry_fee
      nearest_attraction
      state_culture_link
    }
  }
`;

export const DELETE_HERITAGE_MUTATION = gql`
  mutation deleteHeritage($id: ID!) {
    deleteHeritage(id: $id)
  }
`;
