import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";

// router imports
import Routers from "./routes/Routers";

// rating css
import "@smastrom/react-rating/style.css";
import AuthProvider from "./provider/AuthProvider";

// react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={Routers} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
