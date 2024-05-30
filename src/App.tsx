import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/UserDetails/UserDetails";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Sidebar />
        <main>
          {/* <Users /> */}
          <UserDetails />
        </main>
      </div>
    </>
  );
}

export default App;
