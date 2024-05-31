import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/UserDetails/UserDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <Users />,
          },
          {
            path: "userdetails/:userId",
            element: <UserDetails />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
