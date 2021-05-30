export { swiftClient, jsClient } from "./client";

// The queries for the Swift API
export { getTVShowQuery } from "./swiftQueries";

// The queries for the Typescript API
export {
  getTvQuery,
  genresQuery,
  searchQuery,
  trendingQuery,
  getMovieQuery,
  getPersonQuery,
  withGenresQuery,
} from "./jsQueries";
