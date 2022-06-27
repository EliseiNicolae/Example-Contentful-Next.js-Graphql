import { gql } from "@apollo/client";

export const getSlugsQuery = gql`
  query {
    blogPostCollection(limit: 2500) {
      items {
        slug
      }
    }
  }
`;

export const getPostQuery = gql`
  query ($slug: String!) {
    blogPostCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        body {
          json
        }
        seo {
          title
          description
          keywords
        }
      }
    }
  }
`;
