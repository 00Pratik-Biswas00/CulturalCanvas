import { gql } from "@apollo/client";

export const CREATE_BLOG = gql`
  mutation CreateBlog($input: BlogInput!) {
    createBlog(input: $input)
  }
`;

export const GET_BLOGS = gql`
  query GetBlogs {
    getBlogs {
      id
      title
      content
      author {
        id
        name
        photo {
          url
        }
      }
      image {
        url
        public_id
      }
      contentType
    }
  }
`;

export const GET_BLOG = gql`
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      title
      content
      author {
        name
        photo {
          url
        }
      }
      image {
        url
      }
      video {
        Location
      }
      state
      city
      originLocation
      createdAt
    }
  }
`;

export const GET_UNVERIFIED_BLOGS = gql`
  query GetUnverifiedBlogs {
    getUnverifiedBlogs {
      id
      title
      content
      author {
        id
        name
        photo {
          url
        }
      }
      image {
        url
        public_id
      }
      contentType
    }
  }
`;

export const DELETE_BLOG = gql`
  mutation deleteBlog($id: ID!) {
    deleteBlog(id: $id)
  }
`;

export const VERIFY_BLOG = gql`
  mutation verifyBlog($id: ID!) {
    verifyBlog(id: $id)
  }
`;