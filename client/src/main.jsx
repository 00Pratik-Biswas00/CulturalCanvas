import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { getClient } from "./config/graphql.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={getClient()}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
