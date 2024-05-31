import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/UserDetails/UserDetails";
import Login from "./pages/Login/Login";
import { Outlet } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <Outlet />

      {/* <Login /> */}
    </>
  );
}

export default App;
