import { Outlet } from "react-router-dom";
import Login from "./pages/Login/Login";
import "./App.scss";
import { useEffect } from "react";

function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") || null;

  return <>{isAuthenticated ? <Outlet /> : <Login />}</>;
}

export default App;
