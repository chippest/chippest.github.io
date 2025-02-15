import { Projects } from "./Pages/Projects";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";

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
        <div className="page">
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
