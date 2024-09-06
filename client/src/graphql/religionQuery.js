import { gql } from "@apollo/client";
export const GET__ALL_RELIGIONS_QUERY = gql`
  query GetReligions {
    getReligions {
      _id
      name
      image {
        url
        public_id
      }
      slug
      introduction
      description
      overview
      practices
      history
      regions
      core_beliefs {
        title
        description
      }
    }
  }
`;

export const GET_RELIGION_QUERY = gql`
  query GetReligion($slug: String!) {
    getReligion(slug: $slug) {
      _id
      name
      image {
        url
        public_id
      }
      slug
      introduction
      description
      overview
      practices
      history
      regions
      core_beliefs {
        title
        description
      }
    }
  }
`;
