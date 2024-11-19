import { gql } from "@apollo/client";

export const GET_ALL_FESTIVALS_QUERY = gql`
  query GetFestivals {
    getFestivals {
      name
      slug
      date
      image {
        url
        public_id
      }
    }
  }
`;

export const GET_FESTIVAL_BY_SLUG = gql`
  query GetFestivalBySlug($slug: String!) {
    getFestivalBySlug(slug: $slug) {
      id
      name
      slug
      date
      image {
        url
        public_id
      }
    }
  }
`;

export const GET_FESTIVAL_BY_DATE = gql`
  query GetFestivalsByDate($date: String!) {
    getFestivalsByDate(date: $date) {
      name
      slug
      date
      image {
        url
        public_id
      }
    }
  }
`;
