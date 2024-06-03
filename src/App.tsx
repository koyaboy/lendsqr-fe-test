import { Outlet, Navigate } from "react-router-dom";
import "./App.scss";

function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") || null;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default App;
