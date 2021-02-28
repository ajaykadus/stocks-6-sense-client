import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_HOST = "http://localhost:8000/graphql";

const client = new ApolloClient({
  uri: API_HOST,
  cache: new InMemoryCache(),
});

export default client;
