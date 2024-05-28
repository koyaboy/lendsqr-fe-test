import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Sidebar />
        <main>
          <div>TEST</div>
        </main>
      </div>
    </>
  );
}

export default App;
