import { Route, Routes, Link } from "react-router-dom";
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
          <div className="button">
            <Link to="/about">About</Link>
          </div>
          <div className="button">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="button">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="page">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* Optionally add a fallback route */}
            {/* <Route path="*" element={<About />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
