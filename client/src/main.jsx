import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { getClient } from "./config/graphql.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { I18nextProvider } from "react-i18next";
import i18next from "./config/i18n.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={getClient()}>
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </Provider>
    </ApolloProvider>
  </StrictMode>
);
