import { gql } from "@apollo/client";

export const CREATE_FESTIVAL_MUTATION = gql`
  mutation CreateFestival(
    $name: String!
    $date: String!
    $image: ImageInput!
    $city: String
    $state: String
    $lat: Float
    $lng: Float
    $detail: [DetailInput]
  ) {
    createFestival(
      name: $name
      date: $date
      image: $image
      city: $city
      state: $state
      lat: $lat
      lng: $lng
      detail: $detail
    ) {
      id
      name
      date
      image {
        url
        public_id
      }
      location {
        city
        state
        lat
        lng
      }
      detail {
        heading
        description
      }
    }
  }
`;

export const UPDATE_FESTIVAL_MUTATION = gql`
  mutation UpdateFestival(
    $id: ID!
    $name: String
    $date: String
    $image: ImageInput
    $city: String
    $state: String
    $lat: Float
    $lng: Float
    $detail: [DetailInput]
  ) {
    updateFestival(
      id: $id
      name: $name
      date: $date
      image: $image
      city: $city
      state: $state
      lat: $lat
      lng: $lng
      detail: $detail
    ) {
      id
      name
      slug
      date
      image {
        url
        public_id
      }
      location {
        city
        state
        lat
        lng
      }
      detail {
        heading
        description
      }
    }
  }
`;

export const DELETE_FESTIVAL_MUTATION = gql`
`;
