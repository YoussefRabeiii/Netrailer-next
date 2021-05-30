import { gql } from "graphql-request";

// Trending Movies and Series
export const trendingQuery = (page = 1) => gql`
  query trending {
    movies: discoverMovies(
      page: ${page}
      sortBy: { by: Popularity }
      filter: { includeAdult: false, language: English }
    ) {
      id
      name
      tagline
      overview
      popularity
      poster {
        large
      }
      backdrop {
        large
      }
      videos(filter: { type: Trailer }) {
        key
        name
      }
    }

    series: discoverTV(
      page: ${page}
      sortBy: { by: Popularity }
      filter: { language: English }
    ) {
      id
      name
      overview
      popularity
      poster {
        large
      }
      backdrop {
        large
      }
      videos(filter: { type: Trailer }) {
        key
        name
      }
    }
  }

`;

// All Movies and Series Genres
export const genresQuery = () => gql`
  {
    movies: movieGenres {
      id
      name
    }

    series: tvGenres {
      id
      name
    }
  }
`;

// Get Movies and Series by Genres
export const withGenresQuery = (page = 1, arrOfIDs = []) => gql`
  {
    movies: discoverMovies(
      page: ${page}
      sortBy: { by: Popularity }
      filter: { withGenres: { include: ${arrOfIDs} }, includeAdult: false }
    ) {
      id
      name
    }

    series: discoverTV(
      page: ${page}
      sortBy: { by: Popularity }
      filter: { withGenres: { include: ${arrOfIDs} } }
    ) {
      id
      name
    }
  }
`;

// Search a movie/series/person by a Query
export const searchQuery = (query, castLimit = 5) => gql`
  {
    movies: searchMovies(query: ${query}) {
      id
      name
      releaseDate
      poster {
        medium
      }
      backdrop {
        medium
      }

      cast(limit: ${castLimit}) {
        person {
          id
          name
          images {
            medium
          }
        }
      }
    }

    series: searchTV(query: ${query}) {
      id
      name
      firstAired
      poster {
        medium
      }
      backdrop {
        medium
      }

      cast(limit: ${castLimit}) {
        person {
          id
          name
          images {
            medium
          }
        }
      }
    }

    people: searchPeople(query: ${query}) {
      id
      name
      images {
        medium
      }
    }
  }
`;

// Get a series by ID
export const getTvQuery = (id, castLimit = 10, crewLimit = 5) => gql`
  {
    tv(id: ${id}) {
      id
      name
      overview
      popularity
      firstAired
      genres {
        id
        name
      }
      poster {
        large
      }
      backdrop {
        large
      }
      videos {
        key
        name
      }

      cast(limit: ${castLimit}) {
        person {
          id
          name
          # biography
          photo {
            medium
          }
        }
        role {
          ... on Cast {
            character
          }
        }
      }

      crew(limit: ${crewLimit}) {
        person {
          id
          name
          biography
        }
        role {
          ... on Crew {
            job
          }
        }
      }

      similar {
        id
        name
        poster {
          medium
        }
        backdrop {
          medium
        }
      }
    }
  }
`;

// Get a Movie by ID
export const getMovieQuery = (id, castLimit = 10, crewLimit = 5) => gql`
  {
    movie(id: ${id}) {
      id
      name
      tagline
      overview
      popularity
      releaseDate
      genres {
        id
        name
      }
      poster {
        large
      }
      backdrop {
        large
      }
      videos {
        key
        name
      }

      cast(limit: ${castLimit}) {
        person {
          id
          name
          # biography
          photo {
            medium
          }
        }
        role {
          ... on Cast {
            character
          }
        }
      }

      crew(limit: ${crewLimit}) {
        person {
          id
          name
          biography
        }
        role {
          ... on Crew {
            job
          }
        }
      }

      similar {
        id
        name
        poster {
          medium
        }
        backdrop {
          medium
        }
      }
    }
  }
`;

// Get a Person by ID
export const getPersonQuery = (id, appearsLimit) => gql`
  {
    person(id: ${id}) {
      id
      name
      photo {
        large
      }
      images {
        large
      }
      diedOn
      birthday
      biography
      birthplace
      appearsIn(limit: ${appearsLimit}) {
        ... on Movie {
          id
          name
          poster {
            large
          }
          backdrop {
            large
          }
        }

        ... on TV {
          id
          name
          poster {
            large
          }
          backdrop {
            large
          }
        }
      }
    }
  }
`;

// export const withNetworksQuery = (arrOfIDs = []) => gql``;
