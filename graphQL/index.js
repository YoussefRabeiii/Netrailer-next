export { swiftClient, jsClient } from "./client";

// The queries for the Swift API
export {
  searchQuery,
  genresQuery,
  trendingQuery,
  getMovieQuery,
  getTVShowQuery,
  withGenreQuery,
  getPeopleQuery,
  getTrendingPeopleQuery,
  // Minified
  minifiedWithGenreQuery,
  minifiedWithNetworkQuery,
} from "./swiftQueries";

// The queries for the Typescript API
export { trendingQuery as jstrendingQuery } from "./jsQueries";
//   getTvQuery,
//   genresQuery,
//   searchQuery,
//   getMovieQuery,
//   getPersonQuery,
//   withGenresQuery,
