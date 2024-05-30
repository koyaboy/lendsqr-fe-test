import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/UserDetails/UserDetails";
import Login from "./pages/Login/Login";
import "./App.scss";

function App() {
  return (
    <>
      {/* <Header />
      <div className="content">
        <Sidebar />
        <main>
          <Users />
          <UserDetails />
        </main>
      </div> */}

      <Login />
    </>
  );
}

export default App;
