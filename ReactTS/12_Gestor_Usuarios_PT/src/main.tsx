import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { UsersProvider } from "./context/UsersContext.tsx";
import "./index.css";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <UsersProvider>
        <App />
      </UsersProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
