import { gql } from "@apollo/client";

export const GET_ALL_LANGUAGES_QUERY = gql`
  query getLanguages {
    getLanguages {
      _id
      name
      image {
        public_id
        url
      }
      slug
      description
      content {
        title
        description
      }
    }
  }
`;

export const GET_LANGUAGE_QUERY = gql`
  query getLanguage($slug: String!) {
    getLanguage(slug: $slug) {
      _id
      name
      image {
        public_id
        url
      }
      slug
      description
      content {
        title
        description
      }
    }
  }
`;
