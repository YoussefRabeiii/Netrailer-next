import { GraphQLClient } from "graphql-request";

const swiftEndpoint = `https://tmdb.apps.quintero.io/`;
const jsEndpoint = `https://tmdb-api.saeris.io/.netlify/functions/tmdb-api`;

export const swiftClient = new GraphQLClient(swiftEndpoint);
export const jsClient = new GraphQLClient(jsEndpoint);
