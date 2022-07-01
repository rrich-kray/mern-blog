import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import client from "./apolloClient";
import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "./context/authContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </AuthProvider>
  </React.StrictMode>
);
