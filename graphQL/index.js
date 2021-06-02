export { swiftClient, jsClient } from "./client";

// The queries for the Swift API
export {
  trendingQuery,
  genresQuery,
  withGenresQuery,
  getMovieQuery,
  getTVShowQuery,
  searchQuery,
  getPeopleQuery,
  getTrendingPeopleQuery,
} from "./swiftQueries";

// The queries for the Typescript API
export { trendingQuery as jstrendingQuery } from "./jsQueries";
//   getTvQuery,
//   genresQuery,
//   searchQuery,
//   getMovieQuery,
//   getPersonQuery,
//   withGenresQuery,
