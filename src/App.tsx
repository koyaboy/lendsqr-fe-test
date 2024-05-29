import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Users from "./pages/Users/Users";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Sidebar />
        <main>
          <Users />
        </main>
      </div>
    </>
  );
}

export default App;
