import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  from,
} from "@apollo/client";

const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token") || "";
  }
  return "";
};

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = getToken();
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  return forward(operation);
});

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_API_KEY_GRAPHQL,
});

const createApolloClient = () => {
  return new ApolloClient({
    link: from([authMiddleware, httpLink]),
    cache: new InMemoryCache(),
  });
};

let client = createApolloClient();

export const getClient = () => client;

export const resetClient = () => {
  client = createApolloClient();
};

export default client;
