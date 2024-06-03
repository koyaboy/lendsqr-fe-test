import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/UserDetails/UserDetails";
import Login from "./pages/Login/Login.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />}>
          <Route path="" element={<Dashboard />}>
            <Route index element={<Users />} />
            <Route path="userdetails/:userId" element={<UserDetails />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
