import { gql } from "graphql-request";

export const trending = (first = 10) => gql`
  {
    trending(first: ${first}) {
      totalCount
      edges {
        node {
          ... on Movie {
            title
            overview
            poster(size: Original)
          }

          ... on TVShow {
            name
            overview
            poster(size: Original)
          }
        }
      }
    }
}
`;
