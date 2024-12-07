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
      verified
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
      }
      video {
        Location
      }
      state
      city
      likes
      comments {
        content
        author {
          name
          photo {
            url
          }
        }
        createdAt
      }
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
      verified
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
      }
      contentType
    }
  }
`;

export const GET_HERITAGE_BLOGS = gql`
  query GetHeritageBlogs {
    getTHCrossedBlogs {
      id
      title
      content
      verified
      author {
        id
        name
        photo {
          url
        }
      }
      image {
        url
      }
      contentType
      likes
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

export const POST_COMMENT = gql`
  mutation PostComment($input: CommentInput!) {
    postComment(input: $input) {
      content
      author {
        name
        photo {
          url
        }
      }
      createdAt
    }
  }
`;

export const LIKE_BLOG = gql`
  mutation LikeBlog($id: ID!) {
    likeBlog(id: $id)
  }
`;

export const UPDATE_BLOG = gql`
  mutation UpdateBlog($id: ID!, $input: UpdateBlogInput!) {
    updateBlog(id: $id, input: $input)
  }
`;
