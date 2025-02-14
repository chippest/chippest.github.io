import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Projects } from "./Pages/Projects";

function App() {
  const pages = [
    { name: "About" },
    { name: "Projects" },
    { name: "Contact" },
    { name: "" },
  ];
  return (
    <div className="app">
      <h1>Chipp</h1>
      <div className="container">
        <div className="pageNav">
          <div className="button">About</div>
          <div className="button">Projects</div>
          <div className="button">Contact</div>
        </div>
        <div className="page"></div>
      </div>
    </div>
  );
}

export default App;
