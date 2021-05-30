import { gql } from "graphql-request";

// Get trending Movies/Series
export const trendingQuery = (first = 10) => gql`
  {
    trending(first: ${first}  timeWindow: Day) {
      edges {
        node {
          ... on Movie {
            id
            title
            overview
            homepage
            type: __typename
            backdrop(size: Original)
          }

          ... on TVShow {
            id
            title: name
            overview
            homepage
            type: __typename
            backdrop(size: Original)
          }
        }
      }
    }
  }
`;

// Get Series by ID
export const getTVShowQuery = (id) => gql`
  {
    node(id: ${id}) {
      ... on TVShow {
        id
        name
        overview
        homepage
        poster(size: Original)
        backdrop(size: Original)
        videos {
          key
          name
        }
        genres {
          id
          name
        }
        networks {
          id
          name
          logo(size: Original)
        }
        similar {
          edges {
            node {
                id
                name
                poster(size: Original)
                backdrop(size: Original)}
          }
        }

        recommendations {
          edges {
            node {
              id
              name
              poster(size: Original)
              backdrop(size: Original)
            }
          }
        }

        seasons {
          id
          name
          airDate
          episodeCount
          overview
          poster(size: Original)
          videos {
            key
            name
          }
          episodes {
            id
            name
            overview
            airDate
            images {
              stills {
                image(size: Original)
              }
            }
          }
        }
      }
    }
  }
`;
