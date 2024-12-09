import { gql } from "@apollo/client";

export const CREATE_HERITAGE_MUTATION = gql`
  mutation CreateHeritage(
    $name: String
    $image: ImageInput
    $introduction: String
    $part1: [DescriptionInput]
    $animatedVideo: VideoInput
    $endlessDigitalArt: VideoInput
    $vlogVideo: VideoInput
    $type_of_heritage: HeritageType
    $tag: HeritageTag
    $state_culture_name: String
  ) {
    createHeritage(
      name: $name
      image: $image
      introduction: $introduction
      tag: $tag
      state_culture_name: $state_culture_name
      endlessDigitalArt: $endlessDigitalArt
      vlogVideo: $vlogVideo
      animatedVideo: $animatedVideo
      type_of_heritage: $type_of_heritage
      part1: $part1
    ) {
      id
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

export const UPDATE_HERITAGE_MUTATION = gql`
  mutation updateHeritage(
    $id: ID!
    $name: String
    $introduction: String
    $part1: [DescriptionInput]
    $type_of_heritage: HeritageType
    $tag: HeritageTag
    $state_culture_name: String
    $nearest_attractions: [NearestAttractionInput]
    $police_helpline: String
    $women_helpline: String
    $child_helpline: String
    $fire_emergency: String
    $medical_emergency: String
    $entry_fee: Float
  ) {
    updateHeritage(
      id: $id
      name: $name
      introduction: $introduction
      part1: $part1
      type_of_heritage: $type_of_heritage
      tag: $tag
      state_culture_name: $state_culture_name
      nearest_attractions: $nearest_attractions
      police_helpline: $police_helpline
      women_helpline: $women_helpline
      child_helpline: $child_helpline
      fire_emergency: $fire_emergency
      medical_emergency: $medical_emergency
      entry_fee: $entry_fee
    )
  }
`;

export const DELETE_HERITAGE = gql`
  mutation DeleteHeritage($id: ID!) {
    deleteHeritage(id: $id)
  }
`;
