import { GraphQLClient } from "graphql-request";

const endpoint = `https://tmdb.apps.quintero.io/`;

export const gqlClient = new GraphQLClient(endpoint);
