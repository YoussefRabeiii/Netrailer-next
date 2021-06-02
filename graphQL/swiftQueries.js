import { gql } from "graphql-request";

// Get trending Movies/Series
export const trendingQuery = (limit = 10) => gql`
  {
    movies {
      trending(first: ${limit}) {
        edges {
          node {
            id
            name: title
            overview
            homepage
            type: __typename
            poster(size: Original)
            backdrop(size: Original)
            popularity: popularityIndex

            externalIds {
              tmdb
            }
            videos {
              id
              key
              name
              type
              thumbnail
            }
            productionCompanies {
              id
              name
              name
            }
          }
        }
      }
    }

    series: tv {
      trending(first: ${limit}) {
        edges {
          node {
            id
            name
            overview
            homepage
            type: __typename
            poster(size: Original)
            backdrop(size: Original)
            popularity: popularityIndex
            
            externalIds {
              tmdb
            }
            videos {
              id
              key
              name
              type
              thumbnail
            }
            networks {
              id
              name
              logo(size: Original)
            }
            productionCompanies {
              id
              name
              logo(size: Original)
            }
          }
        }
      }
    }
  }
`;

// All Movies/Series Genres
export const genresQuery = () => gql`
  {
    genres {
      all {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;

// Get Movies/Series by Genres
export const withGenresQuery = (id, limit = 10) => gql`
  {
    node(id: ${id}) {
      ... on Genre {
        id
        name
        movies {
          popular(first: ${limit}) {
            edges {
              node {
                id
                name: title
                overview
                homepage
                poster(size: Original)
                backdrop(size: Original)

                externalIds {
                  tmdb
                }
                videos {
                  id
                  key
                  name
                  type
                  thumbnail
                }
                productionCompanies {
                  id
                  name
                  name
                }
              }
            }
          }
        }

        series: tv {
          popular(first: ${limit}) {
            edges {
              node {
                id
                name
                overview
                homepage
                poster(size: Original)
                backdrop(size: Original)

                externalIds {
                  tmdb
                }
                videos {
                  id
                  key
                  name
                  type
                  thumbnail
                }
                networks {
                  id
                  name
                  logo(size: Original)
                }
                productionCompanies {
                  id
                  name
                  logo(size: Original)
                }
              }
            }
          }
        }
      }
    }
  }
`;

// Get a Movie by ID
export const getMovieQuery = (id) => gql`
  {
    movies {
      movie(id: ${id}) {
        id
        tagline
        overview
        homepage
        name: title
        poster(size: Original)
        backdrop(size: Original)
        popularityIndex
        releaseDate
        runtime

        externalIds {
          tmdb
        }
        genres {
          id
          name
        }

        images {
          backdrops {
            image(size: Original)
          }
          posters {
            image(size: Original)
          }
        }
        videos {
          id
          key
          name
          type
          thumbnail
        }

        credits {
          ... on CreditsWithPerson {
            cast {
              character
              value {
                id
                name
                profilePicture(size: Original)
              }
            }
          }
        }
        productionCompanies {
          id
          name
          name
        }

        recommendations {
          edges {
            node {
              id
              title
              poster(size: Original)
              backdrop(size: Original)
            }
          }
        }
      }
    }
  }
`;

// Get TV Show by ID
export const getTVShowQuery = (id) => gql`
  {
    tv {
      show(id: ${id}) {
        id
        name
        homepage
        overview
        firstAirDate
        popularityIndex
        poster(size: Original)
        backdrop(size: Original)

        externalIds {
          tmdb
        }
        genres {
          id
          name
        }

        images {
          backdrops {
            image(size: Original)
          }
          posters {
            image(size: Original)
          }
        }
        videos {
          key
          name
          type
          thumbnail
        }

        seasons {
          id
          name
          airDate
          overview
          episodeCount
          seasonNumber
          poster(size: Original)
          episodes {
            id
            name
            airDate
            overview
            voteAverage
            episodeNumber
            still(size: Original)
            images {
              stills {
                image(size: Original)
              }
            }
          }
        }

        productionCompanies {
          id
          name
          logo(size: Original)
        }
        credits {
          ... on CreditsWithPerson {
            cast {
              character
              value {
                id
                name
                biography
                profilePicture(size: Original)
              }
            }

            crew {
              department
              value {
                id
                name
                biography
                profilePicture(size: Original)
              }
            }
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
      }
    }
  }
`;

// Search a movie/series/person by a Query
export const searchQuery = (query, limit = 10) => gql`
  {
    search(term: ${query} first: ${limit}) {
      edges {
        node {
          ... on Movie {
            id
            name: title
            releaseDate
            type: __typename
            poster(size: Original)
            backdrop(size: Original)
            externalIds {
              tmdb
            }
          }

          ... on TVShow {
            id
            name
            firstAirDate
            type: __typename
            poster(size: Original)
            backdrop(size: Original)
            externalIds {
              tmdb
            }
          }

          ... on Person {
            id
            name
            type: __typename
            profilePicture(size: Original)
            externalIds {
              tmdb
            }
          }
        }
      }
    }
  }
`;

// Get people by ID
export const getPeopleQuery = (id) => gql`
  {
    people {
      person(id: ${id}) {
        id
        name
        imdbID
        birthday
        deathday
        biography
        placeOfBirth
        popularityIndex
        knownForDepartment
        profilePicture(size: Original)

        externalIds {
          imdb
          tmdb
          twitter
          facebook
          instagram
        }

        knownFor {
          ... on Movie {
            id
            name: title
            overview
            poster(size: Original)
            backdrop(size: Original)
            externalIds {
              tmdb
            }
            videos {
              id
              key
              name
            }
          }

          ... on TVShow {
            id
            name
            overview
            poster(size: Original)
            backdrop(size: Original)
            externalIds {
              tmdb
            }
            videos {
              id
              key
              name
            }
          }
        }
      }
    }
  }
`;

// Get Trending People
export const getTrendingPeopleQuery = (limit) => gql`
  {
    people {
      trending(first: ${limit}) {
        edges {
          node {
            id
            name
            imdbID
            birthday
            deathday
            biography
            placeOfBirth
            popularityIndex
            knownForDepartment
            profilePicture(size: Original)
            externalIds {
              imdb
              tmdb
              twitter
              facebook
              instagram
            }

            knownFor {
              ... on Movie {
                id
                name: title
                overview
                poster(size: Original)
                backdrop(size: Original)
                externalIds {
                  tmdb
                }
                videos {
                  id
                  key
                  name
                }
              }

              ... on TVShow {
                id
                name
                overview
                poster(size: Original)
                backdrop(size: Original)
                externalIds {
                  tmdb
                }
                videos {
                  id
                  key
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
